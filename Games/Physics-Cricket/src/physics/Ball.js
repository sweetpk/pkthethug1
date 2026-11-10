import * as THREE from 'three';
import { CONFIG, PITCH_LENGTH } from '../config.js';

// Ball as a physical projectile: gravity, quadratic air drag, a little Magnus
// lift from spin, bounce with Coulomb friction (spin coupled), and rolling
// resistance on grass.

const _a = new THREE.Vector3();
const _t = new THREE.Vector3();
const _q = new THREE.Quaternion();

export function isOnPitch(x, z) {
  return Math.abs(x) < CONFIG.field.pitchHalfWidth && z < 1.3 && z > -PITCH_LENGTH - 1.3;
}

export class Ball {
  constructor() {
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.spin = new THREE.Vector3();   // angular velocity (rad/s)
    this.prevPos = new THREE.Vector3();
    this.orientation = new THREE.Quaternion();
    this.prevOrientation = new THREE.Quaternion();
    this.active = false;
    this.rolling = false;
    this.events = [];
    const b = CONFIG.ball;
    this.dragK = 0.5 * CONFIG.physics.airDensity * b.dragCoefficient * Math.PI * b.radius * b.radius / b.mass;
  }

  launch(pos, vel) {
    this.pos.copy(pos);
    this.prevPos.copy(pos);
    this.vel.copy(vel);
    this.spin.set(-vel.length() * 2.0, 0, 0); // seam-up backspin, visual mostly
    this.active = true;
    this.rolling = false;
  }

  /** Integrate free flight / ground contact for one step. */
  step(dt) {
    this.prevPos.copy(this.pos);
    this.prevOrientation.copy(this.orientation);
    if (!this.active) return;

    const b = CONFIG.ball;
    const g = CONFIG.physics.gravity;
    const r = b.radius;
    const v = this.vel;
    const speed = v.length();

    if (this.rolling) {
      // Rolling on the ground: resistance + drag, no vertical motion.
      const h = Math.hypot(v.x, v.z);
      const decel = CONFIG.ground.rollingResistance * g * (isOnPitch(this.pos.x, this.pos.z) ? 0.6 : 1) + this.dragK * h * h;
      const nh = Math.max(0, h - decel * dt);
      if (h > 1e-6) { v.x *= nh / h; v.z *= nh / h; } else { v.x = 0; v.z = 0; }
      v.y = 0;
      this.pos.x += v.x * dt;
      this.pos.z += v.z * dt;
      this.pos.y = r;
      // rolling without slipping
      this.spin.set(v.z / r, 0, -v.x / r);
    } else {
      // gravity + drag + magnus (semi-implicit Euler at 240 Hz is plenty here)
      _a.set(0, -g, 0);
      _a.addScaledVector(v, -this.dragK * speed);
      _t.crossVectors(this.spin, v).multiplyScalar(b.magnusCoefficient);
      const ml = _t.length();
      if (ml > b.maxMagnusAccel) _t.multiplyScalar(b.maxMagnusAccel / ml);
      _a.add(_t);
      v.addScaledVector(_a, dt);
      this.pos.addScaledVector(v, dt);
      this.spin.multiplyScalar(Math.exp(-b.spinDecay * dt));

      if (this.pos.y < r && v.y < 0) this._bounce(r);
    }

    // visual rotation
    const w = this.spin.length();
    if (w > 1e-4) {
      const q = _q.setFromAxisAngle(_t.copy(this.spin).divideScalar(w), w * dt);
      this.orientation.premultiply(q);
    }
  }

  _bounce(r) {
    const gcfg = CONFIG.ground;
    const v = this.vel;
    const onPitch = isOnPitch(this.pos.x, this.pos.z);
    const e = onPitch ? gcfg.pitchRestitution : gcfg.outfieldRestitution;
    const mu = onPitch ? gcfg.pitchFriction : gcfg.outfieldFriction;
    const vyIn = -v.y;

    // vertical
    this.pos.y = r + (r - this.pos.y) * e;
    v.y = vyIn * e;

    // tangential: Coulomb friction on the contact point, capped at the
    // slide->roll transition (2/7 of contact slip for a solid sphere).
    const s = this.spin;
    // contact point velocity = v + w x r_c, r_c = (0,-r,0)  ->  (v.x + w.z r, 0, v.z - w.x r)
    const slipX = v.x + s.z * r;
    const slipZ = v.z - s.x * r;
    const slip = Math.hypot(slipX, slipZ);
    if (slip > 1e-6) {
      const dv = Math.min(mu * (1 + e) * vyIn, slip * (2 / 7));
      const dx = -slipX / slip * dv, dz = -slipZ / slip * dv;
      v.x += dx; v.z += dz;
      // dw = (r_c x m dv) / I,  r_c = (0,-r,0), I = 2/5 m r^2
      const k = 5 / (2 * r);
      s.x += -dz * k;      // (-y) x (dx,0,dz) = (-dz, 0, dx)
      s.z += dx * k;
    }

    this.events.push({ type: 'bounce', onPitch, speed: vyIn, pos: this.pos.clone() });

    if (v.y < gcfg.rollThreshold) {
      v.y = 0;
      this.pos.y = r;
      this.rolling = true;
    }
  }
}
