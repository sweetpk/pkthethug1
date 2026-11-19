/**
 * Low-Poly Male Tactical Operative Generator (Y-up, 1.78m, T-Pose, Cel-Shade & Outline Ready)
 *
 * Outputs into ../character-models/:
 *   - tactical_operative.glb (glTF 2.0 binary with welded closed-manifold meshes & PBR materials)
 *   - tactical_operative.obj + tactical_operative.mtl (for instant Blender / Mixamo rigging)
 *
 * Design guarantees for flawless cel-shaded BackSide outlines:
 *   1. Every sub-mesh is a closed, watertight manifold with verified positive signed volume (CCW outward winding).
 *   2. Indexed vertices share positions across rings/faces -> smooth averaged vertex normals prevent outline cracks.
 *   3. Clean T-pose with generous leg separation (±0.135m) and articulated joint edge loops for effortless rigging.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FINAL_GAME_DIR = path.resolve(__dirname, "..");
const CHAR_DIR = path.resolve(FINAL_GAME_DIR, "..", "character-models");

const MATERIALS = {
  Op_Armor_Primary: { color: [0.16, 0.52, 0.88, 1.0], metallic: 0.25, roughness: 0.45 }, // Main theme-recolorable armor
  Op_Fabric_Dark:   { color: [0.16, 0.18, 0.22, 1.0], metallic: 0.05, roughness: 0.78 }, // Undersuit, pants, gloves
  Op_Skin:          { color: [0.85, 0.64, 0.50, 1.0], metallic: 0.02, roughness: 0.72 }, // Face & jaw
  Op_Boots_Belt:    { color: [0.10, 0.11, 0.14, 1.0], metallic: 0.12, roughness: 0.65 }, // Boots, belt, pouches
  Op_Metal:         { color: [0.42, 0.46, 0.52, 1.0], metallic: 0.80, roughness: 0.32 }, // Buckles, ear-coms, trim
  Op_Visor:         { color: [0.12, 0.88, 1.00, 1.0], metallic: 0.20, roughness: 0.15, emissive: [0.16, 0.90, 1.00] },
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
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function rotX([x, y, z], deg) {
  if (!deg) return [x, y, z];
  const r = (deg * Math.PI) / 180;
  const c = Math.cos(r), s = Math.sin(r);
  return [x, y * c - z * s, y * s + z * c];
}
function rotY([x, y, z], deg) {
  if (!deg) return [x, y, z];
  const r = (deg * Math.PI) / 180;
  const c = Math.cos(r), s = Math.sin(r);
  return [x * c + z * s, y, -x * s + z * c];
}
function rotZ([x, y, z], deg) {
  if (!deg) return [x, y, z];
  const r = (deg * Math.PI) / 180;
  const c = Math.cos(r), s = Math.sin(r);
  return [x * c - y * s, x * s + y * c, z];
}
function xform(p, pos = [0, 0, 0], rot = [0, 0, 0]) {
  let q = rotX(p, rot[0]);
  q = rotY(q, rot[1]);
  q = rotZ(q, rot[2]);
  return [q[0] + pos[0], q[1] + pos[1], q[2] + pos[2]];
}

/**
 * Indexed closed-manifold mesh builder.
 * Automatically welds shared vertices & computes smooth outward normals for seamless BackSide outlines.
 */
class ManifoldBuilder {
  constructor() {
    this.positions = []; // flat [x,y,z,...]
    this.indices = [];   // uint32 triangle indices
    this.vertMap = new Map();
  }

  _addVertex(p) {
    const k = `${Math.round(p[0] * 10000)}_${Math.round(p[1] * 10000)}_${Math.round(p[2] * 10000)}`;
    if (this.vertMap.has(k)) return this.vertMap.get(k);
    const idx = this.positions.length / 3;
    this.positions.push(p[0], p[1], p[2]);
    this.vertMap.set(k, idx);
    return idx;
  }

  addTriPts(a, b, c) {
    const i0 = this._addVertex(a);
    const i1 = this._addVertex(b);
    const i2 = this._addVertex(c);
    if (i0 === i1 || i1 === i2 || i2 === i0) return;
    this.indices.push(i0, i1, i2);
  }

  addQuadPts(p0, p1, p2, p3) {
    this.addTriPts(p0, p1, p2);
    this.addTriPts(p0, p2, p3);
  }

  /**
   * Closed loft along Y: rings = [{ y, rx, rz, cx=0, cz=0, segs=8, pinchZ=1 }]
   * Guarantees watertight bottom cap, quad strip sides, and top cap.
   */
  addLoftY(rings, segs = 10) {
    const ringVerts = rings.map((r) => {
      const pts = [];
      for (let i = 0; i < segs; i++) {
        // Angle around Y so index 0 starts at +X, going toward -Z (CCW when viewed from +Y)
        const a = (i / segs) * Math.PI * 2;
        const ca = Math.cos(a);
        const sa = -Math.sin(a);
        const zScale = sa < 0 && r.frontScale ? r.frontScale : 1.0;
        const x = (r.cx || 0) + ca * r.rx;
        const z = (r.cz || 0) + sa * r.rz * zScale;
        pts.push([x, r.y, z]);
      }
      return pts;
    });

    // Bottom cap (winding facing -Y)
    const bot = ringVerts[0];
    const botCenter = [
      rings[0].cx || 0,
      rings[0].y,
      rings[0].cz || 0,
    ];
    for (let i = 0; i < segs; i++) {
      const j = (i + 1) % segs;
      this.addTriPts(botCenter, bot[j], bot[i]);
    }

    // Side quads
    for (let r = 0; r < ringVerts.length - 1; r++) {
      const r0 = ringVerts[r];
      const r1 = ringVerts[r + 1];
      for (let i = 0; i < segs; i++) {
        const j = (i + 1) % segs;
        this.addQuadPts(r0[i], r0[j], r1[j], r1[i]);
      }
    }

    // Top cap (winding facing +Y)
    const top = ringVerts[ringVerts.length - 1];
    const topCenter = [
      rings[rings.length - 1].cx || 0,
      rings[rings.length - 1].y,
      rings[rings.length - 1].cz || 0,
    ];
    for (let i = 0; i < segs; i++) {
      const j = (i + 1) % segs;
      this.addTriPts(topCenter, top[i], top[j]);
    }
  }

  /**
   * Closed loft along X (for T-pose arms): rings = [{ x, ry, rz, cy=0, cz=0 }]
   * Ordered from lower X to higher X!
   */
  addLoftX(rings, segs = 8) {
    const sorted = [...rings].sort((a, b) => a.x - b.x);
    const ringVerts = sorted.map((r) => {
      const pts = [];
      for (let i = 0; i < segs; i++) {
        const a = (i / segs) * Math.PI * 2;
        // Around +X: cos -> +Y, sin -> +Z (CCW when looking down -X, so +X cap is i->j)
        const y = (r.cy || 0) + Math.cos(a) * r.ry;
        const z = (r.cz || 0) + Math.sin(a) * r.rz;
        pts.push([r.x, y, z]);
      }
      return pts;
    });

    // -X cap (outward normal is -X)
    const left = ringVerts[0];
    const leftCenter = [sorted[0].x, sorted[0].cy || 0, sorted[0].cz || 0];
    for (let i = 0; i < segs; i++) {
      const j = (i + 1) % segs;
      this.addTriPts(leftCenter, left[j], left[i]);
    }

    // Side quads (outward normal radial)
    for (let r = 0; r < ringVerts.length - 1; r++) {
      const r0 = ringVerts[r];
      const r1 = ringVerts[r + 1];
      for (let i = 0; i < segs; i++) {
        const j = (i + 1) % segs;
        this.addQuadPts(r0[i], r0[j], r1[j], r1[i]);
      }
    }

    // +X cap (outward normal is +X)
    const right = ringVerts[ringVerts.length - 1];
    const rightCenter = [sorted[sorted.length - 1].x, sorted[sorted.length - 1].cy || 0, sorted[sorted.length - 1].cz || 0];
    for (let i = 0; i < segs; i++) {
      const j = (i + 1) % segs;
      this.addTriPts(rightCenter, right[i], right[j]);
    }
  }

  /**
   * Closed chamfered box (8-sided XY extruded along Z or Y) with welded vertices.
   */
  addChamferBox(sx, sy, sz, chamfer = 0.015, pos = [0, 0, 0], rot = [0, 0, 0]) {
    const hx = sx * 0.5;
    const hy = sy * 0.5;
    const hz = sz * 0.5;
    const c = Math.min(chamfer, hx * 0.45, hy * 0.45);
    const profile = [
      [hx - c, -hy],
      [hx, -hy + c],
      [hx, hy - c],
      [hx - c, hy],
      [-hx + c, hy],
      [-hx, hy - c],
      [-hx, -hy + c],
      [-hx + c, -hy],
    ];
    const back = profile.map(([x, y]) => xform([x, y, hz], pos, rot));
    const front = profile.map(([x, y]) => xform([x, y, -hz], pos, rot));
    const backCenter = xform([0, 0, hz], pos, rot);
    const frontCenter = xform([0, 0, -hz], pos, rot);

    const n = profile.length;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      // +Z face
      this.addTriPts(backCenter, back[i], back[j]);
      // -Z face
      this.addTriPts(frontCenter, front[j], front[i]);
      // Side quad (CCW outward)
      this.addQuadPts(front[i], front[j], back[j], back[i]);
    }
  }

  computeSmoothNormals() {
    const vCount = this.positions.length / 3;
    const normals = new Float32Array(vCount * 3);
    for (let t = 0; t < this.indices.length; t += 3) {
      const i0 = this.indices[t];
      const i1 = this.indices[t + 1];
      const i2 = this.indices[t + 2];
      const a = [this.positions[i0 * 3], this.positions[i0 * 3 + 1], this.positions[i0 * 3 + 2]];
      const b = [this.positions[i1 * 3], this.positions[i1 * 3 + 1], this.positions[i1 * 3 + 2]];
      const c = [this.positions[i2 * 3], this.positions[i2 * 3 + 1], this.positions[i2 * 3 + 2]];
      const n = cross(sub(b, a), sub(c, a));
      for (const idx of [i0, i1, i2]) {
        normals[idx * 3] += n[0];
        normals[idx * 3 + 1] += n[1];
        normals[idx * 3 + 2] += n[2];
      }
    }
    for (let i = 0; i < vCount; i++) {
      const x = normals[i * 3], y = normals[i * 3 + 1], z = normals[i * 3 + 2];
      const len = Math.hypot(x, y, z) || 1;
      normals[i * 3] = x / len;
      normals[i * 3 + 1] = y / len;
      normals[i * 3 + 2] = z / len;
    }
    return normals;
  }

  /**
   * Computes signed volume to verify positive outward CCW winding, and counts open edges.
   */
  verifyManifold() {
    let signedVol = 0;
    const edgeCount = new Map();
    const addEdge = (u, v) => {
      const k = u < v ? `${u}_${v}` : `${v}_${u}`;
      edgeCount.set(k, (edgeCount.get(k) || 0) + 1);
    };

    for (let t = 0; t < this.indices.length; t += 3) {
      const i0 = this.indices[t];
      const i1 = this.indices[t + 1];
      const i2 = this.indices[t + 2];
      addEdge(i0, i1);
      addEdge(i1, i2);
      addEdge(i2, i0);

      const a = [this.positions[i0 * 3], this.positions[i0 * 3 + 1], this.positions[i0 * 3 + 2]];
      const b = [this.positions[i1 * 3], this.positions[i1 * 3 + 1], this.positions[i1 * 3 + 2]];
      const c = [this.positions[i2 * 3], this.positions[i2 * 3 + 1], this.positions[i2 * 3 + 2]];
      signedVol += dot(a, cross(b, c)) / 6.0;
    }

    let openEdges = 0;
    for (const c of edgeCount.values()) {
      if (c !== 2) openEdges++;
    }
    return {
      verts: this.positions.length / 3,
      tris: this.indices.length / 3,
      signedVol,
      openEdges,
    };
  }
}

function buildOperative() {
  const parts = new Map();
  const part = (mat) => {
    if (!parts.has(mat)) parts.set(mat, new ManifoldBuilder());
    return parts.get(mat);
  };

  // =========================================================================
  // 1. CONTINUOUS TORSO, PELVIS, NECK (Op_Fabric_Dark)
  // =========================================================================
  part("Op_Fabric_Dark").addLoftY(
    [
      { y: 0.86, rx: 0.145, rz: 0.105, cz: 0.005 }, // Hips base
      { y: 0.94, rx: 0.165, rz: 0.115, cz: 0.005 }, // Pelvis
      { y: 1.04, rx: 0.155, rz: 0.105, cz: 0.002 }, // Waist
      { y: 1.16, rx: 0.172, rz: 0.115, cz: 0.0 },   // Lower ribcage
      { y: 1.30, rx: 0.195, rz: 0.125, cz: -0.005 }, // Chest
      { y: 1.42, rx: 0.210, rz: 0.115, cz: 0.0 },   // Upper shoulders
      { y: 1.48, rx: 0.105, rz: 0.085, cz: 0.005 }, // Collar base
      { y: 1.54, rx: 0.062, rz: 0.062, cz: 0.005 }, // Neck
    ],
    12
  );

  // =========================================================================
  // 2. LEGS (Op_Fabric_Dark) & TACTICAL BOOTS (Op_Boots_Belt) + KNEE PADS
  // =========================================================================
  for (const side of [-1, 1]) {
    const cx = side * 0.118;

    // Thigh -> Knee -> Shin (with 3 knee loops for clean bending!)
    part("Op_Fabric_Dark").addLoftY(
      [
        { y: 0.16, rx: 0.056, rz: 0.062, cx, cz: 0.005 }, // Ankle
        { y: 0.32, rx: 0.068, rz: 0.074, cx, cz: 0.008 }, // Calf
        { y: 0.46, rx: 0.066, rz: 0.068, cx, cz: 0.0 },   // Below knee
        { y: 0.50, rx: 0.068, rz: 0.070, cx, cz: -0.005 }, // Knee joint
        { y: 0.54, rx: 0.072, rz: 0.074, cx, cz: 0.0 },   // Above knee
        { y: 0.72, rx: 0.086, rz: 0.092, cx, cz: 0.0 },   // Mid thigh
        { y: 0.91, rx: 0.094, rz: 0.098, cx: side * 0.098, cz: 0.004 }, // Hip socket
      ],
      10
    );

    // Tactical Boot (feet flat at y = 0.00)
    part("Op_Boots_Belt").addChamferBox(0.115, 0.055, 0.235, 0.02, [cx, 0.0275, -0.032]); // Sole + toe box
    part("Op_Boots_Belt").addChamferBox(0.105, 0.070, 0.145, 0.02, [cx, 0.085, 0.0]);     // Ankle boot body
    part("Op_Armor_Primary").addChamferBox(0.108, 0.055, 0.132, 0.018, [cx, 0.142, 0.004]); // Shin guard cuff

    // Armored Knee Pad (on front of knee -Z)
    part("Op_Armor_Primary").addChamferBox(0.096, 0.105, 0.052, 0.018, [cx, 0.50, -0.062]);

    // Thigh Tactical Holster / Utility Pouch
    part("Op_Boots_Belt").addChamferBox(0.048, 0.145, 0.105, 0.012, [cx + side * 0.088, 0.72, 0.0]);
  }

  // =========================================================================
  // 3. TACTICAL BELT & PLATE CARRIER CHEST ARMOR
  // =========================================================================
  part("Op_Boots_Belt").addChamferBox(0.345, 0.072, 0.245, 0.025, [0, 0.99, 0.004]);
  part("Op_Metal").addChamferBox(0.085, 0.056, 0.030, 0.008, [0, 0.99, -0.118]); // Belt buckle
  // Side hip mag pouches
  part("Op_Boots_Belt").addChamferBox(0.055, 0.095, 0.095, 0.012, [-0.185, 0.985, -0.02]);
  part("Op_Boots_Belt").addChamferBox(0.055, 0.095, 0.095, 0.012, [0.185, 0.985, -0.02]);

  // Chest & Back Tactical Armor Rig (Op_Armor_Primary)
  part("Op_Armor_Primary").addChamferBox(0.32, 0.28, 0.255, 0.038, [0, 1.29, -0.004]);
  // Chest magazine pouches + sternum plate
  part("Op_Boots_Belt").addChamferBox(0.24, 0.095, 0.042, 0.010, [0, 1.21, -0.135]);
  part("Op_Armor_Primary").addChamferBox(0.20, 0.115, 0.045, 0.015, [0, 1.33, -0.128]);
  // Back power pack / spine plate
  part("Op_Boots_Belt").addChamferBox(0.20, 0.22, 0.068, 0.018, [0, 1.30, 0.135]);
  part("Op_Metal").addChamferBox(0.11, 0.14, 0.025, 0.006, [0, 1.31, 0.165]);

  // =========================================================================
  // 4. T-POSE ARMS (Op_Fabric_Dark) + PAULDRONS & GLOVES
  // =========================================================================
  for (const side of [-1, 1]) {
    // Arm loft along X from shoulder (±0.18) out to wrist (±0.68) at y = 1.40
    const pts = [
      { x: side * 0.175, ry: 0.068, rz: 0.068, cy: 1.395, cz: 0.0 }, // Shoulder socket
      { x: side * 0.26,  ry: 0.062, rz: 0.062, cy: 1.400, cz: 0.0 }, // Deltoid
      { x: side * 0.41,  ry: 0.054, rz: 0.054, cy: 1.400, cz: 0.0 }, // Above elbow
      { x: side * 0.45,  ry: 0.050, rz: 0.050, cy: 1.400, cz: 0.005 }, // Elbow joint
      { x: side * 0.49,  ry: 0.054, rz: 0.054, cy: 1.400, cz: 0.0 }, // Below elbow
      { x: side * 0.62,  ry: 0.048, rz: 0.046, cy: 1.400, cz: 0.0 }, // Mid forearm
      { x: side * 0.685, ry: 0.040, rz: 0.042, cy: 1.400, cz: 0.0 }, // Wrist
    ];
    part("Op_Fabric_Dark").addLoftX(pts, 10);

    // Angled Tactical Shoulder Pauldron
    part("Op_Armor_Primary").addChamferBox(
      0.135,
      0.115,
      0.145,
      0.025,
      [side * 0.245, 1.435, 0.0],
      [0, 0, -side * 16]
    );

    // Forearm Tactical Bracer
    part("Op_Armor_Primary").addChamferBox(0.145, 0.072, 0.088, 0.018, [side * 0.575, 1.402, 0.0]);

    // Tactical Glove (palm + mitten fingers + angled thumb pointing forward -Z)
    part("Op_Boots_Belt").addChamferBox(0.085, 0.046, 0.086, 0.015, [side * 0.725, 1.398, 0.0]);
    part("Op_Boots_Belt").addChamferBox(0.065, 0.036, 0.076, 0.012, [side * 0.785, 1.394, 0.0]);
    part("Op_Boots_Belt").addChamferBox(0.032, 0.028, 0.048, 0.008, [side * 0.735, 1.392, -0.054], [0, side * 22, 0]);
  }

  // =========================================================================
  // 5. HEAD, JAW, COMBAT HELMET & GLOWING TACTICAL VISOR (top at y = 1.78m)
  // =========================================================================
  // Sculpted jaw & face (Op_Skin)
  part("Op_Skin").addLoftY(
    [
      { y: 1.535, rx: 0.068, rz: 0.072, cz: -0.012 }, // Jaw/chin base
      { y: 1.605, rx: 0.086, rz: 0.095, cz: -0.015 }, // Cheekbones
      { y: 1.685, rx: 0.088, rz: 0.098, cz: -0.005 }, // Brow
      { y: 1.740, rx: 0.075, rz: 0.085, cz: 0.002 },  // Crown
    ],
    10
  );

  // Armored Tactical Helmet Shell (Op_Armor_Primary)
  part("Op_Armor_Primary").addLoftY(
    [
      { y: 1.635, rx: 0.104, rz: 0.116, cz: 0.008 }, // Helmet rim
      { y: 1.695, rx: 0.112, rz: 0.125, cz: 0.006 }, // Mid dome
      { y: 1.750, rx: 0.098, rz: 0.112, cz: 0.004 }, // Upper bevel
      { y: 1.780, rx: 0.062, rz: 0.076, cz: 0.002 }, // Top crown (1.78m!)
    ],
    12
  );

  // Sleek Glowing Tactical Visor Strip (front face -Z)
  part("Op_Visor").addChamferBox(0.148, 0.048, 0.046, 0.012, [0, 1.648, -0.098]);
  // Helmet Brow Ridge & Side Ear-Coms
  part("Op_Metal").addChamferBox(0.165, 0.024, 0.052, 0.008, [0, 1.678, -0.102]);
  part("Op_Metal").addChamferBox(0.036, 0.068, 0.068, 0.012, [-0.112, 1.645, 0.005]);
  part("Op_Metal").addChamferBox(0.036, 0.068, 0.068, 0.012, [0.112, 1.645, 0.005]);
  // Lower chin respirator / tactical mask accent
  part("Op_Boots_Belt").addChamferBox(0.098, 0.045, 0.044, 0.012, [0, 1.568, -0.084]);

  return parts;
}

function buildGlb(parts) {
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

  const matNames = [...parts.keys()];
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

  // Combine into 1 clean multi-primitive Mesh ("TacticalOperative") so Blender/Mixamo treats it as 1 unified character mesh!
  const primitives = [];
  matNames.forEach((matName, matIdx) => {
    const b = parts.get(matName);
    const normals = b.computeSmoothNormals();
    const posArr = new Float32Array(b.positions);
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

    const normView = appendTyped(normals);
    const normBV = bufferViews.length;
    bufferViews.push({ buffer: 0, byteOffset: normView.offset, byteLength: normView.byteLength, target: 34962 });

    const idxView = appendTyped(idxArr);
    const idxBV = bufferViews.length;
    bufferViews.push({ buffer: 0, byteOffset: idxView.offset, byteLength: idxView.byteLength, target: 34963 });

    const posAcc = accessors.length;
    accessors.push({ bufferView: posBV, componentType: 5126, count: b.positions.length / 3, type: "VEC3", min, max });
    const normAcc = accessors.length;
    accessors.push({ bufferView: normBV, componentType: 5126, count: normals.length / 3, type: "VEC3" });
    const idxAcc = accessors.length;
    accessors.push({ bufferView: idxBV, componentType: 5125, count: b.indices.length, type: "SCALAR" });

    primitives.push({
      attributes: { POSITION: posAcc, NORMAL: normAcc },
      indices: idxAcc,
      material: matIdx,
    });
  });

  meshes.push({ name: "TacticalOperative_Mesh", primitives });
  nodes.push({ name: "TacticalOperative", mesh: 0 });

  const gltf = {
    asset: { version: "2.0", generator: "FoundryOperativeGen/1.0" },
    scene: 0,
    scenes: [{ name: "TacticalOperative", nodes: [0] }],
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

function buildObjAndMtl(parts) {
  const mtlLines = ["# Tactical Male Operative Materials (Y-up, meters)", ""];
  for (const [name, cfg] of Object.entries(MATERIALS)) {
    const [r, g, b] = cfg.color;
    mtlLines.push(`newmtl ${name}`);
    mtlLines.push(`Kd ${r.toFixed(4)} ${g.toFixed(4)} ${b.toFixed(4)}`);
    mtlLines.push(`Ka 0.0500 0.0500 0.0500`);
    mtlLines.push(`Ks 0.1500 0.1500 0.1500`);
    if (cfg.emissive) {
      const [er, eg, eb] = cfg.emissive;
      mtlLines.push(`Ke ${er.toFixed(4)} ${eg.toFixed(4)} ${eb.toFixed(4)}`);
    }
    mtlLines.push(`illum 2`, "");
  }

  const objLines = [
    "# Tactical Male Operative (Y-up, 1.78m, T-Pose, Cel-Shade & Outline Ready)",
    "mtllib tactical_operative.mtl",
    "o TacticalOperative",
    "",
  ];

  let vOff = 1;
  for (const [matName, b] of parts.entries()) {
    const normals = b.computeSmoothNormals();
    objLines.push(`g ${matName}`);
    objLines.push(`usemtl ${matName}`);
    for (let i = 0; i < b.positions.length; i += 3) {
      objLines.push(`v ${b.positions[i].toFixed(5)} ${b.positions[i + 1].toFixed(5)} ${b.positions[i + 2].toFixed(5)}`);
    }
    for (let i = 0; i < normals.length; i += 3) {
      objLines.push(`vn ${normals[i].toFixed(5)} ${normals[i + 1].toFixed(5)} ${normals[i + 2].toFixed(5)}`);
    }
    for (let t = 0; t < b.indices.length; t += 3) {
      const a = b.indices[t] + vOff;
      const bIdx = b.indices[t + 1] + vOff;
      const c = b.indices[t + 2] + vOff;
      objLines.push(`f ${a}//${a} ${bIdx}//${bIdx} ${c}//${c}`);
    }
    objLines.push("");
    vOff += b.positions.length / 3;
  }

  return { obj: objLines.join("\n"), mtl: mtlLines.join("\n") };
}

function main() {
  const parts = buildOperative();
  fs.mkdirSync(CHAR_DIR, { recursive: true });

  let totalVerts = 0;
  let totalTris = 0;
  for (const [name, builder] of parts.entries()) {
    const stats = builder.verifyManifold();
    totalVerts += stats.verts;
    totalTris += stats.tris;
    console.log(
      `  [${name}] verts=${stats.verts}, tris=${stats.tris}, signedVol=${stats.signedVol.toFixed(5)}, openEdges=${stats.openEdges}`
    );
    if (stats.signedVol <= 0 || stats.openEdges !== 0) {
      throw new Error(`Manifold/winding check failed on ${name}!`);
    }
  }

  const glbBuf = buildGlb(parts);
  const glbPath = path.join(CHAR_DIR, "tactical_operative.glb");
  fs.writeFileSync(glbPath, glbBuf);

  const { obj, mtl } = buildObjAndMtl(parts);
  const objPath = path.join(CHAR_DIR, "tactical_operative.obj");
  const mtlPath = path.join(CHAR_DIR, "tactical_operative.mtl");
  fs.writeFileSync(objPath, obj, "utf8");
  fs.writeFileSync(mtlPath, mtl, "utf8");

  console.log(`\nGenerated Tactical Operative (${totalVerts} verts, ${totalTris} tris):`);
  console.log(`  - ${glbPath} (${glbBuf.length} bytes)`);
  console.log(`  - ${objPath} (${Buffer.byteLength(obj)} bytes)`);
  console.log(`  - ${mtlPath} (${Buffer.byteLength(mtl)} bytes)`);
}

main();
