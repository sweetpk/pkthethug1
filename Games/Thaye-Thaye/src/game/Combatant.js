import * as THREE from "three";
import { WEAPON_STATS } from "../weapons/WeaponSystem.js";
import { ProceduralAnimator } from "../characters/ProceduralAnimator.js";

export class Combatant {
  constructor({ id, name, isPlayer, gender, palette, charFactory, weaponSystem, scene }) {
    this.id = id;
    this.name = name;
    this.isPlayer = isPlayer;
    this.gender = gender;
    this.palette = palette;
    this.charFactory = charFactory;
    this.weaponSystem = weaponSystem;
    this.scene = scene;

    this.alive = true;
    this.respawnTimer = 0;
    this.spawnProtectTimer = 0;
    this.hp = 100;
    this.armor = this.isPlayer ? 75 : 50;
    this.kills = 0;
    this.deaths = 0;
    this.gibs = 0;
    this.limbDmg = { leftArm: 0, rightArm: 0, leftLeg: 0, rightLeg: 0 };
    this.bleedRate = 0;
    this.bleedDripTimer = 0;
    this.lastAttacker = null;

    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.grounded = false;
    this.onSteel = false;
    this.isSprinting = false;
    this.isCrouching = false;
    this.crouchAlpha = 0;
    this.radius = 0.36;
    this.height = 1.76;

    // Weapon state
    this.activeWeapon = "rifle";
    this.fireCooldown = 0;
    this.reloadTimer = 0;
    this.isReloading = false;
    this.ammo = {};
    this.resetAmmo();

    // Character visuals (3rd person)
    this.charInst = null;
    this.animator = null;
    this.stepDist = 0;
    this.nameCanvas = null;
    this.nameCtx = null;
    this.nameTex = null;
    this.nameSprite = null;

    if (!this.isPlayer) {
      this._initNameplate();
    }
    this._buildCharacter();
  }

  _initNameplate() {
    this.nameCanvas = document.createElement("canvas");
    this.nameCanvas.width = 160;
    this.nameCanvas.height = 44;
    this.nameCtx = this.nameCanvas.getContext("2d");
    this.nameTex = new THREE.CanvasTexture(this.nameCanvas);
    const mat = new THREE.SpriteMaterial({ map: this.nameTex, transparent: true, depthTest: true });
    this.nameSprite = new THREE.Sprite(mat);
    this.nameSprite.scale.set(0.95, 0.26, 1);
    this.nameSprite.position.set(0, 2.02, 0);
    this._redrawNameplate();
  }

  _redrawNameplate() {
    if (!this.nameCtx || !this.nameTex) return;
    const ctx = this.nameCtx;
    ctx.clearRect(0, 0, 160, 44);
    // Pill backdrop
    ctx.fillStyle = "rgba(10, 14, 22, 0.78)";
    ctx.fillRect(14, 2, 132, 38);
    ctx.strokeStyle = this.palette?.hex || "#ffffff";
    ctx.lineWidth = 2;
    ctx.strokeRect(14, 2, 132, 38);

    // Name
    ctx.fillStyle = this.palette?.hex || "#ffffff";
    ctx.font = "900 15px Inter, Segoe UI, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(this.name, 80, 19);

    // HP bar
    const ratio = Math.max(0, Math.min(1, this.hp / 100));
    ctx.fillStyle = "rgba(255,255,255,0.16)";
    ctx.fillRect(24, 26, 112, 8);
    ctx.fillStyle = ratio > 0.35 ? "#4ade80" : "#ef4444";
    ctx.fillRect(24, 26, Math.round(112 * ratio), 8);

    this.nameTex.needsUpdate = true;
  }

  _buildCharacter() {
    if (this.charInst && this.charInst.root.parent) {
      this.scene.remove(this.charInst.root);
    }
    this.charInst = this.charFactory.createCharacter(this.gender, this.palette);
    this.animator = new ProceduralAnimator(this.charInst);
    this.weaponSystem.attachToCharacterHand(this.charInst, this.activeWeapon);
    if (this.nameSprite) {
      this.charInst.root.add(this.nameSprite);
      this.nameSprite.visible = true;
      this._redrawNameplate();
    }
    this.scene.add(this.charInst.root);
  }

  resetAmmo() {
    this.ammo = {
      knife: { mag: Infinity, reserve: Infinity },
      rifle: { mag: WEAPON_STATS.rifle.magSize, reserve: 120 },
      shotgun: { mag: WEAPON_STATS.shotgun.magSize, reserve: 18 },
      revolver: { mag: WEAPON_STATS.revolver.magSize, reserve: 24 },
      grenade: { mag: 3, reserve: 0 },
    };
  }

  spawnAt(spawnPos, yaw) {
    this.alive = true;
    this.spawnProtectTimer = 1.6;
    this.hp = 100;
    this.armor = this.isPlayer ? 75 : 50;
    this.pos.copy(spawnPos);
    this.vel.set(0, 0, 0);
    this.yaw = yaw;
    this.pitch = 0;
    this.isCrouching = false;
    this.crouchAlpha = 0;
    this.height = 1.76;
    this.fireCooldown = 0.25;
    this.isReloading = false;
    this.reloadTimer = 0;
    this.activeWeapon = "rifle";
    this.limbDmg = { leftArm: 0, rightArm: 0, leftLeg: 0, rightLeg: 0 };
    this.bleedRate = 0;
    this.bleedDripTimer = 0;
    this.lastAttacker = null;
    this.resetAmmo();

    this._buildCharacter();
    this.syncTransform();
    if (this.animator) {
      this.updateAnimation(0.016);
    }
  }

  switchWeapon(weaponId) {
    if (!WEAPON_STATS[weaponId] || weaponId === this.activeWeapon) return false;
    this.activeWeapon = weaponId;
    this.isReloading = false;
    this.reloadTimer = 0;
    this.fireCooldown = Math.max(this.fireCooldown, 0.18);
    if (this.charInst && this.hasRightArm()) {
      this.weaponSystem.attachToCharacterHand(this.charInst, weaponId);
    }
    return true;
  }

  startReload() {
    const st = WEAPON_STATS[this.activeWeapon];
    const am = this.ammo[this.activeWeapon];
    if (this.isReloading || st.reloadTime <= 0) return false;
    if (am.mag >= st.magSize || am.reserve <= 0) return false;
    this.isReloading = true;
    this.reloadTimer = st.reloadTime;
    return true;
  }

  finishReload() {
    const st = WEAPON_STATS[this.activeWeapon];
    const am = this.ammo[this.activeWeapon];
    const needed = st.magSize - am.mag;
    const take = Math.min(needed, am.reserve);
    am.mag += take;
    am.reserve -= take;
    this.isReloading = false;
    this.reloadTimer = 0;
  }

  syncTransform() {
    if (!this.charInst) return;
    this.charInst.root.position.copy(this.pos);
    this.charInst.root.rotation.y = this.yaw;
  }

  updateTimers(dt) {
    if (this.spawnProtectTimer > 0) this.spawnProtectTimer = Math.max(0, this.spawnProtectTimer - dt);
    if (this.fireCooldown > 0) this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    if (this.isReloading) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) {
        this.finishReload();
      }
    }
  }

  updateAnimation(dt) {
    if (!this.charInst || !this.animator || !this.alive) return;
    const st = WEAPON_STATS[this.activeWeapon];
    const reloadProg = this.isReloading && st.reloadTime > 0 ? 1 - this.reloadTimer / st.reloadTime : 0;
    this.animator.update(dt, {
      vel: this.vel,
      yaw: this.yaw,
      grounded: this.grounded,
      aimPitch: this.pitch,
      weaponType: this.activeWeapon,
      isReloading: this.isReloading,
      reloadProg,
      crouchAlpha: this.crouchAlpha,
    });
    if (this.nameSprite) {
      this.nameSprite.position.y = 2.02 - this.crouchAlpha * 0.45 - this.getStanceDrop();
    }
    this.syncTransform();
  }

  getEyePos(out = new THREE.Vector3()) {
    return out.set(this.pos.x, this.pos.y + 1.58 - this.crouchAlpha * 0.56 - this.getStanceDrop(), this.pos.z);
  }

  /**
   * Returns anatomical hit spheres in world space for precise headshot & dismemberment detection.
   */
  getHitSpheres() {
    if (!this.alive) return [];
    if (!this.charInst) {
      const c = this.crouchAlpha || 0;
      return [
        { zone: "head", center: new THREE.Vector3(this.pos.x, this.pos.y + 1.56 - c * 0.56, this.pos.z), radius: 0.21 },
        { zone: "chest", center: new THREE.Vector3(this.pos.x, this.pos.y + 1.15 - c * 0.42, this.pos.z), radius: 0.30 },
        { zone: "chest", center: new THREE.Vector3(this.pos.x, this.pos.y + 0.72 - c * 0.25, this.pos.z), radius: 0.28 },
      ];
    }

    this.charInst.root.updateMatrixWorld(true);
    const sev = this.charInst.severedZones;
    const spheres = [];
    const sample = (boneName, zone, radius, yOffset = 0) => {
      if (sev.has(zone)) return;
      const b = this.charInst.bones[boneName];
      if (!b) return;
      const p = new THREE.Vector3();
      b.getWorldPosition(p);
      p.y += yOffset;
      spheres.push({ zone, center: p, radius });
    };

    sample("mixamorigHead", "head", 0.17, 0.11);
    sample("mixamorigSpine2", "chest", 0.24, 0);
    sample("mixamorigSpine", "chest", 0.22, 0);
    sample("mixamorigLeftForeArm", "leftArm", 0.15, 0);
    sample("mixamorigLeftArm", "leftArm", 0.15, 0);
    sample("mixamorigRightForeArm", "rightArm", 0.15, 0);
    sample("mixamorigRightArm", "rightArm", 0.15, 0);
    sample("mixamorigLeftUpLeg", "leftLeg", 0.17, -0.05);
    sample("mixamorigLeftLeg", "leftLeg", 0.15, -0.05);
    sample("mixamorigRightUpLeg", "rightLeg", 0.17, -0.05);
    sample("mixamorigRightLeg", "rightLeg", 0.15, -0.05);
    return spheres;
  }

  /**
   * Ray vs combatant anatomical hitboxes. Returns closest hit { distance, point, zone }.
   */
  raycastHit(origin, dir, maxDist) {
    const spheres = this.getHitSpheres();
    let bestT = maxDist;
    let bestZone = null;

    const oc = new THREE.Vector3();
    for (const s of spheres) {
      oc.subVectors(origin, s.center);
      const b = oc.dot(dir);
      const c = oc.dot(oc) - s.radius * s.radius;
      const disc = b * b - c;
      if (disc < 0) continue;
      const t = -b - Math.sqrt(disc);
      if (t > 0.05 && t < bestT) {
        bestT = t;
        bestZone = s.zone;
      }
    }

    if (!bestZone) return null;
    return {
      distance: bestT,
      point: origin.clone().addScaledVector(dir, bestT),
      zone: bestZone,
    };
  }

  isLegCrippled() {
    if (!this.charInst) return false;
    return this.charInst.severedZones.has("leftLeg") || this.charInst.severedZones.has("rightLeg");
  }

  hasBothLegsSevered() {
    if (!this.charInst) return false;
    return this.charInst.severedZones.has("leftLeg") && this.charInst.severedZones.has("rightLeg");
  }

  getStanceDrop() {
    if (!this.charInst) return 0;
    const lLost = this.charInst.severedZones.has("leftLeg");
    const rLost = this.charInst.severedZones.has("rightLeg");
    if (lLost && rLost) return 0.82;
    if (lLost || rLost) return 0.48;
    return 0;
  }

  hasLeftArm() {
    return !this.charInst?.severedZones.has("leftArm");
  }

  hasRightArm() {
    return !this.charInst?.severedZones.has("rightArm");
  }

  recordLimbDamage(zone, dmg) {
    if (!this.charInst || !(zone in this.limbDmg)) return false;
    if (this.charInst.severedZones.has(zone)) return false;
    this.limbDmg[zone] += dmg;
    return this.limbDmg[zone] >= 28;
  }

  applyDamage(rawDmg) {
    if (!this.alive || this.spawnProtectTimer > 0) return { killed: false, actualDmg: 0 };
    let dmg = rawDmg;
    if (this.armor > 0) {
      const absorbed = Math.min(this.armor, dmg * 0.55);
      this.armor = Math.max(0, this.armor - absorbed);
      dmg -= absorbed * 0.75;
    }
    this.hp = Math.max(0, this.hp - dmg);
    if (this.animator) this.animator.triggerFlinch();
    if (!this.isPlayer) {
      this._redrawNameplate();
    }
    if (this.hp <= 0) {
      this.alive = false;
      this.deaths += 1;
      this.respawnTimer = 3.0;
      if (this.nameSprite) {
        this.nameSprite.visible = false;
        this.nameSprite.parent?.remove(this.nameSprite);
      }
      return { killed: true, actualDmg: dmg };
    }
    return { killed: false, actualDmg: dmg };
  }
}
