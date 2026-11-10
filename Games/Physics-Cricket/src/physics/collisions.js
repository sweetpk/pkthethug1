import * as THREE from 'three';
import { CONFIG } from '../config.js';

// Narrow-phase geometry and impulse-based collision response.
// Bat-local frame: origin at the toe (centre of the blade), +Y up the bat
// towards the handle, +Z is the striking-face normal, +X across the blade.

const _p = new THREE.Vector3();
const _n = new THREE.Vector3();
const _c = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _qi = new THREE.Quaternion();
const _tmp = new THREE.Vector3();

function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
function smoothstep(e0, e1, x) { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); }

/**
 * Closest point on the bat collider (blade box + handle capsule) to a local point.
 * Writes the surface point into outPoint and the outward normal into outNormal.
 * Returns signed distance from the surface (negative = inside).
 */
export function batClosest(local, outPoint, outNormal) {
  const b = CONFIG.bat;
  const hw = (b.collisionWidth || b.bladeWidth) / 2;
  const x0 = -hw, x1 = hw, y0 = 0, y1 = b.bladeLength, z0 = b.bladeBack, z1 = b.bladeFace;

  // --- blade (oriented box)
  let bestD, region;
  const inside = local.x > x0 && local.x < x1 && local.y > y0 && local.y < y1 && local.z > z0 && local.z < z1;
  if (!inside) {
    outPoint.set(clamp(local.x, x0, x1), clamp(local.y, y0, y1), clamp(local.z, z0, z1));
    outNormal.subVectors(local, outPoint);
    bestD = outNormal.length();
    outNormal.divideScalar(bestD || 1);
  } else {
    // deepest-penetration fallback: push out through the nearest face
    const d = [local.x - x0, x1 - local.x, local.y - y0, y1 - local.y, local.z - z0, z1 - local.z];
    let k = 0;
    for (let i = 1; i < 6; i++) if (d[i] < d[k]) k = i;
    outPoint.copy(local);
    outNormal.set(0, 0, 0);
    if (k === 0) { outPoint.x = x0; outNormal.x = -1; }
    if (k === 1) { outPoint.x = x1; outNormal.x = 1; }
    if (k === 2) { outPoint.y = y0; outNormal.y = -1; }
    if (k === 3) { outPoint.y = y1; outNormal.y = 1; }
    if (k === 4) { outPoint.z = z0; outNormal.z = -1; }
    if (k === 5) { outPoint.z = z1; outNormal.z = 1; }
    bestD = -d[k];
  }
  region = 'blade';

  // --- handle (capsule)
  const zc = (z0 + z1) / 2;
  const hy = clamp(local.y, y1, b.totalLength);
  const dx = local.x, dy = local.y - hy, dz = local.z - zc;
  const dl = Math.hypot(dx, dy, dz);
  const hd = dl - b.handleRadius;
  if (hd < bestD) {
    bestD = hd;
    region = 'handle';
    if (dl > 1e-7) outNormal.set(dx / dl, dy / dl, dz / dl); else outNormal.set(0, 0, 1);
    outPoint.set(0, hy, zc).addScaledVector(outNormal, b.handleRadius);
  }
  batClosest.region = region;
  return bestD;
}
batClosest.region = 'blade';

/**
 * Swept bat-vs-ball test across the last physics step using micro-steps that
 * interpolate both bodies. Resolves the first contact with an impulse.
 * Returns a contact report or null.
 */
export function collideBatBall(bat, ball, dt) {
  const r = CONFIG.ball.radius;
  const p0 = ball.prevPos, p1 = ball.pos;

  // broad phase: bounding sphere around the bat's middle
  const half = CONFIG.bat.totalLength / 2;
  const m0 = _tmp.set(0, half, 0).applyQuaternion(bat.prevQuaternion).add(bat.prevPosition);
  const m0x = m0.x, m0y = m0.y, m0z = m0.z;
  const m1 = _tmp.set(0, half, 0).applyQuaternion(bat.quaternion).add(bat.position);
  const toeTravel = bat.position.distanceTo(bat.prevPosition) + 2 * half * bat.quaternion.angleTo(bat.prevQuaternion);
  const ballTravel = p0.distanceTo(p1);
  const reach = half + 0.08 + r + toeTravel + ballTravel;
  const d0 = Math.hypot(p0.x - m0x, p0.y - m0y, p0.z - m0z);
  const d1 = p1.distanceTo(m1);
  if (Math.min(d0, d1) > reach) return null;

  const cfg = CONFIG.physics;
  const N = clamp(Math.ceil((toeTravel + ballTravel) / cfg.microStepDistance), 1, cfg.maxMicroSteps);
  const pos = new THREE.Vector3();
  for (let k = 1; k <= N; k++) {
    const s = k / N;
    bat.poseAt(s, pos, _q);
    _qi.copy(_q).invert();
    _p.lerpVectors(p0, p1, s).sub(pos).applyQuaternion(_qi); // ball centre, bat-local
    const dist = batClosest(_p, _c, _n);
    if (dist < r) {
      const report = resolveBatContact(bat, ball, _c.clone(), _n.clone(), batClosest.region, pos, _q, s, dt);
      if (report) return report;
    }
  }
  return null;
}

function resolveBatContact(bat, ball, cLocal, nLocal, region, batPos, batQuat, s, dt) {
  const B = CONFIG.bat;
  const BL = CONFIG.ball;
  const r = BL.radius;
  const hw = (B.collisionWidth || B.bladeWidth) / 2;

  // Model the pressed camber of a real cricket bat face so off-center contacts
  // on the front of the blade deflect naturally rather than snapping 90 deg at a box corner.
  const effNormalLocal = nLocal.clone();
  if (region === 'blade' && cLocal.z >= -0.005 && cLocal.y > 0.012) {
    const latRatio = clamp(cLocal.x / hw, -1, 1);
    const absLat = Math.abs(latRatio);
    if (absLat < 0.88) {
      // Smoothly cambered striking face
      effNormalLocal.set(latRatio * 0.30, 0.05, 1.0).normalize();
    } else {
      // Outer edge splice: blend from face camber to an edge nick
      const edgeT = smoothstep(0.85, 1.0, absLat);
      effNormalLocal.set(
        Math.sign(latRatio) * (0.30 + 0.58 * edgeT),
        0.06,
        1.0 - 0.55 * edgeT
      ).normalize();
    }
  }

  const n = effNormalLocal.clone().applyQuaternion(batQuat).normalize(); // world normal (bat -> ball)
  const cWorld = cLocal.clone().applyQuaternion(batQuat).add(batPos);
  const vBat = bat.pointVelocity(cLocal, new THREE.Vector3());           // linear + angular + swing memory

  // Amplify bat swing velocity when the player actively swings so hits feel punchy and sixes carry well
  const rawBatSpeed = vBat.length();
  if (rawBatSpeed > 3.5) {
    const powerMult = B.swingPowerMultiplier || 1.25;
    const scale = 1 + (powerMult - 1) * smoothstep(3.5, 11.0, rawBatSpeed);
    vBat.multiplyScalar(scale);

    // When swinging forward/upward with power, add a natural sweet-spot loft so big hits launch for SIX
    if (region === 'blade' && n.z < -0.5 && (vBat.y > 1.5 || bat.tilt.y > 0.35)) {
      const loftBoost = 0.24 * smoothstep(5.0, 16.0, rawBatSpeed) * smoothstep(0.10, 0.90, bat.tilt.y);
      n.y = clamp(n.y + loftBoost, -0.35, 0.62);
      n.normalize();
    }
  }

  // relative velocity of the ball's surface point at contact
  const rBall = n.clone().multiplyScalar(-r);
  const vBallPt = ball.vel.clone().add(new THREE.Vector3().crossVectors(ball.spin, rBall));
  const vRel = vBallPt.sub(vBat);
  const vn = vRel.dot(n);
  if (vn >= -0.05) return null; // separating or resting

  // effective mass of the bat at the contact point (free rigid body during the ~1ms impact)
  const rL = cLocal.clone().sub(new THREE.Vector3(0, B.comFromToe, 0));
  const rxn = new THREE.Vector3().crossVectors(rL, effNormalLocal);
  const invBat = 1 / (B.mass + B.handCouplingMass) + rxn.x * rxn.x / B.inertiaTransverse + rxn.y * rxn.y / B.inertiaLong + rxn.z * rxn.z / B.inertiaTransverse;
  const mEff = 1 / invBat;

  // continuous contact-quality / restitution model
  let along, lateral, faceOn;
  if (region === 'blade') {
    along = B.restitutionFloor + (1 - B.restitutionFloor) * Math.exp(-Math.pow((cLocal.y - B.sweetSpotFromToe) / B.sweetSpotWidth, 2));
    const lat = clamp(Math.abs(cLocal.x) / hw, 0, 1);
    lateral = 1 - B.edgeRestitutionLoss * Math.pow(lat, 3);
    faceOn = Math.max(0.25, effNormalLocal.z);
  } else {
    along = 0.45; lateral = 0.7; faceOn = 0.3;
  }
  const batNormalSpeed = Math.max(0, vBat.dot(n));
  const softHands = B.softHandsMin + (1 - B.softHandsMin) * smoothstep(0, B.softHandsSpeed, batNormalSpeed);
  const e = B.restitution * along * lateral * (0.75 + 0.25 * faceOn) * softHands;

  // normal impulse
  const jn = -(1 + e) * vn / (1 / BL.mass + 1 / mEff);
  const dv = n.clone().multiplyScalar(jn / BL.mass);

  // Coulomb friction (ball can roll/skid across the face -> spin transfer)
  const vt = vRel.clone().addScaledVector(n, -vn);
  const vtl = vt.length();
  const I = 0.4 * BL.mass * r * r;
  if (vtl > 1e-5) {
    const jtStop = vtl / (3.5 / BL.mass + 1 / mEff);
    const jt = Math.min(B.friction * jn, jtStop);
    const tImp = vt.multiplyScalar(-jt / vtl);
    dv.addScaledVector(tImp, 1 / BL.mass);
    ball.spin.add(new THREE.Vector3().crossVectors(rBall, tImp).divideScalar(I));
  }

  const vIn = ball.vel.length();
  ball.vel.add(dv);
  let exit = ball.vel.length();
  if (exit > B.maxExitSpeed) { ball.vel.multiplyScalar(B.maxExitSpeed / exit); exit = B.maxExitSpeed; }

  // place the ball on the surface and spend the rest of the step moving away
  ball.pos.copy(cWorld).addScaledVector(n, r + 0.002).addScaledVector(ball.vel, (1 - s) * dt);
  ball.rolling = false;

  if (typeof bat.onBallImpact === 'function') bat.onBallImpact(batNormalSpeed);

  const quality = clamp(along * lateral * faceOn, 0, 1);
  const edge = region === 'handle' || faceOn < 0.72 || Math.abs(cLocal.x) > hw * 0.86;
  return {
    type: 'bat',
    region,
    quality,
    edge,
    restitution: e,
    effectiveMass: mEff,
    contactLocal: cLocal,
    normal: n,
    batSpeed: vBat.length(),
    batNormalSpeed,
    incomingSpeed: vIn,
    exitSpeed: exit,
    impulse: jn,
    pos: cWorld
  };
}

/** Swept ball-vs-stumps test (three vertical cylinders + bails). */
export function collideStumps(ball, dt, z) {
  const S = CONFIG.stumps;
  const r = CONFIG.ball.radius;
  const p0 = ball.prevPos, p1 = ball.pos;
  const zMin = Math.min(p0.z, p1.z), zMax = Math.max(p0.z, p1.z);
  if (zMax < z - 0.3 || zMin > z + 0.3) return null;
  if (Math.min(p0.y, p1.y) > S.height + 0.06) return null;

  const N = clamp(Math.ceil(p0.distanceTo(p1) / 0.008), 1, 64);
  for (let k = 1; k <= N; k++) {
    _p.lerpVectors(p0, p1, k / N);
    for (let i = -1; i <= 1; i++) {
      const sx = i * S.spacing;
      const cy = clamp(_p.y, 0, S.height + 0.015);
      const dx = _p.x - sx, dy = _p.y - cy, dz = _p.z - z;
      const d = Math.hypot(dx, dy, dz);
      if (d < r + S.radius) {
        const n = new THREE.Vector3(dx, dy, dz).divideScalar(d || 1);
        const vn = ball.vel.dot(n);
        const speed = ball.vel.length();
        if (vn < 0) ball.vel.addScaledVector(n, -(1 + 0.25) * vn);
        ball.vel.multiplyScalar(0.7);
        ball.pos.copy(_p).addScaledVector(n, (r + S.radius) - d + 0.002);
        ball.rolling = false;
        return { type: 'stumps', stump: i, speed, normal: n, pos: _p.clone() };
      }
    }
  }
  return null;
}
