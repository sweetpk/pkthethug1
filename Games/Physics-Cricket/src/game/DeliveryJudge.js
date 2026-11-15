import { CONFIG } from '../config.js';

// Decides the outcome of a delivery purely from what the ball physically does:
//   - Crosses boundary on the full -> SIX (6 runs)
//   - Crosses boundary after bouncing/rolling -> FOUR (4 runs)
//   - Travels into the outfield gaps -> 1, 2, or 3 runs based on distance
//   - Stopped near the pitch -> Defended / No run (0 runs)
//   - Hits the striker's stumps -> Wicket (Bowled / Played on)

export class DeliveryJudge {
  start() {
    this.hit = false;
    this.firstContact = null;
    this.groundedAfterHit = false;
    this.result = null;
    this.t = 0;
    this.tHit = 0;
    this.maxHeight = 0;
    this.closestToHead = Infinity;
  }

  update(dt, ball, events) {
    if (this.result) return this.result;
    this.t += dt;
    for (const e of events) {
      if (e.type === 'bat' && !this.hit) {
        this.hit = true;
        this.firstContact = e;
        this.tHit = this.t;
      } else if (e.type === 'bounce' && this.hit) {
        // Ignore a split-second turf graze at the instant of lifting a half-volley
        if (this.t - this.tHit > 0.06 || ball.vel.y < 2.5) {
          this.groundedAfterHit = true;
        }
      } else if (e.type === 'stumps') {
        if (e.isNonStriker) continue;
        this.result = { kind: 'wicket', runs: 0, text: this.hit ? 'Played on!' : 'Bowled!' };
        return this.result;
      } else if (e.type === 'catch') {
        const fromCrease = Math.hypot(e.pos.x, e.pos.z + 1.22);
        this.result = {
          kind: 'wicket',
          caught: true,
          fielder: e.fielder,
          runs: 0,
          text: e.isKeeper ? 'Caught behind!' : `Caught (${e.fielder})!`,
          distance: Math.round(fromCrease)
        };
        return this.result;
      } else if (e.type === 'fielded') {
        if (this.hit) {
          const fromCrease = Math.hypot(e.pos.x, e.pos.z + 1.22);
          const fieldTime = Math.max(0, this.t - this.tHit);
          this.result = this.scoreInfieldOrOutfield(fromCrease, e.fielder, fieldTime, e.chaseDist ?? 0);
          return this.result;
        } else {
          this.result = { kind: 'dot', runs: 0, text: 'Dot ball', distance: 0 };
          return this.result;
        }
      }
    }
    if (!ball.active) return null;

    if (this.hit) {
      if (ball.rolling && this.t - this.tHit > 0.08) this.groundedAfterHit = true;
      this.maxHeight = Math.max(this.maxHeight, ball.pos.y);

      const F = CONFIG.field;
      const dx = ball.pos.x, dz = ball.pos.z - F.centerZ;
      const distCenter = Math.hypot(dx, dz);
      const fromCrease = Math.hypot(ball.pos.x, ball.pos.z + 1.22);

      if (distCenter >= F.boundaryRadius) {
        const isSix = !this.groundedAfterHit && this.maxHeight > 1.2;
        if (isSix) {
          const exitSpd = this.firstContact?.exitSpeed || Math.hypot(ball.vel.x, ball.vel.y, ball.vel.z);
          const horizSpd = Math.hypot(ball.vel.x, ball.vel.z);
          const spdNorm = Math.max(0, Math.min(1, (exitSpd - 25) / 22));
          const carryBonus = Math.max(0, Math.min(13, (horizSpd - 8) * 0.65));
          const sixDist = Math.max(78, Math.min(115, Math.round(78 + spdNorm * 24 + carryBonus)));
          this.result = { kind: 'six', runs: 6, text: 'SIX!', distance: sixDist };
        } else {
          this.result = { kind: 'four', runs: 4, text: 'FOUR!' };
        }
        return this.result;
      }

      const sp = ball.vel.length();
      const fieldTime = Math.max(0, this.t - this.tHit);
      if (
        (fromCrease < 12.0 && ball.rolling && sp < 0.25) ||
        fieldTime > CONFIG.game.deadBallTimeout
      ) {
        this.result = this.scoreInfieldOrOutfield(fromCrease, '', fieldTime, fromCrease < 12.0 ? 0 : 10);
        return this.result;
      }
    } else {
      // Missed / left: dead once safely past the stumps (wicketkeeper takes it)
      if (ball.pos.z > CONFIG.stumps.z + 1.0 || ball.pos.y < -1 || (ball.rolling && ball.vel.length() < 0.5) || this.t > 4) {
        this.result = { kind: 'dot', runs: 0, text: 'Dot ball', distance: 0 };
        return this.result;
      }
    }
    return null;
  }

  scoreInfieldOrOutfield(dist, fielderName = '', fieldTime = 0, chaseDist = 0) {
    const d = Math.round(dist);
    if (dist < 6.5) {
      return { kind: 'dot', runs: 0, text: 'Defended', distance: d, fielder: fielderName };
    }
    if (dist < 18.0) {
      return {
        kind: 'dot',
        runs: 0,
        text: fielderName ? `Fielded (${fielderName})` : 'No run',
        distance: d,
        fielder: fielderName
      };
    }

    const chaseBonus = Math.min(0.55, Math.max(0, chaseDist - 4.0) * 0.045);
    const effectiveTime = fieldTime + chaseBonus;

    let runs = 0;
    if (dist >= 46.0 && fieldTime >= 3.50 && chaseDist >= 11.5 && effectiveTime >= 4.00) {
      runs = 3;
    } else if (dist >= 38.0 && fieldTime >= 2.55 && chaseDist >= 8.0 && effectiveTime >= 2.95) {
      runs = 2;
    } else if (
      (dist >= 26.0 && fieldTime >= 1.45 && effectiveTime >= 1.60 && !(dist < 32.0 && chaseDist < 5.0 && fieldTime < 1.75)) ||
      (dist >= 18.0 && dist < 26.0 && fieldTime >= 2.15 && chaseDist >= 8.5 && effectiveTime >= 2.45)
    ) {
      runs = 1;
    }

    if (runs === 3) {
      return { kind: 'runs', runs: 3, text: '3 RUNS!', distance: d, fielder: fielderName };
    }
    if (runs === 2) {
      return { kind: 'runs', runs: 2, text: '2 RUNS!', distance: d, fielder: fielderName };
    }
    if (runs === 1) {
      return { kind: 'runs', runs: 1, text: '1 RUN!', distance: d, fielder: fielderName };
    }
    return {
      kind: 'dot',
      runs: 0,
      text: fielderName ? `Fielded (${fielderName})` : 'No run',
      distance: d,
      fielder: fielderName
    };
  }
}
