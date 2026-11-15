import * as THREE from 'three';
import { CONFIG, PITCH_LENGTH } from '../config.js';
import { Ball } from '../physics/Ball.js';

// ---------------------------------------------------------------------------
// Delivery planning and trajectory solving.
// A delivery is described by pace, line, length, and bowling spin/swing. The
// release velocity is solved by shooting with the *same* drag/Magnus/bounce
// model the ball uses in flight, so the ball genuinely flies to its intended
// bounce point and curves/turns naturally via normal ball physics.
// ---------------------------------------------------------------------------

const rand = (lo, hi) => lo + Math.random() * (hi - lo);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Templates: line, length, difficulty category (no short balls / bouncers).
const TEMPLATES = [
  // loose balls - scoring opportunities in the slot
  { name: 'Half-volley outside off', line: 'outsideOff', length: 'full', cat: 'easy' },
  { name: 'Slot ball on middle', line: 'middle', length: 'full', cat: 'easy' },
  { name: 'Overpitched on the pads', line: 'leg', length: 'full', cat: 'easy' },
  { name: 'Full and wide outside off', line: 'outsideOff', length: 'full', cat: 'easy' },
  { name: 'Half-volley on off stump', line: 'off', length: 'full', cat: 'easy' },
  // stock balls
  { name: 'Good length, off stump', line: 'off', length: 'good', cat: 'stock' },
  { name: 'Good length, middle', line: 'middle', length: 'good', cat: 'stock' },
  { name: 'Good length outside off', line: 'outsideOff', length: 'good', cat: 'stock' },
  { name: 'Full on off stump', line: 'off', length: 'full', cat: 'stock' },
  { name: 'Good length on leg stump', line: 'leg', length: 'good', cat: 'stock' },
  // wicket-taking balls
  { name: 'Yorker on middle', line: 'middle', length: 'yorker', cat: 'hard' },
  { name: 'Yorker on off', line: 'off', length: 'yorker', cat: 'hard' },
  { name: 'Full attacking length', line: 'middle', length: 'full', cat: 'hard' },
  { name: 'Good length at off stump', line: 'off', length: 'good', cat: 'hard' },
  { name: 'Yorker on leg stump', line: 'leg', length: 'yorker', cat: 'hard' }
];

export const BOWLER_TYPES = [
  { id: 'fastMediumR', name: 'Right-arm Fast-Medium', hand: 'right', style: 'fastMedium', pace: 'medium', speedRange: [125, 140], runSpeed: 6.2, runDistance: 11.5 },
  { id: 'fastR', name: 'Right-arm Fast', hand: 'right', style: 'fast', pace: 'fast', speedRange: [145, 160], runSpeed: 7.2, runDistance: 14 },
  { id: 'fastL', name: 'Left-arm Fast', hand: 'left', style: 'fast', pace: 'fast', speedRange: [145, 160], runSpeed: 7.2, runDistance: 14 },
  { id: 'inSwingR', name: 'Right-arm Fast (Inswing)', hand: 'right', style: 'inSwing', pace: 'fast', speedRange: [140, 150], runSpeed: 6.8, runDistance: 13 },
  { id: 'outSwingR', name: 'Right-arm Fast (Outswing)', hand: 'right', style: 'outSwing', pace: 'fast', speedRange: [140, 150], runSpeed: 6.8, runDistance: 13 },
  { id: 'offSpinR', name: 'Right-arm Offbreak', hand: 'right', style: 'offSpin', pace: 'slow', speedRange: [78, 95], runSpeed: 3.6, runDistance: 5 },
  { id: 'offSpinL', name: 'Slow Left-arm Orthodox', hand: 'left', style: 'offSpin', pace: 'slow', speedRange: [78, 95], runSpeed: 3.6, runDistance: 5 },
  { id: 'legSpinR', name: 'Right-arm Legbreak', hand: 'right', style: 'legSpin', pace: 'slow', speedRange: [78, 95], runSpeed: 3.6, runDistance: 5 }
];

function createDeliverySpin(style, speed) {
  const spin = new THREE.Vector3();
  if (style === 'fastMedium') {
    spin.set(-speed * 2.0, rand(-90, 90), rand(-55, 55));
  } else if (style === 'fast') {
    spin.set(-speed * 2.1, rand(-75, 75), rand(-45, 45));
  } else if (style === 'inSwing') {
    // Negative Y spin produces -X Magnus force (into right-hander) while travelling +Z;
    // positive Z sidespin nips further toward leg off the seam on bounce.
    spin.set(-speed * 1.9, -rand(460, 580), rand(115, 165));
  } else if (style === 'outSwing') {
    spin.set(-speed * 1.9, rand(460, 580), -rand(115, 165));
  } else if (style === 'offSpin') {
    // Topspin dip (+X) plus sharp off-to-leg break (-X on bounce via +Z sidespin)
    spin.set(rand(125, 150), rand(60, 90), rand(470, 550));
  } else if (style === 'legSpin') {
    // Topspin dip (+X) plus sharp leg-to-off break (+X on bounce via -Z sidespin)
    spin.set(rand(130, 155), -rand(65, 95), -rand(500, 580));
  } else {
    spin.set(-speed * 2.0, 0, 0);
  }
  return spin;
}

export class DeliveryPlanner {
  constructor() { this.reset(); }

  reset() {
    this.consecutiveHard = 0;
    this.ballsSinceEasy = 0;
    this.lastTemplate = null;
    this.recentRuns = [];
    this.overIndex = -1;
    this.bowler = null;
    this.lastBowlerType = null;
  }

  startOver(index) {
    this.overIndex = index;
    // Rotate across all bowler types; never pick the same bowler two overs in a row
    const choices = BOWLER_TYPES.filter((b) => b !== this.lastBowlerType);
    this.bowler = pick(choices);
    this.lastBowlerType = this.bowler;
  }

  recordOutcome(runs) {
    this.recentRuns.push(runs);
    if (this.recentRuns.length > 4) this.recentRuns.shift();
  }

  next() {
    const pressure = this.recentRuns.reduce((s, r) => s + r, 0); // batter on top -> tighten up
    let pEasy = 0.18 + 0.10 * this.consecutiveHard + 0.05 * Math.max(0, this.ballsSinceEasy - 3);
    let pHard = 0.22 + (pressure >= 8 ? 0.18 : 0) - 0.08 * this.consecutiveHard;
    pEasy = Math.min(pEasy, 0.6); pHard = Math.max(pHard, 0.05);
    const r = Math.random();
    const cat = r < pEasy ? 'easy' : r < pEasy + pHard ? 'hard' : 'stock';

    const bowler = this.bowler || BOWLER_TYPES[0];
    let options = TEMPLATES.filter((t) => t.cat === cat && t !== this.lastTemplate);
    if (bowler.pace === 'slow') options = options.filter((t) => !(t.length === 'yorker' && t.cat === 'hard' && Math.random() < 0.5));
    if (!options.length) options = TEMPLATES.filter((t) => t.cat === 'stock');
    const tpl = pick(options);
    this.lastTemplate = tpl;
    this.consecutiveHard = cat === 'hard' ? this.consecutiveHard + 1 : 0;
    this.ballsSinceEasy = cat === 'easy' ? 0 : this.ballsSinceEasy + 1;

    const [lo, hi] = bowler.speedRange || CONFIG.bowling.speeds[bowler.pace];
    const kmh = rand(lo, hi);
    const speed = kmh / 3.6;

    // Keep spinning deliveries inside hittable corridors at the stumps
    let lineKey = tpl.line;
    if (bowler.style === 'offSpin' && lineKey === 'outsideLeg') lineKey = 'leg';
    if (bowler.style === 'legSpin' && lineKey === 'outsideOff') lineKey = 'off';

    const lineRange = CONFIG.bowling.lines[lineKey];
    const lenRange = CONFIG.bowling.lengths[tpl.length];
    const lineX = rand(lineRange[0], lineRange[1]);
    return {
      name: tpl.name,
      category: cat,
      bowler,
      pace: bowler.pace,
      kmh,
      speed,
      lineX,
      bounceX: lineX,
      bounceDist: rand(lenRange[0], lenRange[1]),
      spin: createDeliverySpin(bowler.style, speed)
    };
  }
}

const _simBall = new Ball();

/**
 * Solve the release velocity for a delivery from `release` (Vector3).
 * When `delivery.spin` is supplied, solves using the full Magnus + spin-coupled
 * bounce physics across aim-refinement passes so the ball both pitches at
 * `bounceDist` and arrives at `delivery.lineX` at the stumps.
 */
export function solveRelease(release, delivery) {
  const r = CONFIG.ball.radius;
  const g = CONFIG.physics.gravity;
  const b = CONFIG.ball;
  const k = 0.5 * CONFIG.physics.airDensity * b.dragCoefficient * Math.PI * b.radius * b.radius / b.mass;
  const dt = CONFIG.physics.dt;
  const bounceZ = CONFIG.stumps.z - delivery.bounceDist;

  if (!delivery.spin) {
    delivery.bounceX = delivery.lineX;
    const target = new THREE.Vector3(delivery.lineX, r, CONFIG.stumps.z);
    const horiz = new THREE.Vector3(target.x - release.x, 0, target.z - release.z).normalize();

    const landZ = (theta) => {
      const vh = delivery.speed * Math.cos(theta);
      let vx = horiz.x * vh, vz = horiz.z * vh, vy = delivery.speed * Math.sin(theta);
      let x = release.x, y = release.y, z = release.z;
      for (let i = 0; i < 2000; i++) {
        const sp = Math.hypot(vx, vy, vz);
        vx += -k * sp * vx * dt; vy += (-g - k * sp * vy) * dt; vz += -k * sp * vz * dt;
        x += vx * dt; y += vy * dt; z += vz * dt;
        if (y <= r) return z;
        if (z > 5) return 10; // full toss past the batter
      }
      return 10;
    };

    let lo = -0.6, hi = 0.35;
    for (let i = 0; i < 40; i++) {
      const mid = (lo + hi) / 2;
      if (landZ(mid) < bounceZ) lo = mid; else hi = mid;
    }
    const theta = (lo + hi) / 2;
    const vh = delivery.speed * Math.cos(theta);
    return new THREE.Vector3(horiz.x * vh, delivery.speed * Math.sin(theta), horiz.z * vh);
  }

  const spin = delivery.spin;
  let aimX = delivery.lineX;
  let theta = -0.1;
  let bx = delivery.lineX;
  const horiz = new THREE.Vector3();
  const launchVel = new THREE.Vector3();

  for (let pass = 0; pass < 3; pass++) {
    horiz.set(aimX - release.x, 0, CONFIG.stumps.z - release.z).normalize();

    let lo = -0.6, hi = 0.38;
    for (let i = 0; i < 28; i++) {
      const mid = (lo + hi) / 2;
      const vh = delivery.speed * Math.cos(mid);
      launchVel.set(horiz.x * vh, delivery.speed * Math.sin(mid), horiz.z * vh);
      _simBall.launch(release, launchVel, spin);
      _simBall.events.length = 0;
      let lz = 10;
      for (let s = 0; s < 1200; s++) {
        _simBall.step(dt);
        if (_simBall.events.length) {
          lz = _simBall.events[0].pos.z;
          _simBall.events.length = 0;
          break;
        }
        if (_simBall.pos.z > 5) break;
      }
      if (lz < bounceZ) lo = mid; else hi = mid;
    }
    theta = (lo + hi) / 2;

    const vh = delivery.speed * Math.cos(theta);
    launchVel.set(horiz.x * vh, delivery.speed * Math.sin(theta), horiz.z * vh);
    _simBall.launch(release, launchVel, spin);
    _simBall.events.length = 0;
    let bncX = aimX;
    let stX = aimX;
    for (let s = 0; s < 1500; s++) {
      _simBall.step(dt);
      if (_simBall.events.length) {
        bncX = _simBall.events[0].pos.x;
        _simBall.events.length = 0;
      }
      if (_simBall.pos.z >= CONFIG.stumps.z) {
        stX = _simBall.pos.x;
        break;
      }
    }
    bx = bncX;
    aimX -= (stX - delivery.lineX) * 0.85;
  }

  delivery.bounceX = bx;
  horiz.set(aimX - release.x, 0, CONFIG.stumps.z - release.z).normalize();
  const vh = delivery.speed * Math.cos(theta);
  return new THREE.Vector3(horiz.x * vh, delivery.speed * Math.sin(theta), horiz.z * vh);
}

export { PITCH_LENGTH };
