import * as THREE from 'three';
import { PITCH_LENGTH } from '../config.js';

// Procedural bowling action. Pure function of time so the exact hand position
// at the release instant is known before the run-up starts: the delivery's
// release point is taken from the animation itself (no teleporting ball).

const POPPING_Z = -PITCH_LENGTH + 1.22;
export const BOWLER_DIMS = {
  hipHeight: 0.98,
  torsoLength: 0.56,
  shoulderHalf: 0.2,
  armLength: 0.70,
  legLength: 0.96,
  bodyX: 0.42 // right-arm over the wicket (bowler's left of the stumps as seen by him)
};

export function makeRunup(bowler) {
  const tau = 0.35;
  const v = bowler.runSpeed;
  const tGather = bowler.pace === 'slow' ? 0.55 : 0.42;
  const tRun = bowler.runDistance / v + tau;
  const gatherDist = v * tGather * 0.6;
  const zRelease = POPPING_Z - 0.35;
  const zGather = zRelease - gatherDist;
  const sRun = v * (tRun - tau * (1 - Math.exp(-tRun / tau)));
  return {
    v, tau, tGather, tRun, gatherDist, zRelease, zGather,
    zStart: zGather - sRun,
    tRelease: tRun + tGather,
    stride: bowler.pace === 'slow' ? 1.2 : 1.9,
    releaseAngle: Math.PI - 0.05,
    hand: bowler.hand === 'left' ? 'left' : 'right'
  };
}

const _shoulder = new THREE.Vector3();
const _dir = new THREE.Vector3();

/** Compute the pose at time t (seconds since the run-up started). */
export function bowlerPose(t, R, out = {}) {
  const D = BOWLER_DIMS;
  const isLeft = R.hand === 'left';
  const side = isLeft ? -1 : 1;
  let z, x = side * D.bodyX, bob = 0, lean, armBowl, armGuide, legFront, legBack, kneeFront = 0, kneeBack = 0, dist;
  const vEnd = 0.2 * R.v;

  if (t <= R.tRun) {
    const tt = Math.max(0, t);
    dist = R.v * (tt - R.tau * (1 - Math.exp(-tt / R.tau)));
    z = R.zStart + dist;
    const ph = (dist / R.stride) * Math.PI * 2;
    legFront = 0.75 * Math.sin(ph);
    legBack = -legFront;
    kneeFront = 0.6 * Math.max(0, Math.sin(ph + 1.2)) + 0.2;
    kneeBack = 0.6 * Math.max(0, Math.sin(ph + 1.2 + Math.PI)) + 0.2;
    bob = 0.05 * Math.abs(Math.sin(ph));
    lean = 0.18;
    armBowl = 0.25 - 0.45 * Math.sin(ph);
    armGuide = 0.25 + 0.45 * Math.sin(ph);
  } else if (t <= R.tRelease) {
    const u = (t - R.tRun) / R.tGather;
    z = R.zGather + R.v * R.tGather * (u - 0.4 * u * u);
    bob = 0.16 * Math.sin(Math.PI * Math.min(1, u * 1.25));
    lean = 0.18 - 0.42 * Math.sin(Math.PI * Math.min(1, u * 1.3)) + 0.12 * u * u;
    armBowl = 0.2 + (R.releaseAngle - 0.2) * Math.pow(u, 2.2);
    armGuide = u < 0.6 ? 0.25 + (Math.PI - 0.1 - 0.25) * (u / 0.6) : (Math.PI - 0.1) - 2.2 * ((u - 0.6) / 0.4);
    legFront = -0.55 * Math.min(1, u * 1.6); // front leg reaches forward
    legBack = 0.45 * u;
    kneeFront = 0.5 * (1 - u);
    kneeBack = 0.6 * Math.sin(Math.PI * u);
  } else {
    const w = t - R.tRelease;
    const tf = 0.7;
    z = R.zRelease + vEnd * tf * (1 - Math.exp(-w / tf)) + 0.9 * (1 - Math.exp(-w / 0.25));
    x = side * (D.bodyX + 0.9 * (1 - Math.exp(-w / 0.8)));
    lean = 0.30 + 0.35 * (1 - Math.exp(-w / 0.2));
    armBowl = R.releaseAngle + (2 * Math.PI + 0.35 - R.releaseAngle) * (1 - Math.exp(-w / 0.11));
    armGuide = 0.9 + 0.2 * Math.exp(-w / 0.2);
    legFront = -0.5 * Math.exp(-w / 0.5);
    legBack = 0.5 * Math.exp(-w / 0.4) + 0.2 * Math.sin(w * 6) * Math.exp(-w);
    kneeFront = 0.3;
    kneeBack = 0.4;
    bob = 0;
  }

  out.x = x; out.z = z; out.y = bob;
  out.lean = lean;
  if (isLeft) {
    out.armL = armBowl; out.armR = armGuide;
    out.legR = legFront; out.legL = legBack;
    out.kneeR = kneeFront; out.kneeL = kneeBack;
  } else {
    out.armR = armBowl; out.armL = armGuide;
    out.legL = legFront; out.legR = legBack;
    out.kneeL = kneeFront; out.kneeR = kneeBack;
  }

  // bowling-hand world position (same hierarchy as the rendered model)
  const hipY = D.hipHeight + bob;
  _shoulder.set(-side * D.shoulderHalf, D.torsoLength, 0);
  _dir.set(0, -Math.cos(armBowl), -Math.sin(armBowl)).multiplyScalar(D.armLength);
  _shoulder.add(_dir);
  // torso lean: rotation about +X
  const c = Math.cos(lean), s = Math.sin(lean);
  const ly = _shoulder.y * c - _shoulder.z * s;
  const lz = _shoulder.y * s + _shoulder.z * c;
  out.hand = (out.hand || new THREE.Vector3()).set(x + _shoulder.x, hipY + ly, z + lz);
  return out;
}
