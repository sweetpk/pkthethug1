// Headless physics/feel test-bench. Run with:  node tests/sim.mjs
// Drives the real World / BatController / Ball / collision code with scripted
// "player" input and reports what the ball does.
import * as THREE from 'three';
import { CONFIG } from '../src/config.js';
import { World } from '../src/physics/World.js';
import { Ball } from '../src/physics/Ball.js';
import { solveRelease } from '../src/bowling/DeliveryPlanner.js';
import { DeliveryJudge } from '../src/game/DeliveryJudge.js';
import { makeRunup, bowlerPose } from '../src/bowling/bowlerPose.js';

const dt = CONFIG.physics.dt;
const deg = (r) => (r * 180) / Math.PI;
const f = (x, n = 1) => x.toFixed(n).padStart(6);

function section(t) { console.log('\n=== ' + t + ' ==='); }

// ---------------------------------------------------------------- free ball
section('Ground shots: distance travelled (m)');
for (const sp of [12, 18, 24, 30, 36]) {
  const b = new Ball();
  b.launch(new THREE.Vector3(0, 0.036, -2), new THREE.Vector3(0, 0, -sp));
  b.spin.set(0, 0, 0);
  b.rolling = true;
  let t = 0;
  while (t < 20 && b.vel.length() > 0.05) { b.step(dt); t += dt; }
  console.log(`  ${sp} m/s along the ground -> ${f(-2 - b.pos.z)} m in ${t.toFixed(1)} s`);
}

section('Lofted shots: carry (first bounce) distance (m)');
for (const sp of [25, 32, 38, 44, 50]) {
  let row = `  ${sp} m/s: `;
  for (const a of [10, 20, 30, 40]) {
    const b = new Ball();
    const r = (a * Math.PI) / 180;
    b.launch(new THREE.Vector3(0, 1, -2), new THREE.Vector3(0, sp * Math.sin(r), -sp * Math.cos(r)));
    b.spin.set(sp * 3, 0, 0); // backspin from a lofted hit (w.x>0 -> lift for -z travel)
    let t = 0;
    while (t < 10) { b.step(dt); t += dt; if (b.events.length) break; }
    row += `${a}deg ${f(-2 - b.pos.z)}  `;
  }
  console.log(row);
}

// ---------------------------------------------------------------- deliveries
section('Deliveries: height (m) at contact zone z=-1.6 / stumps, time to batter (s)');
const runup = makeRunup({ pace: 'fast', runSpeed: 6.8, runDistance: 13 });
const pose = bowlerPose(runup.tRelease, runup);
const release = pose.hand.clone();
console.log(`  release point: ${release.toArray().map((v) => v.toFixed(2)).join(', ')}`);

function flyDelivery(kmh, len, lineX = 0) {
  const d = { speed: kmh / 3.6, lineX, bounceDist: len };
  const v = solveRelease(release, d);
  const b = new Ball();
  b.launch(release, v);
  let t = 0, hC = null, tC = null, hS = null, bounceZ = null;
  while (t < 3 && b.pos.z < 0.5) {
    b.step(dt); t += dt;
    for (const e of b.events) if (e.type === 'bounce' && bounceZ === null) bounceZ = e.pos.z;
    b.events.length = 0;
    if (hC === null && b.pos.z > -1.6) { hC = b.pos.y; tC = t; }
    if (hS === null && b.pos.z > 0) hS = b.pos.y;
  }
  return { hC, tC, hS, bounceZ };
}
for (const kmh of [85, 112, 140]) {
  let row = `  ${kmh} km/h `;
  for (const [name, len] of [['yorker', 1.1], ['full', 3.2], ['good', 6], ['short', 10]]) {
    const r = flyDelivery(kmh, len);
    row += `| ${name} ${r.hC.toFixed(2)}/${r.hS.toFixed(2)} @${r.tC.toFixed(2)}s (b ${(-r.bounceZ).toFixed(1)}) `;
  }
  console.log(row);
}

// ---------------------------------------------------------------- swings
// A scripted player: holds tilt S0, then flicks the target linearly to S1 over `dur`
// starting `t0` seconds relative to the moment the ball reaches z = -1.6.
function runSwing({ kmh, len, lineX, S0, S1, dur, t0 }) {
  const world = new World();
  const d = { speed: kmh / 3.6, lineX, bounceDist: len };
  const v = solveRelease(release, d);
  const tC = flyDelivery(kmh, len, lineX).tC;
  const judge = new DeliveryJudge();
  judge.start();
  const target = new THREE.Vector2(S0[0], S0[1]);
  // settle the bat at S0
  world.bat.target.copy(target);
  for (let i = 0; i < 240; i++) world.step(dt, target);
  world.resetDelivery();
  world.ball.launch(release, v);
  let t = 0, res = null, contact = null, launch = null;
  while (t < 14 && !res) {
    const u = Math.min(1, Math.max(0, (t - (tC + t0)) / dur));
    target.set(S0[0] + (S1[0] - S0[0]) * u, S0[1] + (S1[1] - S0[1]) * u);
    world.step(dt, target);
    t += dt;
    const ev = world.drainEvents();
    for (const e of ev) if (e.type === 'bat' && !contact) { contact = e; launch = world.ball.vel.clone(); }
    res = judge.update(dt, world.ball, ev);
  }
  return { res, contact, launch, judge };
}

function describe(o) {
  if (!o.contact) return `miss -> ${o.res ? o.res.text : '?'}`;
  const v = o.launch;
  const h = Math.hypot(v.x, v.z);
  const az = deg(Math.atan2(v.x, -v.z));
  const el = deg(Math.atan2(v.y, h));
  const c = o.contact;
  return `bat ${f(c.batNormalSpeed)} m/s  exit ${f(c.exitSpeed * 3.6, 0)} km/h  dir ${f(az, 0)}deg  elev ${f(el, 0)}deg  q ${c.quality.toFixed(2)} y${c.contactLocal.y.toFixed(2)} x${c.contactLocal.x.toFixed(2)}${c.edge ? ' EDGE' : ''} n(${c.normal.toArray().map((x) => x.toFixed(2))}) -> ${o.res ? o.res.text : '?'}`;
}

function sweep(title, sc, offsets) {
  section(title);
  let hits = 0;
  for (const t0 of offsets) {
    const o = runSwing({ ...sc, t0 });
    if (o.contact) hits++;
    console.log(`  t0 ${f(t0 * 1000, 0)}ms  ${describe(o)}`);
  }
  console.log(`  contacts: ${hits}/${offsets.length}`);
}

const offs = [];
for (let t = -0.20; t <= 0.061; t += 0.02) offs.push(+t.toFixed(3));

const only = process.argv[2];
const scenarios = {
  straight: ['Straight drive: full on middle, 120 km/h, fast vertical swing',
    { kmh: 120, len: 3.0, lineX: 0.0, S0: [0, -1.0], S1: [0, 2.6], dur: 0.12 }],
  cover: ['Cover drive: full outside off, 120 km/h, swing opening towards off',
    { kmh: 120, len: 3.2, lineX: 0.28, S0: [-0.3, -1.0], S1: [0.5, 2.4], dur: 0.12 }],
  onDrive: ['On drive / flick: full on leg stump, 120 km/h, swing closing towards leg',
    { kmh: 120, len: 3.0, lineX: -0.1, S0: [0.3, -0.8], S1: [-0.7, 2.2], dur: 0.12 }],
  pull: ['Pull: short on middle, 135 km/h, level swing across at chest height',
    { kmh: 135, len: 10.5, lineX: 0.0, S0: [1.4, 2.35], S1: [-1.4, 2.25], dur: 0.13, abs: true }],
  cut: ['Cut: short and wide outside off, 120 km/h, chop down on the off side',
    { kmh: 120, len: 9.5, lineX: 0.32, S0: [0.4, 2.4], S1: [0.7, 0.3], dur: 0.12, abs: true }],
  block: ['Defensive block: good length off stump, 140 km/h, bat held still and vertical',
    { kmh: 140, len: 6.5, lineX: 0.1, S0: [0, 0.1], S1: [0, 0.1], dur: 0.1 }],
  push: ['Soft push: full on off, 112 km/h, slow forward push',
    { kmh: 112, len: 3.2, lineX: 0.1, S0: [0, -0.2], S1: [0, 0.6], dur: 0.5 }],
  slog: ['Lofted slog: full on middle, 112 km/h, big swing from deep backlift',
    { kmh: 112, len: 3.0, lineX: 0.0, S0: [0.2, -1.3], S1: [-0.2, 3.0], dur: 0.11 }],
  yorker: ['Yorker on middle, 140 km/h, bat brought down',
    { kmh: 140, len: 1.1, lineX: 0.0, S0: [0, -0.6], S1: [0, 1.6], dur: 0.12 }]
};

// Aim helper: find the sideways swing value that puts the sweet spot on the line.
import { BatController } from '../src/bat/BatController.js';
function aimFor(lineX) {
  const bat = new BatController();
  const t = new THREE.Vector2();
  let lo = -1.4, hi = 1.4;
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2;
    t.set(mid, 0.2); bat.target.copy(t);
    for (let k = 0; k < 300; k++) bat.step(dt, t);
    if (bat.sweetPos.x < lineX) lo = mid; else hi = mid;
  }
  return (lo + hi) / 2;
}
for (const [, [, sc]] of Object.entries(scenarios)) {
  if (sc.abs) continue;
  const a = aimFor(sc.lineX);
  sc.S0 = [sc.S0[0] + a, sc.S0[1]];
  sc.S1 = [sc.S1[0] + a, sc.S1[1]];
}
for (const [k, [title, sc]] of Object.entries(scenarios)) {
  if (only && only !== k) continue;
  sweep(title, sc, offs);
}
