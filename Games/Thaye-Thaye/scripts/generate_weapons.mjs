/**
 * Zero-dependency glTF 2.0 (.glb) weapon model generator.
 * Outputs:
 *   - ../gun-models/knife.glb
 *   - ../gun-models/rifle.glb
 *   - ../gun-models/shotgun.glb
 *   - ./public/assets/weapons/{knife,rifle,shotgun}.glb
 *
 * Coordinate convention: glTF 2.0 Y-up, 1 unit = 1 meter.
 * Weapons point forward along -Z, +Y is up, +X is right.
 * Grip / hand anchor is near [0, 0, 0].
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FINAL_GAME_DIR = path.resolve(__dirname, "..");
const GUN_MODELS_DIR = path.resolve(FINAL_GAME_DIR, "..", "gun-models");
const PUBLIC_WEAPONS_DIR = path.join(FINAL_GAME_DIR, "public", "assets", "weapons");

const MATERIALS = {
  gun_steel_dark: { color: [0.13, 0.14, 0.17, 1.0], metallic: 0.85, roughness: 0.36 },
  gun_steel_mid: { color: [0.32, 0.35, 0.40, 1.0], metallic: 0.88, roughness: 0.28 },
  gun_titanium: { color: [0.68, 0.72, 0.77, 1.0], metallic: 0.92, roughness: 0.18 },
  polymer_black: { color: [0.08, 0.09, 0.11, 1.0], metallic: 0.05, roughness: 0.76 },
  polymer_slate: { color: [0.21, 0.24, 0.28, 1.0], metallic: 0.12, roughness: 0.62 },
  tactical_tan: { color: [0.46, 0.40, 0.30, 1.0], metallic: 0.08, roughness: 0.65 },
  shell_red: { color: [0.74, 0.11, 0.10, 1.0], metallic: 0.10, roughness: 0.42 },
  brass: { color: [0.84, 0.66, 0.24, 1.0], metallic: 0.90, roughness: 0.25 },
  emissive_cyan: {
    color: [0.12, 0.86, 1.0, 1.0],
    metallic: 0.0,
    roughness: 0.15,
    emissive: [0.18, 0.92, 1.0],
  },
  emissive_amber: {
    color: [1.0, 0.62, 0.12, 1.0],
    metallic: 0.0,
    roughness: 0.15,
    emissive: [1.0, 0.66, 0.14],
  },
  sight_red: {
    color: [1.0, 0.18, 0.18, 1.0],
    metallic: 0.0,
    roughness: 0.1,
    emissive: [1.0, 0.22, 0.22],
  },
};

function sub(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}
function norm(v) {
  const len = Math.hypot(v[0], v[1], v[2]);
  return len > 1e-8 ? [v[0] / len, v[1] / len, v[2] / len] : [0, 1, 0];
}
function rotX([x, y, z], deg) {
  if (!deg) return [x, y, z];
  const r = (deg * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  return [x, y * c - z * s, y * s + z * c];
}
function rotY([x, y, z], deg) {
  if (!deg) return [x, y, z];
  const r = (deg * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  return [x * c + z * s, y, -x * s + z * c];
}
function rotZ([x, y, z], deg) {
  if (!deg) return [x, y, z];
  const r = (deg * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  return [x * c - y * s, x * s + y * c, z];
}
function xform(p, pos = [0, 0, 0], rot = [0, 0, 0]) {
  let q = rotX(p, rot[0]);
  q = rotY(q, rot[1]);
  q = rotZ(q, rot[2]);
  return [q[0] + pos[0], q[1] + pos[1], q[2] + pos[2]];
}

class MeshBuilder {
  constructor() {
    this.positions = [];
    this.normals = [];
    this.indices = [];
  }

  addTri(a, b, c) {
    const n = norm(cross(sub(b, a), sub(c, a)));
    const base = this.positions.length / 3;
    this.positions.push(...a, ...b, ...c);
    this.normals.push(...n, ...n, ...n);
    this.indices.push(base, base + 1, base + 2);
  }

  addPoly(pts) {
    for (let i = 1; i < pts.length - 1; i++) {
      this.addTri(pts[0], pts[i], pts[i + 1]);
    }
  }

  addBox(sx, sy, sz, pos = [0, 0, 0], rot = [0, 0, 0]) {
    const hx = sx * 0.5;
    const hy = sy * 0.5;
    const hz = sz * 0.5;
    const p = (x, y, z) => xform([x, y, z], pos, rot);
    const faces = [
      [p(-hx, -hy, hz), p(hx, -hy, hz), p(hx, hy, hz), p(-hx, hy, hz)],       // +Z
      [p(hx, -hy, -hz), p(-hx, -hy, -hz), p(-hx, hy, -hz), p(hx, hy, -hz)],   // -Z
      [p(-hx, hy, hz), p(hx, hy, hz), p(hx, hy, -hz), p(-hx, hy, -hz)],       // +Y
      [p(-hx, -hy, -hz), p(hx, -hy, -hz), p(hx, -hy, hz), p(-hx, -hy, hz)],   // -Y
      [p(hx, -hy, hz), p(hx, -hy, -hz), p(hx, hy, -hz), p(hx, hy, hz)],       // +X
      [p(-hx, -hy, -hz), p(-hx, -hy, hz), p(-hx, hy, hz), p(-hx, hy, -hz)],   // -X
    ];
    for (const f of faces) this.addPoly(f);
  }

  // Tapered box along Z (front at -hz, back at +hz)
  addTaperedBoxZ(sxBack, syBack, sxFront, syFront, lenZ, pos = [0, 0, 0], rot = [0, 0, 0]) {
    const hz = lenZ * 0.5;
    const b0 = xform([-sxBack * 0.5, -syBack * 0.5, hz], pos, rot);
    const b1 = xform([sxBack * 0.5, -syBack * 0.5, hz], pos, rot);
    const b2 = xform([sxBack * 0.5, syBack * 0.5, hz], pos, rot);
    const b3 = xform([-sxBack * 0.5, syBack * 0.5, hz], pos, rot);
    const f0 = xform([-sxFront * 0.5, -syFront * 0.5, -hz], pos, rot);
    const f1 = xform([sxFront * 0.5, -syFront * 0.5, -hz], pos, rot);
    const f2 = xform([sxFront * 0.5, syFront * 0.5, -hz], pos, rot);
    const f3 = xform([-sxFront * 0.5, syFront * 0.5, -hz], pos, rot);

    this.addPoly([b0, b1, b2, b3]);
    this.addPoly([f1, f0, f3, f2]);
    this.addPoly([b3, b2, f2, f3]); // top
    this.addPoly([f0, f1, b1, b0]); // bottom
    this.addPoly([b1, f1, f2, b2]); // +X
    this.addPoly([f0, b0, b3, f3]); // -X
  }

  // Cylinder along Z axis
  addCylZ(rBack, rFront, lenZ, segs = 12, pos = [0, 0, 0], rot = [0, 0, 0]) {
    const hz = lenZ * 0.5;
    const backRing = [];
    const frontRing = [];
    for (let i = 0; i < segs; i++) {
      const a = (i / segs) * Math.PI * 2;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      backRing.push(xform([ca * rBack, sa * rBack, hz], pos, rot));
      frontRing.push(xform([ca * rFront, sa * rFront, -hz], pos, rot));
    }
    this.addPoly(backRing);
    this.addPoly([...frontRing].reverse());
    for (let i = 0; i < segs; i++) {
      const j = (i + 1) % segs;
      this.addPoly([backRing[j], backRing[i], frontRing[i], frontRing[j]]);
    }
  }

  // Cylinder along Y axis
  addCylY(rBot, rTop, lenY, segs = 12, pos = [0, 0, 0], rot = [0, 0, 0]) {
    this.addCylZ(rBot, rTop, lenY, segs, pos, [rot[0] + 90, rot[1], rot[2]]);
  }
}

class WeaponAsset {
  constructor(name) {
    this.name = name;
    this.parts = new Map(); // matName -> MeshBuilder
    this.markers = []; // { name, pos }
  }

  part(mat) {
    if (!this.parts.has(mat)) this.parts.set(mat, new MeshBuilder());
    return this.parts.get(mat);
  }

  addMarker(name, pos) {
    this.markers.push({ name, pos });
  }

  toGlb() {
    const chunks = [];
    let byteOffset = 0;
    const bufferViews = [];
    const accessors = [];
    const meshes = [];
    const nodes = [];

    const appendTyped = (typed) => {
      const buf = Buffer.from(typed.buffer, typed.byteOffset, typed.byteLength);
      const pad = (4 - (buf.length % 4)) % 4;
      const padded = pad ? Buffer.concat([buf, Buffer.alloc(pad)]) : buf;
      const offset = byteOffset;
      chunks.push(padded);
      byteOffset += padded.length;
      return { offset, byteLength: buf.length };
    };

    const matNames = [...this.parts.keys()];
    const gltfMaterials = matNames.map((mName) => {
      const cfg = MATERIALS[mName];
      const mat = {
        name: mName,
        pbrMetallicRoughness: {
          baseColorFactor: cfg.color,
          metallicFactor: cfg.metallic,
          roughnessFactor: cfg.roughness,
        },
      };
      if (cfg.emissive) mat.emissiveFactor = cfg.emissive;
      return mat;
    });

    const childIndices = [];
    matNames.forEach((matName, matIdx) => {
      const b = this.parts.get(matName);
      if (b.indices.length === 0) return;

      const posArr = new Float32Array(b.positions);
      const normArr = new Float32Array(b.normals);
      const idxArr = new Uint32Array(b.indices);

      let min = [Infinity, Infinity, Infinity];
      let max = [-Infinity, -Infinity, -Infinity];
      for (let i = 0; i < b.positions.length; i += 3) {
        for (let k = 0; k < 3; k++) {
          if (b.positions[i + k] < min[k]) min[k] = b.positions[i + k];
          if (b.positions[i + k] > max[k]) max[k] = b.positions[i + k];
        }
      }

      const posView = appendTyped(posArr);
      const posBV = bufferViews.length;
      bufferViews.push({ buffer: 0, byteOffset: posView.offset, byteLength: posView.byteLength, target: 34962 });

      const normView = appendTyped(normArr);
      const normBV = bufferViews.length;
      bufferViews.push({ buffer: 0, byteOffset: normView.offset, byteLength: normView.byteLength, target: 34962 });

      const idxView = appendTyped(idxArr);
      const idxBV = bufferViews.length;
      bufferViews.push({ buffer: 0, byteOffset: idxView.offset, byteLength: idxView.byteLength, target: 34963 });

      const posAcc = accessors.length;
      accessors.push({ bufferView: posBV, componentType: 5126, count: b.positions.length / 3, type: "VEC3", min, max });
      const normAcc = accessors.length;
      accessors.push({ bufferView: normBV, componentType: 5126, count: b.normals.length / 3, type: "VEC3" });
      const idxAcc = accessors.length;
      accessors.push({ bufferView: idxBV, componentType: 5125, count: b.indices.length, type: "SCALAR" });

      const meshIdx = meshes.length;
      meshes.push({
        name: `${this.name}_${matName}`,
        primitives: [{ attributes: { POSITION: posAcc, NORMAL: normAcc }, indices: idxAcc, material: matIdx }],
      });
      const nodeIdx = nodes.length;
      nodes.push({ name: `${this.name}_${matName}`, mesh: meshIdx });
      childIndices.push(nodeIdx);
    });

    for (const mk of this.markers) {
      const nodeIdx = nodes.length;
      nodes.push({ name: mk.name, translation: mk.pos });
      childIndices.push(nodeIdx);
    }

    const rootIdx = nodes.length;
    nodes.push({ name: this.name, children: childIndices });

    const gltf = {
      asset: { version: "2.0", generator: "FoundryWeaponGen/1.0" },
      scene: 0,
      scenes: [{ name: this.name, nodes: [rootIdx] }],
      nodes,
      meshes,
      materials: gltfMaterials,
      accessors,
      bufferViews,
      buffers: [{ byteLength: byteOffset }],
    };

    const jsonRaw = Buffer.from(JSON.stringify(gltf), "utf8");
    const jsonPad = (4 - (jsonRaw.length % 4)) % 4;
    const jsonChunk = jsonPad ? Buffer.concat([jsonRaw, Buffer.from(" ".repeat(jsonPad))]) : jsonRaw;
    const binChunk = Buffer.concat(chunks);

    const totalLen = 12 + 8 + jsonChunk.length + 8 + binChunk.length;
    const header = Buffer.alloc(12);
    header.writeUInt32LE(0x46546c67, 0);
    header.writeUInt32LE(2, 4);
    header.writeUInt32LE(totalLen, 8);

    const jHdr = Buffer.alloc(8);
    jHdr.writeUInt32LE(jsonChunk.length, 0);
    jHdr.writeUInt32LE(0x4e4f534a, 4);

    const bHdr = Buffer.alloc(8);
    bHdr.writeUInt32LE(binChunk.length, 0);
    bHdr.writeUInt32LE(0x004e4942, 4);

    return Buffer.concat([header, jHdr, jsonChunk, bHdr, binChunk]);
  }
}

// =========================================================================
// 1. TACTICAL COMBAT KNIFE (pointing along -Z, blade edge facing -Y / forward)
// =========================================================================
function buildKnife() {
  const w = new WeaponAsset("Knife");

  // Ergonomic grip (at origin)
  w.part("polymer_black").addCylZ(0.017, 0.016, 0.125, 10, [0, 0, 0.0]);
  for (let i = -2; i <= 2; i++) {
    w.part("polymer_slate").addCylZ(0.019, 0.019, 0.010, 10, [0, 0, i * 0.022]);
  }
  // Pommel cap + lanyard loop
  w.part("gun_steel_dark").addCylZ(0.019, 0.014, 0.024, 10, [0, 0, 0.072]);
  w.part("gun_steel_mid").addBox(0.010, 0.022, 0.016, [0, -0.008, 0.088]);

  // Crossguard
  w.part("gun_steel_dark").addBox(0.026, 0.068, 0.016, [0, -0.004, -0.068]);
  w.part("emissive_cyan").addBox(0.028, 0.016, 0.006, [0, 0.018, -0.068]);

  // Blade spine (dark steel upper) & bevelled titanium cutting edge
  w.part("gun_steel_dark").addBox(0.006, 0.016, 0.165, [0, 0.012, -0.158]);
  // Main blade body
  w.part("gun_titanium").addTaperedBoxZ(0.005, 0.028, 0.002, 0.024, 0.155, [0, -0.006, -0.155]);
  // Tanto tip (angled forward point)
  w.part("gun_titanium").addTaperedBoxZ(0.004, 0.030, 0.001, 0.004, 0.058, [0, 0.004, -0.260], [10, 0, 0]);
  // Spine serrations
  for (let i = 0; i < 6; i++) {
    w.part("gun_steel_mid").addBox(0.007, 0.005, 0.007, [0, 0.021, -0.095 - i * 0.012]);
  }
  // Fuller groove accent
  w.part("gun_steel_mid").addBox(0.007, 0.005, 0.11, [0, 0.004, -0.145]);

  w.addMarker("TipPoint", [0, 0.008, -0.29]);
  return w;
}

// =========================================================================
// 2. TACTICAL ASSAULT RIFLE (carbine, grip at origin, barrel along -Z)
// =========================================================================
function buildRifle() {
  const w = new WeaponAsset("Rifle");

  // Pistol grip (anchored at [0, 0, 0])
  w.part("polymer_black").addTaperedBoxZ(0.032, 0.042, 0.034, 0.044, 0.115, [0, -0.042, 0.012], [-72, 0, 0]);
  w.part("polymer_slate").addBox(0.035, 0.068, 0.028, [0, -0.048, 0.016], [18, 0, 0]);

  // Trigger guard & trigger
  w.part("gun_steel_dark").addBox(0.012, 0.006, 0.048, [0, -0.036, -0.032]);
  w.part("gun_steel_dark").addBox(0.012, 0.024, 0.006, [0, -0.024, -0.054]);
  w.part("gun_steel_mid").addBox(0.005, 0.020, 0.008, [0, -0.018, -0.030], [18, 0, 0]);

  // Lower & Upper Receiver
  w.part("gun_steel_dark").addBox(0.046, 0.056, 0.24, [0, 0.016, -0.065]);
  w.part("gun_steel_mid").addTaperedBoxZ(0.044, 0.042, 0.042, 0.042, 0.26, [0, 0.054, -0.072]);
  // Ejection port & charging handle
  w.part("gun_titanium").addBox(0.006, 0.016, 0.055, [0.023, 0.052, -0.075]);
  w.part("gun_steel_mid").addBox(0.024, 0.012, 0.026, [0, 0.066, 0.064]);

  // Magazine well + curved magazine
  w.part("gun_steel_dark").addBox(0.042, 0.044, 0.072, [0, -0.020, -0.105]);
  w.part("polymer_slate").addBox(0.030, 0.115, 0.062, [0, -0.088, -0.112], [8, 0, 0]);
  w.part("polymer_black").addBox(0.032, 0.105, 0.058, [0, -0.150, -0.125], [16, 0, 0]);
  w.part("emissive_cyan").addBox(0.034, 0.012, 0.012, [0, -0.10, -0.084], [8, 0, 0]);

  // Handguard shroud (ventilated tactical rail)
  w.part("polymer_slate").addTaperedBoxZ(0.048, 0.054, 0.044, 0.050, 0.26, [0, 0.048, -0.32]);
  // Handguard cooling slots / rails
  for (let i = 0; i < 4; i++) {
    w.part("gun_steel_dark").addBox(0.052, 0.010, 0.028, [0, 0.048, -0.23 - i * 0.052]);
  }
  // Angled foregrip
  w.part("polymer_black").addBox(0.030, 0.056, 0.032, [0, 0.004, -0.32], [-14, 0, 0]);

  // Barrel & muzzle brake
  w.part("gun_steel_mid").addCylZ(0.013, 0.013, 0.20, 12, [0, 0.052, -0.52]);
  w.part("gun_steel_dark").addCylZ(0.018, 0.016, 0.052, 8, [0, 0.052, -0.62]);
  w.part("gun_titanium").addCylZ(0.014, 0.014, 0.012, 8, [0, 0.052, -0.648]);

  // Top Picatinny Rail
  w.part("gun_steel_dark").addBox(0.026, 0.012, 0.48, [0, 0.080, -0.19]);

  // Holographic Sight (open frame with glowing red reticle inside)
  w.part("gun_steel_mid").addBox(0.046, 0.012, 0.084, [0, 0.090, -0.08]); // base mount
  w.part("gun_steel_dark").addBox(0.007, 0.032, 0.072, [-0.018, 0.110, -0.08]); // left hood wall
  w.part("gun_steel_dark").addBox(0.007, 0.032, 0.072, [0.018, 0.110, -0.08]); // right hood wall
  w.part("gun_steel_dark").addBox(0.043, 0.007, 0.072, [0, 0.126, -0.08]); // top hood roof
  // Glowing red holographic reticle dot in center of window
  w.part("sight_red").addBox(0.0035, 0.0035, 0.003, [0, 0.110, -0.08]);
  // Front iron sight post
  w.part("gun_steel_dark").addBox(0.014, 0.022, 0.018, [0, 0.094, -0.41]);
  w.part("emissive_cyan").addBox(0.004, 0.006, 0.004, [0, 0.105, -0.41]);

  // Tactical side status strip
  w.part("emissive_cyan").addBox(0.048, 0.007, 0.075, [0, 0.056, -0.05]);

  // Adjustable Buttstock
  w.part("gun_steel_mid").addCylZ(0.018, 0.018, 0.19, 10, [0, 0.046, 0.145]);
  w.part("polymer_slate").addTaperedBoxZ(0.036, 0.095, 0.038, 0.055, 0.18, [0, 0.024, 0.18]);
  w.part("polymer_black").addBox(0.040, 0.112, 0.024, [0, 0.016, 0.275]);

  w.addMarker("MuzzlePoint", [0, 0.052, -0.66]);
  return w;
}

// =========================================================================
// 3. HEAVY COMBAT PUMP SHOTGUN
// =========================================================================
function buildShotgun() {
  const w = new WeaponAsset("Shotgun");

  // Angled heavy grip & stock transition (grip at [0, 0, 0])
  w.part("polymer_black").addBox(0.036, 0.052, 0.11, [0, -0.018, 0.025], [-40, 0, 0]);
  w.part("polymer_slate").addTaperedBoxZ(0.040, 0.105, 0.042, 0.058, 0.24, [0, 0.005, 0.18], [-6, 0, 0]);
  w.part("polymer_black").addBox(0.042, 0.118, 0.026, [0, -0.008, 0.30]);
  // Shell holder on stock
  for (let i = 0; i < 4; i++) {
    w.part("shell_red").addCylY(0.009, 0.009, 0.042, 8, [-0.024, 0.010, 0.13 + i * 0.026]);
    w.part("brass").addCylY(0.0095, 0.0095, 0.012, 8, [-0.024, 0.034, 0.13 + i * 0.026]);
  }

  // Trigger guard
  w.part("gun_steel_dark").addBox(0.014, 0.006, 0.05, [0, -0.032, -0.04]);
  w.part("gun_steel_dark").addBox(0.014, 0.022, 0.006, [0, -0.022, -0.062]);

  // Heavy Receiver
  w.part("gun_steel_dark").addTaperedBoxZ(0.054, 0.068, 0.052, 0.066, 0.24, [0, 0.032, -0.10]);
  w.part("gun_titanium").addBox(0.006, 0.020, 0.062, [0.026, 0.044, -0.095]);
  // Side shell saddle on receiver
  for (let i = 0; i < 4; i++) {
    w.part("shell_red").addCylY(0.0085, 0.0085, 0.040, 8, [-0.030, 0.030, -0.06 - i * 0.024]);
    w.part("brass").addCylY(0.009, 0.009, 0.010, 8, [-0.030, 0.052, -0.06 - i * 0.024]);
  }

  // Heavy Barrel (upper) + Under-barrel Magazine Tube (lower)
  w.part("gun_steel_mid").addCylZ(0.017, 0.017, 0.44, 12, [0, 0.052, -0.43]);
  w.part("gun_steel_dark").addCylZ(0.015, 0.015, 0.40, 12, [0, 0.018, -0.41]);
  // Barrel clamp & heatshield shroud
  w.part("gun_steel_dark").addBox(0.042, 0.030, 0.24, [0, 0.056, -0.34]);
  w.part("gun_steel_dark").addBox(0.040, 0.058, 0.028, [0, 0.034, -0.57]);

  // Pump Forend Grip (ribbed)
  w.part("polymer_black").addCylZ(0.026, 0.026, 0.17, 10, [0, 0.016, -0.36]);
  for (let i = 0; i < 5; i++) {
    w.part("polymer_slate").addCylZ(0.028, 0.028, 0.014, 10, [0, 0.016, -0.295 - i * 0.030]);
  }

  // Ghost-ring rear sight & front amber fiber sight
  w.part("gun_steel_dark").addBox(0.032, 0.022, 0.028, [0, 0.075, -0.03]);
  w.part("emissive_amber").addBox(0.008, 0.010, 0.010, [0, 0.076, -0.61]);
  w.part("emissive_amber").addBox(0.056, 0.008, 0.055, [0, 0.048, -0.14]);

  w.addMarker("MuzzlePoint", [0, 0.052, -0.66]);
  return w;
}

function main() {
  fs.mkdirSync(GUN_MODELS_DIR, { recursive: true });
  fs.mkdirSync(PUBLIC_WEAPONS_DIR, { recursive: true });

  const builders = [
    ["knife.glb", buildKnife()],
    ["rifle.glb", buildRifle()],
    ["shotgun.glb", buildShotgun()],
  ];

  for (const [filename, asset] of builders) {
    const glb = asset.toGlb();
    const outGun = path.join(GUN_MODELS_DIR, filename);
    const outPublic = path.join(PUBLIC_WEAPONS_DIR, filename);
    fs.writeFileSync(outGun, glb);
    fs.writeFileSync(outPublic, glb);
    console.log(`Generated ${filename}: ${glb.length} bytes -> ${outGun} & ${outPublic}`);
  }
}

main();
