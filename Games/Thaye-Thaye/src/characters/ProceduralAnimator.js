import * as THREE from "three";

const damp = (cur, target, lambda, dt) =>
  THREE.MathUtils.lerp(cur, target, 1 - Math.exp(-lambda * dt));

/**
 * High-detail procedural skeletal animator for the 40-bone Blender metarig.
 * Supports directional running/strafing, knee-tuck jumps, landing compression,
 * counter-rotating hips/chest, breathing idle, reload gestures, multi-phase
 * knife slashes, recoil kick, and hit flinches.
 */
export class ProceduralAnimator {
  constructor(charInst) {
    this.char = charInst;
    this.localAxes = {};

    this.runPhase = Math.random() * Math.PI * 2;
    this.idlePhase = Math.random() * Math.PI * 2;

    // Smoothed blend channels
    this.velFwd = 0;
    this.velRight = 0;
    this.strideBlend = 0;
    this.airBlend = 0;
    this.wasGrounded = true;
    this.landCompress = 0;
    this.reloadBlend = 0;
    this.downedDrop = 0;
    this.crouchBlend = 0;

    // Action impulses
    this.fireKick = 0;
    this.slashTimer = 0;
    this.hitFlinch = 0;

    this._precomputeAxes();
  }

  _precomputeAxes() {
    this.char.root.position.set(0, 0, 0);
    this.char.root.rotation.set(0, 0, 0);
    this.char.root.updateMatrixWorld(true);

    const worldRight = new THREE.Vector3(1, 0, 0);
    const worldUp = new THREE.Vector3(0, 1, 0);
    const worldFwd = new THREE.Vector3(0, 0, -1);

    const qInv = new THREE.Quaternion();
    for (const [name, bone] of Object.entries(this.char.bones)) {
      bone.getWorldQuaternion(qInv);
      qInv.invert();
      this.localAxes[name] = {
        right: worldRight.clone().applyQuaternion(qInv).normalize(),
        up: worldUp.clone().applyQuaternion(qInv).normalize(),
        fwd: worldFwd.clone().applyQuaternion(qInv).normalize(),
      };
    }

    // Measure exact rest-pose arm segment lengths & wrist-to-palm offsets
    const distBetween = (aName, bName, fallback) => {
      const a = this.char.bones[aName];
      const b = this.char.bones[bName];
      if (!a || !b) return fallback;
      const pa = new THREE.Vector3();
      const pb = new THREE.Vector3();
      a.getWorldPosition(pa);
      b.getWorldPosition(pb);
      const d = pa.distanceTo(pb);
      return d > 1e-4 ? d : fallback;
    };

    this.armLengths = {
      upperR: distBetween("mixamorigRightArm", "mixamorigRightForeArm", 0.25),
      foreR: distBetween("mixamorigRightForeArm", "mixamorigRightHand", 0.24),
      palmR: distBetween("mixamorigRightHand", "mixamorigRightHandIndex1", 0.048),
      upperL: distBetween("mixamorigLeftArm", "mixamorigLeftForeArm", 0.25),
      foreL: distBetween("mixamorigLeftForeArm", "mixamorigLeftHand", 0.24),
      palmL: distBetween("mixamorigLeftHand", "mixamorigLeftHandIndex1", 0.044),
    };

    // Seat weaponMount directly inside the cupped Right Palm instead of the wrist seam
    if (this.char.weaponMount && this.localAxes["mixamorigRightHand"]) {
      const axRH = this.localAxes["mixamorigRightHand"];
      const ws = this.char.handWorldScale?.x || 1;
      const invS = ws > 1e-5 ? 1.0 / ws : 1.0;
      const palmOffset = axRH.right
        .clone()
        .multiplyScalar(0.046 * invS)
        .addScaledVector(axRH.up, -0.020 * invS);
      this.char.weaponMount.position.copy(palmOffset);
    }
  }

  _rotateBone(name, rx = 0, ry = 0, rz = 0) {
    const bone = this.char.bones[name];
    const rest = this.char.restPose[name];
    const axes = this.localAxes[name];
    if (!bone || !rest || !axes) return;

    bone.quaternion.copy(rest.quat);
    if (rx !== 0) {
      bone.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(axes.right, rx));
    }
    if (ry !== 0) {
      bone.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(axes.up, ry));
    }
    if (rz !== 0) {
      bone.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(axes.fwd, rz));
    }
  }

  _alignBoneDir(bName, cName, targetDirRoot, qRoot) {
    const b = this.char.bones[bName];
    const c = this.char.bones[cName];
    if (!b || !c || !b.parent) return;
    this.char.root.updateMatrixWorld(true);
    const pB = new THREE.Vector3();
    const pC = new THREE.Vector3();
    b.getWorldPosition(pB);
    c.getWorldPosition(pC);
    const curDir = pC.sub(pB);
    if (curDir.lengthSq() < 1e-8) return;
    curDir.normalize();

    const targetDirWorld = targetDirRoot.clone().normalize().applyQuaternion(qRoot);
    const qParent = new THREE.Quaternion();
    b.parent.getWorldQuaternion(qParent);
    const qParentInv = qParent.clone().invert();

    const d1 = curDir.applyQuaternion(qParentInv);
    const d2 = targetDirWorld.applyQuaternion(qParentInv);
    const delta = new THREE.Quaternion().setFromUnitVectors(d1, d2);
    b.quaternion.premultiply(delta);
  }

  /**
   * Exact analytical 2-Bone IK solver (Law of Cosines) placing wrist onto target in root space.
   */
  _solveTwoBoneIK(upperName, foreName, handName, wristTargetRoot, poleDirRoot, upperLen, foreLen, qRoot) {
    const upper = this.char.bones[upperName];
    const fore = this.char.bones[foreName];
    const hand = this.char.bones[handName];
    if (!upper || !fore || !hand) return;

    this.char.root.updateMatrixWorld(true);
    const rootPos = this.char.root.position;
    const pS = new THREE.Vector3();
    upper.getWorldPosition(pS);

    const T = wristTargetRoot.clone().applyQuaternion(qRoot).add(rootPos);
    const toTarget = T.clone().sub(pS);
    const maxReach = upperLen + foreLen - 0.008;
    const minReach = Math.abs(upperLen - foreLen) + 0.025;
    const rawDist = toTarget.length();
    if (rawDist < 1e-6) return;

    const d = THREE.MathUtils.clamp(rawDist, minReach, maxReach);
    const f = toTarget.divideScalar(rawDist);
    const clampedT = pS.clone().addScaledVector(f, d);

    const cosA = THREE.MathUtils.clamp(
      (upperLen * upperLen + d * d - foreLen * foreLen) / (2 * upperLen * d),
      -0.999,
      0.999
    );
    const sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));

    const poleWorld = poleDirRoot.clone().normalize().applyQuaternion(qRoot);
    const bend = poleWorld.sub(f.clone().multiplyScalar(poleWorld.dot(f)));
    if (bend.lengthSq() < 1e-6) bend.set(0, -1, 0);
    bend.normalize();

    const elbowWorld = pS
      .clone()
      .addScaledVector(f, upperLen * cosA)
      .addScaledVector(bend, upperLen * sinA);

    const upperDirRoot = elbowWorld.clone().sub(pS).applyQuaternion(qRoot.clone().invert()).normalize();
    const foreDirRoot = clampedT.clone().sub(elbowWorld).applyQuaternion(qRoot.clone().invert()).normalize();

    this._alignBoneDir(upperName, foreName, upperDirRoot, qRoot);
    this._alignBoneDir(foreName, handName, foreDirRoot, qRoot);
  }

  /**
   * Aligns hand wrist bone so fingers point along targetFingerDirRoot and palm faces targetPalmDirRoot.
   */
  _orientHandBasis(handName, isLeft, targetFingerDirRoot, targetPalmDirRoot, qRoot) {
    const hand = this.char.bones[handName];
    const ax = this.localAxes[handName];
    if (!hand || !ax || !hand.parent) return;

    this.char.root.updateMatrixWorld(true);
    const qHandWorld = new THREE.Quaternion();
    hand.getWorldQuaternion(qHandWorld);

    // Local finger & palm basis vectors from rest T-pose
    const fingerLocal = ax.right.clone().multiplyScalar(isLeft ? -1 : 1).normalize();
    const palmLocal = ax.up.clone().negate().normalize();

    const curFingerW = fingerLocal.clone().applyQuaternion(qHandWorld).normalize();
    const targetFingerW = targetFingerDirRoot.clone().normalize().applyQuaternion(qRoot);

    const qParent = new THREE.Quaternion();
    hand.parent.getWorldQuaternion(qParent);
    const qParentInv = qParent.clone().invert();

    const d1 = curFingerW.clone().applyQuaternion(qParentInv);
    const d2 = targetFingerW.clone().applyQuaternion(qParentInv);
    const align1 = new THREE.Quaternion().setFromUnitVectors(d1, d2);
    hand.quaternion.premultiply(align1);

    // Step 2: Twist hand cleanly around finger axis so palm faces targetPalmDirRoot
    this.char.root.updateMatrixWorld(true);
    hand.getWorldQuaternion(qHandWorld);
    const curPalmW = palmLocal.clone().applyQuaternion(qHandWorld);
    curPalmW.addScaledVector(targetFingerW, -curPalmW.dot(targetFingerW));
    const targetPalmW = targetPalmDirRoot.clone().normalize().applyQuaternion(qRoot);
    targetPalmW.addScaledVector(targetFingerW, -targetPalmW.dot(targetFingerW));

    if (curPalmW.lengthSq() > 1e-6 && targetPalmW.lengthSq() > 1e-6) {
      curPalmW.normalize();
      targetPalmW.normalize();
      const cross = new THREE.Vector3().crossVectors(curPalmW, targetPalmW);
      const angle = Math.atan2(cross.dot(targetFingerW), curPalmW.dot(targetPalmW));
      hand.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(fingerLocal, angle));
    }
  }

  _curlFingers(side, fingerCurl = 0.85, thumbCurl = 0.45) {
    const sign = side === "Right" ? 1 : -1;
    const prefix = `mixamorig${side}Hand`;
    this._rotateBone(`${prefix}Index1`, 0, 0, sign * fingerCurl * 0.85);
    this._rotateBone(`${prefix}Index2`, 0, 0, sign * fingerCurl * 1.05);
    this._rotateBone(`${prefix}Index3`, 0, 0, sign * fingerCurl * 0.75);
    this._rotateBone(`${prefix}Thumb1`, -thumbCurl * 0.55, sign * thumbCurl * 0.4, sign * thumbCurl * 0.35);
    this._rotateBone(`${prefix}Thumb2`, -thumbCurl * 0.7, 0, sign * thumbCurl * 0.3);
    this._rotateBone(`${prefix}Thumb3`, -thumbCurl * 0.5, 0, 0);
  }

  triggerFire(strength = 1.0) {
    this.fireKick = Math.min(1.2, this.fireKick + strength);
  }

  triggerSlash() {
    this.slashTimer = 0.34;
  }

  triggerFlinch() {
    this.hitFlinch = 1.0;
  }

  /**
   * Updates skeletal pose. Accepts either an options object or legacy positional args.
   */
  update(dt, stateOrSpeed, groundedArg = true, aimPitchArg = 0, weaponTypeArg = "rifle") {
    let velX = 0, velZ = 0, yaw = 0, grounded = groundedArg, aimPitch = aimPitchArg, weaponType = weaponTypeArg;
    let isReloading = false, reloadProg = 0, crouchTarget = 0;

    if (typeof stateOrSpeed === "object" && stateOrSpeed !== null) {
      const st = stateOrSpeed;
      velX = st.vel?.x ?? 0;
      velZ = st.vel?.z ?? 0;
      yaw = st.yaw ?? 0;
      grounded = st.grounded ?? true;
      aimPitch = st.aimPitch ?? 0;
      weaponType = st.weaponType ?? "rifle";
      isReloading = st.isReloading ?? false;
      reloadProg = st.reloadProg ?? 0;
      crouchTarget = st.crouchAlpha ?? 0;
    } else {
      velZ = -(stateOrSpeed || 0);
    }

    // Decay action impulses
    this.fireKick = Math.max(0, this.fireKick - dt * 5.8);
    this.slashTimer = Math.max(0, this.slashTimer - dt);
    this.hitFlinch = Math.max(0, this.hitFlinch - dt * 5.2);

    // Landing compression trigger
    if (grounded && !this.wasGrounded) {
      this.landCompress = 1.0;
    }
    this.wasGrounded = grounded;
    this.landCompress = Math.max(0, this.landCompress - dt * 4.8);

    // Project horizontal velocity onto character's local forward (-Z) and right (+X)
    const fwdX = -Math.sin(yaw);
    const fwdZ = -Math.cos(yaw);
    const rightX = Math.cos(yaw);
    const rightZ = -Math.sin(yaw);

    const rawFwd = velX * fwdX + velZ * fwdZ;
    const rawRight = velX * rightX + velZ * rightZ;
    const rawSpeed = Math.hypot(rawFwd, rawRight);

    this.velFwd = damp(this.velFwd, rawFwd, 14, dt);
    this.velRight = damp(this.velRight, rawRight, 14, dt);
    this.strideBlend = damp(this.strideBlend, Math.min(1, rawSpeed / 6.0), 12, dt);
    this.airBlend = damp(this.airBlend, grounded ? 0 : 1, 14, dt);
    this.reloadBlend = damp(this.reloadBlend, isReloading ? 1 : 0, 12, dt);
    this.crouchBlend = damp(this.crouchBlend, crouchTarget, 12, dt);

    // Advance gait and idle phases
    const speedMag = Math.hypot(this.velFwd, this.velRight);
    const dirSign = this.velFwd >= -0.3 ? 1 : -1;
    if (speedMag > 0.35 && grounded) {
      this.runPhase += dt * (4.2 + speedMag * 1.45) * dirSign;
    }
    this.idlePhase += dt * 2.1;

    const s = Math.sin(this.runPhase);
    const c = Math.cos(this.runPhase);
    const stride = this.strideBlend * (1 - this.airBlend * 0.75);
    const fwdFactor = THREE.MathUtils.clamp(this.velFwd / 6.0, -1, 1);
    const strafeFactor = THREE.MathUtils.clamp(this.velRight / 6.0, -1, 1);

    // =========================================================================
    // 1. LEGS (note: +rx swings leg forward -Z; -rx bends knee backward +Z)
    // =========================================================================
    const sev = this.char.severedZones;
    const missingLeftLeg = !!sev?.has("leftLeg");
    const missingRightLeg = !!sev?.has("rightLeg");
    const bothLegsLost = missingLeftLeg && missingRightLeg;
    const oneLegLost = (missingLeftLeg || missingRightLeg) && !bothLegsLost;

    // Smoothly drop pelvis to floor level when 1 or both legs are severed
    const targetDownedDrop = bothLegsLost ? 0.82 : oneLegLost ? 0.48 : 0;
    this.downedDrop = damp(this.downedDrop, targetDownedDrop, 14, dt);

    // Idle weight-shifted combat stance
    const idleShift = Math.sin(this.idlePhase * 0.65) * 0.04;
    const landKnee = this.landCompress * 0.48;

    let thighLRx = 0.16 + idleShift - landKnee * 0.8;
    let shinLRx = -0.22 - landKnee * 1.5;
    let footLRx = 0.08 + landKnee * 0.5;
    let thighLRz = 0.05;

    let thighRRx = -0.14 - idleShift - landKnee * 0.8;
    let shinRRx = -0.18 - landKnee * 1.5;
    let footRRx = 0.22 + landKnee * 0.5;
    let thighRRz = -0.05;

    // Running / strafing gait blend
    if (stride > 0.01) {
      const swingAmp = 0.78 * (0.45 + 0.55 * Math.abs(fwdFactor));
      const runThighL = s * swingAmp;
      const runThighR = -s * swingAmp;

      // Knee tucks sharply (-rx) when leg swings forward / lifts off ground
      const liftL = Math.max(0, c * 0.85 + 0.22);
      const liftR = Math.max(0, -c * 0.85 + 0.22);
      const runShinL = -(0.12 + liftL * 0.98) - landKnee;
      const runShinR = -(0.12 + liftR * 0.98) - landKnee;

      const runFootL = -runThighL * 0.35 - liftL * 0.25;
      const runFootR = -runThighR * 0.35 - liftR * 0.25;

      // Lateral strafe leg abduction (+rz = left, -rz = right)
      const strafeL = 0.06 + Math.max(0, -s) * strafeFactor * 0.26 - strafeFactor * 0.08;
      const strafeR = -0.06 + Math.max(0, s) * strafeFactor * 0.26 - strafeFactor * 0.08;

      thighLRx = THREE.MathUtils.lerp(thighLRx, runThighL, stride);
      shinLRx = THREE.MathUtils.lerp(shinLRx, runShinL, stride);
      footLRx = THREE.MathUtils.lerp(footLRx, runFootL, stride);
      thighLRz = THREE.MathUtils.lerp(thighLRz, strafeL, stride);

      thighRRx = THREE.MathUtils.lerp(thighRRx, runThighR, stride);
      shinRRx = THREE.MathUtils.lerp(shinRRx, runShinR, stride);
      footRRx = THREE.MathUtils.lerp(footRRx, runFootR, stride);
      thighRRz = THREE.MathUtils.lerp(thighRRz, strafeR, stride);
    }

    // Airborne jump pose blend (only if at least one leg remains and airborne)
    if (this.airBlend > 0.01 && !bothLegsLost) {
      thighLRx = THREE.MathUtils.lerp(thighLRx, 0.82, this.airBlend);
      shinLRx = THREE.MathUtils.lerp(shinLRx, -1.18, this.airBlend);
      footLRx = THREE.MathUtils.lerp(footLRx, 0.32, this.airBlend);

      thighRRx = THREE.MathUtils.lerp(thighRRx, -0.32, this.airBlend);
      shinRRx = THREE.MathUtils.lerp(shinRRx, -0.52, this.airBlend);
      footRRx = THREE.MathUtils.lerp(footRRx, 0.45, this.airBlend);
    }

    // Grounded leg-loss poses: kneel on remaining leg or sit flat on thigh stumps
    if (bothLegsLost) {
      thighLRx = 1.24 + s * 0.09 * stride;
      thighRRx = 1.24 - s * 0.09 * stride;
      thighLRz = 0.22;
      thighRRz = -0.22;
    } else if (oneLegLost) {
      if (!missingLeftLeg) {
        // Kneel / brace on surviving left leg
        thighLRx = 0.96 + s * 0.16 * stride;
        shinLRx = -1.78;
        footLRx = 0.72;
        thighLRz = 0.12;
        thighRRx = 1.10;
      } else {
        // Kneel / brace on surviving right leg
        thighRRx = 0.96 + c * 0.16 * stride;
        shinRRx = -1.78;
        footRRx = 0.72;
        thighRRz = -0.12;
        thighLRx = 1.10;
      }
    } else if (this.crouchBlend > 0.01) {
      const cb = this.crouchBlend * (1 - this.airBlend * 0.6);
      thighLRx = THREE.MathUtils.lerp(thighLRx, 0.86 + s * 0.25 * stride, cb);
      shinLRx = THREE.MathUtils.lerp(shinLRx, -1.52, cb);
      footLRx = THREE.MathUtils.lerp(footLRx, 0.58, cb);
      thighRRx = THREE.MathUtils.lerp(thighRRx, 0.56 - s * 0.25 * stride, cb);
      shinRRx = THREE.MathUtils.lerp(shinRRx, -1.28, cb);
      footRRx = THREE.MathUtils.lerp(footRRx, 0.62, cb);
    }

    this._rotateBone("mixamorigLeftUpLeg", thighLRx, 0.08, thighLRz);
    this._rotateBone("mixamorigLeftLeg", shinLRx, 0, 0);
    this._rotateBone("mixamorigLeftFoot", footLRx, 0, 0);
    this._rotateBone("mixamorigLeftToeBase", -footLRx * 0.45, 0, 0);

    this._rotateBone("mixamorigRightUpLeg", thighRRx, -0.08, thighRRz);
    this._rotateBone("mixamorigRightLeg", shinRRx, 0, 0);
    this._rotateBone("mixamorigRightFoot", footRRx, 0, 0);
    this._rotateBone("mixamorigRightToeBase", -footRRx * 0.45, 0, 0);

    // =========================================================================
    // 2. SPINE, COUNTER-TWIST, BREATHING, LEAN & HEAD LOOK
    // =========================================================================
    const breathe = Math.sin(this.idlePhase) * 0.028;
    const flinchBack = -this.hitFlinch * 0.30;
    const recoilSpineScale = weaponType === "shotgun" ? 0.21 : weaponType === "revolver" ? 0.14 : 0.095;
    const recoilBack = -this.fireKick * recoilSpineScale;
    const fwdLean = 0.14 * Math.max(0, fwdFactor) + 0.05 + this.landCompress * 0.16;
    const sideLean = -strafeFactor * 0.11;

    const limpTilt = bothLegsLost
      ? Math.sin(this.runPhase) * 0.06 * stride
      : missingLeftLeg
        ? -0.10 - Math.abs(s) * 0.06
        : missingRightLeg
          ? 0.10 + Math.abs(s) * 0.06
          : 0;
    const recline = bothLegsLost ? -0.14 : oneLegLost ? 0.06 : 0;

    // Hips twist with legs while chest counter-twists to keep aim steady!
    const hipTwist = s * (oneLegLost || bothLegsLost ? 0.06 : 0.14) * stride;
    const hipRoll = c * 0.05 * stride + sideLean * 0.5 + limpTilt;
    this._rotateBone("mixamorigHips", fwdLean * 0.25 + recline * 0.5, hipTwist, hipRoll);
    this._rotateBone("mixamorigSpine", fwdLean * 0.25 + breathe * 0.4 + recline * 0.5, -hipTwist * 0.45, sideLean * 0.3 - limpTilt * 0.5);
    this._rotateBone("mixamorigSpine1", fwdLean * 0.25 + breathe * 0.6 + flinchBack * 0.4, -hipTwist * 0.45, sideLean * 0.2 - limpTilt * 0.4);
    this._rotateBone(
      "mixamorigSpine2",
      fwdLean * 0.25 + aimPitch * 0.35 + flinchBack * 0.5 + recoilBack,
      -hipTwist * 0.3,
      0
    );
    this._rotateBone("mixamorigNeck", aimPitch * 0.25 + flinchBack * 0.25, 0, 0);
    const headScan = Math.sin(this.idlePhase * 0.45) * 0.06 * (1 - stride);
    this._rotateBone("mixamorigHead", aimPitch * 0.32 - fwdLean * 0.4 + flinchBack * 0.45, headScan, -sideLean * 0.4);

    // =========================================================================
    // 3. HIP VERTICAL BOB, LIMP & LANDING COMPRESSION
    // =========================================================================
    const spine = this.char.bones["mixamorigHips"];
    const restSpine = this.char.restPose["mixamorigHips"];
    if (spine && restSpine) {
      spine.position.copy(restSpine.pos);
      const bob = (bothLegsLost || oneLegLost)
        ? Math.abs(Math.cos(this.runPhase)) * 0.018 * stride - this.landCompress * 0.035
        : grounded
          ? Math.abs(Math.cos(this.runPhase)) * 0.048 * stride - this.landCompress * 0.095
          : 0.03;
      const parent = spine.parent;
      if (parent) {
        const ws = new THREE.Vector3();
        parent.getWorldScale(ws);
        const invS = ws.y > 1e-5 ? 1.0 / ws.y : 1.0;
        const crouchDrop = !(bothLegsLost || oneLegLost) ? this.crouchBlend * 0.42 : 0;
        spine.position.y += (bob - this.downedDrop - crouchDrop) * invS;
      }
    }

    // =========================================================================
    // 4. ARMS, 2-BONE IK, PALM-GROUNDED GRIP & FINGER CURL
    // =========================================================================
    this.char.root.updateMatrixWorld(true);
    const qRoot = new THREE.Quaternion();
    this.char.root.getWorldQuaternion(qRoot);
    const qRootInv = qRoot.clone().invert();

    for (const bName of [
      "mixamorigRightShoulder",
      "mixamorigRightArm",
      "mixamorigRightForeArm",
      "mixamorigRightHand",
      "mixamorigLeftShoulder",
      "mixamorigLeftArm",
      "mixamorigLeftForeArm",
      "mixamorigLeftHand",
    ]) {
      const b = this.char.bones[bName];
      const r = this.char.restPose[bName];
      if (b && r) b.quaternion.copy(r.quat);
    }

    // Engage left clavicle slightly forward on two-handed weapons for natural relaxed reach
    const twoHanded = weaponType === "rifle" || weaponType === "shotgun" || weaponType === "revolver";
    if (twoHanded) {
      this._rotateBone("mixamorigLeftShoulder", 0, 0.26, 0.06);
      this._rotateBone("mixamorigRightShoulder", 0, -0.06, -0.04);
    }

    this.char.root.updateMatrixWorld(true);

    // Anchor hand targets directly to the live upper torso (tracks crouch, lean & downed poses automatically!)
    const posToRoot = (boneName, fallback) => {
      const b = this.char.bones[boneName];
      if (!b) return fallback.clone();
      const wp = new THREE.Vector3();
      b.getWorldPosition(wp);
      return wp.sub(this.char.root.position).applyQuaternion(qRootInv);
    };
    const rShRoot = posToRoot("mixamorigRightArm", new THREE.Vector3(0.19, 1.39, 0.01));
    const lShRoot = posToRoot("mixamorigLeftArm", new THREE.Vector3(-0.19, 1.39, 0.01));
    const shoulderMidRoot = rShRoot.clone().add(lShRoot).multiplyScalar(0.5);

    let slashArc = 0;
    let slashWind = 0;
    const k = Math.min(1.2, this.fireKick);
    const kickZ = weaponType === "shotgun" ? k * 0.072 : weaponType === "revolver" ? k * 0.045 : k * 0.026;
    const kickY = weaponType === "shotgun" ? k * 0.030 : weaponType === "revolver" ? k * 0.052 : k * 0.014;
    const muzzleFlip = weaponType === "revolver" ? k * 0.42 : weaponType === "shotgun" ? k * 0.32 : k * 0.14;
    const swayY = Math.sin(this.idlePhase * 0.9) * 0.018 + c * 0.025 * stride;
    const reloadDip = this.reloadBlend * Math.sin(reloadProg * Math.PI);
    const qAim = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(1, 0, 0),
      aimPitch + muzzleFlip * 0.45 + swayY
    );

    // Define right-hand palm target relative to shoulderMidRoot per weapon
    let rightPalmOffset;
    let rightFingersDir = new THREE.Vector3(-0.20, -0.35, -0.91).applyQuaternion(qAim).normalize();
    let rightPalmDir = new THREE.Vector3(-0.96, -0.20, 0.18).applyQuaternion(qAim).normalize();
    const rightPoleDir = new THREE.Vector3(0.82, -0.58, 0.22);

    if (weaponType === "knife") {
      if (this.slashTimer > 0) {
        const p = 1 - this.slashTimer / 0.34;
        if (p < 0.25) slashWind = p / 0.25;
        else slashArc = Math.sin(((p - 0.25) / 0.75) * Math.PI);
      }
      rightPalmOffset = new THREE.Vector3(
        0.22 + slashWind * 0.10 - slashArc * 0.22,
        -0.14 + slashWind * 0.08 - slashArc * 0.04,
        -0.31 + slashWind * 0.08 - slashArc * 0.14
      ).applyQuaternion(qAim);
      rightFingersDir = new THREE.Vector3(-0.28 - slashArc * 0.5, -0.25, -0.92).normalize();
      rightPalmDir = new THREE.Vector3(-0.92, -0.22, 0.32).normalize();
    } else if (weaponType === "grenade") {
      const toss = this.slashTimer > 0 ? Math.sin((1 - this.slashTimer / 0.34) * Math.PI) : 0;
      rightPalmOffset = new THREE.Vector3(
        0.22 - toss * 0.06,
        -0.09 + toss * 0.24,
        -0.29 - toss * 0.18
      ).applyQuaternion(qAim);
      rightFingersDir = new THREE.Vector3(-0.24, 0.15 + toss * 0.5, -0.95).normalize();
      rightPalmDir = new THREE.Vector3(-0.94, 0.12, -0.30).normalize();
    } else if (weaponType === "revolver") {
      rightPalmOffset = new THREE.Vector3(0.118, -0.038 + kickY, -0.375 + kickZ).applyQuaternion(qAim);
    } else if (weaponType === "shotgun") {
      rightPalmOffset = new THREE.Vector3(0.136, -0.072 + kickY, -0.255 + kickZ).applyQuaternion(qAim);
    } else {
      // Rifle: stock nested cleanly in front of right deltoid with room ahead of chest armor
      rightPalmOffset = new THREE.Vector3(0.132, -0.068 + kickY, -0.250 + kickZ).applyQuaternion(qAim);
    }

    const rightPalmTarget = shoulderMidRoot.clone().add(rightPalmOffset);
    const rightWristTarget = rightPalmTarget
      .clone()
      .addScaledVector(rightFingersDir, -0.046)
      .addScaledVector(rightPalmDir, -0.020);

    // Solve Right Arm IK -> Orient Right Hand -> Curl Right Fingers
    this._solveTwoBoneIK(
      "mixamorigRightArm",
      "mixamorigRightForeArm",
      "mixamorigRightHand",
      rightWristTarget,
      rightPoleDir,
      this.armLengths.upperR,
      this.armLengths.foreR,
      qRoot
    );
    this._orientHandBasis("mixamorigRightHand", false, rightFingersDir, rightPalmDir, qRoot);
    this._curlFingers("Right", weaponType === "grenade" ? 1.05 : 0.92, 0.55);

    // =========================================================================
    // 5. LOCK 3RD-PERSON WEAPON BARREL STRAIGHT ALONG CHARACTER AIM
    // =========================================================================
    const mount = this.char.weaponMount;
    if (mount && mount.parent) {
      this.char.root.updateMatrixWorld(true);
      const qParent = new THREE.Quaternion();
      mount.parent.getWorldQuaternion(qParent);

      const reloadTilt = reloadDip * 0.45;
      const aimEuler = new THREE.Euler(
        aimPitch + muzzleFlip - slashArc * 0.85 + slashWind * 0.35 + reloadTilt,
        slashArc * 1.1 - slashWind * 0.4,
        reloadTilt * 0.4,
        "YXZ"
      );
      const qAimLocal = new THREE.Quaternion().setFromEuler(aimEuler);
      const qTargetWorld = qRoot.clone().multiply(qAimLocal);
      mount.quaternion.copy(qParent.invert().multiply(qTargetWorld));
    }

    // =========================================================================
    // 6. LEFT ARM 2-BONE IK LOCKED TO EXACT WEAPON FOREGRIP / SUPPORT POINT
    // =========================================================================
    const leftPoleDir = new THREE.Vector3(-0.78, -0.60, 0.20);
    let leftPalmTarget;
    let leftFingersDir;
    let leftPalmDir;

    const hasRightArm = !sev?.has("rightArm");
    if (twoHanded && hasRightArm && mount && reloadDip < 0.15) {
      this.char.root.updateMatrixWorld(true);
      const ws = this.char.handWorldScale?.x || 1;
      const invS = ws > 1e-5 ? 1.0 / ws : 1.0;

      // Exact foregrip coordinates inside weaponMount's true weapon-meter space
      let localGrip;
      if (weaponType === "shotgun") {
        const pumpSlide = this.fireKick > 0.2 ? Math.sin(this.fireKick * Math.PI) * 0.05 : 0;
        localGrip = new THREE.Vector3(-0.014, 0.004, -0.255 + pumpSlide);
        leftFingersDir = new THREE.Vector3(0.74, 0.25, -0.62).applyQuaternion(qAim).normalize();
        leftPalmDir = new THREE.Vector3(0.24, 0.94, 0.22).applyQuaternion(qAim).normalize();
      } else if (weaponType === "revolver") {
        // Tactical two-hand weaver support cupping under/over the right knuckles & grip
        localGrip = new THREE.Vector3(-0.022, -0.024, 0.012);
        leftFingersDir = new THREE.Vector3(0.84, 0.18, -0.51).applyQuaternion(qAim).normalize();
        leftPalmDir = new THREE.Vector3(0.88, -0.15, 0.45).applyQuaternion(qAim).normalize();
      } else {
        // Rifle angled foregrip directly under forward handguard
        localGrip = new THREE.Vector3(-0.012, -0.018, -0.245);
        leftFingersDir = new THREE.Vector3(0.74, 0.22, -0.63).applyQuaternion(qAim).normalize();
        leftPalmDir = new THREE.Vector3(0.28, 0.92, 0.24).applyQuaternion(qAim).normalize();
      }

      const gripWorld = mount.localToWorld(localGrip.multiplyScalar(invS));
      leftPalmTarget = gripWorld.sub(this.char.root.position).applyQuaternion(qRootInv);
    } else if (twoHanded && reloadDip >= 0.15) {
      // Natural tactical mag-pouch drop during reload
      leftPalmTarget = shoulderMidRoot.clone().add(new THREE.Vector3(-0.14, -0.32 * reloadDip - 0.12, -0.18));
      leftFingersDir = new THREE.Vector3(0.7, -0.3, -0.6).normalize();
      leftPalmDir = new THREE.Vector3(0.6, 0.6, 0.4).normalize();
    } else {
      // Knife / Grenade off-hand ready guard stance
      const armSwing = s * 0.06 * stride;
      leftPalmTarget = shoulderMidRoot.clone().add(new THREE.Vector3(-0.20, -0.14 + armSwing, -0.24));
      leftFingersDir = new THREE.Vector3(0.55, -0.25, -0.79).normalize();
      leftPalmDir = new THREE.Vector3(0.85, 0.15, 0.50).normalize();
    }

    const leftWristTarget = leftPalmTarget
      .clone()
      .addScaledVector(leftFingersDir, -0.040)
      .addScaledVector(leftPalmDir, -0.018);

    this._solveTwoBoneIK(
      "mixamorigLeftArm",
      "mixamorigLeftForeArm",
      "mixamorigLeftHand",
      leftWristTarget,
      leftPoleDir,
      this.armLengths.upperL,
      this.armLengths.foreL,
      qRoot
    );
    this._orientHandBasis("mixamorigLeftHand", true, leftFingersDir, leftPalmDir, qRoot);
    this._curlFingers("Left", twoHanded && reloadDip < 0.15 ? 0.78 : 0.95, 0.45);
  }
}
