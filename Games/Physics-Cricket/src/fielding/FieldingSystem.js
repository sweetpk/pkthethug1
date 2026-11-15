import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { isOnPitch } from '../physics/Ball.js';

// ---------------------------------------------------------------------------
// FieldingSystem — 240Hz Adaptive Simulation of Wicketkeeper + 11 Fielders
//
// Features:
//   - Pace-scaled Wicketkeeper & First Slip depth based on bowler speed.
//   - Wagon-wheel Captaincy AI ("shotHistory") shifting infielders & boundary
//     riders toward the batter's favoured scoring zones & loft tendency.
//   - Straight-V boundary coverage (Long-Off & Long-On) with natural gaps.
//   - Single-Catcher ("Mine!") with time-optimal aerial/ground interception,
//     coordinated relay + backup sweeper + keeper stump coverage + alert step.
//   - Closest-approach catch resolution (no false dives) & hard separation.
// ---------------------------------------------------------------------------

const CREASE_X = 0;
const CREASE_Z = -1.22;

function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }

function lerp(a, b, t) { return a + (b - a) * t; }

function lerpAngle(current, target, alpha) {
  let diff = ((target - current + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (diff < -Math.PI) diff += Math.PI * 2;
  return current + diff * alpha;
}

function clampInsideField(pos, margin = 0.8) {
  const F = CONFIG.field;
  const maxR = Math.max(1, F.boundaryRadius - margin);
  const dx = pos.x;
  const dz = pos.z - F.centerZ;
  const r = Math.hypot(dx, dz);
  if (r > maxR) {
    const s = maxR / r;
    pos.x = dx * s;
    pos.z = F.centerZ + dz * s;
  }
}

export class FieldingSystem {
  constructor() {
    this.fielders = CONFIG.fielding.positions.map((spec) => {
      const defaultHome = new THREE.Vector3(spec.x, 0, spec.z);
      const home = defaultHome.clone();
      const facing = Math.atan2(CREASE_X - spec.x, CREASE_Z - spec.z);
      return {
        id: spec.id,
        name: spec.name,
        isKeeper: Boolean(spec.isKeeper),
        ring: spec.ring,
        defaultHome,
        home,
        baseFacing: facing,
        pos: home.clone(),
        vel: new THREE.Vector3(),
        target: home.clone(),
        facing,
        state: 'idle',
        stridePhase: 0,
        reactionTimer: 0,
        actionTimer: 0,
        jumpY: 0,
        _jumpPeak: 0,
        diveDir: 0,
        catchStyle: 'chest',
        stopStyle: 'pickup',
        catchHeight: 1.2,
        _role: 'idle',
        _interceptPt: home.clone(),
        _ballDist: 99,
        _ballY: 0
      };
    });

    this.byId = {};
    for (const f of this.fielders) {
      this.byId[f.id] = f;
    }

    this.keeper = this.fielders.find((f) => f.isKeeper) || this.fielders[0];
    this.slip = this.byId.slip || null;

    this._backupPt = new THREE.Vector3();
    this._groundPt = new THREE.Vector3();
    this._scored = [];
    this.ballPos = new THREE.Vector3(0, -10, 0);
    this.ballVel = new THREE.Vector3();
    this.ballActive = false;
    this.flightSamples = [];
    this.groundSamples = [];
    this.groundEndSpot = new THREE.Vector3();
    this.primaryGroundChaser = null;

    // Match-persistent tactical state
    this.shotHistory = [];
    this.deliveryContext = { pace: 'medium', kmh: 112, lineX: 0 };
    this.currentTactic = 'Balanced Straight-V';
    this.activeKeeperCatchZone = CONFIG.fielding.keeperCatchZoneRadius;

    this.resetMatch();
  }

  resetMatch() {
    this.shotHistory.length = 0;
    this.deliveryContext = { pace: 'medium', kmh: 112, lineX: 0 };
    this.currentTactic = 'Balanced Straight-V';
    this.activeKeeperCatchZone = CONFIG.fielding.keeperCatchZoneRadius;

    for (const f of this.fielders) {
      f.home.copy(f.defaultHome);
      f.baseFacing = Math.atan2(CREASE_X - f.home.x, CREASE_Z - f.home.z);
    }
    this.resetDelivery();
  }

  resetDelivery() {
    for (const f of this.fielders) {
      f.pos.copy(f.home);
      f.vel.set(0, 0, 0);
      f.target.copy(f.home);
      f.baseFacing = Math.atan2(CREASE_X - f.home.x, CREASE_Z - f.home.z);
      f.facing = f.baseFacing;
      f.state = 'idle';
      f.stridePhase = 0;
      f.reactionTimer = 0;
      f.actionTimer = 0;
      f.jumpY = 0;
      f._jumpPeak = 0;
      f.diveDir = 0;
      f.catchStyle = 'chest';
      f.stopStyle = 'pickup';
      f.catchHeight = 1.2;
      f._role = 'idle';
      f._interceptPt.copy(f.home);
      f._ballDist = 99;
      f._ballY = 0;
    }

    this.hit = false;
    this.groundedAfterHit = false;
    this.hitTime = -1;
    this.firstContact = null;
    this.resolved = false;
    this.heldBallPos = null;
    this.holder = null;
    this.landingSpot = null;
    this.flightSamples.length = 0;
    this.groundSamples.length = 0;
    this.groundEndSpot.set(0, 0, 0);
    this.designatedCatcher = null;
    this.primaryGroundChaser = null;
    this.primaryChasers = [];
    this.ballActive = false;
    this.ballPos.set(0, -10, 0);
    this.ballVel.set(0, 0, 0);
  }

  /**
   * Adjusts Wicketkeeper, First Slip, infield ring, and boundary riders before
   * each delivery based on bowler speed and batter's wagon-wheel tendencies.
   */
  setDeliveryContext(delivery) {
    const F = CONFIG.fielding;
    this.deliveryContext = delivery || { pace: 'medium', kmh: 112, lineX: 0 };

    const fallbackKmh = delivery?.pace === 'fast' ? 136 : delivery?.pace === 'slow' ? 86 : 112;
    const kmh = delivery?.kmh ?? fallbackKmh;
    const uPace = clamp((kmh - 80) / (142 - 80), 0, 1);

    for (const f of this.fielders) {
      f.home.copy(f.defaultHome);
    }

    // 1. Pace-scaled Wicketkeeper & First Slip depth
    const lineShift = clamp(delivery?.lineX || 0, -0.35, 0.35) * 0.35;
    this.keeper.home.set(
      0.20 + 0.12 * uPace + lineShift,
      0,
      lerp(F.keeperDepthSlow, F.keeperDepthFast, uPace)
    );
    if (this.slip) {
      this.slip.home.set(
        lerp(F.slipWidthSlow, F.slipWidthFast, uPace),
        0,
        lerp(F.slipDepthSlow, F.slipDepthFast, uPace)
      );
    }
    this.activeKeeperCatchZone = F.keeperCatchZoneRadius + uPace * 1.6;

    // 2. Smart adaptive tactical shifts based on batter's recent shot history
    this._applyTacticalFieldShifts(uPace);

    // 3. Re-clamp homes safely inside rope and prevent home-position overlaps
    for (const f of this.fielders) {
      clampInsideField(f.home, 1.4);
    }
    this._enforceHomeSeparation();

    for (const f of this.fielders) {
      f.baseFacing = Math.atan2(CREASE_X - f.home.x, CREASE_Z - f.home.z);
      f.pos.copy(f.home);
      f.target.copy(f.home);
      f._interceptPt.copy(f.home);
      f.facing = f.baseFacing;
    }
  }

  _applyTacticalFieldShifts(uPace) {
    const n = this.shotHistory.length;
    const paceScale = 1 + (uPace - 0.45) * 0.10;

    if (n >= 2) {
      let straightW = 0;
      let offW = 0;
      let legW = 0;
      let loftW = 0;
      let totalW = 0;

      for (let i = 0; i < n; i++) {
        const s = this.shotHistory[i];
        const w = 1 + i * 0.35;
        totalW += w;
        if (s.lofted) loftW += w;
        if (Math.abs(s.angleDeg) <= 24) {
          straightW += w;
        } else if (s.angleDeg > 24) {
          offW += w;
        } else {
          legW += w;
        }
      }

      const loftRatio = totalW > 0 ? loftW / totalW : 0;
      const setHome = (id, x, z) => {
        if (this.byId[id]) this.byId[id].home.set(x, 0, z);
      };

      if (offW > straightW && offW >= legW) {
        this.currentTactic = 'Off-Side Cover Trap';
        setHome('longOff', 16.5, -52.0);
        setHome('longOn', -8.5, -54.5);
        setHome('deepCover', 35.5, -32.0);
        setHome('cover', 16.0, -16.5);
        setHome('point', 20.0, -5.5);
        setHome('midOff', 9.2, -23.5);
      } else if (legW > straightW && legW > offW) {
        this.currentTactic = 'Leg-Side Mid-Wicket Trap';
        setHome('longOn', -16.5, -52.0);
        setHome('longOff', 8.5, -54.5);
        setHome('deepMidWicket', -36.0, -28.0);
        setHome('midOn', -9.2, -23.5);
        setHome('midWicket', -17.5, -16.0);
        setHome('squareLeg', -18.5, -2.0);
      } else {
        this.currentTactic = 'Straight-V Boundary Trap';
        setHome('longOff', 11.2, -54.2);
        setHome('longOn', -11.2, -54.2);
        setHome('midOff', 8.5, -24.0);
        setHome('midOn', -8.5, -24.0);
      }

      // Pace-adjusted infield depth first, then loft/ground captaincy depth
      for (const f of this.fielders) {
        if (f.ring !== 'infield') continue;
        const dx = f.home.x - CREASE_X;
        const dz = f.home.z - CREASE_Z;
        f.home.set(CREASE_X + dx * paceScale, 0, CREASE_Z + dz * paceScale);
      }

      if (loftRatio >= 0.45) {
        const centerZ = CONFIG.field.centerZ;
        for (const f of this.fielders) {
          if (f.ring === 'infield') {
            const dx = f.home.x - CREASE_X;
            const dz = f.home.z - CREASE_Z;
            const len = Math.hypot(dx, dz) || 1;
            f.home.x += (dx / len) * 3.2;
            f.home.z += (dz / len) * 3.2;
          } else if (f.ring === 'boundary') {
            const dx = f.home.x;
            const dz = f.home.z - centerZ;
            const r = Math.hypot(dx, dz) || 1;
            const targetR = 52.5;
            f.home.set((dx / r) * targetR, 0, centerZ + (dz / r) * targetR);
          }
        }
      } else if (loftRatio <= 0.15 && n >= 3) {
        for (const f of this.fielders) {
          if (f.ring === 'infield') {
            const dx = f.home.x - CREASE_X;
            const dz = f.home.z - CREASE_Z;
            const len = Math.hypot(dx, dz) || 1;
            f.home.x -= (dx / len) * 1.8;
            f.home.z -= (dz / len) * 1.8;
          }
        }
      }
    } else {
      this.currentTactic = 'Balanced Straight-V';
      for (const f of this.fielders) {
        if (f.ring !== 'infield') continue;
        const dx = f.home.x - CREASE_X;
        const dz = f.home.z - CREASE_Z;
        f.home.set(CREASE_X + dx * paceScale, 0, CREASE_Z + dz * paceScale);
      }
    }
  }

  _enforceHomeSeparation() {
    const minSep = CONFIG.fielding.minSeparation || 2.6;
    const list = this.fielders;
    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      for (let j = i + 1; j < list.length; j++) {
        const b = list[j];
        let dx = b.home.x - a.home.x;
        let dz = b.home.z - a.home.z;
        let d = Math.hypot(dx, dz);
        if (d >= minSep) continue;
        if (d < 1e-4) { dx = 1; dz = 0; d = 1; }
        const push = minSep - d;
        const nx = dx / d;
        const nz = dz / d;
        // Keeper keeps priority anchor behind stumps
        const wa = a.isKeeper ? 0.0 : b.isKeeper ? 1.0 : 0.5;
        const wb = 1.0 - wa;
        a.home.x -= nx * push * wa;
        a.home.z -= nz * push * wa;
        b.home.x += nx * push * wb;
        b.home.z += nz * push * wb;
        clampInsideField(a.home, 1.4);
        clampInsideField(b.home, 1.4);
      }
    }
  }

  onBatHit(hitEvent, ball) {
    if (this.hit) return;
    const F = CONFIG.fielding;
    this.hit = true;
    this.hitTime = hitEvent.time;
    this.firstContact = hitEvent;

    if (!hitEvent.edge && hitEvent.exitSpeed > 8.5) {
      const angleDeg = Math.atan2(ball.vel.x, -ball.vel.z) * 180 / Math.PI;
      const lofted = ball.vel.y > 6.2 && hitEvent.exitSpeed > 17;
      this.shotHistory.push({ angleDeg, exitSpeed: hitEvent.exitSpeed, lofted });
      if (this.shotHistory.length > 8) this.shotHistory.shift();
    }

    // Chopped straight down onto pitch / bump ball cannot be caught out
    if (ball.vel.y < -0.8 || (ball.pos.y < 0.14 && ball.vel.y <= 0.4)) {
      this.groundedAfterHit = true;
    }

    this.landingSpot = this._predictLanding(ball);

    for (const f of this.fielders) {
      if (hitEvent.edge) {
        f.reactionTimer = (f.isKeeper || f.id === 'slip') ? 0.07 : 0.15;
      } else if (f.ring === 'infield' && hitEvent.exitSpeed > 30) {
        f.reactionTimer = F.reactionInfieldFast;
      } else {
        f.reactionTimer = F.reactionBase;
      }
    }
  }

  onBounce(bounceEvent, ball) {
    if (!this.hit) return;
    // Ignore split-second pitch graze right at contact on a lifted drive
    if (bounceEvent.time - this.hitTime > 0.045 || ball.vel.y < 2.2) {
      this.groundedAfterHit = true;
    }
  }

  _predictLanding(ball) {
    const b = CONFIG.ball;
    const g = CONFIG.physics.gravity;
    const r = b.radius;
    const stepDt = 1 / 60;

    this.flightSamples.length = 0;

    let px = ball.pos.x, py = ball.pos.y, pz = ball.pos.z;
    let vx = ball.vel.x, vy = ball.vel.y, vz = ball.vel.z;
    let sx = ball.spin.x, sy = ball.spin.y, sz = ball.spin.z;
    let maxH = py;
    let tFlight = 0;
    const spinDecay = Math.exp(-b.spinDecay * stepDt);

    if (py <= r && vy <= 0) {
      return { x: px, z: pz, tFlight: 0, maxH, vx, vz };
    }

    for (let i = 0; i < 360; i++) {
      const sp = Math.hypot(vx, vy, vz);
      let ax = -ball.dragK * sp * vx;
      let ay = -g - ball.dragK * sp * vy;
      let az = -ball.dragK * sp * vz;

      // Magnus cross(spin, vel) * magnusCoefficient
      let mx = (sy * vz - sz * vy) * b.magnusCoefficient;
      let my = (sz * vx - sx * vz) * b.magnusCoefficient;
      let mz = (sx * vy - sy * vx) * b.magnusCoefficient;
      const ml = Math.hypot(mx, my, mz);
      if (ml > b.maxMagnusAccel) {
        const s = b.maxMagnusAccel / ml;
        mx *= s; my *= s; mz *= s;
      }
      ax += mx; ay += my; az += mz;

      vx += ax * stepDt;
      vy += ay * stepDt;
      vz += az * stepDt;
      px += vx * stepDt;
      py += vy * stepDt;
      pz += vz * stepDt;
      sx *= spinDecay;
      sy *= spinDecay;
      sz *= spinDecay;
      tFlight += stepDt;
      if (py > maxH) maxH = py;

      if (i % 3 === 2 && py > r) {
        this.flightSamples.push({ x: px, y: py, z: pz, t: tFlight });
      }

      if (py <= r) {
        return { x: px, z: pz, tFlight, maxH, vx, vz };
      }
    }
    return { x: px, z: pz, tFlight, maxH, vx, vz };
  }

  step(dt, ball, worldTime, outEvents) {
    const F = CONFIG.fielding;
    if (ball) {
      this.ballPos.copy(ball.pos);
      this.ballVel.copy(ball.vel);
      this.ballActive = Boolean(ball.active);
      for (const f of this.fielders) {
        f._ballDist = Math.hypot(ball.pos.x - f.pos.x, ball.pos.z - f.pos.z);
        f._ballY = ball.pos.y;
      }
    }

    if (this.resolved) {
      const h = this.holder;
      if (h) {
        h.actionTimer += dt;
        const decay = h.state === 'diving' ? 5.0 : 8.5;
        h.vel.multiplyScalar(Math.exp(-decay * dt));
        h.pos.addScaledVector(h.vel, dt);
        clampInsideField(h.pos, 0.7);

        if (h.state === 'catching' && h._jumpPeak > 0) {
          if (h.actionTimer < 0.32) {
            const u = h.actionTimer / 0.32;
            h.jumpY = h._jumpPeak * Math.cos(u * Math.PI * 0.5);
          } else {
            h.jumpY = 0;
          }
        }

        if (this.heldBallPos) {
          this._updateHeldBallPosition(h);
        }
      }

      // Smoothly decelerate all other fielders instead of freezing mid-stride
      const lookTarget = h ? h.pos : this.ballPos;
      for (const f of this.fielders) {
        if (f === h) continue;
        f.vel.multiplyScalar(Math.exp(-6.5 * dt));
        f.pos.addScaledVector(f.vel, dt);
        clampInsideField(f.pos, 0.75);
        const sp = f.vel.length();
        if (sp > 0.20) {
          f.stridePhase += sp * dt * 2.8;
        } else {
          f.state = f.isKeeper ? 'keeper_guard' : 'idle';
          f.facing = lerpAngle(
            f.facing,
            Math.atan2(lookTarget.x - f.pos.x, lookTarget.z - f.pos.z),
            clamp(10 * dt, 0, 1)
          );
        }
      }
      return;
    }

    if (!ball.active) return;

    // --- Pre-hit: infielders walk in gently until z = -6.5, then plant for split-step
    if (!this.hit) {
      for (const f of this.fielders) {
        if (f.ring === 'infield') {
          if (ball.pos.z < -6.5) {
            const dx = CREASE_X - f.home.x;
            const dz = CREASE_Z - f.home.z;
            const len = Math.hypot(dx, dz) || 1;
            f.target.set(f.home.x + (dx / len) * 0.55, 0, f.home.z + (dz / len) * 0.55);
            this._steerFielder(f, dt, F.jogSpeed * 0.45, false);
          } else {
            f.vel.multiplyScalar(Math.exp(-12 * dt));
          }
          f.state = f.vel.lengthSq() > 0.04 ? 'walk_in' : 'idle';
          if (f.state === 'idle') f.facing = f.baseFacing;
        }
      }

      if (ball.pos.z > -2.5) {
        const k = this.keeper;
        const predX = clamp(ball.pos.x + ball.vel.x * 0.12, -2.2, 2.2);
        k.target.set(predX, 0, k.home.z);
        this._steerFielder(k, dt, F.keeperSpeed, true);

        const hd = Math.hypot(ball.pos.x - k.pos.x, ball.pos.z - k.pos.z);
        if (ball.pos.z >= k.pos.z - 0.35 && hd < 1.35 && ball.pos.y < 1.95) {
          this._completeStop(k, ball, outEvents, false, 'keeper_take');
        }
      }
      return;
    }

    // --- Post-hit fielding
    const elapsed = worldTime - this.hitTime;
    if (ball.rolling && elapsed > 0.08) {
      this.groundedAfterHit = true;
    }

    const fieldCfg = CONFIG.field;
    const distCenter = Math.hypot(ball.pos.x, ball.pos.z - fieldCfg.centerZ);
    const insideRope = distCenter < fieldCfg.boundaryRadius - 0.15;

    if (!insideRope) {
      for (const f of this.fielders) {
        f.vel.multiplyScalar(Math.exp(-8 * dt));
        if (f.vel.lengthSq() < 0.04) f.state = 'idle';
      }
      return;
    }

    if (this.groundedAfterHit || ball.rolling || !this.landingSpot) {
      this._updateGroundPath(ball);
    }

    // Coordinate catcher / primary ground chaser / backup / relay / keeper / watch shifts
    this._assignChasers(ball, elapsed);

    for (const f of this.fielders) {
      if (f._role === 'idle' || elapsed < f.reactionTimer) {
        f.vel.multiplyScalar(Math.exp(-8 * dt));
        if (f.vel.lengthSq() < 0.04) {
          f.state = f.isKeeper ? 'keeper_guard' : 'idle';
          f.facing = lerpAngle(f.facing, Math.atan2(ball.pos.x - f.pos.x, ball.pos.z - f.pos.z), clamp(14 * dt, 0, 1));
        }
        continue;
      }

      this._computeFielderTarget(f, ball, elapsed);

      if (f._role === 'keeper_guard') {
        const dBallToHome = Math.hypot(ball.pos.x - f.home.x, ball.pos.z - f.home.z);
        const jogSp = (ball.pos.z < -2.0 || dBallToHome > 10.0) ? F.jogSpeed * 1.1 : F.jogSpeed * 0.85;
        this._steerFielder(f, dt, jogSp, false);
        const sp = f.vel.length();
        if (sp > 0.25) {
          f.state = 'backup';
        } else {
          f.state = 'keeper_guard';
          f.facing = lerpAngle(f.facing, Math.atan2(ball.pos.x - f.pos.x, ball.pos.z - f.pos.z), clamp(16 * dt, 0, 1));
        }
        continue;
      }

      let maxSp = F.jogSpeed;
      if (f._role === 'catcher' || f._role === 'chase') {
        maxSp = f.isKeeper ? F.keeperSpeed : F.maxSpeed;
      } else if (f._role === 'relay') {
        maxSp = F.jogSpeed * 0.85;
      } else if (f._role === 'watch_shift') {
        maxSp = F.jogSpeed * 0.55;
      }

      this._steerFielder(f, dt, maxSp, false);
      const speed = f.vel.length();

      if (f._role === 'catcher') {
        const distToTarget = Math.hypot(f.target.x - f.pos.x, f.target.z - f.pos.z);
        if (distToTarget < 0.85 && speed < 1.4) {
          f.state = 'set_catch';
          f.facing = lerpAngle(f.facing, Math.atan2(ball.pos.x - f.pos.x, ball.pos.z - f.pos.z), clamp(18 * dt, 0, 1));
        } else {
          f.state = 'chasing';
        }
      } else if (f._role === 'chase') {
        f.state = speed > 0.2 ? 'chasing' : 'idle';
        if (f.state === 'idle') {
          f.facing = lerpAngle(f.facing, Math.atan2(ball.pos.x - f.pos.x, ball.pos.z - f.pos.z), clamp(14 * dt, 0, 1));
        }
      } else {
        f.state = speed > 0.2 ? 'backup' : 'idle';
        if (f.state === 'idle') {
          f.facing = lerpAngle(f.facing, Math.atan2(ball.pos.x - f.pos.x, ball.pos.z - f.pos.z), clamp(14 * dt, 0, 1));
        }
      }
    }

    // Hard inter-fielder separation pass so fielders never crowd on top of each other
    this._enforceSeparation();

    // 1. Check Aerial Catch (before first bounce, waiting for closest approach on straight balls)
    if (
      !this.groundedAfterHit &&
      !ball.rolling &&
      elapsed >= F.minCatchAirTime &&
      distCenter < fieldCfg.boundaryRadius - 0.4 &&
      ball.pos.y >= F.minCatchHeight &&
      ball.pos.y <= F.maxCatchHeight
    ) {
      const fastShot = this.firstContact &&
        !this.firstContact.edge &&
        this.firstContact.quality > 0.78 &&
        this.firstContact.exitSpeed > 31 &&
        elapsed < 0.48;

      if (!(fastShot && ball.pos.y >= 1.85)) {
        const candidates = this._orderedCatchCandidates(ball, elapsed);
        for (const f of candidates) {
          const relX = ball.pos.x - f.pos.x;
          const relZ = ball.pos.z - f.pos.z;
          const hd = Math.hypot(relX, relZ);

          let rCatch;
          if ((f.isKeeper || f.id === 'slip') && this.firstContact?.edge) {
            rCatch = F.keeperCatchRadius;
          } else if (fastShot) {
            rCatch = F.fastShotCatchRadius;
          } else if (elapsed > 0.50) {
            rCatch = F.diveCatchRadius;
          } else {
            rCatch = F.catchRadius;
          }

          if (hd <= rCatch) {
            const relDot = relX * (ball.vel.x - f.vel.x) + relZ * (ball.vel.z - f.vel.z);
            const nextY = ball.pos.y + ball.vel.y * 0.035;
            const nextR = Math.hypot(ball.pos.x + ball.vel.x * 0.035, ball.pos.z + ball.vel.z * 0.035 - fieldCfg.centerZ);
            const stillSafeInFlight = nextY >= F.minCatchHeight + 0.06 &&
              nextY <= F.maxCatchHeight - 0.05 &&
              nextR < fieldCfg.boundaryRadius - 0.45;

            // Wait while the ball is still approaching the fielder horizontally
            if (relDot < -0.15 && hd > 0.28 && stillSafeInFlight) {
              continue;
            }

            this._completeCatch(f, ball, hd, outEvents);
            return;
          }
        }
      }
    }

    // 2. Check Ground / Bounced Ball Stop
    const groundEligible = this.groundedAfterHit || ball.rolling || ball.pos.y < F.minCatchHeight;
    if (
      groundEligible &&
      elapsed >= 0.14 &&
      distCenter < fieldCfg.boundaryRadius - 0.25 &&
      ball.pos.y <= 1.25
    ) {
      const ballSpeed = ball.vel.length();
      const nearRope = distCenter > fieldCfg.boundaryRadius - 9.5 && ballSpeed > 3.2;
      const stopCandidates = this._orderedStopCandidates(ball, elapsed);
      for (const f of stopCandidates) {
        const relX = ball.pos.x - f.pos.x;
        const relZ = ball.pos.z - f.pos.z;
        const hd = Math.hypot(relX, relZ);
        let rStop = F.stopRadius;
        if (nearRope) {
          rStop = F.slideStopRadius;
        } else if (ballSpeed > 30 && elapsed < 0.42) {
          rStop = 0.75;
        } else if (ballSpeed < 20 && elapsed > 0.45) {
          rStop = F.slideStopRadius;
        }

        if (hd <= rStop) {
          const relDot = relX * (ball.vel.x - f.vel.x) + relZ * (ball.vel.z - f.vel.z);
          if (relDot < -0.15 && hd > 0.35 && ballSpeed > 1.5) {
            const nextR = Math.hypot(ball.pos.x + ball.vel.x * 0.035, ball.pos.z + ball.vel.z * 0.035 - fieldCfg.centerZ);
            if (nextR < fieldCfg.boundaryRadius - 0.35) continue;
          }
          this._completeStop(f, ball, outEvents, hd > 0.95, null, hd);
          return;
        }
      }
    }
  }

  _updateHeldBallPosition(h) {
    const t = h.actionTimer;
    let handY = 1.15;
    let fwd = 0.24;
    let side = 0;

    if (h.state === 'diving') {
      if (t < 0.60) {
        handY = 0.36;
        fwd = 0.35;
        side = h.diveDir * 0.18;
      } else {
        const u = clamp((t - 0.60) / 0.25, 0, 1);
        handY = 0.64 + 1.05 * u;
        fwd = 0.24 * (1 - u) + 0.06;
        side = -0.20 * u;
      }
    } else if (h.state === 'catching') {
      if (t < 0.34) {
        handY = h.catchStyle === 'overhead'
          ? 1.90 + h.jumpY
          : h.catchStyle === 'low'
            ? 0.56
            : 1.24;
        fwd = h.catchStyle === 'low' ? 0.34 : 0.28;
      } else {
        const u = clamp((t - 0.34) / 0.20, 0, 1);
        handY = 1.24 + (2.06 - 1.24) * u;
        fwd = 0.26 * (1 - u) + 0.08 * u;
        side = -0.20 * u;
      }
    } else if (h.state === 'fielded') {
      if (h.stopStyle === 'keeper_take') {
        handY = clamp(h.catchHeight, 0.45, 1.35);
        fwd = 0.32;
      } else {
        const tGather = h.stopStyle === 'slide' ? 0.36 : 0.26;
        if (t < tGather) {
          handY = h.stopStyle === 'slide' ? 0.28 : 0.26;
          fwd = 0.34;
          side = h.stopStyle === 'slide' ? -0.16 : 0;
        } else if (t < tGather + 0.24) {
          // Stage 2: Rise & cock throwing hand back for crow-hop return
          const u = clamp((t - tGather) / 0.24, 0, 1);
          handY = lerp(0.28, 1.42, u);
          fwd = lerp(0.32, -0.14, u);
          side = lerp(0, -0.22, u);
        } else {
          // Stage 3: Throwing follow-through & settle
          const u = clamp((t - (tGather + 0.24)) / 0.22, 0, 1);
          handY = lerp(1.42, 1.18, u);
          fwd = lerp(-0.14, 0.28, u);
          side = lerp(-0.22, -0.14, u);
        }
      }
    }

    const sinF = Math.sin(h.facing);
    const cosF = Math.cos(h.facing);
    this.heldBallPos.set(
      h.pos.x + sinF * fwd + cosF * side,
      handY,
      h.pos.z + cosF * fwd - sinF * side
    );
  }

  _orderedCatchCandidates(ball, elapsed) {
    const out = [];
    if (
      this.designatedCatcher &&
      elapsed >= this.designatedCatcher.reactionTimer * 0.75 &&
      !this._keeperIneligibleAtBall(this.designatedCatcher, ball)
    ) {
      out.push(this.designatedCatcher);
    }
    const others = [];
    for (const f of this.fielders) {
      if (f === this.designatedCatcher) continue;
      if (elapsed < f.reactionTimer * 0.75) continue;
      if (this._keeperIneligibleAtBall(f, ball)) continue;
      const hd = Math.hypot(ball.pos.x - f.pos.x, ball.pos.z - f.pos.z);
      others.push({ f, hd });
    }
    others.sort((a, b) => a.hd - b.hd);
    for (const item of others) out.push(item.f);
    return out;
  }

  _orderedStopCandidates(ball, elapsed) {
    const out = [];
    for (const f of this.fielders) {
      if (elapsed < f.reactionTimer * 0.85) continue;
      const hd = Math.hypot(ball.pos.x - f.pos.x, ball.pos.z - f.pos.z);
      out.push({ f, hd });
    }
    out.sort((a, b) => a.hd - b.hd);
    return out.map((x) => x.f);
  }

  _keeperIneligibleAtBall(f, ball) {
    if (!f.isKeeper) return false;
    const distFromHome = Math.hypot(ball.pos.x - f.home.x, ball.pos.z - f.home.z);
    return distFromHome > this.activeKeeperCatchZone || ball.pos.z < -1.8;
  }

  _evaluateAerialIntercept(f, elapsed) {
    const F = CONFIG.fielding;
    const reactRem = Math.max(0, f.reactionTimer - elapsed);
    const speed = f.isKeeper ? F.keeperSpeed : F.maxSpeed;
    const land = this.landingSpot;

    let earliestAny = null;
    let earliestChest = null;
    let minDeficitItem = null;

    const evalPt = (x, y, z, t, isLanding) => {
      const dist = Math.hypot(x - f.pos.x, z - f.pos.z);
      const timeToReach = elapsed + reactRem + dist / speed;
      const deficit = timeToReach - t;
      const availMoveTime = Math.max(0, t - elapsed - reactRem);
      const maxReachAtT = availMoveTime * speed + (isLanding ? F.diveCatchRadius : F.catchRadius);
      const item = { ix: x, iy: y, iz: z, it: t, dist, timeToReach, deficit, reachable: dist <= maxReachAtT };

      // Mid-air points only compete if actually reachable around instant t
      if (isLanding || item.reachable || deficit <= 0.16) {
        if (!minDeficitItem || deficit < minDeficitItem.deficit) {
          minDeficitItem = item;
        }
      }
      if (deficit <= 0) {
        if (!earliestAny) earliestAny = item;
        if (!earliestChest && y <= 1.85) earliestChest = item;
      }
    };

    for (let i = 0; i < this.flightSamples.length; i++) {
      const s = this.flightSamples[i];
      if (s.t >= elapsed + 0.08 && s.y >= 0.20 && s.y <= 2.18) {
        evalPt(s.x, s.y, s.z, s.t, false);
      }
    }
    evalPt(land.x, 0.20, land.z, land.tFlight, true);

    return earliestChest || earliestAny || minDeficitItem;
  }

  _updateGroundPath(ball) {
    this.groundSamples.length = 0;
    const b = CONFIG.ball;
    const g = CONFIG.physics.gravity;
    const gcfg = CONFIG.ground;
    const r = b.radius;
    const stepDt = 1 / 30;
    const maxR = CONFIG.field.boundaryRadius - 0.75;
    const centerZ = CONFIG.field.centerZ;
    const spinDecay = Math.exp(-b.spinDecay * stepDt);

    let px = ball.pos.x, py = ball.pos.y, pz = ball.pos.z;
    let vx = ball.vel.x, vy = ball.vel.y, vz = ball.vel.z;
    let sx = ball.spin.x, sy = ball.spin.y, sz = ball.spin.z;
    let rolling = Boolean(ball.rolling);
    let t = 0;

    this.groundEndSpot.set(px, 0, pz);

    for (let i = 0; i < 168; i++) {
      if (rolling) {
        const h = Math.hypot(vx, vz);
        if (h < 0.15) break;
        const decel = gcfg.rollingResistance * g * (isOnPitch(px, pz) ? 0.6 : 1) + ball.dragK * h * h;
        const nh = Math.max(0, h - decel * stepDt);
        const s = nh / h;
        vx *= s;
        vz *= s;
        vy = 0;
        px += vx * stepDt;
        pz += vz * stepDt;
        py = r;
      } else {
        const sp = Math.hypot(vx, vy, vz);
        let ax = -ball.dragK * sp * vx;
        let ay = -g - ball.dragK * sp * vy;
        let az = -ball.dragK * sp * vz;

        let mx = (sy * vz - sz * vy) * b.magnusCoefficient;
        let my = (sz * vx - sx * vz) * b.magnusCoefficient;
        let mz = (sx * vy - sy * vx) * b.magnusCoefficient;
        const ml = Math.hypot(mx, my, mz);
        if (ml > b.maxMagnusAccel) {
          const s = b.maxMagnusAccel / ml;
          mx *= s; my *= s; mz *= s;
        }
        vx += (ax + mx) * stepDt;
        vy += (ay + my) * stepDt;
        vz += (az + mz) * stepDt;
        px += vx * stepDt;
        py += vy * stepDt;
        pz += vz * stepDt;
        sx *= spinDecay;
        sy *= spinDecay;
        sz *= spinDecay;

        if (py <= r && vy < 0) {
          const onPitch = isOnPitch(px, pz);
          const e = onPitch ? gcfg.pitchRestitution : gcfg.outfieldRestitution;
          const mu = onPitch ? gcfg.pitchFriction : gcfg.outfieldFriction;
          const vyIn = -vy;
          py = r + (r - py) * e;
          vy = vyIn * e;

          const slipX = vx + sz * r;
          const slipZ = vz - sx * r;
          const slip = Math.hypot(slipX, slipZ);
          if (slip > 1e-6) {
            const dv = Math.min(mu * (1 + e) * vyIn, slip * (2 / 7));
            const dx = (-slipX / slip) * dv;
            const dz = (-slipZ / slip) * dv;
            vx += dx;
            vz += dz;
            const k = 5 / (2 * r);
            sx += -dz * k;
            sz += dx * k;
          }
          if (vy < gcfg.rollThreshold) {
            vy = 0;
            py = r;
            rolling = true;
          }
        }
      }

      t += stepDt;
      this.groundEndSpot.set(px, 0, pz);
      if (Math.hypot(px, pz - centerZ) >= maxR) {
        clampInsideField(this.groundEndSpot, 0.85);
        this.groundSamples.push({ x: this.groundEndSpot.x, z: this.groundEndSpot.z, t });
        break;
      }
      if (i % 2 === 1) {
        this.groundSamples.push({ x: px, z: pz, t });
      }
    }
    clampInsideField(this.groundEndSpot, 0.85);
  }

  _predictGroundIntercept(f, ball, elapsed, outPt) {
    const F = CONFIG.fielding;
    const hSpeed = Math.hypot(ball.vel.x, ball.vel.z);
    const reactRem = Math.max(0, f.reactionTimer - elapsed);
    const speed = f.isKeeper ? F.keeperSpeed : F.maxSpeed;

    if (hSpeed < 1.0 || this.groundSamples.length === 0) {
      outPt.set(ball.pos.x, 0, ball.pos.z);
      clampInsideField(outPt, 0.8);
      return reactRem + Math.hypot(outPt.x - f.pos.x, outPt.z - f.pos.z) / speed;
    }

    const reachBonus = F.stopRadius * 0.65;
    for (let i = 0; i < this.groundSamples.length; i++) {
      const s = this.groundSamples[i];
      const availDist = Math.max(0, s.t - reactRem) * speed + reachBonus;
      if (Math.hypot(s.x - f.pos.x, s.z - f.pos.z) <= availDist) {
        outPt.set(s.x, 0, s.z);
        clampInsideField(outPt, 0.8);
        return s.t;
      }
    }

    outPt.copy(this.groundEndSpot);
    clampInsideField(outPt, 0.85);
    return reactRem + Math.hypot(outPt.x - f.pos.x, outPt.z - f.pos.z) / speed;
  }

  _assignChasers(ball, elapsed) {
    const F = CONFIG.fielding;
    this.primaryChasers.length = 0;

    for (const f of this.fielders) {
      f._role = 'idle';
    }

    const useAerial = !this.groundedAfterHit && !ball.rolling && this.landingSpot;
    let primaryActor = null;
    let primaryAnchor = null;

    if (useAerial) {
      let minNonKeeperTime = Infinity;
      const nonKeepers = [];
      let keeperEval = null;

      for (const f of this.fielders) {
        const ev = this._evaluateAerialIntercept(f, elapsed);
        if (!ev) continue;
        const entry = { f, ...ev };
        if (f.isKeeper) {
          keeperEval = entry;
        } else {
          nonKeepers.push(entry);
          if (ev.timeToReach < minNonKeeperTime) {
            minNonKeeperTime = ev.timeToReach;
          }
        }
      }

      const eligible = [];
      for (const item of nonKeepers) {
        const hyst = item.f === this.designatedCatcher ? -0.18 : 0;
        item.score = item.deficit + hyst;
        eligible.push(item);
      }

      if (keeperEval) {
        const distFromHome = Math.hypot(keeperEval.ix - this.keeper.home.x, keeperEval.iz - this.keeper.home.z);
        const keeperAllowed =
          distFromHome <= this.activeKeeperCatchZone &&
          keeperEval.iz >= -1.8 &&
          keeperEval.deficit <= 0.18 &&
          keeperEval.timeToReach <= minNonKeeperTime + 0.02;
        if (keeperAllowed) {
          const hyst = keeperEval.f === this.designatedCatcher ? -0.18 : 0;
          keeperEval.score = keeperEval.deficit + hyst;
          eligible.push(keeperEval);
        }
      }

      eligible.sort((a, b) => a.score - b.score);
      const best = eligible[0];
      const catchThreshold = best && best.f === this.designatedCatcher ? 0.36 : 0.28;

      if (best && best.deficit <= catchThreshold) {
        this.designatedCatcher = best.f;
        best.f._role = 'catcher';
        best.f._interceptPt.set(best.ix, 0, best.iz);
        clampInsideField(best.f._interceptPt, 0.9);
        this.primaryChasers.push(best.f);
        primaryActor = best.f;
        primaryAnchor = best.f._interceptPt;

        // At most ONE support fielder backs up 8m deeper behind the catch spot
        const hLen = Math.hypot(this.landingSpot.vx, this.landingSpot.vz);
        let fx = hLen > 0.5 ? this.landingSpot.vx / hLen : (best.ix - CREASE_X);
        let fz = hLen > 0.5 ? this.landingSpot.vz / hLen : (best.iz - CREASE_Z);
        const fNorm = Math.hypot(fx, fz) || 1;
        fx /= fNorm;
        fz /= fNorm;

        let bestBackup = null;
        let bestBackupDist = Infinity;
        for (const item of nonKeepers) {
          if (item.f === best.f) continue;
          const dToSpot = Math.hypot(item.f.pos.x - best.ix, item.f.pos.z - best.iz);
          if (dToSpot < 24 && dToSpot < bestBackupDist) {
            bestBackupDist = dToSpot;
            bestBackup = item.f;
          }
        }
        if (bestBackup) {
          this._placeBackupPoint(best.f._interceptPt, fx, fz, 8.0, 6.8, bestBackup._interceptPt);
          bestBackup._role = 'backup';
        }
      } else {
        // Ball will bounce in open space: 1 primary chaser + 1 deeper backup sweeper
        this.designatedCatcher = null;
        const pbX = this.landingSpot.x + (this.landingSpot.vx || ball.vel.x) * 0.55;
        const pbZ = this.landingSpot.z + (this.landingSpot.vz || ball.vel.z) * 0.55;

        nonKeepers.sort((a, b) => {
          const da = Math.hypot(a.f.pos.x - pbX, a.f.pos.z - pbZ);
          const db = Math.hypot(b.f.pos.x - pbX, b.f.pos.z - pbZ);
          return da - db;
        });

        const primary = nonKeepers[0]?.f;
        if (primary) {
          this.primaryGroundChaser = primary;
          primary._role = 'chase';
          primary._interceptPt.set(pbX, 0, pbZ);
          clampInsideField(primary._interceptPt, 0.9);
          this.primaryChasers.push(primary);
          primaryActor = primary;
          primaryAnchor = primary._interceptPt;

          const hLen = Math.hypot(this.landingSpot.vx, this.landingSpot.vz);
          const fx = hLen > 0.5 ? this.landingSpot.vx / hLen : 0;
          const fz = hLen > 0.5 ? this.landingSpot.vz / hLen : -1;

          for (let i = 1; i < nonKeepers.length; i++) {
            const cand = nonKeepers[i].f;
            const dSpot = Math.hypot(cand.pos.x - this.landingSpot.x, cand.pos.z - this.landingSpot.z);
            if (dSpot < 26) {
              this._placeBackupPoint(primary._interceptPt, fx, fz, 8.0, 6.8, cand._interceptPt);
              cand._role = 'backup';
              break;
            }
          }
        }
      }
    } else {
      // Ground / bounced ball using multi-hop + rolling path interception
      this.designatedCatcher = null;
      const hSpeed = Math.hypot(ball.vel.x, ball.vel.z);
      const ux = hSpeed > 0.5 ? ball.vel.x / hSpeed : 0;
      const uz = hSpeed > 0.5 ? ball.vel.z / hSpeed : -1;
      const ballDistCrease = Math.hypot(ball.pos.x - CREASE_X, ball.pos.z - CREASE_Z);

      let minNonKeeperTime = Infinity;
      const nonKeepers = [];
      let keeperEntry = null;

      for (const f of this.fielders) {
        const interceptTime = this._predictGroundIntercept(f, ball, elapsed, this._groundPt);
        const ptX = this._groundPt.x;
        const ptZ = this._groundPt.z;
        const distToPt = Math.hypot(ptX - f.pos.x, ptZ - f.pos.z);

        const fielderDistCrease = Math.hypot(f.pos.x - CREASE_X, f.pos.z - CREASE_Z);
        const toBallX = ball.pos.x - f.pos.x;
        const toBallZ = ball.pos.z - f.pos.z;
        const toBallDist = Math.hypot(toBallX, toBallZ) || 1;
        const recedeSpeed = (toBallX * ball.vel.x + toBallZ * ball.vel.z) / toBallDist;
        const isBeaten = f.ring === 'infield' &&
          ballDistCrease > fielderDistCrease + 2.2 &&
          recedeSpeed > F.maxSpeed * 0.92 &&
          toBallDist > 2.4;

        let timeScore = interceptTime + distToPt * 0.002;
        if (isBeaten) {
          timeScore += 2.2;
        } else if (f === this.primaryGroundChaser) {
          timeScore -= 0.16;
        }

        const entry = { f, interceptTime, timeScore, ptX, ptZ };

        if (f.isKeeper) {
          keeperEntry = entry;
        } else {
          nonKeepers.push(entry);
          if (interceptTime < minNonKeeperTime) minNonKeeperTime = interceptTime;
        }
      }

      const eligible = nonKeepers.slice();
      if (keeperEntry) {
        const distFromHome = Math.hypot(ball.pos.x - this.keeper.home.x, ball.pos.z - this.keeper.home.z);
        const keeperEligible =
          hSpeed < 4.2 &&
          distFromHome <= F.keeperGroundRadius &&
          ball.pos.z >= -0.8 &&
          keeperEntry.interceptTime <= minNonKeeperTime - 0.02;
        if (keeperEligible) eligible.push(keeperEntry);
      }

      eligible.sort((a, b) => a.timeScore - b.timeScore);
      const primaryChoice = eligible[0];
      if (primaryChoice) {
        const primary = primaryChoice.f;
        this.primaryGroundChaser = primary;
        primary._role = 'chase';
        primary._interceptPt.set(primaryChoice.ptX, 0, primaryChoice.ptZ);
        this.primaryChasers.push(primary);
        primaryActor = primary;
        primaryAnchor = primary._interceptPt;

        const primaryDistToBall = Math.hypot(primary.pos.x - ball.pos.x, primary.pos.z - ball.pos.z);
        if (hSpeed > 4.5 && primaryDistToBall > 3.5) {
          this._backupPt.copy(primary._interceptPt);
          let bestBackup = null;
          let bestBackupDist = Infinity;
          for (const item of nonKeepers) {
            if (item.f === primary) continue;
            const dToLine = Math.hypot(item.f.pos.x - this._backupPt.x, item.f.pos.z - this._backupPt.z);
            if (dToLine < 28 && dToLine < bestBackupDist) {
              bestBackupDist = dToLine;
              bestBackup = item.f;
            }
          }
          if (bestBackup) {
            this._placeBackupPoint(this._backupPt, ux, uz, 7.5, 6.5, bestBackup._interceptPt);
            bestBackup._role = 'backup';
          }
        }
      }
    }

    // Keeper stump coverage role when not catching/picking up
    if (this.keeper && this.keeper._role !== 'catcher' && this.keeper._role !== 'chase') {
      this.keeper._role = 'keeper_guard';
    }

    // Assign 1 infield relay fielder when play goes deep (> 15m from crease)
    if (primaryActor && primaryAnchor) {
      const distFromCrease = Math.hypot(primaryAnchor.x - CREASE_X, primaryAnchor.z - CREASE_Z);
      if (distFromCrease >= 15.0) {
        const rx = lerp(CREASE_X, primaryAnchor.x, 0.55);
        const rz = lerp(CREASE_Z, primaryAnchor.z, 0.55);
        let bestRelay = null;
        let bestRelayDist = Infinity;
        for (const f of this.fielders) {
          if (f._role !== 'idle' || f.isKeeper || f.ring !== 'infield') continue;
          const dAnchor = Math.hypot(f.pos.x - primaryAnchor.x, f.pos.z - primaryAnchor.z);
          if (dAnchor > 34 || dAnchor < 8.0) continue;
          const dRelay = Math.hypot(f.pos.x - rx, f.pos.z - rz);
          if (dRelay < bestRelayDist) {
            bestRelayDist = dRelay;
            bestRelay = f;
          }
        }
        if (bestRelay) {
          bestRelay._interceptPt.set(rx, 0, rz);
          clampInsideField(bestRelay._interceptPt, 1.0);
          if (Math.hypot(bestRelay._interceptPt.x - primaryAnchor.x, bestRelay._interceptPt.z - primaryAnchor.z) >= 8.0) {
            bestRelay._role = 'relay';
          }
        }
      }
    }

    // Remaining non-keeper fielders take 1-2 alert steps toward the ball's line
    for (const f of this.fielders) {
      if (f._role !== 'idle' || f.isKeeper) continue;
      const dx = ball.pos.x - f.home.x;
      const dz = ball.pos.z - f.home.z;
      const len = Math.hypot(dx, dz) || 1;
      const stepDist = Math.min(1.4, len * 0.15);
      f._interceptPt.set(f.home.x + (dx / len) * stepDist, 0, f.home.z + (dz / len) * stepDist);
      clampInsideField(f._interceptPt, 1.0);
      f._role = 'watch_shift';
    }
  }

  _placeBackupPoint(anchorPt, ux, uz, aheadDist, minDist, outPt) {
    outPt.set(anchorPt.x + ux * aheadDist, 0, anchorPt.z + uz * aheadDist);
    clampInsideField(outPt, 1.0);
    const dx = outPt.x - anchorPt.x;
    const dz = outPt.z - anchorPt.z;
    const d = Math.hypot(dx, dz);
    if (d < minDist) {
      const altX = -uz;
      const altZ = ux;
      outPt.set(anchorPt.x + altX * minDist, 0, anchorPt.z + altZ * minDist);
      clampInsideField(outPt, 1.0);
      if (Math.hypot(outPt.x - anchorPt.x, outPt.z - anchorPt.z) < minDist) {
        outPt.set(anchorPt.x - ux * minDist, 0, anchorPt.z - uz * minDist);
        clampInsideField(outPt, 1.0);
      }
    }
  }

  _computeFielderTarget(f, ball, elapsed) {
    if (f._role === 'keeper_guard') {
      const dBallToHome = Math.hypot(ball.pos.x - f.home.x, ball.pos.z - f.home.z);
      if (ball.pos.z < -2.0 || dBallToHome > 10.0) {
        // Ball hit into outfield/front: cover batting stumps cleanly
        f.target.set(clamp(ball.pos.x * 0.08, -0.8, 0.8), 0, 0.65);
      } else {
        f.target.set(
          f.home.x + clamp((ball.pos.x - f.home.x) * 0.18, -1.0, 1.0),
          0,
          f.home.z + clamp((ball.pos.z - f.home.z) * 0.12, -0.6, 0.6)
        );
      }
      return;
    }

    if (
      f._role === 'catcher' ||
      f._role === 'backup' ||
      f._role === 'relay' ||
      f._role === 'watch_shift'
    ) {
      f.target.copy(f._interceptPt);
      clampInsideField(f.target, 0.9);
      return;
    }

    if (!this.groundedAfterHit && this.landingSpot) {
      f.target.copy(f._interceptPt);
      clampInsideField(f.target, 0.9);
      return;
    }

    // Ground primary chase: use time-optimal intercept point
    this._predictGroundIntercept(f, ball, elapsed, f.target);
    clampInsideField(f.target, 0.8);
  }

  _steerFielder(f, dt, maxSpeed, keepFacingCrease = false) {
    const F = CONFIG.fielding;
    const dx = f.target.x - f.pos.x;
    const dz = f.target.z - f.pos.z;
    const dist = Math.hypot(dx, dz);

    let desiredVx = 0;
    let desiredVz = 0;
    if (dist > 0.10) {
      const desiredSpeed = Math.min(maxSpeed, dist * 8.0);
      desiredVx = (dx / dist) * desiredSpeed;
      desiredVz = (dz / dist) * desiredSpeed;
    }

    const dvx = desiredVx - f.vel.x;
    const dvz = desiredVz - f.vel.z;
    const dvLen = Math.hypot(dvx, dvz);
    const maxDv = F.accel * dt;
    if (dvLen > maxDv && dvLen > 1e-6) {
      f.vel.x += (dvx / dvLen) * maxDv;
      f.vel.z += (dvz / dvLen) * maxDv;
    } else {
      f.vel.x = desiredVx;
      f.vel.z = desiredVz;
    }

    const speed = Math.hypot(f.vel.x, f.vel.z);
    if (speed > maxSpeed) {
      f.vel.x *= maxSpeed / speed;
      f.vel.z *= maxSpeed / speed;
    }

    f.pos.x += f.vel.x * dt;
    f.pos.z += f.vel.z * dt;
    f.pos.y = 0;

    if (speed > 0.2) {
      f.stridePhase += speed * dt * 2.8;
      if (keepFacingCrease) {
        f.facing = f.baseFacing;
      } else {
        const moveAngle = Math.atan2(f.vel.x, f.vel.z);
        f.facing = lerpAngle(f.facing, moveAngle, clamp(16 * dt, 0, 1));
      }
    } else if (keepFacingCrease) {
      f.facing = f.baseFacing;
    }
  }

  _enforceSeparation() {
    const minSep = CONFIG.fielding.minSeparation || 2.6;
    const list = this.fielders;
    const prio = (f) => {
      if (f._role === 'catcher') return 4;
      if (f._role === 'chase' || f.isKeeper) return 3;
      if (f._role === 'backup') return 2;
      if (f._role === 'relay') return 1;
      return 0;
    };

    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      for (let j = i + 1; j < list.length; j++) {
        const b = list[j];
        let dx = b.pos.x - a.pos.x;
        let dz = b.pos.z - a.pos.z;
        let d = Math.hypot(dx, dz);
        if (d >= minSep) continue;

        if (d < 1e-4) {
          dx = 1;
          dz = 0;
          d = 1;
        }
        const nx = dx / d;
        const nz = dz / d;
        const push = minSep - d;

        const pa = prio(a);
        const pb = prio(b);
        let wa = 0.5;
        let wb = 0.5;
        if (pa > pb) { wa = 0.0; wb = 1.0; }
        else if (pb > pa) { wa = 1.0; wb = 0.0; }

        a.pos.x -= nx * push * wa;
        a.pos.z -= nz * push * wa;
        b.pos.x += nx * push * wb;
        b.pos.z += nz * push * wb;

        clampInsideField(a.pos, 0.8);
        clampInsideField(b.pos, 0.8);
      }
    }
  }

  _completeCatch(f, ball, hd, outEvents) {
    this.resolved = true;
    this.holder = f;
    f.actionTimer = 0;

    const isDiving = hd > 0.92 || (hd > 0.68 && ball.pos.y < 0.45);
    f.state = isDiving ? 'diving' : 'catching';
    f.catchHeight = ball.pos.y;

    if (isDiving) {
      f.catchStyle = 'dive';
    } else if (ball.pos.y >= 1.62) {
      f.catchStyle = 'overhead';
    } else if (ball.pos.y < 0.82) {
      f.catchStyle = 'low';
    } else {
      f.catchStyle = 'chest';
    }

    const hBall = Math.hypot(ball.vel.x, ball.vel.z);
    if (hBall > 1.0) {
      f.facing = Math.atan2(-ball.vel.x, -ball.vel.z);
    } else {
      f.facing = Math.atan2(ball.pos.x - f.pos.x, ball.pos.z - f.pos.z);
    }
    if (!Number.isFinite(f.facing)) f.facing = f.baseFacing;

    if (isDiving) {
      const dx = ball.pos.x - f.pos.x;
      const dz = ball.pos.z - f.pos.z;
      const latDot = dx * Math.cos(f.facing) - dz * Math.sin(f.facing);
      f.diveDir = latDot >= 0 ? 1 : -1;
      const len = Math.hypot(dx, dz) || 1;
      f.vel.set((dx / len) * 3.2, 0, (dz / len) * 3.2);
      f._jumpPeak = 0;
      f.jumpY = 0;
    } else {
      f.diveDir = 0;
      if (hd > 0.12) {
        f.pos.x += (ball.pos.x - f.pos.x) * 0.85;
        f.pos.z += (ball.pos.z - f.pos.z) * 0.85;
      }
      f.vel.multiplyScalar(0.15);
      const jumpPeak = f.catchStyle === 'overhead'
        ? Math.max(0, Math.min(0.42, ball.pos.y - 1.72))
        : 0;
      f._jumpPeak = jumpPeak;
      f.jumpY = jumpPeak;
    }

    ball.vel.set(0, 0, 0);
    ball.active = false;
    ball.rolling = false;

    this.heldBallPos = new THREE.Vector3(
      f.pos.x,
      Math.max(0.45, Math.min(2.15, ball.pos.y)),
      f.pos.z
    );
    this._updateHeldBallPosition(f);

    outEvents.push({
      type: 'catch',
      fielder: f.name,
      fielderId: f.id,
      isKeeper: f.isKeeper,
      diving: isDiving,
      catchStyle: f.catchStyle,
      pos: this.heldBallPos.clone()
    });
  }

  _completeStop(f, ball, outEvents, isSlide, styleOverride = null, hd = 0) {
    this.resolved = true;
    this.holder = f;
    f.actionTimer = 0;
    f.state = 'fielded';
    f._jumpPeak = 0;
    f.jumpY = 0;

    const fieldCfg = CONFIG.field;
    const distCenter = Math.hypot(ball.pos.x, ball.pos.z - fieldCfg.centerZ);
    const ballSpeed = ball.vel.length();
    const nearRope = distCenter > fieldCfg.boundaryRadius - 6.0;
    const isSlidingStop = styleOverride
      ? false
      : ((isSlide && ballSpeed > 4.5) || (nearRope && ballSpeed > 3.2 && hd > 0.65));
    f.stopStyle = styleOverride || (isSlidingStop ? 'slide' : 'pickup');
    f.catchHeight = ball.pos.y;

    if (styleOverride === 'keeper_take') {
      f.facing = f.baseFacing;
      f.diveDir = 0;
      f.pos.set(clamp(ball.pos.x, -2.4, 2.4), 0, f.home.z);
    } else if (isSlidingStop) {
      const dx = ball.pos.x - f.pos.x;
      const dz = ball.pos.z - f.pos.z;
      f.facing = Math.atan2(CREASE_X - ball.pos.x, CREASE_Z - ball.pos.z);
      const latDot = dx * Math.cos(f.facing) - dz * Math.sin(f.facing);
      f.diveDir = latDot >= 0 ? 1 : -1;
      f.pos.set(ball.pos.x, 0, ball.pos.z);
      clampInsideField(f.pos, 0.85);
      f.vel.multiplyScalar(0.35);
      ball.pos.set(f.pos.x, CONFIG.ball.radius, f.pos.z);
    } else {
      f.diveDir = 0;
      f.pos.set(ball.pos.x, 0, ball.pos.z);
      clampInsideField(f.pos, 0.85);
      f.facing = Math.atan2(CREASE_X - ball.pos.x, CREASE_Z - ball.pos.z);
      f.vel.set(0, 0, 0);
      ball.pos.set(f.pos.x, CONFIG.ball.radius, f.pos.z);
    }

    ball.vel.set(0, 0, 0);
    ball.rolling = true;
    ball.pos.y = CONFIG.ball.radius;

    this.heldBallPos = new THREE.Vector3(f.pos.x, 0.85, f.pos.z);
    this._updateHeldBallPosition(f);

    const chaseDist = Math.hypot(f.pos.x - f.home.x, f.pos.z - f.home.z);
    outEvents.push({
      type: 'fielded',
      fielder: f.name,
      fielderId: f.id,
      isKeeper: f.isKeeper,
      sliding: isSlidingStop,
      stopStyle: f.stopStyle,
      chaseDist,
      pos: ball.pos.clone()
    });
  }
}
