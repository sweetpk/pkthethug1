import * as THREE from 'three';
import { CONFIG, PITCH_LENGTH } from '../config.js';

// ---------------------------------------------------------------------------
// Delivery planning and trajectory solving.
// A delivery is described by pace, line and length. The release velocity is
// solved by shooting with the *same* drag model the ball uses in flight, so the
// ball genuinely flies to its intended bounce point and then the normal ball
// physics (pitch restitution + friction) takes over. No scripted paths.
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
  { name: 'Full inswinger on middle', line: 'middle', length: 'full', cat: 'hard' },
  { name: 'Good length, nipping at off', line: 'off', length: 'good', cat: 'hard' },
  { name: 'Yorker on leg stump', line: 'leg', length: 'yorker', cat: 'hard' }
];

const BOWLER_TYPES = [
  { name: 'Fast', pace: 'fast', runSpeed: 6.8, runDistance: 13 },
  { name: 'Medium pace', pace: 'medium', runSpeed: 5.6, runDistance: 10 },
  { name: 'Slow', pace: 'slow', runSpeed: 3.6, runDistance: 5 }
];

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
    // rotate bowlers, never the same type twice in a row; first over is medium pace
    let choices = BOWLER_TYPES.filter((b) => b !== this.lastBowlerType);
    if (index === 0) choices = [BOWLER_TYPES[1]];
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

    let options = TEMPLATES.filter((t) => t.cat === cat && t !== this.lastTemplate);
    const bowler = this.bowler;
    // slow bowlers don't bowl bouncers; yorkers are rarer from them
    if (bowler.pace === 'slow') options = options.filter((t) => !(t.length === 'short' && t.cat === 'hard'));
    if (!options.length) options = TEMPLATES.filter((t) => t.cat === 'stock');
    const tpl = pick(options);
    this.lastTemplate = tpl;
    this.consecutiveHard = cat === 'hard' ? this.consecutiveHard + 1 : 0;
    this.ballsSinceEasy = cat === 'easy' ? 0 : this.ballsSinceEasy + 1;

    // pace: bowler's range, with an occasional change of pace from the quicks
    let pace = bowler.pace;
    if (pace === 'fast' && Math.random() < 0.12) pace = 'medium';
    const [lo, hi] = CONFIG.bowling.speeds[pace];
    const kmh = rand(lo, hi);

    const lineRange = CONFIG.bowling.lines[tpl.line];
    const lenRange = CONFIG.bowling.lengths[tpl.length];
    return {
      name: tpl.name,
      category: cat,
      bowler,
      pace,
      kmh,
      speed: kmh / 3.6,
      lineX: rand(lineRange[0], lineRange[1]),
      bounceDist: rand(lenRange[0], lenRange[1])
    };
  }
}

/**
 * Solve the release velocity for a delivery from `release` (Vector3).
 * Speed is fixed; the elevation angle is found by bisection so that the ball,
 * flying under gravity + drag, first lands at the planned bounce point.
 */
export function solveRelease(release, delivery) {
  const r = CONFIG.ball.radius;
  const g = CONFIG.physics.gravity;
  const b = CONFIG.ball;
  const k = 0.5 * CONFIG.physics.airDensity * b.dragCoefficient * Math.PI * b.radius * b.radius / b.mass;
  const dt = CONFIG.physics.dt;

  // aim horizontally at the target line at the stumps; bounce lies on that line
  const target = new THREE.Vector3(delivery.lineX, r, CONFIG.stumps.z);
  const bounceZ = CONFIG.stumps.z - delivery.bounceDist;
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

  // landZ increases (further towards the batter) as theta increases
  let lo = -0.6, hi = 0.35;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (landZ(mid) < bounceZ) lo = mid; else hi = mid;
  }
  const theta = (lo + hi) / 2;
  const vh = delivery.speed * Math.cos(theta);
  return new THREE.Vector3(horiz.x * vh, delivery.speed * Math.sin(theta), horiz.z * vh);
}

export { PITCH_LENGTH };
