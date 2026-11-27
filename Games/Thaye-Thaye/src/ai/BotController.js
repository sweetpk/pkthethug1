import * as THREE from "three";
import { WEAPON_STATS } from "../weapons/WeaponSystem.js";

const DIFF_CONFIG = {
  normal: {
    reactionTime: 0.72,
    aimSpeed: 7.2,
    spread: 0.145,
    fireCooldownMult: 2.35,
    dmgMult: 0.50,
    burstShots: 3,
    burstPause: 0.65,
  },
  hard: {
    reactionTime: 0.44,
    aimSpeed: 9.0,
    spread: 0.095,
    fireCooldownMult: 1.65,
    dmgMult: 0.72,
    burstShots: 4,
    burstPause: 0.38,
  },
  nightmare: {
    reactionTime: 0.24,
    aimSpeed: 11.5,
    spread: 0.055,
    fireCooldownMult: 1.25,
    dmgMult: 0.95,
    burstShots: 6,
    burstPause: 0.20,
  },
};

export class BotController {
  constructor(combatant, arena, difficulty = "normal") {
    this.bot = combatant;
    this.arena = arena;
    this.cfg = DIFF_CONFIG[difficulty] || DIFF_CONFIG.normal;

    this.path = [];
    this.targetWpId = null;
    this.repathTimer = Math.random() * 0.6;
    this.strafeDir = Math.random() < 0.5 ? 1 : -1;
    this.strafeTimer = 1.0 + Math.random() * 1.5;

    this.enemy = null;
    this.enemySeenTime = 0;
    this.losTimer = Math.random() * 0.15;
    this.hasLos = false;

    this.burstCount = 0;
    this.burstPauseTimer = 0;
    this.nadeCooldown = 8 + Math.random() * 8;

    this.lastCheckPos = combatant.pos.clone();
    this.stuckTimer = 0;
  }

  onSpawn() {
    this.path = [];
    this.enemy = null;
    this.hasLos = false;
    this.enemySeenTime = 0;
    this.burstCount = 0;
    this.burstPauseTimer = 0;
    this.nadeCooldown = 7 + Math.random() * 8;
    this.repathTimer = 0.1;
    this.stuckTimer = 0;
    this.lastCheckPos.copy(this.bot.pos);
  }

  _nearestWaypoint(pos) {
    let best = null;
    let bestD2 = Infinity;
    for (const wp of this.arena.waypoints) {
      const dx = wp.pos.x - pos.x;
      const dy = (wp.pos.y - pos.y) * 2.2; // strongly prefer same elevation tier
      const dz = wp.pos.z - pos.z;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < bestD2) {
        bestD2 = d2;
        best = wp;
      }
    }
    return best;
  }

  _findPath(startId, goalId) {
    if (startId === goalId) return [goalId];
    const queue = [startId];
    const prev = new Map([[startId, null]]);
    while (queue.length > 0) {
      const cur = queue.shift();
      if (cur === goalId) break;
      for (const nxt of this.arena.waypoints[cur].links) {
        if (!prev.has(nxt)) {
          prev.set(nxt, cur);
          queue.push(nxt);
        }
      }
    }
    if (!prev.has(goalId)) return [goalId];
    const path = [];
    let c = goalId;
    while (c !== null && c !== startId) {
      path.unshift(c);
      c = prev.get(c);
    }
    return path;
  }

  _chooseGoalWaypoint(allCombatants) {
    const pos = this.bot.pos;

    // 1. Seek health if hurt
    if (this.bot.hp < 55) {
      const hpPads = this.arena.pickups.filter((p) => p.active && p.kind === "health");
      if (hpPads.length > 0) {
        hpPads.sort((a, b) => a.position.distanceToSquared(pos) - b.position.distanceToSquared(pos));
        return this._nearestWaypoint(hpPads[0].position);
      }
    }

    // 2. Seek armor if low
    if (this.bot.armor < 30 && Math.random() < 0.7) {
      const arPads = this.arena.pickups.filter((p) => p.active && p.kind === "armor");
      if (arPads.length > 0) {
        arPads.sort((a, b) => a.position.distanceToSquared(pos) - b.position.distanceToSquared(pos));
        return this._nearestWaypoint(arPads[0].position);
      }
    }

    // 3. Occasionally contest Center Heavy pickup
    const heavy = this.arena.pickups.find((p) => p.active && p.kind === "heavy_weapon");
    if (heavy && Math.random() < 0.35) {
      return this._nearestWaypoint(heavy.position);
    }

    // 4. Hunt toward an alive opponent
    const aliveOthers = allCombatants.filter((c) => c !== this.bot && c.alive);
    if (aliveOthers.length > 0 && Math.random() < 0.75) {
      aliveOthers.sort((a, b) => a.pos.distanceToSquared(pos) - b.pos.distanceToSquared(pos));
      const target = aliveOthers[Math.random() < 0.7 ? 0 : Math.floor(Math.random() * aliveOthers.length)];
      return this._nearestWaypoint(target.pos);
    }

    // 5. Random patrol waypoint
    return this.arena.waypoints[Math.floor(Math.random() * this.arena.waypoints.length)];
  }

  _checkLosTo(target) {
    const eyeA = this.bot.getEyePos();
    const eyeB = new THREE.Vector3(
      target.pos.x,
      target.pos.y + 1.35 - (target.crouchAlpha || 0) * 0.45 - target.getStanceDrop(),
      target.pos.z
    );
    const dir = eyeB.clone().sub(eyeA);
    const dist = dir.length();
    if (dist < 0.1) return true;
    dir.divideScalar(dist);
    const wallHit = this.arena.raycast(eyeA, dir, dist);
    return !wallHit || wallHit.distance >= dist - 0.15;
  }

  /**
   * Updates bot AI, movement, aiming, and returns fire intent if firing this frame.
   */
  update(dt, allCombatants) {
    const b = this.bot;
    if (!b.alive) return null;

    // 1. Target Acquisition & LOS check (throttled to ~10Hz)
    this.losTimer -= dt;
    if (this.losTimer <= 0) {
      this.losTimer = 0.10 + Math.random() * 0.05;
      let bestTarget = null;
      let bestDist = 38;
      for (const other of allCombatants) {
        if (other === b || !other.alive || other.spawnProtectTimer > 0) continue;
        const d = b.pos.distanceTo(other.pos);
        if (d < bestDist && this._checkLosTo(other)) {
          bestDist = d;
          bestTarget = other;
        }
      }
      this.enemy = bestTarget;
      this.hasLos = !!bestTarget;
    }

    if (this.hasLos && this.enemy && this.enemy.alive) {
      this.enemySeenTime += dt;
    } else {
      if (this.enemy && !this.enemy.alive) {
        this.enemy = null;
        this.losTimer = 0;
      }
      this.enemySeenTime = 0;
      this.hasLos = false;
    }

    // 2. Navigation / Pathfinding
    this.repathTimer -= dt;
    if (this.repathTimer <= 0 || this.path.length === 0) {
      this.repathTimer = 1.4 + Math.random() * 0.8;
      const startWp = this._nearestWaypoint(b.pos);
      const goalWp = this._chooseGoalWaypoint(allCombatants);
      if (startWp && goalWp) {
        this.path = this._findPath(startWp.id, goalWp.id);
      }
    }

    // Determine desired horizontal move direction
    const moveDir = new THREE.Vector3();
    let desiredSpeed = 5.4;

    if (this.hasLos && this.enemy) {
      const toEnemy = this.enemy.pos.clone().sub(b.pos);
      const dist = Math.hypot(toEnemy.x, toEnemy.z);
      const fwd = new THREE.Vector3(toEnemy.x, 0, toEnemy.z).normalize();
      const right = new THREE.Vector3(-fwd.z, 0, fwd.x);

      // Strafe timer
      this.strafeTimer -= dt;
      if (this.strafeTimer <= 0) {
        this.strafeTimer = 0.7 + Math.random() * 1.1;
        this.strafeDir *= -1;
      }

      if (b.activeWeapon === "knife" || dist > 11) {
        moveDir.copy(fwd).addScaledVector(right, this.strafeDir * 0.35).normalize();
        desiredSpeed = 6.2;
      } else if (dist < 4.5 && b.activeWeapon !== "knife") {
        moveDir.copy(fwd).multiplyScalar(-0.4).addScaledVector(right, this.strafeDir).normalize();
        desiredSpeed = 4.6;
      } else {
        moveDir.copy(right).multiplyScalar(this.strafeDir);
        desiredSpeed = 4.4;
      }

      // Occasional combat jump (crippled bots cannot jump)
      if (b.grounded && !b.isLegCrippled() && Math.random() < dt * 0.35) {
        b.vel.y = 6.8;
      }
    } else if (this.path.length > 0) {
      const wp = this.arena.waypoints[this.path[0]];
      const dx = wp.pos.x - b.pos.x;
      const dz = wp.pos.z - b.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < 1.15 && Math.abs(wp.pos.y - b.pos.y) < 1.3) {
        this.path.shift();
      } else if (d > 0.05) {
        moveDir.set(dx / d, 0, dz / d);
      }
    }

    if (b.hasBothLegsSevered()) desiredSpeed *= 0.16;
    else if (b.isLegCrippled()) desiredSpeed *= 0.40;

    // Smooth horizontal velocity
    const targetVx = moveDir.x * desiredSpeed;
    const targetVz = moveDir.z * desiredSpeed;
    b.vel.x = THREE.MathUtils.lerp(b.vel.x, targetVx, Math.min(1, dt * 10));
    b.vel.z = THREE.MathUtils.lerp(b.vel.z, targetVz, Math.min(1, dt * 10));

    // Stuck recovery
    this.stuckTimer += dt;
    if (this.stuckTimer > 0.85) {
      if (b.pos.distanceTo(this.lastCheckPos) < 0.35 && desiredSpeed > 1) {
        if (b.grounded && !b.hasBothLegsSevered()) b.vel.y = 7.0;
        this.path = [];
        this.repathTimer = 0;
        this.strafeDir *= -1;
      }
      this.lastCheckPos.copy(b.pos);
      this.stuckTimer = 0;
    }

    // 3. Aiming & Weapon Choice
    let targetYaw = b.yaw;
    let targetPitch = 0;

    if (this.hasLos && this.enemy) {
      const eye = b.getEyePos();
      const targetAim = new THREE.Vector3(
        this.enemy.pos.x,
        this.enemy.pos.y + 1.28 - (this.enemy.crouchAlpha || 0) * 0.45 - this.enemy.getStanceDrop(),
        this.enemy.pos.z
      );
      const delta = targetAim.sub(eye);
      const dist = delta.length();
      targetYaw = Math.atan2(-delta.x, -delta.z);
      targetPitch = Math.atan2(delta.y, Math.hypot(delta.x, delta.z));

      // Smart weapon selection by range (only if shooting arm is intact and not mid-reload)
      if (b.hasRightArm() && (!b.isReloading || dist < 2.1)) {
        if (dist < 2.2) {
          b.switchWeapon("knife");
        } else if (dist < 7.8 && b.ammo.shotgun.mag > 0) {
          b.switchWeapon("shotgun");
        } else if (dist > 15.5 && b.ammo.revolver.mag > 0 && Math.random() < dt * 1.2) {
          b.switchWeapon("revolver");
        } else if (b.ammo.rifle.mag > 0) {
          if (b.activeWeapon !== "revolver" || b.ammo.revolver.mag <= 0) {
            b.switchWeapon("rifle");
          }
        } else if (b.ammo.shotgun.mag > 0) {
          b.switchWeapon("shotgun");
        } else if (b.ammo.revolver.mag > 0) {
          b.switchWeapon("revolver");
        } else if (b.ammo.rifle.reserve > 0) {
          b.switchWeapon("rifle");
        } else if (b.ammo.shotgun.reserve > 0) {
          b.switchWeapon("shotgun");
        } else if (b.ammo.revolver.reserve > 0) {
          b.switchWeapon("revolver");
        } else {
          b.switchWeapon("knife");
        }
      }
    } else if (moveDir.lengthSq() > 0.05) {
      targetYaw = Math.atan2(-moveDir.x, -moveDir.z);
    }

    // Shortest-angle yaw lerp
    let diffYaw = targetYaw - b.yaw;
    while (diffYaw > Math.PI) diffYaw -= Math.PI * 2;
    while (diffYaw < -Math.PI) diffYaw += Math.PI * 2;
    b.yaw += diffYaw * Math.min(1, dt * this.cfg.aimSpeed);
    b.pitch = THREE.MathUtils.lerp(b.pitch, targetPitch, Math.min(1, dt * this.cfg.aimSpeed));

    // Reload if empty (only when right arm is intact)
    const am = b.ammo[b.activeWeapon];
    if (b.hasRightArm() && am && am.mag <= 0 && am.reserve > 0 && !b.isReloading) {
      b.startReload();
      return { action: "reload" };
    }

    this.nadeCooldown = Math.max(0, this.nadeCooldown - dt);
    if (this.burstPauseTimer > 0) {
      this.burstPauseTimer = Math.max(0, this.burstPauseTimer - dt);
    }

    // 4. Firing / occasional grenade throw decision (disarmed if rightArm was shot off!)
    if (
      b.hasRightArm() &&
      this.hasLos &&
      this.enemy &&
      this.enemySeenTime >= this.cfg.reactionTime &&
      b.fireCooldown <= 0 &&
      this.burstPauseTimer <= 0 &&
      !b.isReloading &&
      Math.abs(diffYaw) < 0.14
    ) {
      const dist = b.pos.distanceTo(this.enemy.pos);
      if (this.nadeCooldown <= 0 && b.ammo.grenade?.mag > 0 && dist > 6.5 && dist < 17 && Math.random() < dt * 0.65) {
        const eye = b.getEyePos();
        const aimDir = new THREE.Vector3(this.enemy.pos.x, this.enemy.pos.y + 1.0, this.enemy.pos.z)
          .sub(eye)
          .normalize();
        aimDir.y += 0.14;
        aimDir.normalize();
        const nearBlock = this.arena.raycast(eye, aimDir, Math.min(4.2, dist * 0.6));
        if (!nearBlock) {
          this.nadeCooldown = 14 + Math.random() * 8;
          b.fireCooldown = 0.75;
          return { action: "grenade", origin: eye, dir: aimDir };
        }
      }

      if (b.activeWeapon === "knife" && dist > 2.45) return null;
      if (am && am.mag <= 0) return null;

      this.burstCount += 1;
      if (b.activeWeapon === "rifle" && this.burstCount >= this.cfg.burstShots) {
        this.burstCount = 0;
        this.burstPauseTimer = this.cfg.burstPause;
      }

      // Compute aim direction with bot difficulty spread (+ penalty if left arm severed)
      const effSpread = this.cfg.spread + (b.hasLeftArm() ? 0 : 0.075);
      const eye = b.getEyePos();
      const targetPt = new THREE.Vector3(
        this.enemy.pos.x,
        this.enemy.pos.y + 1.25 - (this.enemy.crouchAlpha || 0) * 0.45 - this.enemy.getStanceDrop(),
        this.enemy.pos.z
      );
      const aimDir = targetPt.sub(eye).normalize();
      aimDir.x += (Math.random() - 0.5) * effSpread;
      aimDir.y += (Math.random() - 0.5) * effSpread;
      aimDir.z += (Math.random() - 0.5) * effSpread;
      aimDir.normalize();

      return {
        action: "fire",
        origin: eye,
        dir: aimDir,
        dmgMult: this.cfg.dmgMult,
        cooldownMult: this.cfg.fireCooldownMult,
      };
    }

    return null;
  }
}
