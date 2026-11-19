import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { toToonMaterial, addInkEdges } from "../graphics/CelShaderHelper.js";

export const WEAPON_STATS = {
  knife: {
    id: "knife",
    label: "KNIFE",
    slot: 1,
    damage: 75,
    headMult: 1.85,
    fireRate: 0.34,
    auto: false,
    range: 2.85,
    pellets: 1,
    spread: 0.0,
    adsSpread: 0.0,
    magSize: Infinity,
    reserveMax: Infinity,
    reloadTime: 0,
    recoilPitch: 0.015,
    recoilYaw: 0.01,
    impulse: 5.5,
    hitKnockback: 3.6,
    dismemberChance: 0.95,
    tracerColor: 0x38bdf8,
  },
  rifle: {
    id: "rifle",
    label: "RIFLE",
    slot: 2,
    damage: 24,
    headMult: 2.0,
    fireRate: 0.095,
    auto: true,
    range: 75,
    pellets: 1,
    spread: 0.016,
    adsSpread: 0.004,
    magSize: 30,
    reserveMax: 150,
    reloadTime: 1.25,
    recoilPitch: 0.022,
    recoilYaw: 0.008,
    impulse: 4.6,
    hitKnockback: 1.6,
    dismemberChance: 0.45,
    tracerColor: 0x38e8ff,
  },
  shotgun: {
    id: "shotgun",
    label: "SHOTGUN",
    slot: 3,
    damage: 14,
    headMult: 1.75,
    fireRate: 0.66,
    auto: false,
    range: 42,
    pellets: 9,
    spread: 0.068,
    adsSpread: 0.044,
    magSize: 6,
    reserveMax: 30,
    reloadTime: 1.55,
    recoilPitch: 0.145,
    recoilYaw: 0.042,
    impulse: 8.6,
    hitKnockback: 4.8,
    dismemberChance: 0.95,
    tracerColor: 0xffaa2b,
  },
  revolver: {
    id: "revolver",
    label: "REVOLVER",
    slot: 4,
    damage: 58,
    headMult: 2.15,
    fireRate: 0.24,
    auto: true,
    range: 68,
    pellets: 1,
    spread: 0.011,
    adsSpread: 0.0015,
    magSize: 6,
    reserveMax: 36,
    reloadTime: 1.45,
    recoilPitch: 0.115,
    recoilYaw: 0.030,
    impulse: 6.8,
    hitKnockback: 3.4,
    dismemberChance: 0.85,
    tracerColor: 0xffd166,
  },
  grenade: {
    id: "grenade",
    label: "M69 FRAG",
    slot: 5,
    damage: 135,
    headMult: 1.0,
    fireRate: 0.78,
    auto: false,
    range: 28,
    pellets: 1,
    spread: 0.0,
    adsSpread: 0.0,
    magSize: 4,
    reserveMax: 4,
    reloadTime: 0,
    recoilPitch: 0.03,
    recoilYaw: 0.01,
    impulse: 11.0,
    hitKnockback: 7.5,
    dismemberChance: 1.0,
    tracerColor: 0xff5a28,
  },
};

export class WeaponSystem {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.templates = {};
    this.tracers = [];
    this.sparks = [];
    this.shells = [];
    this.grenades = [];
    this.blasts = [];

    // First-person viewmodel rig attached to camera
    this.vmRoot = new THREE.Group();
    this.camera.add(this.vmRoot);

    this.vmWeapons = {};
    this.muzzleFlashMesh = null;
    this.muzzleLight = null;
    this.flashTimer = 0;

    // Viewmodel animation state
    this.bobPhase = 0;
    this.recoilZ = 0;
    this.recoilPitch = 0;
    this.slashAnim = 0;
    this.throwAnim = 0;
    this.fireHoldTimer = 0;
    this.sprintTilt = 0;
    this.switchDrop = 0;
    this.adsAlpha = 0;
    this.swayX = 0;
    this.swayY = 0;

    this.sparkGeo = new THREE.BoxGeometry(0.032, 0.032, 0.032);
    this.sparkMat = new THREE.MeshBasicMaterial({ color: 0xffc64b });
    this.blastGeo = new THREE.IcosahedronGeometry(1, 2);
    this.ringGeo = new THREE.RingGeometry(0.82, 1.0, 24);
    this.ringGeo.rotateX(-Math.PI / 2);
    this.shellGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.038, 6);
    this.brassMat = new THREE.MeshBasicMaterial({ color: 0xe6b83c });
    this.shotShellMat = new THREE.MeshBasicMaterial({ color: 0xd92620 });
  }

  async load() {
    const loader = new GLTFLoader();
    const [knife, rifle, shotgun, revolver, grenade] = await Promise.all([
      loader.loadAsync("./assets/weapons/knife.glb"),
      loader.loadAsync("./assets/weapons/rifle.glb"),
      loader.loadAsync("./assets/weapons/shotgun.glb"),
      loader.loadAsync("./assets/weapons/revolver.glb"),
      loader.loadAsync("./assets/weapons/grenade.glb"),
    ]);

    this.templates = {
      knife: knife.scene,
      rifle: rifle.scene,
      shotgun: shotgun.scene,
      revolver: revolver.scene,
      grenade: grenade.scene,
    };

    for (const [id, tpl] of Object.entries(this.templates)) {
      const meshesToOutline = [];
      tpl.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = false;
          o.receiveShadow = false;
          if (o.material) o.material = toToonMaterial(o.material);
          meshesToOutline.push(o);
        }
      });
      for (const m of meshesToOutline) addInkEdges(m, 26);

      const vm = tpl.clone(true);
      vm.visible = false;
      this.vmRoot.add(vm);
      this.vmWeapons[id] = vm;
    }

    // Muzzle flash sprite + point light
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xffd269,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const flashGroup = new THREE.Group();
    const p1 = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.18), flashMat);
    const p2 = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.18), flashMat);
    p2.rotation.z = Math.PI / 4;
    flashGroup.add(p1, p2);
    flashGroup.visible = false;
    this.vmRoot.add(flashGroup);
    this.muzzleFlashMesh = flashGroup;

    this.muzzleLight = new THREE.PointLight(0xffb84d, 0, 7.0);
    this.vmRoot.add(this.muzzleLight);

    // Glowing cyan crescent slash arc for melee swings
    const arcGeo = new THREE.RingGeometry(0.18, 0.28, 20, 1, -0.5, Math.PI * 0.9);
    this.slashArcMat = new THREE.MeshBasicMaterial({
      color: 0x38e8ff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.slashArcMesh = new THREE.Mesh(arcGeo, this.slashArcMat);
    this.slashArcMesh.position.set(0.02, -0.05, -0.55);
    this.slashArcMesh.visible = false;
    this.vmRoot.add(this.slashArcMesh);
  }

  /**
   * Clones a 3rd-person weapon mesh sized and oriented for a character's hand.R bone.
   */
  createThirdPersonModel(weaponId) {
    const tpl = this.templates[weaponId];
    if (!tpl) return new THREE.Group();
    const clone = tpl.clone(true);
    clone.traverse((o) => {
      if (o.isMesh) o.castShadow = true;
    });
    return clone;
  }

  attachToCharacterHand(charInst, weaponId) {
    const mount = charInst.weaponMount;
    if (!mount) return;
    while (mount.children.length > 0) mount.remove(mount.children[0]);

    const mesh = this.createThirdPersonModel(weaponId);
    // Compensate for FBX bone scale so weapon stays true 1:1 meter size
    // Orientation is kept aligned straight forward along character aim by ProceduralAnimator
    const ws = charInst.handWorldScale || new THREE.Vector3(1, 1, 1);
    const invS = ws.x > 1e-5 ? 1.0 / ws.x : 1.0;
    mesh.scale.setScalar(invS);
    mount.add(mesh);
  }

  setActiveViewmodel(weaponId, visible = true) {
    for (const [id, vm] of Object.entries(this.vmWeapons)) {
      vm.visible = visible && id === weaponId;
    }
  }

  addSway(dx, dy) {
    this.swayX = THREE.MathUtils.clamp(this.swayX - dx * 0.00018, -0.028, 0.028);
    this.swayY = THREE.MathUtils.clamp(this.swayY + dy * 0.00018, -0.025, 0.025);
  }

  triggerFireFX(weaponId) {
    this.fireHoldTimer = 0.36;
    if (weaponId === "knife") {
      this.slashAnim = 1.0;
      if (this.slashArcMesh) {
        this.slashArcMesh.visible = true;
        this.slashArcMesh.rotation.set(0.35, -0.25, -0.45);
        this.slashArcMat.opacity = 0.85;
      }
      return;
    }
    if (weaponId === "grenade") {
      this.throwAnim = 1.0;
      return;
    }
    const adsScale = 1 - this.adsAlpha * 0.30;
    this.recoilZ = (weaponId === "shotgun" ? 0.17 : weaponId === "revolver" ? 0.12 : 0.048) * adsScale;
    this.recoilPitch = (weaponId === "shotgun" ? 0.30 : weaponId === "revolver" ? 0.38 : 0.055) * adsScale;
    this.flashTimer = 0.048;

    const vm = this.vmWeapons[weaponId];
    if (vm && this.muzzleFlashMesh) {
      const muzzle = vm.getObjectByName("MuzzlePoint");
      const mPos = new THREE.Vector3(0, 0.05, -0.66);
      if (muzzle) mPos.copy(muzzle.position);
      this.muzzleFlashMesh.position.copy(vm.position).add(mPos);
      this.muzzleFlashMesh.rotation.z = Math.random() * Math.PI;
      this.muzzleFlashMesh.scale.setScalar(weaponId === "shotgun" ? 1.55 : weaponId === "revolver" ? 1.25 : 0.95);
      this.muzzleFlashMesh.visible = true;
      this.muzzleLight.position.copy(this.muzzleFlashMesh.position);
      this.muzzleLight.intensity = weaponId === "shotgun" ? 9 : weaponId === "revolver" ? 7 : 5;
      if (weaponId === "rifle" || weaponId === "shotgun") {
        this._spawnShellCasing(weaponId, vm);
      }
    }
  }

  _spawnShellCasing(weaponId, vm) {
    if (this.shells.length > 35) {
      const old = this.shells.shift();
      this.scene.remove(old.mesh);
    }
    const isShotgun = weaponId === "shotgun";
    const mesh = new THREE.Mesh(this.shellGeo, isShotgun ? this.shotShellMat : this.brassMat);
    if (isShotgun) mesh.scale.set(1.45, 1.4, 1.45);
    const localPort = new THREE.Vector3(0.04, 0.04, -0.07);
    const worldPort = vm.localToWorld(localPort);
    mesh.position.copy(worldPort);
    mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    this.scene.add(mesh);

    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
    const vel = right
      .multiplyScalar(1.8 + Math.random() * 0.9)
      .addScaledVector(up, 1.5 + Math.random() * 0.7);
    this.shells.push({
      mesh,
      vel,
      angVel: new THREE.Vector3(14, 18, 12),
      age: 0,
      ttl: 1.8,
    });
  }

  triggerSwitch() {
    this.switchDrop = 0.22;
  }

  updateViewmodel(dt, weaponId, moveSpeed, grounded, isSprinting, isADS, isReloading, reloadProg) {
    this.swayX = THREE.MathUtils.lerp(this.swayX, 0, Math.min(1, dt * 12));
    this.swayY = THREE.MathUtils.lerp(this.swayY, 0, Math.min(1, dt * 12));
    this.recoilZ = THREE.MathUtils.lerp(this.recoilZ, 0, Math.min(1, dt * 16));
    this.recoilPitch = THREE.MathUtils.lerp(this.recoilPitch, 0, Math.min(1, dt * 14));
    this.switchDrop = THREE.MathUtils.lerp(this.switchDrop, 0, Math.min(1, dt * 11));
    this.slashAnim = Math.max(0, this.slashAnim - dt * 4.2);
    this.throwAnim = Math.max(0, this.throwAnim - dt * 2.8);
    this.fireHoldTimer = Math.max(0, this.fireHoldTimer - dt);

    const targetAds = isADS && weaponId !== "knife" && weaponId !== "grenade" && !isReloading && !isSprinting ? 1 : 0;
    this.adsAlpha = THREE.MathUtils.lerp(this.adsAlpha, targetAds, Math.min(1, dt * 14));

    const wantSprintCarry =
      isSprinting &&
      this.adsAlpha < 0.1 &&
      this.fireHoldTimer <= 0 &&
      !isReloading &&
      this.slashAnim <= 0 &&
      this.throwAnim <= 0;
    const tiltSpeed = wantSprintCarry ? 10 : 28;
    this.sprintTilt = THREE.MathUtils.lerp(this.sprintTilt, wantSprintCarry ? 1 : 0, Math.min(1, dt * tiltSpeed));

    if (this.flashTimer > 0) {
      this.flashTimer -= dt;
      if (this.flashTimer <= 0) {
        if (this.muzzleFlashMesh) this.muzzleFlashMesh.visible = false;
        if (this.muzzleLight) this.muzzleLight.intensity = 0;
      }
    }

    const vm = this.vmWeapons[weaponId];
    if (!vm) return;

    const bobAmp = grounded && moveSpeed > 0.3 ? Math.min(1, moveSpeed / 6.5) * (1 - this.adsAlpha * 0.72) : 0;
    if (bobAmp > 0.02) {
      this.bobPhase += dt * (isSprinting ? 13 : 9.2);
    } else {
      this.bobPhase += dt * 1.6;
    }

    const bobX = Math.cos(this.bobPhase * 0.5) * 0.011 * bobAmp + Math.sin(this.bobPhase * 0.5) * 0.0018 * (1 - this.adsAlpha * 0.8);
    const bobY =
      Math.abs(Math.sin(this.bobPhase)) * 0.012 * bobAmp +
      Math.sin(this.bobPhase) * (0.0022 * (1 - this.adsAlpha * 0.8));

    // Base hip & ADS offsets per weapon
    let hipPos, adsPos;
    if (weaponId === "knife") {
      hipPos = new THREE.Vector3(0.24, -0.22, -0.34);
      adsPos = hipPos;
    } else if (weaponId === "grenade") {
      hipPos = new THREE.Vector3(0.22, -0.20, -0.34);
      adsPos = hipPos;
    } else if (weaponId === "revolver") {
      hipPos = new THREE.Vector3(0.22, -0.20, -0.32);
      adsPos = new THREE.Vector3(0.0, -0.121, -0.23);
    } else if (weaponId === "shotgun") {
      hipPos = new THREE.Vector3(0.22, -0.21, -0.30);
      adsPos = new THREE.Vector3(0.0, -0.112, -0.22);
    } else {
      hipPos = new THREE.Vector3(0.21, -0.20, -0.29);
      adsPos = new THREE.Vector3(0.0, -0.109, -0.21);
    }

    const pos = hipPos.lerp(adsPos, this.adsAlpha);
    pos.x += bobX + this.swayX * (1 - this.adsAlpha * 0.6);
    pos.y += bobY + this.swayY * (1 - this.adsAlpha * 0.6) - this.switchDrop;
    pos.z += this.recoilZ;

    vm.position.copy(pos);
    vm.rotation.set(this.recoilPitch, 0, 0);

    if (weaponId === "knife") {
      vm.rotation.set(0.32, -0.35, 0.25);
      if (this.slashAnim > 0) {
        const p = 1 - this.slashAnim; // 0 -> 1
        const swing = Math.sin(p * Math.PI);
        vm.position.x -= swing * 0.34 - (p < 0.2 ? 0.06 : 0);
        vm.position.y -= swing * 0.08;
        vm.position.z -= swing * 0.22;
        vm.rotation.z += swing * 1.65;
        vm.rotation.y += swing * 1.15;
        vm.rotation.x -= swing * 0.85;

        if (this.slashArcMesh) {
          this.slashArcMesh.rotation.z = -0.8 + p * 2.2;
          this.slashArcMesh.scale.setScalar(0.85 + p * 0.45);
          this.slashArcMat.opacity = Math.max(0, (1 - p) * 0.85);
        }
      } else if (this.slashArcMesh) {
        this.slashArcMesh.visible = false;
      }
    } else if (weaponId === "grenade") {
      vm.rotation.set(0.15, -0.3, 0.1);
      if (this.throwAnim > 0) {
        const p = 1 - this.throwAnim;
        const fwd = Math.sin(p * Math.PI);
        vm.position.z -= fwd * 0.28;
        vm.position.y -= fwd * 0.14;
        vm.rotation.x -= fwd * 1.25;
      }
    } else if (isReloading) {
      const dip = Math.sin(reloadProg * Math.PI);
      vm.position.y -= dip * 0.14;
      vm.rotation.x -= dip * 0.52;
      vm.rotation.z += dip * 0.35;
    }

    if (this.sprintTilt > 0.005) {
      vm.rotation.y += 0.42 * this.sprintTilt;
      vm.rotation.x -= 0.18 * this.sprintTilt;
      vm.position.x += 0.03 * this.sprintTilt;
    }
  }

  getMuzzleWorldPos(weaponId, fallbackPos, fallbackDir) {
    const vm = this.vmWeapons[weaponId];
    if (vm && vm.visible) {
      const muzzle = vm.getObjectByName("MuzzlePoint");
      if (muzzle) {
        const out = new THREE.Vector3();
        muzzle.getWorldPosition(out);
        return out;
      }
    }
    return fallbackPos.clone().addScaledVector(fallbackDir, 0.65).add(new THREE.Vector3(0, -0.12, 0));
  }

  spawnTracer(start, end, color = 0x38e8ff) {
    const geo = new THREE.BufferGeometry().setFromPoints([start, end]);
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.9,
    });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.tracers.push({ line, mat, geo, age: 0, ttl: 0.085 });
  }

  spawnImpactSparks(pos, normal, count = 6) {
    for (let i = 0; i < count; i++) {
      const m = new THREE.Mesh(this.sparkGeo, this.sparkMat);
      m.position.copy(pos);
      this.scene.add(m);
      const vel = normal
        .clone()
        .multiplyScalar(2.2 + Math.random() * 3.5)
        .add(new THREE.Vector3((Math.random() - 0.5) * 4, Math.random() * 3.2, (Math.random() - 0.5) * 4));
      this.sparks.push({ mesh: m, vel, age: 0, ttl: 0.25 + Math.random() * 0.18 });
    }
  }

  spawnGrenade(origin, dir, thrower, inheritVel = new THREE.Vector3()) {
    const mesh = this.createThirdPersonModel("grenade");
    mesh.scale.setScalar(1.35);
    mesh.position.copy(origin);
    this.scene.add(mesh);

    const vel = dir
      .clone()
      .multiplyScalar(17.2)
      .add(new THREE.Vector3(0, 3.1, 0))
      .addScaledVector(inheritVel, 0.35);

    this.grenades.push({
      mesh,
      pos: origin.clone(),
      vel,
      angVel: new THREE.Vector3(10, 7, 13),
      thrower,
      fuse: 1.65,
      bounceCooldown: 0,
    });
  }

  spawnExplosion(pos) {
    // Cel-shaded core fireball + expanding blast sphere + ground scorch ring
    const fireballMat = new THREE.MeshBasicMaterial({
      color: 0xffb32c,
      transparent: true,
      opacity: 0.95,
    });
    const fireball = new THREE.Mesh(this.blastGeo, fireballMat);
    fireball.position.copy(pos);
    fireball.scale.setScalar(0.5);
    this.scene.add(fireball);

    const waveMat = new THREE.MeshBasicMaterial({
      color: 0xff4b24,
      transparent: true,
      opacity: 0.72,
      wireframe: false,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const wave = new THREE.Mesh(this.ringGeo, waveMat);
    wave.position.set(pos.x, Math.max(0.05, pos.y), pos.z);
    wave.scale.setScalar(0.6);
    this.scene.add(wave);

    this.blasts.push({ fireball, fireballMat, wave, waveMat, age: 0, ttl: 0.42 });
    this.spawnImpactSparks(pos.clone().add(new THREE.Vector3(0, 0.25, 0)), new THREE.Vector3(0, 1, 0), 22);
  }

  clearProjectiles() {
    for (const g of this.grenades) this.scene.remove(g.mesh);
    this.grenades.length = 0;
    for (const b of this.blasts) {
      this.scene.remove(b.fireball);
      this.scene.remove(b.wave);
      b.fireballMat.dispose();
      b.waveMat.dispose();
    }
    this.blasts.length = 0;
  }

  updateFX(dt, arena = null, onDetonate = null, onBounce = null) {
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      t.age += dt;
      if (t.age >= t.ttl) {
        this.scene.remove(t.line);
        t.geo.dispose();
        t.mat.dispose();
        this.tracers.splice(i, 1);
      } else {
        t.mat.opacity = 1.0 - t.age / t.ttl;
      }
    }

    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const s = this.sparks[i];
      s.age += dt;
      if (s.age >= s.ttl) {
        this.scene.remove(s.mesh);
        this.sparks.splice(i, 1);
      } else {
        s.vel.y -= 15 * dt;
        s.mesh.position.addScaledVector(s.vel, dt);
        s.mesh.scale.setScalar(1 - s.age / s.ttl);
      }
    }

    for (let i = this.shells.length - 1; i >= 0; i--) {
      const sh = this.shells[i];
      sh.age += dt;
      if (sh.age >= sh.ttl) {
        this.scene.remove(sh.mesh);
        this.shells.splice(i, 1);
      } else {
        sh.vel.y -= 16 * dt;
        sh.mesh.position.addScaledVector(sh.vel, dt);
        sh.mesh.rotation.x += sh.angVel.x * dt;
        sh.mesh.rotation.y += sh.angVel.y * dt;
        sh.mesh.rotation.z += sh.angVel.z * dt;
        if (sh.mesh.position.y < 0.02) {
          sh.mesh.position.y = 0.02;
          sh.vel.y = Math.abs(sh.vel.y) * 0.45;
          sh.vel.x *= 0.72;
          sh.vel.z *= 0.72;
          sh.angVel.multiplyScalar(0.6);
        }
      }
    }

    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const g = this.grenades[i];
      g.fuse -= dt;
      g.bounceCooldown = Math.max(0, g.bounceCooldown - dt);
      g.vel.y -= 18.5 * dt;
      g.pos.addScaledVector(g.vel, dt);
      g.mesh.position.copy(g.pos);
      g.mesh.rotation.x += g.angVel.x * dt;
      g.mesh.rotation.y += g.angVel.y * dt;
      g.mesh.rotation.z += g.angVel.z * dt;

      if (arena) {
        const hit = arena.resolveSphere(g.pos, g.vel, 0.12, 0.48, 0.76);
        if (hit) {
          g.mesh.position.copy(g.pos);
          g.angVel.multiplyScalar(0.75);
          if (g.bounceCooldown <= 0 && g.vel.length() > 1.8) {
            g.bounceCooldown = 0.14;
            onBounce?.(g.pos);
          }
        }
      }

      if (g.fuse <= 0) {
        this.scene.remove(g.mesh);
        this.grenades.splice(i, 1);
        this.spawnExplosion(g.pos);
        onDetonate?.(g);
      }
    }

    for (let i = this.blasts.length - 1; i >= 0; i--) {
      const b = this.blasts[i];
      b.age += dt;
      if (b.age >= b.ttl) {
        this.scene.remove(b.fireball);
        this.scene.remove(b.wave);
        b.fireballMat.dispose();
        b.waveMat.dispose();
        this.blasts.splice(i, 1);
      } else {
        const t = b.age / b.ttl;
        const fScale = 0.5 + Math.sin(Math.min(1, t * 1.4) * Math.PI * 0.5) * 3.8;
        b.fireball.scale.setScalar(fScale);
        b.fireballMat.opacity = Math.max(0, 1 - t * 1.15);
        b.fireballMat.color.setHex(t < 0.25 ? 0xffe47a : t < 0.55 ? 0xff7b24 : 0x524b4a);

        b.wave.scale.setScalar(0.6 + t * 5.8);
        b.waveMat.opacity = Math.max(0, 0.78 * (1 - t));
      }
    }
  }
}
