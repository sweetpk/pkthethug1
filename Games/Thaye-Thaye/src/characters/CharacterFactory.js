import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import {
  getToonGradientMap,
  addSkinnedInkOutline,
} from "../graphics/CelShaderHelper.js";

export const BOT_PALETTES = [
  {
    name: "CRIMSON",
    hex: "#ef4444",
    color: 0xef4444,
    armor: 0xdc2626,
    visor: 0xff5a36,
  },
  {
    name: "COBALT",
    hex: "#3b82f6",
    color: 0x3b82f6,
    armor: 0x2563eb,
    visor: 0x38e8ff,
  },
  {
    name: "TOXIC",
    hex: "#84cc16",
    color: 0x84cc16,
    armor: 0x65a30d,
    visor: 0xbef264,
  },
  {
    name: "SOLAR",
    hex: "#fb923c",
    color: 0xfb923c,
    armor: 0xea580c,
    visor: 0xfde047,
  },
];

export const LIMB_ZONES = {
  head: {
    bones: ["mixamorigHead", "mixamorigHeadTop_End"],
    rootBone: "mixamorigHead",
    stumpParent: "mixamorigNeck",
    radius: 0.11,
  },
  leftArm: {
    bones: [
      "mixamorigLeftArm",
      "mixamorigLeftForeArm",
      "mixamorigLeftHand",
      "mixamorigLeftHandThumb1",
      "mixamorigLeftHandThumb2",
      "mixamorigLeftHandThumb3",
      "mixamorigLeftHandThumb4",
      "mixamorigLeftHandIndex1",
      "mixamorigLeftHandIndex2",
      "mixamorigLeftHandIndex3",
      "mixamorigLeftHandIndex4",
    ],
    rootBone: "mixamorigLeftArm",
    stumpParent: "mixamorigLeftShoulder",
    radius: 0.068,
  },
  rightArm: {
    bones: [
      "mixamorigRightArm",
      "mixamorigRightForeArm",
      "mixamorigRightHand",
      "mixamorigRightHandThumb1",
      "mixamorigRightHandThumb2",
      "mixamorigRightHandThumb3",
      "mixamorigRightHandThumb4",
      "mixamorigRightHandIndex1",
      "mixamorigRightHandIndex2",
      "mixamorigRightHandIndex3",
      "mixamorigRightHandIndex4",
    ],
    rootBone: "mixamorigRightArm",
    stumpParent: "mixamorigRightShoulder",
    radius: 0.068,
  },
  leftLeg: {
    bones: [
      "mixamorigLeftUpLeg",
      "mixamorigLeftLeg",
      "mixamorigLeftFoot",
      "mixamorigLeftToeBase",
      "mixamorigLeftToe_End",
    ],
    rootBone: "mixamorigLeftUpLeg",
    stumpParent: "mixamorigHips",
    radius: 0.09,
  },
  rightLeg: {
    bones: [
      "mixamorigRightUpLeg",
      "mixamorigRightLeg",
      "mixamorigRightFoot",
      "mixamorigRightToeBase",
      "mixamorigRightToe_End",
    ],
    rootBone: "mixamorigRightUpLeg",
    stumpParent: "mixamorigHips",
    radius: 0.09,
  },
};

const OPERATIVE_BASE_COLORS = {
  Op_Armor_Primary: { color: 0x2676d8, emissive: 0x000000 },
  Op_Fabric_Dark:   { color: 0x343a46, emissive: 0x000000 },
  Op_Boots_Belt:    { color: 0x222630, emissive: 0x000000 },
  Op_Skin:          { color: 0xd9a380, emissive: 0x000000 },
  Op_Metal:         { color: 0x6f7785, emissive: 0x000000 },
  Op_Visor:         { color: 0x1ee8ff, emissive: 0x1ee8ff, emissiveIntensity: 1.35 },
};

// Shared cel-shaded gore materials for stumps & marrow
export const GORE_FLESH_MAT = new THREE.MeshToonMaterial({
  color: 0xa80b12,
  emissive: 0x380004,
  gradientMap: getToonGradientMap(),
});

export const GORE_BONE_MAT = new THREE.MeshToonMaterial({
  color: 0xf2e8cf,
  gradientMap: getToonGradientMap(),
});

/**
 * Loads the Mixamo-rigged Tactical Operative FBX, handles multi-skeleton sync across
 * its 6 mesh parts, applies cel-shaded toon materials + seamless BackSide ink outlines,
 * and pre-extracts anatomical limb chunks for bloody dismemberment.
 */
export class CharacterFactory {
  constructor() {
    this.template = null;
  }

  async load() {
    const loader = new FBXLoader();
    const fbx = await loader.loadAsync("./assets/tactical_operative.fbx");
    this.template = this._prepareTemplate(fbx);
  }

  _prepareTemplate(fbxRoot) {
    fbxRoot.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(fbxRoot);
    const height = Math.max(0.01, box.max.y - box.min.y);
    const scaleFactor = 1.78 / height;
    fbxRoot.scale.multiplyScalar(scaleFactor);
    fbxRoot.updateMatrixWorld(true);

    const box2 = new THREE.Box3().setFromObject(fbxRoot);
    fbxRoot.position.y -= box2.min.y;
    fbxRoot.updateMatrixWorld(true);

    // Check facing direction via mixamorigLeftToeBase vs mixamorigLeftFoot
    let footPos = new THREE.Vector3();
    let toePos = new THREE.Vector3();
    const skinnedMeshes = [];
    const primaryBones = {};

    fbxRoot.traverse((obj) => {
      if (obj.isSkinnedMesh && obj.geometry.attributes.position.count > 0) {
        skinnedMeshes.push(obj);
      }
      if (obj.isBone) {
        if (!primaryBones[obj.name]) primaryBones[obj.name] = obj;
        if (obj.name === "mixamorigLeftFoot") obj.getWorldPosition(footPos);
        if (obj.name === "mixamorigLeftToeBase") obj.getWorldPosition(toePos);
      }
    });

    const facingZ = toePos.z - footPos.z;
    const faceFlipY = facingZ > 0 ? Math.PI : 0;

    // Pre-extract limb geometries across all 6 SkinnedMeshes for dismemberment
    const limbSubGeoms = this._extractLimbGeometries(skinnedMeshes, primaryBones);

    return {
      fbxRoot,
      faceFlipY,
      scaleFactor,
      limbSubGeoms,
    };
  }

  /**
   * Partitions triangles from all SkinnedMeshes by dominant Mixamo bone weight
   * into standalone BufferGeometries per limb zone.
   */
  _extractLimbGeometries(skinnedMeshes, primaryBones) {
    const buckets = {};
    for (const z of Object.keys(LIMB_ZONES)) buckets[z] = new Map(); // meshName -> { pos: [], norm: [] }

    const vTmp = new THREE.Vector3();
    const nTmp = new THREE.Vector3();

    for (const sm of skinnedMeshes) {
      const geom = sm.geometry;
      const bones = sm.skeleton.bones;
      const posAttr = geom.attributes.position;
      const normAttr = geom.attributes.normal;
      const skinIdxAttr = geom.attributes.skinIndex;
      const skinWtAttr = geom.attributes.skinWeight;
      const indexAttr = geom.index;
      if (!posAttr || !skinIdxAttr || !skinWtAttr) continue;

      const boneToZone = new Map();
      for (const [zoneName, cfg] of Object.entries(LIMB_ZONES)) {
        for (const bName of cfg.bones) {
          bones.forEach((b, idx) => {
            if (b.name === bName) boneToZone.set(idx, zoneName);
          });
        }
      }

      sm.updateMatrixWorld(true);
      const meshMat = sm.matrixWorld;
      const normMat = new THREE.Matrix3().getNormalMatrix(meshMat);
      const triCount = indexAttr ? indexAttr.count / 3 : posAttr.count / 3;

      for (let t = 0; t < triCount; t++) {
        const i0 = indexAttr ? indexAttr.getX(t * 3) : t * 3;
        const i1 = indexAttr ? indexAttr.getX(t * 3 + 1) : t * 3 + 1;
        const i2 = indexAttr ? indexAttr.getX(t * 3 + 2) : t * 3 + 2;

        const zoneScores = {};
        for (const vi of [i0, i1, i2]) {
          const si = [skinIdxAttr.getX(vi), skinIdxAttr.getY(vi), skinIdxAttr.getZ(vi), skinIdxAttr.getW(vi)];
          const sw = [skinWtAttr.getX(vi), skinWtAttr.getY(vi), skinWtAttr.getZ(vi), skinWtAttr.getW(vi)];
          for (let k = 0; k < 4; k++) {
            const z = boneToZone.get(si[k]);
            if (z && sw[k] > 0) {
              zoneScores[z] = (zoneScores[z] || 0) + sw[k];
            }
          }
        }

        let bestZone = null;
        let bestScore = 1.15;
        for (const [z, sc] of Object.entries(zoneScores)) {
          if (sc > bestScore) {
            bestScore = sc;
            bestZone = z;
          }
        }
        if (!bestZone) continue;

        const map = buckets[bestZone];
        if (!map.has(sm.name)) map.set(sm.name, { pos: [], norm: [] });
        const b = map.get(sm.name);

        for (const vi of [i0, i1, i2]) {
          vTmp.fromBufferAttribute(posAttr, vi).applyMatrix4(meshMat);
          nTmp.fromBufferAttribute(normAttr, vi).applyMatrix3(normMat).normalize();
          b.pos.push(vTmp.x, vTmp.y, vTmp.z);
          b.norm.push(nTmp.x, nTmp.y, nTmp.z);
        }
      }
    }

    const result = {};
    for (const [zoneName, cfg] of Object.entries(LIMB_ZONES)) {
      const rootBone = primaryBones[cfg.rootBone];
      const pivot = new THREE.Vector3();
      if (rootBone) rootBone.getWorldPosition(pivot);

      const parts = [];
      for (const [meshName, data] of buckets[zoneName].entries()) {
        if (data.pos.length === 0) continue;
        for (let i = 0; i < data.pos.length; i += 3) {
          data.pos[i] -= pivot.x;
          data.pos[i + 1] -= pivot.y;
          data.pos[i + 2] -= pivot.z;
        }
        const g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.Float32BufferAttribute(data.pos, 3));
        g.setAttribute("normal", new THREE.Float32BufferAttribute(data.norm, 3));
        parts.push({ meshName, geometry: g });
      }
      result[zoneName] = { parts, radius: cfg.radius };
    }

    return result;
  }

  /**
   * Creates an independent rigged operative instance with optional bot theme palette.
   */
  createCharacter(_gender, palette = null) {
    const tpl = this.template;
    const clone = SkeletonUtils.clone(tpl.fbxRoot);

    const wrapper = new THREE.Group();
    const modelWrap = new THREE.Group();
    modelWrap.rotation.y = tpl.faceFlipY;
    modelWrap.add(clone);
    wrapper.add(modelWrap);

    const skinnedMeshes = [];
    const meshMaterials = {};
    const bones = {}; // canonical primary bone per name
    const bonesAll = {}; // array of all bones sharing a Mixamo name across the 6 skeletons
    const restPose = {}; // rest pose of canonical primary bone

    clone.traverse((obj) => {
      if (obj.isSkinnedMesh) {
        if (obj.geometry.attributes.position.count === 0) {
          obj.visible = false;
          return;
        }
        obj.castShadow = true;
        obj.receiveShadow = true;
        obj.frustumCulled = false;

        const baseCfg = OPERATIVE_BASE_COLORS[obj.name] || { color: 0x888888, emissive: 0x000000 };
        let colHex = baseCfg.color;
        let emHex = baseCfg.emissive;
        let emInt = baseCfg.emissiveIntensity ?? 0;

        if (palette) {
          if (obj.name === "Op_Armor_Primary" && palette.armor !== undefined) colHex = palette.armor;
          else if (obj.name === "Op_Visor" && palette.visor !== undefined) {
            colHex = palette.visor;
            emHex = palette.visor;
          }
        }

        const mat = new THREE.MeshToonMaterial({
          name: obj.name,
          color: colHex,
          emissive: emHex,
          emissiveIntensity: emInt,
          gradientMap: getToonGradientMap(),
        });
        obj.material = mat;
        obj.userData.baseEmissive = new THREE.Color(emHex);
        obj.userData.baseEmissiveIntensity = emInt;
        meshMaterials[obj.name] = mat;
        skinnedMeshes.push(obj);
      }

      if (obj.isBone) {
        if (!bones[obj.name]) {
          bones[obj.name] = obj;
          restPose[obj.name] = {
            pos: obj.position.clone(),
            quat: obj.quaternion.clone(),
            scale: obj.scale.clone(),
          };
        }
        if (!bonesAll[obj.name]) bonesAll[obj.name] = [];
        bonesAll[obj.name].push(obj);
      }
    });

    // Add seamless BackSide cel-shaded black ink outlines on every operative mesh!
    for (const sm of skinnedMeshes) {
      addSkinnedInkOutline(sm, 0.0055);
    }

    wrapper.updateMatrixWorld(true);

    // Weapon mount point attached to canonical right hand
    const weaponMount = new THREE.Group();
    const handWorldScale = new THREE.Vector3(1, 1, 1);
    if (bones["mixamorigRightHand"]) {
      bones["mixamorigRightHand"].add(weaponMount);
      bones["mixamorigRightHand"].getWorldScale(handWorldScale);
    }

    const charInst = {
      root: wrapper,
      modelWrap,
      fbxRoot: clone,
      skinnedMeshes,
      meshMaterials,
      bones,
      bonesAll,
      restPose,
      weaponMount,
      handWorldScale,
      template: tpl,
      severedZones: new Set(),
      stumpNodes: [],
    };

    return charInst;
  }

  /**
   * No-op: Mixamo nested cluster bones inherit their parent canonical bone automatically.
   */
  syncAllSkeletons(_charInst) {}

  /**
   * Builds a standalone mesh group for a severed limb using the operative's actual materials.
   */
  createSeveredLimbMesh(charInst, zoneName) {
    const sub = charInst.template.limbSubGeoms[zoneName];
    if (!sub || sub.parts.length === 0) return null;

    const group = new THREE.Group();
    for (const p of sub.parts) {
      const m = charInst.meshMaterials[p.meshName] || charInst.skinnedMeshes[0]?.material;
      const mesh = new THREE.Mesh(p.geometry, m);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
    }

    const cap = new THREE.Mesh(
      new THREE.SphereGeometry(sub.radius * 0.72, 8, 6),
      GORE_FLESH_MAT
    );
    cap.scale.set(1, 0.55, 1);
    const boneNub = new THREE.Mesh(
      new THREE.CylinderGeometry(sub.radius * 0.22, sub.radius * 0.22, sub.radius * 0.65, 6),
      GORE_BONE_MAT
    );
    group.add(cap, boneNub);

    return group;
  }

  /**
   * Severs a limb or head across all skeleton copies and attaches a bloody stump cap.
   */
  severLimbOnSkeleton(charInst, zoneName) {
    if (charInst.severedZones.has(zoneName)) return false;
    const cfg = LIMB_ZONES[zoneName];
    if (!cfg) return false;
    const primaryRoot = charInst.bones[cfg.rootBone];
    if (!primaryRoot) return false;

    charInst.severedZones.add(zoneName);
    primaryRoot.scale.set(0.0001, 0.0001, 0.0001);
    const parentBone = charInst.bones[cfg.stumpParent] || primaryRoot.parent;
    if (parentBone) {
      const stump = new THREE.Group();
      const flesh = new THREE.Mesh(
        new THREE.SphereGeometry(cfg.radius * 0.78, 8, 6),
        GORE_FLESH_MAT
      );
      const bone = new THREE.Mesh(
        new THREE.CylinderGeometry(cfg.radius * 0.2, cfg.radius * 0.22, cfg.radius * 0.75, 6),
        GORE_BONE_MAT
      );
      const wp = new THREE.Vector3();
      const ws = new THREE.Vector3();
      parentBone.getWorldScale(ws);
      const invS = ws.x > 1e-5 ? 1.0 / ws.x : 1.0;
      stump.scale.setScalar(invS);

      primaryRoot.getWorldPosition(wp);
      parentBone.worldToLocal(wp);
      stump.position.copy(wp);

      stump.add(flesh, bone);
      parentBone.add(stump);
      charInst.stumpNodes.push(stump);
    }

    return true;
  }
}
