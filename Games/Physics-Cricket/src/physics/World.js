import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { BatController } from '../bat/BatController.js';
import { Ball } from './Ball.js';
import { collideBatBall, collideStumps } from './collisions.js';

// Fixed-timestep physics world: bat, ball, stumps. Rendering-independent;
// the same class is driven by the browser game loop and the headless tests.

export class World {
  constructor() {
    this.bat = new BatController();
    this.ball = new Ball();
    this.events = [];
    this.stumpsBroken = false;
    this.nonStrikerBroken = false;
    this.time = 0;
    this.lastBatContactTime = -1;
    this._target = new THREE.Vector2();
  }

  resetDelivery() {
    this.ball.active = false;
    this.ball.rolling = false;
    this.stumpsBroken = false;
    this.nonStrikerBroken = false;
    this.lastBatContactTime = -1;
    this.events.length = 0;
  }

  /**
   * One fixed step. `target` is the bat tilt target for this step.
   */
  step(dt, target) {
    this.time += dt;
    this.bat.step(dt, target);
    const ball = this.ball;
    ball.step(dt);
    if (ball.active) {
      const hit = collideBatBall(this.bat, ball, dt);
      if (hit) {
        hit.repeat = this.lastBatContactTime >= 0 && this.time - this.lastBatContactTime < 0.12;
        hit.time = this.time;
        this.lastBatContactTime = this.time;
        this.events.push(hit);
      }
      if (!this.stumpsBroken) {
        const st = collideStumps(ball, dt, CONFIG.stumps.z);
        if (st) {
          this.stumpsBroken = true;
          st.time = this.time;
          this.events.push(st);
        }
      }
      if (!this.nonStrikerBroken) {
        const stBowler = collideStumps(ball, dt, -CONFIG.stumps.z - 20.12);
        if (stBowler) {
          this.nonStrikerBroken = true;
          stBowler.isNonStriker = true;
          stBowler.time = this.time;
          this.events.push(stBowler);
        }
      }
    }
    if (ball.events.length) {
      for (const e of ball.events) { e.time = this.time; this.events.push(e); }
      ball.events.length = 0;
    }
  }

  drainEvents() {
    const out = this.events.slice();
    this.events.length = 0;
    return out;
  }
}
