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
        this.result = isSix
          ? { kind: 'six', runs: 6, text: 'SIX!', distance: Math.round(fromCrease) }
          : { kind: 'four', runs: 4, text: 'FOUR!', distance: Math.round(fromCrease) };
        return this.result;
      }

      const sp = ball.vel.length();
      const decel = CONFIG.ground.rollingResistance * CONFIG.physics.gravity;
      const remainingRoll = ball.rolling ? (sp * sp) / (2 * decel) : 0;
      const canReachRope = distCenter + remainingRoll >= F.boundaryRadius - 1.5;

      if (
        (ball.rolling && sp < 1.35 && !canReachRope) ||
        (ball.rolling && sp < 0.35) ||
        this.t - this.tHit > CONFIG.game.deadBallTimeout
      ) {
        this.result = this.scoreInfieldOrOutfield(fromCrease + remainingRoll * 0.7);
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

  scoreInfieldOrOutfield(dist) {
    const d = Math.round(dist);
    if (dist >= 41) {
      return { kind: 'runs', runs: 3, text: '3 RUNS!', distance: d };
    }
    if (dist >= 25) {
      return { kind: 'runs', runs: 2, text: '2 RUNS!', distance: d };
    }
    if (dist >= 11.5) {
      return { kind: 'runs', runs: 1, text: '1 RUN!', distance: d };
    }
    if (dist < 6.5) {
      return { kind: 'dot', runs: 0, text: 'Defended', distance: d };
    }
    return { kind: 'dot', runs: 0, text: 'No run', distance: d };
  }
}
