import * as THREE from 'three';
import { CONFIG } from '../config.js';

// ---------------------------------------------------------------------------
// BatController — Direct Player-Controlled Physics Bat
//
// Input (mouse delta or joystick) moves a 2D swing target (a, b):
//   b : rotates the bat in the vertical plane of the pitch
//       (b = 0 hanging down, b > 0 toe swings forward/up, b < 0 backlift).
//   a : tilts and shifts the bat sideways (+X = off side, -X = leg side).
//       With the bat hanging, a is a sideways pendulum; with the bat raised
//       horizontal, changing a sweeps it level across the body (pull / cut).
// ---------------------------------------------------------------------------

const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _v3 = new THREE.Vector3();
const _m = new THREE.Matrix4();

function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
function smoothstep(e0, e1, x) { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); }

// Part of a forward push is taken by the hands moving forward rather than the
// blade rotating, so a gentle push keeps a vertical face (defence / ground
// drives) while a big swing still rotates into a lofted follow-through.
export function rotationAngle(b) {
  return b - 0.45 * smoothstep(-0.2, 1.1, b);
}

/** Blade direction (hands -> toe) for swing coordinates (a, b). */
export function swingDir(a, b, out) {
  const ae = clamp(a, -1.5, 1.5);
  const br = rotationAngle(b);
  const ca = Math.cos(ae);
  return out.set(Math.sin(ae), -ca * Math.cos(br), -ca * Math.sin(br));
}

export class BatController {
  constructor() {
    const c = CONFIG.control;
    this.tilt = new THREE.Vector2(c.restTilt.a, c.restTilt.b);
    this.tiltVel = new THREE.Vector2();
    this.target = this.tilt.clone();       // latest target from input
    this.stepTarget = this.tilt.clone();   // target used by the last physics step

    this.position = new THREE.Vector3();   // bat-local origin (toe, centre of blade) in world
    this.quaternion = new THREE.Quaternion();
    this.prevPosition = new THREE.Vector3();
    this.prevQuaternion = new THREE.Quaternion();

    this.hands = new THREE.Vector3();
    this.dir = new THREE.Vector3(0, -1, 0); // hands -> toe
    this.face = new THREE.Vector3(0, 0, -1);// striking-face normal (world)

    this.sweetLocal = new THREE.Vector3(0, CONFIG.bat.sweetSpotFromToe, CONFIG.bat.bladeFace);
    this.sweetPos = new THREE.Vector3();
    this.prevSweetPos = new THREE.Vector3();
    this.sweetVel = new THREE.Vector3();
    this.intentVel = new THREE.Vector3();
    this.swingMemoryVel = new THREE.Vector3();
    this.push = new THREE.Vector3();
    this.prevFreeSweet = new THREE.Vector3();
    this.lastDt = CONFIG.physics.dt;

    this.reset();
  }

  reset() {
    const c = CONFIG.control;
    this.tilt.set(c.restTilt.a, c.restTilt.b);
    this.tiltVel.set(0, 0);
    this.target.copy(this.tilt);
    this.stepTarget.copy(this.tilt);
    this.sweetVel.set(0, 0, 0);
    this.intentVel.set(0, 0, 0);
    this.swingMemoryVel.set(0, 0, 0);
    this._computePose(0, true);
    this.prevFreeSweet.subVectors(this.sweetPos, this.push);
    this.prevPosition.copy(this.position);
    this.prevQuaternion.copy(this.quaternion);
    this.prevSweetPos.copy(this.sweetPos);
  }

  clampTarget(t) {
    const c = CONFIG.control;
    t.x = clamp(t.x, c.tiltMin.a, c.tiltMax.a);
    t.y = clamp(t.y, c.tiltMin.b, c.tiltMax.b);
    return t;
  }

  /** Relative input (mouse): direct 1:1 control of the bat target. */
  addTargetDelta(da, db) {
    this.target.x += da;
    this.target.y += db;
    this.clampTarget(this.target);
  }

  /** Absolute input (joystick). */
  setTargetAbsolute(a, b) {
    this.target.set(a, b);
    this.clampTarget(this.target);
  }

  /** Pull the target back towards the ready stance (only used for touch joystick release if enabled). */
  recenter(dt, rate) {
    if (rate <= 0) return;
    const r = CONFIG.control.restTilt;
    const k = 1 - Math.exp(-rate * dt);
    this.target.x += (r.a - this.target.x) * k;
    this.target.y += (r.b - this.target.y) * k;
  }

  /** Advance the simulated bat one fixed physics step towards `tgt`. */
  step(dt, tgt) {
    const c = CONFIG.control;
    const resp = c.responsiveness;
    const w = c.springFrequency * Math.sqrt(resp);
    const z = c.damping;
    this.stepTarget.copy(tgt);

    this.prevPosition.copy(this.position);
    this.prevQuaternion.copy(this.quaternion);
    this.prevSweetPos.copy(this.sweetPos);

    let ax = w * w * (tgt.x - this.tilt.x) - 2 * z * w * this.tiltVel.x;
    let ay = w * w * (tgt.y - this.tilt.y) - 2 * z * w * this.tiltVel.y;
    const maxAcc = c.maxTiltAccel * resp;
    const am = Math.hypot(ax, ay);
    if (am > maxAcc) { ax *= maxAcc / am; ay *= maxAcc / am; }
    this.tiltVel.x += ax * dt;
    this.tiltVel.y += ay * dt;
    const vm = this.tiltVel.length();
    if (vm > c.maxTiltSpeed) this.tiltVel.multiplyScalar(c.maxTiltSpeed / vm);
    this.tilt.x += this.tiltVel.x * dt;
    this.tilt.y += this.tiltVel.y * dt;
    this.tilt.x = clamp(this.tilt.x, c.tiltMin.a - 0.05, c.tiltMax.a + 0.05);
    this.tilt.y = clamp(this.tilt.y, c.tiltMin.b - 0.1, c.tiltMax.b + 0.1);

    this._computePose(dt, false);
    this.lastDt = dt;
    if (dt > 0) {
      this.sweetVel.subVectors(this.sweetPos, this.prevSweetPos).divideScalar(dt);
      // intent velocity: excludes translations caused by body/ground constraints
      this.intentVel.subVectors(this.sweetPos, this.push).sub(this.prevFreeSweet).divideScalar(dt);

      // Decay recent swing momentum so fast human mouse flicks retain speed at impact
      const decay = Math.exp(-dt / (c.swingMemoryTau || 0.075));
      this.swingMemoryVel.multiplyScalar(decay);
      if (this.intentVel.lengthSq() > this.swingMemoryVel.lengthSq()) {
        this.swingMemoryVel.copy(this.intentVel);
        const mv = this.swingMemoryVel.length();
        if (mv > 28) this.swingMemoryVel.multiplyScalar(28 / mv);
      }
    }
    this.prevFreeSweet.subVectors(this.sweetPos, this.push);
  }

  _computePose(dt, snapFace) {
    const c = CONFIG.control;
    const bat = CONFIG.bat;
    const a = this.tilt.x, b = this.tilt.y;

    // --- hands: reach out with the swing (towards/away from camera, sideways, up)
    const hr = c.handsRest;
    const push = smoothstep(-0.2, 1.1, b);
    this.hands.set(
      hr.x + 0.16 * Math.tanh(a * 0.9),
      hr.y + 0.36 * smoothstep(0.9, 2.6, b) + 0.06 * Math.min(Math.abs(a), 1.4) * smoothstep(0.4, 1.4, b),
      hr.z - 0.30 * push + 0.12 * smoothstep(1.8, 2.9, b)
    );

    // --- blade direction and toe position
    swingDir(a, b, this.dir);
    this.position.copy(this.hands).addScaledVector(this.dir, bat.gripFromToe);

    // --- face orientation
    // Positional reference: the direction the blade sweeps when swung forward.
    const br = rotationAngle(b);
    const F = _v3.set(0, Math.sin(br), -Math.cos(br));
    F.addScaledVector(this.dir, -F.dot(this.dir)).normalize();
    // Motion reference: a batter's wrists square the face to the swing path.
    // Motion along -F is mirrored so a backswing does not flip the face round.
    const v = this.intentVel;
    const vf = v.dot(F);
    const k2 = Math.abs(vf) - vf;
    const inv = 1 / c.faceVelocityRef;
    const target = _v1.set(F.x + (v.x + k2 * F.x) * inv, F.y + (v.y + k2 * F.y) * inv, F.z + (v.z + k2 * F.z) * inv);
    target.addScaledVector(this.dir, -target.dot(this.dir));
    if (target.lengthSq() < 1e-8) target.copy(F);
    target.normalize();

    if (snapFace) this.face.copy(target);
    else this.face.lerp(target, 1 - Math.exp(-c.faceFollowRate * Math.sqrt(c.responsiveness) * dt));
    this.face.addScaledVector(this.dir, -this.face.dot(this.dir));
    if (this.face.lengthSq() < 1e-8) this.face.copy(target);
    this.face.normalize();

    this._applyConstraints();

    // --- orientation: local +Y = toe->handle, +Z = face normal
    const Y = _v2.copy(this.dir).negate();
    const X = _v3.crossVectors(Y, this.face).normalize();
    _m.makeBasis(X, Y, this.face);
    this.quaternion.setFromRotationMatrix(_m);

    this.sweetPos.copy(this.sweetLocal).applyQuaternion(this.quaternion).add(this.position);
  }

  // Keep the bat above the ground by translating the whole rigid bat (hands included).
  // Checks the physical corners and toe of the bat blade against the turf floor,
  // allowing the bat to touch right down to the pitch surface to dig out yorkers
  // while preventing it from clipping below the pitch.
  _applyConstraints() {
    const bat = CONFIG.bat;
    const hw = bat.bladeWidth * 0.5;
    const Y = _v2.copy(this.dir).negate();
    const X = _v3.crossVectors(Y, this.face).normalize();

    const points = [
      [0, 0, 0],
      [-hw, 0, bat.bladeFace],
      [hw, 0, bat.bladeFace],
      [-hw, 0, bat.bladeBack],
      [hw, 0, bat.bladeBack],
      [-hw, bat.bladeLength, bat.bladeFace],
      [hw, bat.bladeLength, bat.bladeFace]
    ];
    let pushY = 0;
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const wy = this.position.y + pushY + p[0] * X.y + p[1] * Y.y + p[2] * this.face.y;
      if (wy < 0.003) pushY += 0.003 - wy;
    }
    this.push.set(0, pushY, 0);
    if (pushY) {
      this.position.y += pushY;
      this.hands.y += pushY;
    }
  }

  /** Bat pose interpolated within the last step (s in [0,1]) for CCD / rendering. */
  poseAt(s, outPos, outQuat) {
    outPos.lerpVectors(this.prevPosition, this.position, s);
    outQuat.slerpQuaternions(this.prevQuaternion, this.quaternion, s);
  }

  /**
   * Velocity of a bat-local point at contact (includes angular lever arm +
   * recent swing momentum so human mouse flicks that finish slightly before
   * impact still transfer full kinetic energy).
   */
  pointVelocity(localPoint, out) {
    const p1 = _v1.copy(localPoint).applyQuaternion(this.quaternion).add(this.position);
    const p0 = _v2.copy(localPoint).applyQuaternion(this.prevQuaternion).add(this.prevPosition);
    out.subVectors(p1, p0).divideScalar(this.lastDt || CONFIG.physics.dt);

    const bat = CONFIG.bat;
    const sweetArm = bat.gripFromToe - bat.sweetSpotFromToe;
    const contactArm = clamp(Math.abs(bat.gripFromToe - localPoint.y), 0.18, bat.gripFromToe);
    const leverScale = clamp(contactArm / sweetArm, 0.35, 1.25);
    const memSpeed = this.swingMemoryVel.length() * leverScale;
    if (memSpeed > out.length() && memSpeed > 2.0) {
      out.copy(this.swingMemoryVel).multiplyScalar(leverScale);
    }
    return out;
  }

  get sweetSpeed() { return Math.max(this.sweetVel.length(), this.swingMemoryVel.length()); }
}
