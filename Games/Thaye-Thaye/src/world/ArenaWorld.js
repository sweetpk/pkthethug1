import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { toToonMaterial, addInkEdges, getToonGradientMap } from "../graphics/CelShaderHelper.js";

/**
 * Loads the Foundry FPS Arena (.glb + arena_spec.json), enhances lighting/pickups,
 * builds a fast 2D spatial-grid triangle collider for capsule movement & raycasting,
 * and exposes spawn points, pickup pads, and a bot navigation waypoint graph.
 */
export class ArenaWorld {
  constructor(scene) {
    this.scene = scene;
    this.root = null;
    this.spec = null;
    this.spawns = [];
    this.pickups = [];
    this.waypoints = [];

    // Spatial grid for triangles (34m x 34m -> [-18, 18] in 2m cells)
    this.cellSize = 2.0;
    this.gridMin = -18.0;
    this.gridDim = 18;
    this.grid = Array.from({ length: this.gridDim * this.gridDim }, () => []);
    this.triangles = [];
    this.collidableMeshes = [];
    this.clouds = [];
    this.skyMat = null;
  }

  async load() {
    const [specRes, gltf] = await Promise.all([
      fetch("./assets/arena_spec.json").then((r) => r.json()),
      new GLTFLoader().loadAsync("./assets/fps_arena.glb"),
    ]);

    this.spec = specRes;
    this.root = gltf.scene;
    this.scene.add(this.root);

    this._setupLighting();
    this._setupSkyboxAndClouds();
    this._enhanceMaterialsAndCollectTriangles();
    this._setupSpawnsAndPickups();
    this._buildWaypoints();
  }

  _setupLighting() {
    // Rich cel-shaded daylight with clean cool-blue sky atmosphere (never washed-out white)
    this.scene.background = new THREE.Color(0x4eaef5);
    this.scene.fog = new THREE.FogExp2(0x7cc7fc, 0.0042);

    const hemi = new THREE.HemisphereLight(0xd4eeff, 0x4d4a46, 1.18);
    this.scene.add(hemi);

    // Crisp sun key light aligned with sky sun
    const dir = new THREE.DirectionalLight(0xfff4db, 1.92);
    dir.position.set(16, 24, -14);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    dir.shadow.camera.near = 2;
    dir.shadow.camera.far = 65;
    dir.shadow.camera.left = -18;
    dir.shadow.camera.right = 18;
    dir.shadow.camera.top = 18;
    dir.shadow.camera.bottom = -18;
    dir.shadow.bias = -0.0003;
    dir.shadow.normalBias = 0.025;
    this.scene.add(dir);

    // Subtle cool sky bounce fill preserving bluish contrast without washing highlights
    const fill = new THREE.DirectionalLight(0x84c7ff, 0.52);
    fill.position.set(-14, 15, 18);
    this.scene.add(fill);
  }

  _setupSkyboxAndClouds() {
    // Luminous BoTW-inspired blue cel-shaded sky dome with subtle glowing sun & soft faint rays
    const skyGeo = new THREE.SphereGeometry(95, 40, 24);
    const sunDir = new THREE.Vector3(16, 15, -18).normalize();
    this.skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        uSunDir: { value: sunDir },
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec3 vWorldDir;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldDir = normalize(wp.xyz);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        varying vec3 vWorldDir;
        uniform vec3 uSunDir;
        uniform float uTime;
        void main() {
          vec3 d = normalize(vWorldDir);
          float h = clamp(d.y, -0.15, 1.0);
          float sunDot = dot(d, uSunDir);

          // Vibrant airy blue sky gradient (brighter overhead blue, clean cyan-blue horizon, zero whitewash)
          vec3 horizon = vec3(0.36, 0.75, 0.98);
          vec3 lowSky  = vec3(0.14, 0.52, 0.95);
          vec3 midSky  = vec3(0.07, 0.36, 0.88);
          vec3 zenith  = vec3(0.04, 0.24, 0.76);

          vec3 col = horizon;
          col = mix(col, lowSky, smoothstep(0.00, 0.22, h));
          col = mix(col, midSky, smoothstep(0.18, 0.54, h));
          col = mix(col, zenith, smoothstep(0.50, 0.92, h));

          // Gentle warm sky tint closely hugging the sun without bleaching the arena
          float sunHalo = pow(max(0.0, sunDot), 7.0);
          col = mix(col, vec3(0.85, 0.90, 0.78), sunHalo * 0.20);

          // Ultra-subtle faint radial sun rays right near the corona
          vec3 sRight = normalize(cross(vec3(0.0, 1.0, 0.0), uSunDir));
          vec3 sUp = normalize(cross(uSunDir, sRight));
          float ang = atan(dot(d, sUp), dot(d, sRight));
          float rayA = 0.5 + 0.5 * sin(ang * 8.0 + uTime * 0.18);
          float rayB = 0.5 + 0.5 * sin(ang * 13.0 - uTime * 0.12 + 1.2);
          float rayPattern = smoothstep(0.45, 0.95, rayA * 0.55 + rayB * 0.45);
          float rayFalloff = pow(max(0.0, sunDot), 10.0) * (1.0 - smoothstep(0.993, 0.9985, sunDot));
          col += vec3(0.95, 0.88, 0.62) * rayPattern * rayFalloff * 0.14;

          // Clean stylized glowing Sun Disc + crisp golden corona rings
          float glowBloom = pow(max(0.0, sunDot), 72.0);
          col += vec3(1.0, 0.90, 0.56) * glowBloom * 0.35;
          if (sunDot > 0.9964) {
            col = vec3(1.05, 1.00, 0.86);
          } else if (sunDot > 0.9925) {
            col = mix(col, vec3(1.0, 0.92, 0.64), 0.78);
          } else if (sunDot > 0.986) {
            col = mix(col, vec3(0.98, 0.90, 0.65), 0.28);
          }

          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }
      `,
    });
    const skyDome = new THREE.Mesh(skyGeo, this.skyMat);
    skyDome.name = "CelSkybox";
    this.scene.add(skyDome);

    // Distant cel-shaded industrial skyline & ridge silhouettes in clean cool sky blue
    const ridgeMat = new THREE.MeshBasicMaterial({ color: 0x457cb3 });
    const spireMat = new THREE.MeshBasicMaterial({ color: 0x356598 });
    for (let i = 0; i < 20; i++) {
      const ang = (i / 20) * Math.PI * 2 + 0.15;
      const dist = 48 + (i % 3) * 8;
      const w = 10 + (i % 4) * 4;
      const h = 7 + ((i * 5) % 8) * 1.6;
      const bldg = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, 5),
        i % 2 === 0 ? ridgeMat : spireMat
      );
      bldg.position.set(Math.cos(ang) * dist, h * 0.45 - 1, Math.sin(ang) * dist);
      bldg.lookAt(0, bldg.position.y, 0);
      this.scene.add(bldg);
    }

    // Crisp sculpted cel-shaded cumulus clouds: front faces write depth FIRST (renderOrder 1),
    // BackSide outline draws SECOND (renderOrder 2) so inner intersecting seams never show!
    const cloudMat = new THREE.MeshToonMaterial({
      color: 0xffffff,
      emissive: 0x9ecaff,
      emissiveIntensity: 0.22,
      gradientMap: getToonGradientMap(),
      fog: false,
    });
    const cloudOutlineMat = new THREE.MeshBasicMaterial({
      color: 0x264873,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    const puffGeo = new THREE.IcosahedronGeometry(1, 2);

    const cloudLayouts = [
      [[-2.0, -0.05, 0.1, 1.55, 0.72, 1.2], [0.0, 0.45, 0.0, 2.0, 1.15, 1.4], [1.9, 0.0, -0.1, 1.45, 0.72, 1.15], [-0.5, 0.18, 0.75, 1.25, 0.72, 1.0]],
      [[-1.6, 0.0, 0.0, 1.5, 0.72, 1.2], [0.3, 0.42, 0.1, 1.9, 1.10, 1.35], [2.0, -0.05, 0.1, 1.3, 0.68, 1.1]],
      [[-2.3, -0.08, 0.1, 1.4, 0.68, 1.15], [-0.5, 0.40, -0.15, 1.85, 1.08, 1.3], [1.1, 0.46, 0.15, 1.95, 1.12, 1.35], [2.5, -0.04, 0.0, 1.3, 0.68, 1.05]],
    ];

    for (let i = 0; i < 16; i++) {
      const cluster = new THREE.Group();
      const layout = cloudLayouts[i % cloudLayouts.length];
      const scaleMult = 0.85 + (i % 4) * 0.22;

      for (const [px, py, pz, sx, sy, sz] of layout) {
        const puff = new THREE.Mesh(puffGeo, cloudMat);
        puff.position.set(px, py, pz);
        puff.scale.set(sx, sy, sz);
        puff.renderOrder = 1;
        cluster.add(puff);

        // Drawn after puff front faces so depth test strips all internal intersections cleanly
        const outline = new THREE.Mesh(puffGeo, cloudOutlineMat);
        outline.position.set(px, py, pz);
        outline.scale.set(sx + 0.095, sy + 0.075, sz + 0.095);
        outline.renderOrder = 2;
        cluster.add(outline);
      }

      const angle = (i / 16) * Math.PI * 2 + (i % 3) * 0.16;
      const radius = 20 + (i % 4) * 12;
      cluster.scale.setScalar(scaleMult);
      cluster.position.set(
        Math.cos(angle) * radius,
        15.5 + (i % 4) * 2.6,
        Math.sin(angle) * radius
      );
      cluster.rotation.y = angle + Math.PI * 0.5;
      this.scene.add(cluster);
      this.clouds.push({
        group: cluster,
        speed: 0.45 + (i % 4) * 0.22,
      });
    }
  }

  _enhanceMaterialsAndCollectTriangles() {
    this.root.updateMatrixWorld(true);

    // 1. Remove roof/overhead gantries & ceiling light pods for wide-open sky
    const toRemove = [];
    this.root.traverse((obj) => {
      const n = obj.name || "";
      if (n.startsWith("Gantry_") || n.startsWith("LightPod_") || n.startsWith("LightGlow_")) {
        toRemove.push(obj);
      }
    });
    for (const r of toRemove) {
      r.parent?.remove(r);
    }

    const a = new THREE.Vector3();
    const b = new THREE.Vector3();
    const c = new THREE.Vector3();
    const ab = new THREE.Vector3();
    const ac = new THREE.Vector3();

    this.root.traverse((obj) => {
      if (!obj.isMesh) return;

      const name = obj.name || "";
      const origMat = obj.material;
      const isSteel = origMat?.name?.includes("steel") || name.includes("Catwalk") || name.includes("Deck");

      // Convert every arena material to crisp cel-shaded MeshToonMaterial
      if (origMat) {
        obj.material = toToonMaterial(origMat);
      }

      // Skip shadow casting on floor/small pads, enable on structures
      const isFloor = name === "Arena_Floor" || name.startsWith("Floor_");
      obj.castShadow = !isFloor && !name.includes("Glow");
      obj.receiveShadow = true;

      // Add comic-book ink edges on structural & cover props
      if (!name.includes("Glow") && !name.startsWith("WallLight_")) {
        addInkEdges(obj, isFloor ? 45 : 26);
      }

      // Do not collide with decorative glow pads
      const isNonSolid = name.includes("Glow") || name.startsWith("WallLight_");
      if (isNonSolid) return;

      this.collidableMeshes.push(obj);

      const geom = obj.geometry;
      const pos = geom.attributes.position;
      const idx = geom.index;
      const m = obj.matrixWorld;

      const addTri = (i0, i1, i2) => {
        a.fromBufferAttribute(pos, i0).applyMatrix4(m);
        b.fromBufferAttribute(pos, i1).applyMatrix4(m);
        c.fromBufferAttribute(pos, i2).applyMatrix4(m);

        ab.subVectors(b, a);
        ac.subVectors(c, a);
        const normal = new THREE.Vector3().crossVectors(ab, ac);
        const len = normal.length();
        if (len < 1e-7) return;
        normal.divideScalar(len);

        const minX = Math.min(a.x, b.x, c.x);
        const maxX = Math.max(a.x, b.x, c.x);
        const minY = Math.min(a.y, b.y, c.y);
        const maxY = Math.max(a.y, b.y, c.y);
        const minZ = Math.min(a.z, b.z, c.z);
        const maxZ = Math.max(a.z, b.z, c.z);

        const triIndex = this.triangles.length;
        this.triangles.push({
          a: a.clone(),
          b: b.clone(),
          c: c.clone(),
          normal,
          minX,
          maxX,
          minY,
          maxY,
          minZ,
          maxZ,
          isSteel,
        });

        const cx0 = Math.max(0, Math.floor((minX - this.gridMin) / this.cellSize));
        const cx1 = Math.min(this.gridDim - 1, Math.floor((maxX - this.gridMin) / this.cellSize));
        const cz0 = Math.max(0, Math.floor((minZ - this.gridMin) / this.cellSize));
        const cz1 = Math.min(this.gridDim - 1, Math.floor((maxZ - this.gridMin) / this.cellSize));
        for (let cz = cz0; cz <= cz1; cz++) {
          for (let cx = cx0; cx <= cx1; cx++) {
            this.grid[cz * this.gridDim + cx].push(triIndex);
          }
        }
      };

      if (idx) {
        for (let i = 0; i < idx.count; i += 3) {
          addTri(idx.getX(i), idx.getX(i + 1), idx.getX(i + 2));
        }
      } else {
        for (let i = 0; i < pos.count; i += 3) {
          addTri(i, i + 1, i + 2);
        }
      }
    });
  }

  _toYUp([x, y, z]) {
    return new THREE.Vector3(x, z, -y);
  }

  _setupSpawnsAndPickups() {
    for (const sp of this.spec.markers.spawns) {
      const pos = this._toYUp(sp.position);
      // yaw_deg in spec is around Z-up (0 = +X, 90 = +Y = -Z in Y-up).
      // Convert to Three.js yaw where 0 looks along -Z:
      // forward in Y-up for yaw_deg: [cos(r), 0, -sin(r)]
      const r = (sp.yaw_deg * Math.PI) / 180;
      const fwd = new THREE.Vector3(Math.cos(r), 0, -Math.sin(r));
      const yaw = Math.atan2(-fwd.x, -fwd.z) + 0.58;
      this.spawns.push({ name: sp.name, position: pos, yaw });
    }

    // Create floating animated pickup meshes
    const colors = {
      heavy_weapon: 0xffa61f,
      armor: 0x3b82f6,
      health: 0x22c55e,
    };

    for (const pk of this.spec.markers.pickups) {
      const pos = this._toYUp(pk.position);
      const color = colors[pk.kind] ?? 0xffffff;

      const group = new THREE.Group();
      group.position.copy(pos).add(new THREE.Vector3(0, 0.52, 0));

      let core;
      const pkMat = new THREE.MeshToonMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.65,
        gradientMap: getToonGradientMap(),
      });
      if (pk.kind === "health") {
        core = new THREE.Group();
        const v = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.44, 0.14), pkMat);
        const h = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.16, 0.14), pkMat);
        addInkEdges(v, 25);
        addInkEdges(h, 25);
        core.add(v, h);
      } else if (pk.kind === "armor") {
        core = new THREE.Mesh(new THREE.OctahedronGeometry(0.26, 0), pkMat);
        addInkEdges(core, 20);
      } else {
        core = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.28, 0.38), pkMat);
        addInkEdges(core, 25);
      }

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.42, 0.025, 8, 24),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.65 })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -0.38;

      const beacon = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.36, 1.35, 10, 1, true),
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.14,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
      );
      beacon.position.y = 0.25;

      group.add(core, ring, beacon);
      this.scene.add(group);

      this.pickups.push({
        name: pk.name,
        kind: pk.kind,
        position: pos,
        baseY: pos.y + 0.52,
        group,
        core,
        ring,
        active: true,
        respawnTimer: 0,
        cooldown: pk.kind === "heavy_weapon" ? 18 : 12,
      });
    }
  }

  _buildWaypoints() {
    // Coordinates in Z-up converted to Y-up for clean 3-tier navigation
    const raw = [
      // Lower courtyard perimeter & lanes
      { id: 0, p: [0, 13.6, 0.2], tier: 0 },
      { id: 1, p: [0, 8.8, 0.2], tier: 0 },
      { id: 2, p: [-5.5, 11.5, 0.2], tier: 0 },
      { id: 3, p: [5.5, 11.5, 0.2], tier: 0 },
      { id: 4, p: [0, 5.2, 0.2], tier: 0 }, // Health N
      { id: 5, p: [0, -5.2, 0.2], tier: 0 }, // Health S
      { id: 6, p: [0, 0, 0.2], tier: 0 }, // Under center hub
      { id: 7, p: [-4.2, 0, 0.2], tier: 0 },
      { id: 8, p: [4.2, 0, 0.2], tier: 0 },
      { id: 9, p: [0, -8.5, 0.2], tier: 0 },
      { id: 10, p: [-8.5, -13.2, 0.2], tier: 0 },
      { id: 11, p: [8.5, -13.2, 0.2], tier: 0 },
      // South bunker
      { id: 12, p: [-5.2, -12.0, 0.2], tier: 0 },
      { id: 13, p: [0, -12.0, 1.15], tier: 1 },
      { id: 14, p: [5.2, -12.0, 0.2], tier: 0 },
      // Outer flanks (West & East)
      { id: 15, p: [-13.8, 4.2, 0.2], tier: 0 },
      { id: 16, p: [-13.8, -4.0, 0.2], tier: 0 },
      { id: 17, p: [-12.5, -10.0, 0.2], tier: 0 },
      { id: 18, p: [13.8, 4.2, 0.2], tier: 0 },
      { id: 19, p: [13.8, -4.0, 0.2], tier: 0 },
      { id: 20, p: [12.5, -10.0, 0.2], tier: 0 },
      // West Ramp & Stairs & Deck (Z = 2.0)
      { id: 21, p: [-9.5, -9.8, 0.2], tier: 0 },
      { id: 22, p: [-9.5, -4.0, 2.1], tier: 2 },
      { id: 23, p: [-9.5, 0.0, 2.1], tier: 2 }, // Armor W
      { id: 24, p: [-9.5, 4.0, 2.1], tier: 2 },
      { id: 25, p: [-9.5, 9.8, 0.2], tier: 0 },
      // East Ramp & Stairs & Deck (Z = 2.0)
      { id: 26, p: [9.5, -9.8, 0.2], tier: 0 },
      { id: 27, p: [9.5, -4.0, 2.1], tier: 2 },
      { id: 28, p: [9.5, 0.0, 2.1], tier: 2 }, // Armor E
      { id: 29, p: [9.5, 4.0, 2.1], tier: 2 },
      { id: 30, p: [9.5, 9.8, 0.2], tier: 0 },
      // Center Hub (Z = 2.4)
      { id: 31, p: [-3.4, 0.0, 2.5], tier: 3 },
      { id: 32, p: [0.0, 0.0, 2.55], tier: 3 }, // Heavy Pickup
      { id: 33, p: [3.4, 0.0, 2.5], tier: 3 },
    ];

    this.waypoints = raw.map((w) => ({
      id: w.id,
      pos: this._toYUp(w.p),
      tier: w.tier,
      links: [],
    }));

    const edges = [
      [0, 2], [0, 3], [2, 1], [3, 1], [1, 4], [4, 6], [6, 5], [5, 9],
      [2, 25], [3, 30], [25, 15], [30, 18], [15, 16], [16, 17], [17, 10],
      [18, 19], [19, 20], [20, 11], [10, 12], [12, 13], [13, 14], [14, 11],
      [12, 21], [14, 26], [17, 21], [20, 26], [21, 9], [26, 9],
      [6, 7], [6, 8], [7, 4], [8, 4], [7, 5], [8, 5],
      [21, 22], [22, 23], [23, 24], [24, 25],
      [26, 27], [27, 28], [28, 29], [29, 30],
      [23, 31], [31, 32], [32, 33], [33, 28],
      [25, 1], [30, 1],
    ];
    for (const [u, v] of edges) {
      this.waypoints[u].links.push(v);
      this.waypoints[v].links.push(u);
    }
  }

  updatePickups(dt, time) {
    if (this.skyMat) {
      this.skyMat.uniforms.uTime.value = time;
    }
    for (const c of this.clouds) {
      c.group.position.x += c.speed * dt;
      if (c.group.position.x > 62) c.group.position.x = -62;
    }
    for (const pk of this.pickups) {
      if (pk.active) {
        pk.group.visible = true;
        pk.core.rotation.y += dt * 1.9;
        pk.group.position.y = pk.baseY + Math.sin(time * 2.8 + pk.position.x) * 0.1;
      } else {
        pk.group.visible = false;
        pk.respawnTimer -= dt;
        if (pk.respawnTimer <= 0) {
          pk.active = true;
        }
      }
    }
  }

  _getCandidateTriangles(minX, maxX, minZ, maxZ) {
    const cx0 = Math.max(0, Math.floor((minX - this.gridMin) / this.cellSize));
    const cx1 = Math.min(this.gridDim - 1, Math.floor((maxX - this.gridMin) / this.cellSize));
    const cz0 = Math.max(0, Math.floor((minZ - this.gridMin) / this.cellSize));
    const cz1 = Math.min(this.gridDim - 1, Math.floor((maxZ - this.gridMin) / this.cellSize));

    const seen = new Set();
    const out = [];
    for (let cz = cz0; cz <= cz1; cz++) {
      for (let cx = cx0; cx <= cx1; cx++) {
        const cell = this.grid[cz * this.gridDim + cx];
        for (let i = 0; i < cell.length; i++) {
          const ti = cell[i];
          if (!seen.has(ti)) {
            seen.add(ti);
            out.push(this.triangles[ti]);
          }
        }
      }
    }
    return out;
  }

  /**
   * Closest point on triangle ABC to point P.
   */
  _closestPointOnTri(p, a, b, c, out) {
    const abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
    const acx = c.x - a.x, acy = c.y - a.y, acz = c.z - a.z;
    const apx = p.x - a.x, apy = p.y - a.y, apz = p.z - a.z;

    const d1 = abx * apx + aby * apy + abz * apz;
    const d2 = acx * apx + acy * apy + acz * apz;
    if (d1 <= 0 && d2 <= 0) return out.copy(a);

    const bpx = p.x - b.x, bpy = p.y - b.y, bpz = p.z - b.z;
    const d3 = abx * bpx + aby * bpy + abz * bpz;
    const d4 = acx * bpx + acy * bpy + acz * bpz;
    if (d3 >= 0 && d4 <= d3) return out.copy(b);

    const vc = d1 * d4 - d3 * d2;
    if (vc <= 0 && d1 >= 0 && d3 <= 0) {
      const v = d1 / (d1 - d3);
      return out.set(a.x + abx * v, a.y + aby * v, a.z + abz * v);
    }

    const cpx = p.x - c.x, cpy = p.y - c.y, cpz = p.z - c.z;
    const d5 = abx * cpx + aby * cpy + abz * cpz;
    const d6 = acx * cpx + acy * cpy + acz * cpz;
    if (d6 >= 0 && d5 <= d6) return out.copy(c);

    const vb = d5 * d2 - d1 * d6;
    if (vb <= 0 && d2 >= 0 && d6 <= 0) {
      const w = d2 / (d2 - d6);
      return out.set(a.x + acx * w, a.y + acy * w, a.z + acz * w);
    }

    const va = d3 * d6 - d5 * d4;
    if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
      const w = (d4 - d3) / (d4 - d3 + (d5 - d6));
      return out.set(b.x + (c.x - b.x) * w, b.y + (c.y - b.y) * w, b.z + (c.z - b.z) * w);
    }

    const denom = 1.0 / (va + vb + vc);
    const v = vb * denom;
    const w = vc * denom;
    return out.set(
      a.x + abx * v + acx * w,
      a.y + aby * v + acy * w,
      a.z + abz * v + acz * w
    );
  }

  /**
   * Moves an upright character capsule (feet at pos.y, height 1.75m, radius 0.38m)
   * with step-up (stairs/curbs) and wall sliding.
   */
  moveCharacter(pos, vel, radius, height, dt) {
    const stepHeight = 0.34;
    const prevY = pos.y;

    // Horizontal motion in substeps to avoid tunneling
    const horizDist = Math.hypot(vel.x * dt, vel.z * dt);
    const substeps = Math.max(1, Math.ceil(horizDist / 0.16));
    const subDt = dt / substeps;

    let grounded = false;
    let onSteel = false;

    for (let s = 0; s < substeps; s++) {
      pos.x += vel.x * subDt;
      pos.z += vel.z * subDt;
      pos.y += vel.y * subDt;

      // Clamp hard inside arena safety bounds
      pos.x = Math.max(-15.7, Math.min(15.7, pos.x));
      pos.z = Math.max(-15.7, Math.min(15.7, pos.z));

      const tris = this._getCandidateTriangles(
        pos.x - radius - 0.1,
        pos.x + radius + 0.1,
        pos.z - radius - 0.1,
        pos.z + radius + 0.1
      );

      const closest = new THREE.Vector3();
      const sphereCenter = new THREE.Vector3();
      // Sample 3 spheres along the capsule: ankle (stepHeight + radius), mid, head
      const yOffsets = [stepHeight + 0.18, height * 0.55, height - radius];

      // 1. Resolve walls/sides first
      for (let iter = 0; iter < 2; iter++) {
        for (const tri of tris) {
          if (tri.maxY < pos.y - 0.05 || tri.minY > pos.y + height + 0.05) continue;
          // Skip mostly horizontal floor/ceiling faces in wall pass
          if (Math.abs(tri.normal.y) > 0.68) continue;

          for (const yo of yOffsets) {
            sphereCenter.set(pos.x, pos.y + yo, pos.z);
            this._closestPointOnTri(sphereCenter, tri.a, tri.b, tri.c, closest);
            const dx = sphereCenter.x - closest.x;
            const dy = sphereCenter.y - closest.y;
            const dz = sphereCenter.z - closest.z;
            const d2 = dx * dx + dy * dy + dz * dz;
            if (d2 < radius * radius && d2 > 1e-10) {
              const d = Math.sqrt(d2);
              const push = radius - d;
              const nx = dx / d;
              const nz = dz / d;
              const horizLen = Math.hypot(nx, nz);
              if (horizLen > 0.15) {
                pos.x += (nx / horizLen) * push;
                pos.z += (nz / horizLen) * push;
                const vn = vel.x * nx + vel.z * nz;
                if (vn < 0) {
                  vel.x -= vn * nx;
                  vel.z -= vn * nz;
                }
              }
            }
          }
        }
      }

      // 2. Floor & Step-up & Ceiling check
      let bestFloorY = -Infinity;
      let floorSteel = false;
      let ceilY = Infinity;

      for (const tri of tris) {
        if (tri.maxX < pos.x - radius || tri.minX > pos.x + radius) continue;
        if (tri.maxZ < pos.z - radius || tri.minZ > pos.z + radius) continue;

        // Walkable slope (normal.y > 0.60 covers ~53 deg, ramps are ~21.8 deg)
        if (tri.normal.y > 0.60) {
          if (tri.minY > pos.y + stepHeight + 0.1) continue;
          // Sample support point at feet
          sphereCenter.set(pos.x, pos.y + stepHeight, pos.z);
          this._closestPointOnTri(sphereCenter, tri.a, tri.b, tri.c, closest);
          const hDist = Math.hypot(closest.x - pos.x, closest.z - pos.z);
          if (hDist <= radius * 0.85 && closest.y <= pos.y + stepHeight + 0.05) {
            if (closest.y > bestFloorY) {
              bestFloorY = closest.y;
              floorSteel = tri.isSteel;
            }
          }
        } else if (tri.normal.y < -0.65) {
          // Ceiling check
          sphereCenter.set(pos.x, pos.y + height - radius, pos.z);
          this._closestPointOnTri(sphereCenter, tri.a, tri.b, tri.c, closest);
          const hDist = Math.hypot(closest.x - pos.x, closest.z - pos.z);
          if (hDist <= radius * 0.8 && closest.y >= pos.y + height * 0.5 && closest.y < pos.y + height + 0.05) {
            if (closest.y < ceilY) ceilY = closest.y;
          }
        }
      }

      if (bestFloorY > -Infinity && pos.y <= bestFloorY + 0.08 && vel.y <= 1.2) {
        // Smooth step-up if climbing stairs/ramps
        if (bestFloorY > pos.y) {
          pos.y = THREE.MathUtils.lerp(pos.y, bestFloorY, 0.65);
          if (bestFloorY - pos.y < 0.03) pos.y = bestFloorY;
        } else {
          pos.y = bestFloorY;
        }
        if (vel.y < 0) vel.y = 0;
        grounded = true;
        onSteel = floorSteel;
      }

      if (ceilY < pos.y + height) {
        pos.y = Math.min(pos.y, ceilY - height);
        if (vel.y > 0) vel.y = 0;
      }
    }

    if (pos.y < 0 && prevY >= -0.05) {
      pos.y = 0;
      if (vel.y < 0) vel.y = 0;
      grounded = true;
    }

    return { grounded, onSteel };
  }

  /**
   * Resolves a sphere (e.g. ragdoll joint or severed limb) against arena triangles.
   */
  resolveSphere(pos, vel, radius, restitution = 0.25, friction = 0.82) {
    pos.x = Math.max(-15.9, Math.min(15.9, pos.x));
    pos.z = Math.max(-15.9, Math.min(15.9, pos.z));

    const tris = this._getCandidateTriangles(
      pos.x - radius - 0.1,
      pos.x + radius + 0.1,
      pos.z - radius - 0.1,
      pos.z + radius + 0.1
    );
    const closest = new THREE.Vector3();
    let hit = false;

    for (const tri of tris) {
      if (tri.maxY < pos.y - radius - 0.05 || tri.minY > pos.y + radius + 0.05) continue;
      this._closestPointOnTri(pos, tri.a, tri.b, tri.c, closest);
      const dx = pos.x - closest.x;
      const dy = pos.y - closest.y;
      const dz = pos.z - closest.z;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < radius * radius && d2 > 1e-10) {
        const d = Math.sqrt(d2);
        const nx = dx / d;
        const ny = dy / d;
        const nz = dz / d;
        const push = radius - d;
        pos.x += nx * push;
        pos.y += ny * push;
        pos.z += nz * push;

        if (vel) {
          const vn = vel.x * nx + vel.y * ny + vel.z * nz;
          if (vn < 0) {
            vel.x -= (1 + restitution) * vn * nx;
            vel.y -= (1 + restitution) * vn * ny;
            vel.z -= (1 + restitution) * vn * nz;
            // Tangential friction
            vel.x *= friction;
            vel.z *= friction;
          }
        }
        hit = true;
      }
    }

    if (pos.y < radius) {
      pos.y = radius;
      if (vel && vel.y < 0) {
        vel.y = -vel.y * restitution;
        vel.x *= friction;
        vel.z *= friction;
      }
      hit = true;
    }
    return hit;
  }

  /**
   * Fast ray-triangle intersection against the arena spatial grid.
   */
  raycast(origin, dir, maxDist = 80) {
    const endX = origin.x + dir.x * maxDist;
    const endZ = origin.z + dir.z * maxDist;
    const minX = Math.min(origin.x, endX) - 0.5;
    const maxX = Math.max(origin.x, endX) + 0.5;
    const minZ = Math.min(origin.z, endZ) - 0.5;
    const maxZ = Math.max(origin.z, endZ) + 0.5;

    const tris = this._getCandidateTriangles(minX, maxX, minZ, maxZ);
    let bestT = maxDist;
    let bestHit = null;

    const e1 = new THREE.Vector3();
    const e2 = new THREE.Vector3();
    const h = new THREE.Vector3();
    const s = new THREE.Vector3();
    const q = new THREE.Vector3();

    for (const tri of tris) {
      // Backface / fast AABB skip
      e1.subVectors(tri.b, tri.a);
      e2.subVectors(tri.c, tri.a);
      h.crossVectors(dir, e2);
      const a = e1.dot(h);
      if (a > -1e-6 && a < 1e-6) continue;
      const f = 1.0 / a;
      s.subVectors(origin, tri.a);
      const u = f * s.dot(h);
      if (u < 0 || u > 1) continue;
      q.crossVectors(s, e1);
      const v = f * dir.dot(q);
      if (v < 0 || u + v > 1) continue;
      const t = f * e2.dot(q);
      if (t > 0.02 && t < bestT) {
        bestT = t;
        bestHit = tri;
      }
    }

    if (!bestHit) return null;
    return {
      distance: bestT,
      point: origin.clone().addScaledVector(dir, bestT),
      normal: bestHit.normal.clone(),
      isSteel: bestHit.isSteel,
    };
  }
}
