import * as THREE from "three";

const GRAVITY = -21.0;
const FIXED_DT = 1 / 60;
const MAX_DECALS = 100;
const MAX_BLOOD_DROPS = 210;

export class RagdollSystem {
  constructor(scene, arena, charFactory) {
    this.scene = scene;
    this.arena = arena;
    this.charFactory = charFactory;

    this.ragdolls = [];
    this.limbs = [];
    this.droppedWeapons = [];
    this.decals = [];
    this.bloodDrops = [];
    this.accumulator = 0;

    // Shared cel-shaded blood droplets & floor/wall splatters
    this.dropGeo = new THREE.SphereGeometry(0.038, 5, 4);
    this.dropMat = new THREE.MeshBasicMaterial({ color: 0xa80810 });

    this.decalGeo = new THREE.CircleGeometry(0.45, 10);
    this.decalGeo.rotateX(-Math.PI / 2);
    this.wallDecalGeo = new THREE.CircleGeometry(0.38, 9);
    this.decalMat = new THREE.MeshBasicMaterial({
      color: 0x6b0308,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    });
  }

  /**
   * Converts a dying character's skeleton into a fixed-timestep Verlet physics ragdoll.
   */
  spawnRagdoll(charInst, hitImpulse, hitBoneZone = "chest", initVel = new THREE.Vector3(), droppedWeaponMesh = null) {
    charInst.root.updateMatrixWorld(true);

    // Detach held weapon from hand & spawn as physical prop if provided
    if (charInst.weaponMount) {
      while (charInst.weaponMount.children.length > 0) {
        charInst.weaponMount.remove(charInst.weaponMount.children[0]);
      }
    }

    const getBoneWorld = (name, fallback) => {
      const b = charInst.bones[name];
      const v = fallback ? fallback.clone() : new THREE.Vector3();
      if (b) b.getWorldPosition(v);
      return v;
    };

    // Sample joint world positions directly from the live animated Mixamo pose
    const pHips = getBoneWorld("mixamorigHips");
    const pChest = getBoneWorld("mixamorigSpine2");
    const pHead = getBoneWorld("mixamorigHeadTop_End", pChest.clone().add(new THREE.Vector3(0, 0.44, 0)));
    const pShoulderL = getBoneWorld("mixamorigLeftArm");
    const pElbowL = getBoneWorld("mixamorigLeftForeArm");
    const pHandL = getBoneWorld("mixamorigLeftHandIndex1", getBoneWorld("mixamorigLeftHand"));
    const pShoulderR = getBoneWorld("mixamorigRightArm");
    const pElbowR = getBoneWorld("mixamorigRightForeArm");
    const pHandR = getBoneWorld("mixamorigRightHandIndex1", getBoneWorld("mixamorigRightHand"));
    const pHipL = getBoneWorld("mixamorigLeftUpLeg");
    const pKneeL = getBoneWorld("mixamorigLeftLeg");
    const pFootL = getBoneWorld("mixamorigLeftFoot");
    const pHipR = getBoneWorld("mixamorigRightUpLeg");
    const pKneeR = getBoneWorld("mixamorigRightLeg");
    const pFootR = getBoneWorld("mixamorigRightFoot");

    if (droppedWeaponMesh) {
      this.spawnDroppedWeapon(droppedWeaponMesh, pHandR, initVel, hitImpulse);
    }

    // Clamp initial character velocity & lethal impulse so constraints never snap violently
    const clampedInitVel = initVel.clone().clampLength(0, 6.5);
    const clampedImpulse = hitImpulse.clone().clampLength(0, 11.5);

    const makeNode = (pos, radius = 0.085, weight = 1.0, disabled = false) => ({
      pos: pos.clone(),
      prev: pos.clone().addScaledVector(clampedInitVel, -FIXED_DT),
      radius,
      weight,
      disabled,
      bloodied: false,
      grounded: false,
    });

    const sev = charInst.severedZones;
    const nodes = {
      hips: makeNode(pHips, 0.14, 1.5),
      chest: makeNode(pChest, 0.16, 1.5),
      head: makeNode(pHead, 0.12, 0.9, sev.has("head")),
      shoulderL: makeNode(pShoulderL, 0.09, 1.0),
      elbowL: makeNode(pElbowL, 0.075, 0.7, sev.has("leftArm")),
      handL: makeNode(pHandL, 0.065, 0.5, sev.has("leftArm")),
      shoulderR: makeNode(pShoulderR, 0.09, 1.0),
      elbowR: makeNode(pElbowR, 0.075, 0.7, sev.has("rightArm")),
      handR: makeNode(pHandR, 0.065, 0.5, sev.has("rightArm")),
      hipL: makeNode(pHipL, 0.10, 1.1),
      kneeL: makeNode(pKneeL, 0.085, 0.85, sev.has("leftLeg")),
      footL: makeNode(pFootL, 0.075, 0.65, sev.has("leftLeg")),
      hipR: makeNode(pHipR, 0.10, 1.1),
      kneeR: makeNode(pKneeR, 0.085, 0.85, sev.has("rightLeg")),
      footR: makeNode(pFootR, 0.075, 0.65, sev.has("rightLeg")),
    };

    // Apply smooth, physically balanced knockback impulse (at FIXED_DT)
    const addVel = (node, scale) => {
      if (node.disabled) return;
      node.prev.addScaledVector(clampedImpulse, -FIXED_DT * scale);
    };
    addVel(nodes.chest, 0.92);
    addVel(nodes.hips, 0.72);
    addVel(nodes.shoulderL, 0.78);
    addVel(nodes.shoulderR, 0.78);
    addVel(nodes.hipL, 0.62);
    addVel(nodes.hipR, 0.62);
    if (hitBoneZone === "head") addVel(nodes.head, 1.35);
    else if (hitBoneZone === "leftArm") addVel(nodes.elbowL, 1.25);
    else if (hitBoneZone === "rightArm") addVel(nodes.elbowR, 1.25);
    else if (hitBoneZone === "leftLeg") addVel(nodes.kneeL, 1.15);
    else if (hitBoneZone === "rightLeg") addVel(nodes.kneeR, 1.15);
    else addVel(nodes.head, 0.75);

    // Distance constraints (with min/max bounds to preserve human anatomy without folding)
    const link = (a, b, stiffness = 0.95, minScale = 1.0, maxScale = 1.0) => {
      const nA = nodes[a];
      const nB = nodes[b];
      if (nA.disabled || nB.disabled) return null;
      return {
        a: nA,
        b: nB,
        dist: Math.max(0.05, nA.pos.distanceTo(nB.pos)),
        stiffness,
        minScale,
        maxScale,
      };
    };

    const constraints = [
      // Core skeleton segments
      link("hips", "chest", 0.98, 0.95, 1.05),
      link("chest", "head", 0.92, 0.90, 1.05),
      link("chest", "shoulderL", 0.98, 0.95, 1.05),
      link("chest", "shoulderR", 0.98, 0.95, 1.05),
      link("shoulderL", "shoulderR", 0.98, 0.94, 1.04),
      link("shoulderL", "elbowL", 0.98, 0.96, 1.04),
      link("elbowL", "handL", 0.95, 0.94, 1.05),
      link("shoulderR", "elbowR", 0.98, 0.96, 1.04),
      link("elbowR", "handR", 0.95, 0.94, 1.05),
      link("hips", "hipL", 0.98, 0.95, 1.05),
      link("hips", "hipR", 0.98, 0.95, 1.05),
      link("hipL", "hipR", 0.98, 0.94, 1.04),
      link("hipL", "kneeL", 0.98, 0.96, 1.04),
      link("kneeL", "footL", 0.95, 0.94, 1.05),
      link("hipR", "kneeR", 0.98, 0.96, 1.04),
      link("kneeR", "footR", 0.95, 0.94, 1.05),
      // Cross-bracing anti-collapse constraints
      link("hips", "shoulderL", 0.85, 0.88, 1.10),
      link("hips", "shoulderR", 0.85, 0.88, 1.10),
      link("shoulderL", "hipR", 0.72, 0.85, 1.14),
      link("shoulderR", "hipL", 0.72, 0.85, 1.14),
      link("hips", "head", 0.75, 0.82, 1.08),
      link("chest", "hipL", 0.80, 0.88, 1.10),
      link("chest", "hipR", 0.80, 0.88, 1.10),
      // Keep knees & elbows from collapsing through torso
      link("kneeL", "kneeR", 0.45, 0.65, 2.6),
      link("hips", "footL", 0.40, 0.55, 1.15),
      link("hips", "footR", 0.40, 0.55, 1.15),
    ].filter(Boolean);

    // Reset intermediate torso/collar bones to neutral rest so torso doesn't stay weirdly twisted
    for (const bName of [
      "mixamorigSpine",
      "mixamorigSpine1",
      "mixamorigSpine2",
      "mixamorigNeck",
      "mixamorigLeftShoulder",
      "mixamorigRightShoulder",
    ]) {
      const b = charInst.bones[bName];
      const r = charInst.restPose[bName];
      if (b && r) b.quaternion.copy(r.quat);
    }
    this.charFactory.syncAllSkeletons(charInst);
    charInst.root.updateMatrixWorld(true);

    // Precompute rest-pose directions in parent-local space for direct parent->child bone alignment
    const bonePairs = [
      ["mixamorigNeck", "mixamorigHead", nodes.chest, nodes.head, "head"],
      ["mixamorigLeftArm", "mixamorigLeftForeArm", nodes.shoulderL, nodes.elbowL, "leftArm"],
      ["mixamorigLeftForeArm", "mixamorigLeftHand", nodes.elbowL, nodes.handL, "leftArm"],
      ["mixamorigRightArm", "mixamorigRightForeArm", nodes.shoulderR, nodes.elbowR, "rightArm"],
      ["mixamorigRightForeArm", "mixamorigRightHand", nodes.elbowR, nodes.handR, "rightArm"],
      ["mixamorigLeftUpLeg", "mixamorigLeftLeg", nodes.hipL, nodes.kneeL, "leftLeg"],
      ["mixamorigLeftLeg", "mixamorigLeftFoot", nodes.kneeL, nodes.footL, "leftLeg"],
      ["mixamorigRightUpLeg", "mixamorigRightLeg", nodes.hipR, nodes.kneeR, "rightLeg"],
      ["mixamorigRightLeg", "mixamorigRightFoot", nodes.kneeR, nodes.footR, "rightLeg"],
    ];

    const aligners = [];
    for (const [bName, childName, nA, nB, zone] of bonePairs) {
      if (sev.has(zone)) continue;
      const bone = charInst.bones[bName];
      const rest = charInst.restPose[bName];
      const childRest = charInst.restPose[childName];
      if (!bone || !rest || !childRest) continue;

      const restDirInParent = childRest.pos.clone().applyQuaternion(rest.quat).normalize();
      aligners.push({
        bone,
        restQuat: rest.quat.clone(),
        restDirInParent,
        nA,
        nB,
      });
    }

    // Compute clean spine root basis from current rest-aligned upper torso
    const spineBone = charInst.bones["mixamorigHips"];
    const spineParent = spineBone?.parent;
    const up0 = nodes.chest.pos.clone().sub(nodes.hips.pos).normalize();
    const right0 = nodes.shoulderR.pos.clone().sub(nodes.shoulderL.pos).normalize();
    const fwd0 = new THREE.Vector3().crossVectors(up0, right0).normalize();
    if (fwd0.lengthSq() < 0.01) fwd0.set(0, 0, -1);
    const orthoRight0 = new THREE.Vector3().crossVectors(fwd0, up0).normalize();
    const restBasisQuat = new THREE.Quaternion().setFromRotationMatrix(
      new THREE.Matrix4().makeBasis(orthoRight0, up0, fwd0)
    );
    const spineInitWorldQuat = new THREE.Quaternion();
    if (spineBone) spineBone.getWorldQuaternion(spineInitWorldQuat);
    const basisToSpineQuat = restBasisQuat.clone().invert().multiply(spineInitWorldQuat);

    this.ragdolls.push({
      charInst,
      nodes,
      nodeList: Object.values(nodes).filter((n) => !n.disabled),
      constraints,
      aligners,
      spineBone,
      spineParent,
      basisToSpineQuat,
      lastFwd: fwd0.clone(),
      age: 0,
      ttl: 11.0,
    });
  }

  spawnDroppedWeapon(weaponMesh, pos, initVel, hitImpulse) {
    weaponMesh.position.copy(pos);
    weaponMesh.rotation.set(Math.random() * 3, Math.random() * 6, Math.random() * 3);
    this.scene.add(weaponMesh);
    const vel = initVel
      .clone()
      .multiplyScalar(0.5)
      .addScaledVector(hitImpulse, 0.22)
      .add(new THREE.Vector3((Math.random() - 0.5) * 2.5, 2.4 + Math.random() * 1.8, (Math.random() - 0.5) * 2.5));
    this.droppedWeapons.push({
      mesh: weaponMesh,
      pos: weaponMesh.position,
      vel,
      angVel: new THREE.Vector3((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12),
      age: 0,
      ttl: 9.0,
    });
  }

  /**
   * Spawns a bloody severed limb or head chunk with bounce physics & blood trail.
   */
  spawnSeveredLimb(charInst, zoneName, worldPos, impulseVel) {
    const limbMesh = this.charFactory.createSeveredLimbMesh(charInst, zoneName);
    if (!limbMesh) return;

    limbMesh.position.copy(worldPos);
    limbMesh.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
    this.scene.add(limbMesh);

    const vel = impulseVel
      .clone()
      .clampLength(0, 8.0)
      .add(new THREE.Vector3((Math.random() - 0.5) * 4.2, 2.8 + Math.random() * 3.2, (Math.random() - 0.5) * 4.2));

    this.limbs.push({
      mesh: limbMesh,
      pos: limbMesh.position,
      vel,
      angVel: new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16
      ),
      radius: zoneName === "head" ? 0.13 : 0.09,
      age: 0,
      ttl: 11.0,
      dripTimer: 0,
    });

    this.spawnBloodBurst(worldPos, vel.clone().multiplyScalar(0.5), 18, true);
  }

  spawnBloodBurst(pos, dirVel = new THREE.Vector3(), count = 10, heavy = false) {
    for (let i = 0; i < count; i++) {
      if (this.bloodDrops.length >= MAX_BLOOD_DROPS) {
        const old = this.bloodDrops.shift();
        this.scene.remove(old.mesh);
      }
      const m = new THREE.Mesh(this.dropGeo, this.dropMat);
      const s = heavy ? 0.7 + Math.random() * 1.1 : 0.44 + Math.random() * 0.72;
      m.scale.setScalar(s);
      m.position.copy(pos);
      this.scene.add(m);

      const spread = heavy ? 5.2 : 3.2;
      this.bloodDrops.push({
        mesh: m,
        vel: new THREE.Vector3(
          dirVel.x + (Math.random() - 0.5) * spread,
          dirVel.y + 1.2 + Math.random() * (heavy ? 4.2 : 2.6),
          dirVel.z + (Math.random() - 0.5) * spread
        ),
        age: 0,
        ttl: 1.4,
        splatted: false,
      });
    }
  }

  spawnBloodDecal(pos, scale = 1.0) {
    if (this.decals.length >= MAX_DECALS) {
      const old = this.decals.shift();
      this.scene.remove(old);
    }
    const mesh = new THREE.Mesh(this.decalGeo, this.decalMat);
    mesh.position.set(pos.x, pos.y + 0.016, pos.z);
    mesh.rotation.y = Math.random() * Math.PI * 2;
    const sx = scale * (0.7 + Math.random() * 0.7);
    const sz = scale * (0.7 + Math.random() * 0.7);
    mesh.scale.set(sx, 1, sz);
    this.scene.add(mesh);
    this.decals.push(mesh);
  }

  spawnWallBloodSplatter(point, normal, scale = 1.0) {
    if (this.decals.length >= MAX_DECALS) {
      const old = this.decals.shift();
      this.scene.remove(old);
    }
    const mesh = new THREE.Mesh(this.wallDecalGeo, this.decalMat);
    mesh.position.copy(point).addScaledVector(normal, 0.018);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
    mesh.rotateZ(Math.random() * Math.PI * 2);
    mesh.scale.set(scale * (0.75 + Math.random() * 0.65), scale * (0.75 + Math.random() * 0.8), 1);
    this.scene.add(mesh);
    this.decals.push(mesh);
  }

  update(dt) {
    const clampedDt = Math.min(dt, 0.05);
    this.accumulator += clampedDt;

    // Fixed 60Hz ragdoll & physics step for 100% consistent behavior across framerates
    let steps = 0;
    while (this.accumulator >= FIXED_DT && steps < 3) {
      this._stepRagdolls(FIXED_DT);
      this.accumulator -= FIXED_DT;
      steps++;
    }

    // Update severed limbs, dropped weapons, and blood droplets
    this._updatePropsAndBlood(clampedDt);
  }

  _stepRagdolls(dt) {
    const tmpVel = new THREE.Vector3();

    for (let i = this.ragdolls.length - 1; i >= 0; i--) {
      const r = this.ragdolls[i];
      r.age += dt;
      if (r.age >= r.ttl) {
        this.scene.remove(r.charInst.root);
        this.ragdolls.splice(i, 1);
        continue;
      }

      if (r.age > r.ttl - 1.0) {
        r.charInst.root.position.y -= dt * 0.85;
        continue;
      }

      // Verlet integration with gentle air drag & settle sleep damping
      for (const n of r.nodeList) {
        let vx = n.pos.x - n.prev.x;
        let vy = n.pos.y - n.prev.y;
        let vz = n.pos.z - n.prev.z;

        const drag = n.grounded ? 0.86 : 0.988;
        vx *= drag;
        vy *= drag;
        vz *= drag;

        // Micro-sleep on floor to eliminate jitter
        if (n.grounded && vx * vx + vy * vy + vz * vz < 0.000018) {
          vx = 0;
          vy = 0;
          vz = 0;
        }

        n.prev.copy(n.pos);
        n.pos.x += vx;
        n.pos.y += vy + GRAVITY * dt * dt;
        n.pos.z += vz;
        n.grounded = false;
      }

      // 6 constraint iterations + arena collisions
      for (let iter = 0; iter < 6; iter++) {
        for (const c of r.constraints) {
          const dx = c.b.pos.x - c.a.pos.x;
          const dy = c.b.pos.y - c.a.pos.y;
          const dz = c.b.pos.z - c.a.pos.z;
          const d = Math.hypot(dx, dy, dz) || 1e-6;
          const minD = c.dist * c.minScale;
          const maxD = c.dist * c.maxScale;
          let target = d;
          if (d < minD) target = minD;
          else if (d > maxD) target = maxD;
          if (target === d) continue;

          const diff = ((d - target) / d) * c.stiffness;
          const wSum = c.a.weight + c.b.weight;
          const wA = c.b.weight / wSum;
          const wB = c.a.weight / wSum;
          c.a.pos.x += dx * diff * wA;
          c.a.pos.y += dy * diff * wA;
          c.a.pos.z += dz * diff * wA;
          c.b.pos.x -= dx * diff * wB;
          c.b.pos.y -= dy * diff * wB;
          c.b.pos.z -= dz * diff * wB;
        }

        for (const n of r.nodeList) {
          tmpVel.subVectors(n.pos, n.prev).divideScalar(dt);
          const speedBefore = tmpVel.length();
          const hit = this.arena.resolveSphere(n.pos, tmpVel, n.radius, 0.14, 0.72);
          if (hit) {
            n.grounded = true;
            n.prev.copy(n.pos).addScaledVector(tmpVel, -dt);
            if (!n.bloodied && speedBefore > 2.4) {
              n.bloodied = true;
              this.spawnBloodDecal(new THREE.Vector3(n.pos.x, n.pos.y - n.radius, n.pos.z), 0.78);
            }
          }
        }
      }

      this._syncRagdollBones(r);
    }
  }

  _updatePropsAndBlood(dt) {
    for (let i = this.droppedWeapons.length - 1; i >= 0; i--) {
      const w = this.droppedWeapons[i];
      w.age += dt;
      if (w.age >= w.ttl) {
        this.scene.remove(w.mesh);
        this.droppedWeapons.splice(i, 1);
        continue;
      }
      w.vel.y += GRAVITY * dt;
      w.pos.addScaledVector(w.vel, dt);
      w.mesh.rotation.x += w.angVel.x * dt;
      w.mesh.rotation.y += w.angVel.y * dt;
      w.mesh.rotation.z += w.angVel.z * dt;
      const hit = this.arena.resolveSphere(w.pos, w.vel, 0.12, 0.28, 0.74);
      if (hit) w.angVel.multiplyScalar(0.65);
    }

    for (let i = this.limbs.length - 1; i >= 0; i--) {
      const l = this.limbs[i];
      l.age += dt;
      if (l.age >= l.ttl) {
        this.scene.remove(l.mesh);
        this.limbs.splice(i, 1);
        continue;
      }

      l.vel.y += GRAVITY * dt;
      l.pos.addScaledVector(l.vel, dt);
      l.mesh.rotation.x += l.angVel.x * dt;
      l.mesh.rotation.y += l.angVel.y * dt;
      l.mesh.rotation.z += l.angVel.z * dt;

      const hit = this.arena.resolveSphere(l.pos, l.vel, l.radius, 0.34, 0.78);
      if (hit) {
        l.angVel.multiplyScalar(0.75);
        if (l.vel.length() > 1.8) {
          this.spawnBloodDecal(new THREE.Vector3(l.pos.x, l.pos.y - l.radius, l.pos.z), 0.42);
        }
      }

      l.dripTimer += dt;
      if (l.age < 1.8 && l.vel.length() > 1.5 && l.dripTimer > 0.11) {
        l.dripTimer = 0;
        this.spawnBloodBurst(l.pos, l.vel.clone().multiplyScalar(0.25), 1, false);
      }
    }

    for (let i = this.bloodDrops.length - 1; i >= 0; i--) {
      const b = this.bloodDrops[i];
      b.age += dt;
      if (b.age >= b.ttl) {
        this.scene.remove(b.mesh);
        this.bloodDrops.splice(i, 1);
        continue;
      }
      b.vel.y += GRAVITY * dt;
      b.mesh.position.addScaledVector(b.vel, dt);
      const hit = this.arena.resolveSphere(b.mesh.position, b.vel, 0.03, 0.1, 0.5);
      if (hit && !b.splatted) {
        b.splatted = true;
        if (Math.random() < 0.34) {
          this.spawnBloodDecal(b.mesh.position, 0.30 + Math.random() * 0.32);
        }
        b.age = Math.max(b.age, b.ttl - 0.15);
      }
    }
  }

  _syncRagdollBones(r) {
    const { spineBone, spineParent, nodes, aligners, basisToSpineQuat, lastFwd } = r;
    if (!spineBone || !spineParent) return;

    spineParent.updateMatrixWorld(true);
    const localHips = nodes.hips.pos.clone();
    spineParent.worldToLocal(localHips);
    spineBone.position.copy(localHips);

    const up = nodes.chest.pos.clone().sub(nodes.hips.pos);
    const right = nodes.shoulderR.pos.clone().sub(nodes.shoulderL.pos);
    if (up.lengthSq() > 0.02 && right.lengthSq() > 0.02) {
      up.normalize();
      right.normalize();
      let fwd = new THREE.Vector3().crossVectors(up, right);
      if (fwd.lengthSq() < 0.04) {
        fwd.copy(lastFwd);
      } else {
        fwd.normalize();
        lastFwd.copy(fwd);
      }
      const orthoRight = new THREE.Vector3().crossVectors(fwd, up).normalize();
      const targetWorldBasis = new THREE.Quaternion().setFromRotationMatrix(
        new THREE.Matrix4().makeBasis(orthoRight, up, fwd)
      );
      const targetWorldQuat = targetWorldBasis.multiply(basisToSpineQuat);
      const parentWorldQuat = new THREE.Quaternion();
      spineParent.getWorldQuaternion(parentWorldQuat);
      spineBone.quaternion.copy(parentWorldQuat.invert().multiply(targetWorldQuat));
    }

    const qParent = new THREE.Quaternion();
    const dirInParent = new THREE.Vector3();
    const deltaQuat = new THREE.Quaternion();

    for (const al of aligners) {
      const bone = al.bone;
      if (!bone.parent) continue;
      bone.parent.updateMatrixWorld(true);
      bone.parent.getWorldQuaternion(qParent);

      dirInParent.subVectors(al.nB.pos, al.nA.pos);
      if (dirInParent.lengthSq() < 1e-6) continue;
      dirInParent.normalize().applyQuaternion(qParent.invert());

      deltaQuat.setFromUnitVectors(al.restDirInParent, dirInParent);
      bone.quaternion.copy(deltaQuat).multiply(al.restQuat);
    }

    this.charFactory.syncAllSkeletons(r.charInst);
    r.charInst.root.updateMatrixWorld(true);
  }

  clearAll() {
    for (const r of this.ragdolls) this.scene.remove(r.charInst.root);
    for (const l of this.limbs) this.scene.remove(l.mesh);
    for (const w of this.droppedWeapons) this.scene.remove(w.mesh);
    for (const d of this.decals) this.scene.remove(d);
    for (const b of this.bloodDrops) this.scene.remove(b.mesh);
    this.ragdolls.length = 0;
    this.limbs.length = 0;
    this.droppedWeapons.length = 0;
    this.decals.length = 0;
    this.bloodDrops.length = 0;
  }
}
