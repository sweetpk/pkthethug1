import * as THREE from 'three';
import { CONFIG, PITCH_LENGTH } from '../config.js';
import { BOWLER_DIMS } from '../bowling/bowlerPose.js';

// ============================================================================
// CEL-SHADING & TOON RENDER PIPELINE
// 5-band stepped cel lighting + inverted-hull cartoon ink outlines
// ============================================================================

let _toonRamp = null;
function getToonRamp() {
  if (_toonRamp) return _toonRamp;
  const canvas = document.createElement('canvas');
  canvas.width = 5;
  canvas.height = 1;
  const ctx = canvas.getContext('2d');
  // 5 discrete stepped cel tone bands for rich anime/comic shading
  const tones = [75, 130, 185, 230, 255];
  for (let i = 0; i < tones.length; i++) {
    const v = tones[i];
    ctx.fillStyle = `rgb(${v},${v},${v})`;
    ctx.fillRect(i, 0, 1, 1);
  }
  _toonRamp = new THREE.CanvasTexture(canvas);
  _toonRamp.colorSpace = THREE.NoColorSpace;
  _toonRamp.minFilter = THREE.NearestFilter;
  _toonRamp.magFilter = THREE.NearestFilter;
  _toonRamp.generateMipmaps = false;
  return _toonRamp;
}

/** Helper to construct a stepped MeshToonMaterial */
function toonMat(params) {
  return new THREE.MeshToonMaterial({
    gradientMap: getToonRamp(),
    ...params
  });
}

/**
 * Inverted-hull cartoon ink outline material.
 * Extrudes vertices in view-space along normals and renders BackSide.
 */
function createOutlineMaterial(thickness = 0.008, color = 0x141413, opacity = 1.0) {
  return new THREE.ShaderMaterial({
    side: THREE.BackSide,
    transparent: opacity < 0.999,
    depthWrite: opacity >= 0.999,
    uniforms: {
      uThickness: { value: thickness },
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: opacity }
    },
    vertexShader: `
      uniform float uThickness;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vec3 mvNormal = normalize(mat3(modelViewMatrix) * normal);
        mvPosition.xyz += mvNormal * uThickness;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      void main() {
        gl_FragColor = vec4(uColor, uOpacity);
      }
    `
  });
}

/** Attaches an inverted-hull inked outline as a child of the mesh */
function attachOutline(mesh, thickness = 0.008, color = 0x141413) {
  const mat = createOutlineMaterial(thickness, color);
  const outline = new THREE.Mesh(mesh.geometry, mat);
  mesh.add(outline);
  return outline;
}

function canvasTexture(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// ============================================================================
// STADIUM NPC BUILDERS (UMPIRE & NON-STRIKER BATTER)
// ============================================================================

function buildUmpireNPC() {
  const g = new THREE.Group();

  const hatMat = toonMat({ color: 0xf8fafc });
  const hatBandMat = toonMat({ color: 0x1e293b });
  const skinMat = toonMat({ color: 0xd9823b });
  const shirtMat = toonMat({ color: 0xe11d48 });
  const trousersMat = toonMat({ color: 0x1e293b });
  const shoeMat = toonMat({ color: 0x0f172a });

  // Ground contact shadow disc
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.32, 16),
    new THREE.MeshBasicMaterial({ color: 0x141413, transparent: true, opacity: 0.38, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.012;
  g.add(shadow);

  const body = new THREE.Group();
  g.add(body);

  // Legs & shoes
  for (const sx of [-0.10, 0.10]) {
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.068, 0.78, 4, 10), trousersMat);
    leg.position.set(sx, 0.48, 0);
    leg.castShadow = true;
    attachOutline(leg, 0.012, 0x141413);
    body.add(leg);

    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.24), shoeMat);
    shoe.position.set(sx, 0.04, 0.04);
    shoe.castShadow = true;
    attachOutline(shoe, 0.01, 0x141413);
    body.add(shoe);
  }

  // Torso (ruby-red umpire polo)
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.40, 5, 12), shirtMat);
  torso.position.y = 1.18;
  torso.scale.set(1.14, 1, 0.80);
  torso.castShadow = true;
  attachOutline(torso, 0.014, 0x141413);
  body.add(torso);

  // White collar accent
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.06, 12), hatMat);
  collar.position.y = 1.48;
  attachOutline(collar, 0.008, 0x141413);
  body.add(collar);

  // Arms folded gently behind back / at sides
  for (const sx of [-0.23, 0.23]) {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.046, 0.46, 4, 10), shirtMat);
    arm.position.set(sx, 1.16, -0.03);
    arm.rotation.z = sx < 0 ? 0.12 : -0.12;
    arm.rotation.x = 0.16;
    arm.castShadow = true;
    attachOutline(arm, 0.01, 0x141413);
    body.add(arm);

    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.046, 10, 8), skinMat);
    hand.position.set(sx * 0.92, 0.88, -0.08);
    attachOutline(hand, 0.008, 0x141413);
    body.add(hand);
  }

  // Head & wide-brimmed white sun hat
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 14, 12), skinMat);
  head.position.y = 1.62;
  head.castShadow = true;
  attachOutline(head, 0.012, 0x141413);
  body.add(head);

  const hatBrim = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.25, 0.018, 18), hatMat);
  hatBrim.position.y = 1.68;
  hatBrim.rotation.x = 0.06;
  hatBrim.castShadow = true;
  attachOutline(hatBrim, 0.008, 0x141413);
  body.add(hatBrim);

  const hatCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.125, 0.10, 14), hatMat);
  hatCrown.position.y = 1.73;
  attachOutline(hatCrown, 0.008, 0x141413);
  body.add(hatCrown);

  const hatBand = new THREE.Mesh(new THREE.CylinderGeometry(0.126, 0.128, 0.025, 14), hatBandMat);
  hatBand.position.y = 1.695;
  body.add(hatBand);

  g.userData.body = body;
  return g;
}

function buildNonStrikerNPC() {
  const g = new THREE.Group();

  const jerseyMat = toonMat({ color: 0x1d4ed8 });
  const trimMat = toonMat({ color: 0xf59e0b });
  const padMat = toonMat({ color: 0xf8fafc });
  const helmetMat = toonMat({ color: 0x0f172a });
  const grilleMat = toonMat({ color: 0x94a3b8 });
  const skinMat = toonMat({ color: 0xd9823b });
  const gloveMat = toonMat({ color: 0xf1f5f9 });
  const willowMat = toonMat({ color: 0xfde047 });

  // Ground contact shadow disc
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.35, 16),
    new THREE.MeshBasicMaterial({ color: 0x141413, transparent: true, opacity: 0.4, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.012;
  g.add(shadow);

  const body = new THREE.Group();
  g.add(body);

  // Legs with sculpted batting pads
  for (const sx of [-0.11, 0.11]) {
    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.36, 4, 10), jerseyMat);
    thigh.position.set(sx, 0.72, 0);
    thigh.castShadow = true;
    attachOutline(thigh, 0.012, 0x141413);
    body.add(thigh);

    const pad = new THREE.Mesh(new THREE.BoxGeometry(0.145, 0.50, 0.14), padMat);
    pad.position.set(sx, 0.34, 0.02);
    pad.castShadow = true;
    attachOutline(pad, 0.012, 0x141413);
    body.add(pad);

    const padStraps = new THREE.Mesh(new THREE.BoxGeometry(0.152, 0.05, 0.145), trimMat);
    padStraps.position.set(sx, 0.56, 0.02);
    body.add(padStraps);

    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.24), padMat);
    shoe.position.set(sx, 0.04, 0.05);
    attachOutline(shoe, 0.01, 0x141413);
    body.add(shoe);
  }

  // Torso (blue & gold team kit)
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.175, 0.38, 5, 12), jerseyMat);
  torso.position.y = 1.18;
  torso.scale.set(1.15, 1, 0.80);
  torso.rotation.x = 0.12;
  torso.castShadow = true;
  attachOutline(torso, 0.014, 0x141413);
  body.add(torso);

  const chestStripe = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.07, 0.29), trimMat);
  chestStripe.position.set(0, 1.24, 0.01);
  chestStripe.rotation.x = 0.12;
  body.add(chestStripe);

  // Arms & batting gloves holding bat at ready
  const armL = new THREE.Mesh(new THREE.CapsuleGeometry(0.048, 0.44, 4, 10), jerseyMat);
  armL.position.set(0.21, 1.14, 0.10);
  armL.rotation.x = -0.55;
  armL.rotation.z = -0.22;
  armL.castShadow = true;
  attachOutline(armL, 0.01, 0x141413);
  body.add(armL);

  const armR = new THREE.Mesh(new THREE.CapsuleGeometry(0.048, 0.44, 4, 10), jerseyMat);
  armR.position.set(-0.20, 1.12, 0.10);
  armR.rotation.x = -0.50;
  armR.rotation.z = 0.25;
  armR.castShadow = true;
  attachOutline(armR, 0.01, 0x141413);
  body.add(armR);

  const gloves = new THREE.Mesh(new THREE.SphereGeometry(0.068, 10, 8), gloveMat);
  gloves.position.set(0.0, 0.90, 0.26);
  attachOutline(gloves, 0.008, 0x141413);
  body.add(gloves);

  // Non-striker's cricket bat resting near crease
  const batGrp = new THREE.Group();
  batGrp.position.set(0.0, 0.90, 0.26);
  batGrp.rotation.x = -0.26;
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.30, 8), helmetMat);
  handle.position.y = -0.10;
  attachOutline(handle, 0.005, 0x141413);
  batGrp.add(handle);

  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.105, 0.56, 0.045), willowMat);
  blade.position.y = -0.52;
  blade.castShadow = true;
  attachOutline(blade, 0.008, 0x141413);
  batGrp.add(blade);
  body.add(batGrp);

  // Head & cricket helmet with peak & grille
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 12, 10), skinMat);
  head.position.set(0, 1.58, 0.06);
  body.add(head);

  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.132, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.62), helmetMat);
  helmet.position.set(0, 1.60, 0.05);
  helmet.rotation.x = -0.15;
  helmet.castShadow = true;
  attachOutline(helmet, 0.012, 0x141413);
  body.add(helmet);

  const peak = new THREE.Mesh(new THREE.CylinderGeometry(0.135, 0.145, 0.016, 12, 1, false, -Math.PI * 0.35, Math.PI * 0.7), helmetMat);
  peak.position.set(0, 1.61, 0.11);
  peak.rotation.x = 0.20;
  attachOutline(peak, 0.006, 0x141413);
  body.add(peak);

  const grille = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.009, 6, 12, Math.PI * 0.8), grilleMat);
  grille.position.set(0, 1.54, 0.09);
  grille.rotation.x = Math.PI / 2;
  grille.rotation.z = -Math.PI * 0.4;
  body.add(grille);

  g.userData.body = body;
  return g;
}

// ============================================================================
// ENVIRONMENT (ANIME SKY + SUN, 2-TONE CLOUDS, TWO-TIER BOWL, FLOODLIGHTS, NPCs)
// ============================================================================

export function buildEnvironment(scene, quality) {
  const F = CONFIG.field;

  // --- 1. Vibrant Anime Sky Dome with Stylized Cel-Shaded Sun
  scene.background = new THREE.Color(0x38bdf8);
  scene.fog = new THREE.Fog(0x88dcff, 165, 395);

  const sunDir = new THREE.Vector3(-28, 55, 18).normalize();
  const skyGeo = new THREE.SphereGeometry(420, 32, 18);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      uSunDir: { value: sunDir }
    },
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vDir;
      uniform vec3 uSunDir;
      void main() {
        float h = vDir.y;
        vec3 topColor = vec3(0.05, 0.42, 0.90);
        vec3 midColor = vec3(0.20, 0.70, 0.98);
        vec3 horColor = vec3(0.88, 0.96, 1.00);
        vec3 col = mix(horColor, midColor, smoothstep(-0.02, 0.28, h));
        col = mix(col, topColor, smoothstep(0.28, 0.85, h));

        // Stylized cel-shaded sun & stepped solar corona
        float sunDot = max(0.0, dot(vDir, normalize(uSunDir)));
        float outerHalo = smoothstep(0.965, 0.978, sunDot);
        float innerHalo = smoothstep(0.986, 0.991, sunDot);
        float sunDisc = smoothstep(0.9945, 0.9960, sunDot);
        col = mix(col, vec3(1.0, 0.96, 0.78), outerHalo * 0.28);
        col = mix(col, vec3(1.0, 0.97, 0.84), innerHalo * 0.55);
        col = mix(col, vec3(1.0, 0.99, 0.93), sunDisc);

        gl_FragColor = vec4(col, 1.0);
      }
    `
  });
  scene.add(new THREE.Mesh(skyGeo, skyMat));

  // --- 2. Crisp Pure-White Clouds with Subtle Very-Light-Grey Undertone & Ink Outlines
  const cloudWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const cloudLightGreyMat = new THREE.MeshBasicMaterial({ color: 0xf1f5f9 });
  const cloudGroup = new THREE.Group();

  const cloudClusters = [
    { angle: 0.20, dist: 265, y: 135, s: 2.5 },
    { angle: 0.72, dist: 300, y: 158, s: 3.0 },
    { angle: 1.25, dist: 255, y: 125, s: 2.3 },
    { angle: 1.78, dist: 295, y: 150, s: 2.8 },
    { angle: 2.30, dist: 320, y: 170, s: 3.2 },
    { angle: 2.85, dist: 270, y: 132, s: 2.5 },
    { angle: 3.40, dist: 310, y: 164, s: 2.9 },
    { angle: 3.92, dist: 255, y: 140, s: 2.4 },
    { angle: 4.45, dist: 295, y: 155, s: 2.7 },
    { angle: 4.98, dist: 280, y: 145, s: 2.6 },
    { angle: 5.50, dist: 305, y: 162, s: 2.9 },
    { angle: 5.95, dist: 260, y: 138, s: 2.3 }
  ];

  const puffSizes = [
    { r: 8.5, x: 0, y: 0, z: 0 },
    { r: 6.8, x: -7, y: -1.2, z: 1 },
    { r: 7.2, x: 7, y: -0.8, z: -1 },
    { r: 5.5, x: 12, y: -2.0, z: 2 },
    { r: 5.0, x: -12, y: -2.2, z: -1.5 },
    { r: 6.0, x: 2, y: 3.5, z: 0 }
  ];
  const puffGeos = puffSizes.map(p => new THREE.SphereGeometry(p.r, 12, 10));

  cloudClusters.forEach(cc => {
    const cg = new THREE.Group();
    const cx = Math.sin(cc.angle) * cc.dist;
    const cz = F.centerZ + Math.cos(cc.angle) * cc.dist;
    cg.position.set(cx, cc.y, cz);

    puffSizes.forEach((p, idx) => {
      const mat = (idx === 3 || idx === 4) ? cloudLightGreyMat : cloudWhiteMat;
      const pm = new THREE.Mesh(puffGeos[idx], mat);
      pm.position.set(p.x, p.y, p.z);
      attachOutline(pm, 0.48, 0x141413);
      cg.add(pm);
    });

    cg.scale.set(cc.s * 1.38, cc.s * 0.82, cc.s * 1.15);
    cloudGroup.add(cg);
  });
  scene.add(cloudGroup);

  // --- 3. Balanced Sunny Cel Lighting
  const hemi = new THREE.HemisphereLight(0xdbeafe, 0x4d7c3f, 1.18);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xfff7ea, 1.95);
  sun.position.set(-28, 55, 18);
  sun.castShadow = true;
  sun.shadow.mapSize.width = quality === 'low' ? 1024 : 2048;
  sun.shadow.mapSize.height = quality === 'low' ? 1024 : 2048;
  sun.shadow.camera.near = 10;
  sun.shadow.camera.far = 130;
  sun.shadow.camera.left = -22;
  sun.shadow.camera.right = 22;
  sun.shadow.camera.top = 24;
  sun.shadow.camera.bottom = -32;
  sun.shadow.bias = -0.0006;
  scene.add(sun);

  // --- 4. Lush Mowed Emerald Outfield Turf (Concentric Rings + Subtle Radial Stripes + Warning Track)
  const grassTex = canvasTexture(1024, 1024, (g, w, h) => {
    g.fillStyle = '#1f9e3d';
    g.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;

    // Concentric mowed turf rings
    const rings = 14;
    for (let r = rings; r >= 1; r--) {
      g.beginPath();
      g.arc(cx, cy, (r * w) / (2 * rings), 0, Math.PI * 2);
      g.fillStyle = r % 2 === 0 ? '#2ac04c' : '#1f9e3d';
      g.fill();
    }

    // Subtle criss-cross mower diamond bands
    g.save();
    g.globalAlpha = 0.10;
    g.fillStyle = '#fef08a';
    for (let x = -w; x < w * 2; x += 48) {
      g.fillRect(x, 0, 24, h);
    }
    g.restore();

    // Subtle darker grass apron outside the boundary rope
    g.strokeStyle = '#15803d';
    g.lineWidth = 42;
    g.beginPath();
    g.arc(cx, cy, w * 0.44, 0, Math.PI * 2);
    g.stroke();

    // Playful comic turf sparkles/flecks
    g.fillStyle = 'rgba(255, 255, 255, 0.08)';
    for (let i = 0; i < 340; i++) {
      const a = Math.random() * Math.PI * 2;
      const dist = Math.sqrt(Math.random()) * (w * 0.47);
      g.fillRect(cx + Math.cos(a) * dist, cy + Math.sin(a) * dist, 3, 3);
    }
  });

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(F.boundaryRadius + 16, 72),
    toonMat({ map: grassTex })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, 0, F.centerZ);
  ground.receiveShadow = true;
  scene.add(ground);

  // --- 5. Crisp 30-Yard Fielding Circle (Tangential Painted Turf Dashes)
  const dashGeo = new THREE.PlaneGeometry(0.95, 0.16);
  const dashMat = new THREE.MeshBasicMaterial({
    color: 0xf8fafc,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2
  });
  const dashCount = 72;
  const dashes = new THREE.InstancedMesh(dashGeo, dashMat, dashCount);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const pos = new THREE.Vector3();
  const scl = new THREE.Vector3(1, 1, 1);
  const eul = new THREE.Euler();
  for (let i = 0; i < dashCount; i++) {
    const a = (i / dashCount) * Math.PI * 2;
    pos.set(Math.sin(a) * 27.4, 0.012, F.centerZ + Math.cos(a) * 27.4);
    eul.set(-Math.PI / 2, a, 0, 'YXZ');
    q.setFromEuler(eul);
    m.compose(pos, q, scl);
    dashes.setMatrixAt(i, m);
  }
  scene.add(dashes);

  // --- 6. Rolled Clay Pitch with Footmarks, Wear Corridor & Ink Border
  const pitchTex = canvasTexture(512, 1024, (g, w, h) => {
    // Warm sunlit caramel clay base
    g.fillStyle = '#ddb67a';
    g.fillRect(0, 0, w, h);

    // Subtle rolled longitudinal turf strips
    for (let i = 0; i < 8; i++) {
      g.fillStyle = i % 2 === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(120,75,30,0.04)';
      g.fillRect((i / 8) * w, 0, w / 8, h);
    }

    // Central ball-wear corridor
    g.fillStyle = '#ce9f60';
    g.fillRect(w * 0.24, 0, w * 0.52, h);

    // Good-length bounce wear scuffs
    for (let i = 0; i < 42; i++) {
      const rx = w * (0.34 + Math.random() * 0.32);
      const ry = h * (0.20 + Math.random() * 0.24);
      g.fillStyle = 'rgba(130, 88, 42, 0.22)';
      g.beginPath();
      g.ellipse(rx, ry, 4 + Math.random() * 6, 10 + Math.random() * 14, 0, 0, Math.PI * 2);
      g.fill();
    }

    // Worn popping-crease & bowler follow-through footmarks at both ends
    for (const y of [0.09, 0.91]) {
      const grd = g.createRadialGradient(w / 2, h * y, 6, w / 2, h * y, w * 0.44);
      grd.addColorStop(0, '#aa7e44');
      grd.addColorStop(0.6, '#c19659');
      grd.addColorStop(1, 'rgba(221, 182, 122, 0)');
      g.fillStyle = grd;
      g.fillRect(0, y < 0.5 ? 0 : h * 0.80, w, h * 0.20);
    }

    // Subtle cartoon pitch cracks
    g.strokeStyle = 'rgba(110, 72, 32, 0.24)';
    g.lineWidth = 2;
    for (let i = 0; i < 16; i++) {
      const sx = w * (0.18 + Math.random() * 0.64);
      const sy = h * (0.12 + Math.random() * 0.76);
      g.beginPath();
      g.moveTo(sx, sy);
      g.lineTo(sx + (Math.random() - 0.5) * 18, sy + 16 + Math.random() * 24);
      g.stroke();
    }
  });

  const pitchLen = PITCH_LENGTH + 2 * 2.4;
  const pitch = new THREE.Mesh(
    new THREE.PlaneGeometry(F.pitchHalfWidth * 2, pitchLen),
    toonMat({
      map: pitchTex,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    })
  );
  pitch.rotation.x = -Math.PI / 2;
  pitch.position.set(0, 0.005, -PITCH_LENGTH / 2);
  pitch.receiveShadow = true;
  scene.add(pitch);

  // Crisp comic ink perimeter around pitch square
  const pitchBorder = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.PlaneGeometry(F.pitchHalfWidth * 2, pitchLen)),
    new THREE.LineBasicMaterial({ color: 0x141413 })
  );
  pitchBorder.rotation.x = -Math.PI / 2;
  pitchBorder.position.set(0, 0.007, -PITCH_LENGTH / 2);
  scene.add(pitchBorder);

  // Painted white chalk crease lines
  const lineMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    polygonOffset: true,
    polygonOffsetFactor: -3,
    polygonOffsetUnits: -3
  });
  const line = (lw, ld, lx, lz) => {
    const l = new THREE.Mesh(new THREE.PlaneGeometry(lw, ld), lineMat);
    l.rotation.x = -Math.PI / 2;
    l.position.set(lx, 0.010, lz);
    scene.add(l);
  };
  for (const end of [0, -PITCH_LENGTH]) {
    const dir = end === 0 ? -1 : 1;
    line(3.66, 0.07, 0, end);
    line(3.66, 0.07, 0, end + dir * 1.22);
    for (const sx of [-1.32, 1.32]) line(0.07, 2.44, sx, end);
    for (const wx of [-0.89, 0.89]) line(0.06, 0.44, wx, end + dir * 1.0);
  }

  // --- 7. Braided White Boundary Rope with Ink Outline
  const rope = new THREE.Mesh(
    new THREE.TorusGeometry(F.boundaryRadius, 0.11, 8, 140),
    toonMat({ color: 0xf8fafc })
  );
  rope.rotation.x = Math.PI / 2;
  rope.position.set(0, 0.10, F.centerZ);
  attachOutline(rope, 0.025, 0x141413);
  scene.add(rope);

  // --- 8. Comic Toblerone Boundary Cushions (Upright Triangular Prism with Crisp Sponsor UVs)
  const buildCushionGeo = (len = 3.3, halfW = 0.28, peakH = 0.44) => {
    const hl = len / 2;
    const positions = new Float32Array([
      // Inward sloped face (-Z side, facing pitch; normal up & -Z)
       hl, 0, -halfW,  -hl, 0, -halfW,  -hl, peakH, 0,
       hl, 0, -halfW,  -hl, peakH, 0,   hl, peakH, 0,
      // Outward sloped face (+Z side, facing stands; normal up & +Z)
      -hl, 0,  halfW,   hl, 0,  halfW,   hl, peakH, 0,
      -hl, 0,  halfW,   hl, peakH, 0,  -hl, peakH, 0,
      // Left end cap (-X; normal -X)
      -hl, 0, -halfW,  -hl, 0,  halfW,  -hl, peakH, 0,
      // Right end cap (+X; normal +X)
       hl, 0,  halfW,   hl, 0, -halfW,   hl, peakH, 0,
      // Bottom cap (y = 0; normal -Y so mesh is watertight for outlines)
      -hl, 0, -halfW,   hl, 0, -halfW,   hl, 0,  halfW,
      -hl, 0, -halfW,   hl, 0,  halfW,  -hl, 0,  halfW
    ]);
    const uvs = new Float32Array([
      // Inward sloped face (0 = left +X when viewed from pitch, 1 = right -X)
      0, 0,  1, 0,  1, 1,
      0, 0,  1, 1,  0, 1,
      // Outward sloped face (0 = left -X when viewed from stands, 1 = right +X)
      0, 0,  1, 0,  1, 1,
      0, 0,  1, 1,  0, 1,
      // End caps & bottom cap
      0.02, 0.02,  0.08, 0.02,  0.05, 0.08,
      0.02, 0.02,  0.08, 0.02,  0.05, 0.08,
      0.02, 0.02,  0.08, 0.02,  0.08, 0.08,
      0.02, 0.02,  0.08, 0.08,  0.02, 0.08
    ]);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    g.computeVertexNormals();
    return g;
  };
  const wedgeGeo = buildCushionGeo(3.3, 0.28, 0.44);

  const wedgeSpecs = [
    { bg: '#2563eb', accent: '#fde047', text: 'PHYSICS CRICKET' },
    { bg: '#e11d48', accent: '#ffffff', text: 'POW! ★ SIX!' },
    { bg: '#f59e0b', accent: '#141413', text: 'TITAN PRO' },
    { bg: '#059669', accent: '#fef08a', text: 'DRIVE FOR 4!' },
    { bg: '#7c3aed', accent: '#ffffff', text: '240HZ ENGINE' }
  ];
  const wedgeMats = wedgeSpecs.map(ws => {
    const tex = canvasTexture(512, 128, (g, w, h) => {
      g.fillStyle = ws.bg;
      g.fillRect(0, 0, w, h);
      g.strokeStyle = '#141413';
      g.lineWidth = 8;
      g.strokeRect(4, 4, w - 8, h - 8);
      g.fillStyle = ws.accent;
      g.font = '900 44px system-ui, sans-serif';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(ws.text, w / 2, h / 2);
    });
    return toonMat({ map: tex });
  });

  const wedgeCount = 48;
  for (let i = 0; i < wedgeCount; i++) {
    const a = (i / wedgeCount) * Math.PI * 2;
    const wr = F.boundaryRadius + 0.48;
    const wedge = new THREE.Mesh(wedgeGeo, wedgeMats[i % wedgeMats.length]);
    wedge.position.set(Math.sin(a) * wr, 0, F.centerZ + Math.cos(a) * wr);
    wedge.rotation.y = a;
    wedge.castShadow = true;
    wedge.receiveShadow = true;
    attachOutline(wedge, 0.016, 0x141413);
    scene.add(wedge);
  }

  // --- 9. Halftone Comic Perimeter LED Billboards
  const boardTex = canvasTexture(1024, 128, (g, w, h) => {
    const bgCols = ['#1d4ed8', '#be123c', '#d97706', '#047857', '#6d28d9'];
    const words = ['★ PHYSICS CRICKET ★', 'POW! ✦ MAXIMUM 6', '⚡ SWEET SPOT ⚡', 'CRACK! ✦ DRIVE FOR 4', '✦ PLAY STRAIGHT ✦'];
    const segW = w / 5;
    for (let i = 0; i < 5; i++) {
      const x0 = i * segW;
      g.fillStyle = bgCols[i];
      g.fillRect(x0, 0, segW, h);

      // Subtle comic halftone dots along top & bottom
      g.fillStyle = 'rgba(255, 255, 255, 0.16)';
      for (let hx = x0 + 10; hx < x0 + segW - 6; hx += 14) {
        g.beginPath(); g.arc(hx, 14, 3, 0, Math.PI * 2); g.fill();
        g.beginPath(); g.arc(hx, h - 14, 3, 0, Math.PI * 2); g.fill();
      }

      g.strokeStyle = '#141413';
      g.lineWidth = 6;
      g.strokeRect(x0 + 3, 3, segW - 6, h - 6);

      g.fillStyle = '#141413';
      g.font = '900 22px system-ui, sans-serif';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(words[i], x0 + segW / 2 + 2, h / 2 + 2);

      g.fillStyle = '#ffffff';
      g.fillText(words[i], x0 + segW / 2, h / 2);
    }
  });
  boardTex.wrapS = THREE.RepeatWrapping;
  boardTex.repeat.set(8, 1);

  const boardR = F.boundaryRadius + 4.2;
  const boards = new THREE.Mesh(
    new THREE.CylinderGeometry(boardR, boardR, 1.15, 96, 1, true),
    new THREE.MeshBasicMaterial({ map: boardTex, side: THREE.BackSide })
  );
  boards.position.set(0, 0.575, F.centerZ);
  scene.add(boards);

  // --- 10. Two-Tier Stadium Grandstands, Illuminated VIP Fascia & Trussed Canopy Roof
  const standTex = canvasTexture(512, 256, (g, w, h) => {
    g.fillStyle = '#1e293b';
    g.fillRect(0, 0, w, h);

    // Concrete radial stair aisles
    for (let ax = 0; ax < w; ax += 128) {
      g.fillStyle = '#334155';
      g.fillRect(ax, 0, 14, h);
      g.fillStyle = '#94a3b8';
      for (let sy = 4; sy < h; sy += 14) {
        g.fillRect(ax + 2, sy, 10, 2);
      }
    }

    // Tier steps & vibrant cel-shaded crowd spectators
    const palette = ['#2563eb', '#e11d48', '#f59e0b', '#10b981', '#8b5cf6', '#f8fafc', '#38bdf8'];
    for (let y = 0; y < h; y += 14) {
      g.fillStyle = '#0f172a';
      g.fillRect(0, y, w, 3);
      g.fillStyle = '#334155';
      g.fillRect(0, y + 3, w, 2);

      for (let x = 18; x < w; x += 8) {
        if (x % 128 < 16) continue;
        const c = palette[Math.floor(Math.random() * palette.length)];
        g.fillStyle = c;
        g.beginPath();
        g.arc(x + (Math.random() - 0.5) * 2, y + 9, 3.0, 0, Math.PI * 2);
        g.fill();
        // Tiny dark head outline
        g.fillStyle = '#141413';
        g.beginPath();
        g.arc(x, y + 6, 1.5, 0, Math.PI * 2);
        g.fill();
      }
    }
  });
  standTex.wrapS = THREE.RepeatWrapping;
  standTex.repeat.set(8, 1);

  // Lower tier bowl
  const lowerStands = new THREE.Mesh(
    new THREE.CylinderGeometry(boardR + 18, boardR + 2, 11, 64, 1, true),
    toonMat({ map: standTex, side: THREE.DoubleSide })
  );
  lowerStands.position.set(0, 5.5, F.centerZ);
  scene.add(lowerStands);

  // Mid-tier VIP / Hospitality illuminated fascia ribbon
  const vipTex = canvasTexture(512, 64, (g, w, h) => {
    g.fillStyle = '#0f172a';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#fbbf24';
    g.fillRect(0, 0, w, 6);
    g.fillRect(0, h - 6, w, 6);
    for (let x = 10; x < w; x += 36) {
      g.fillStyle = '#fef08a';
      g.fillRect(x, 14, 24, h - 28);
      g.strokeStyle = '#38bdf8';
      g.lineWidth = 2;
      g.strokeRect(x, 14, 24, h - 28);
    }
  });
  vipTex.wrapS = THREE.RepeatWrapping;
  vipTex.repeat.set(14, 1);

  const vipRing = new THREE.Mesh(
    new THREE.CylinderGeometry(boardR + 19, boardR + 18, 2.4, 64, 1, true),
    new THREE.MeshBasicMaterial({ map: vipTex, side: THREE.DoubleSide })
  );
  vipRing.position.set(0, 12.2, F.centerZ);
  scene.add(vipRing);

  // Upper tier bowl
  const upperStands = new THREE.Mesh(
    new THREE.CylinderGeometry(boardR + 36, boardR + 19, 12.6, 64, 1, true),
    toonMat({ map: standTex, side: THREE.DoubleSide })
  );
  upperStands.position.set(0, 19.7, F.centerZ);
  scene.add(upperStands);

  // Solid upper crown / parapet wall closing the top rim below the flags (no open-sheet outline Z-fighting)
  const crownTex = canvasTexture(512, 64, (g, w, h) => {
    g.fillStyle = '#1e293b';
    g.fillRect(0, 0, w, h);
    // Bold gold & cyan upper/lower architectural fascia bands
    g.fillStyle = '#fbbf24';
    g.fillRect(0, 0, w, 8);
    g.fillStyle = '#38bdf8';
    g.fillRect(0, h - 8, w, 8);
    // Structural bay dividers & recessed flood vents
    for (let x = 0; x < w; x += 64) {
      g.fillStyle = '#0f172a';
      g.fillRect(x + 6, 14, 52, h - 28);
      g.fillStyle = '#475569';
      g.fillRect(x, 8, 6, h - 16);
    }
  });
  crownTex.wrapS = THREE.RepeatWrapping;
  crownTex.repeat.set(16, 1);

  const crownWall = new THREE.Mesh(
    new THREE.CylinderGeometry(boardR + 36, boardR + 36, 3.8, 64, 1, true),
    toonMat({ map: crownTex, side: THREE.DoubleSide })
  );
  crownWall.position.set(0, 27.7, F.centerZ);
  scene.add(crownWall);

  // Solid 3D structural ring beams sealing the bottom and top rims of the upper crown wall
  const crownBeamMat = toonMat({ color: 0x334155 });
  for (const beamY of [26.0, 29.6]) {
    const beam = new THREE.Mesh(new THREE.TorusGeometry(boardR + 36, 0.34, 8, 64), crownBeamMat);
    beam.rotation.x = Math.PI / 2;
    beam.position.set(0, beamY, F.centerZ);
    scene.add(beam);
  }

  // Radial roof support trusses / columns around upper rim (InstancedMesh for low draw calls)
  const trussCount = 24;
  const trussGeo = new THREE.BoxGeometry(0.9, 6.2, 1.2);
  const trussMat = toonMat({ color: 0x64748b });
  const trusses = new THREE.InstancedMesh(trussGeo, trussMat, trussCount);
  for (let i = 0; i < trussCount; i++) {
    const a = (i / trussCount) * Math.PI * 2;
    const tr = boardR + 35.2;
    pos.set(Math.sin(a) * tr, 27.7, F.centerZ + Math.cos(a) * tr);
    eul.set(0, a, 0, 'YXZ');
    q.setFromEuler(eul);
    m.compose(pos, q, scl);
    trusses.setMatrixAt(i, m);
  }
  scene.add(trusses);

  // --- 11. Fluttering Colorful Pennant Flags Around Roof Crown (prominently above top rim)
  const flagCols = [0x2563eb, 0xf59e0b, 0xef4444, 0x10b981, 0xa855f7, 0x06b6d4];
  const flagPoleMat = toonMat({ color: 0x94a3b8 });
  const flags = [];
  const poleGeo = new THREE.CylinderGeometry(0.12, 0.14, 5.2, 6);
  const flagGeo = new THREE.BufferGeometry();
  flagGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
    0, 2.3, 0,
    2.5, 1.35, 0.3,
    0, 0.4, 0
  ]), 3));
  flagGeo.computeVertexNormals();

  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const fr = boardR + 36;
    const fx = Math.sin(a) * fr;
    const fz = F.centerZ + Math.cos(a) * fr;

    const pole = new THREE.Mesh(poleGeo, flagPoleMat);
    pole.position.set(fx, 32.0, fz);
    attachOutline(pole, 0.03, 0x141413);
    scene.add(pole);

    const flagMat = new THREE.MeshBasicMaterial({ color: flagCols[i % flagCols.length], side: THREE.DoubleSide });
    const flag = new THREE.Mesh(flagGeo, flagMat);
    flag.position.set(fx, 31.8, fz);
    flag.rotation.y = a + Math.PI / 4;
    flag.userData = { baseRotY: a + Math.PI / 4, phase: i * 0.7 };
    scene.add(flag);
    flags.push(flag);
  }

  // --- 12. 4 Iconic Stadium Floodlight Towers (poles strictly behind the light banks)
  const floodBankTex = canvasTexture(256, 128, (g, w, h) => {
    g.fillStyle = '#0f172a';
    g.fillRect(0, 0, w, h);
    g.strokeStyle = '#64748b';
    g.lineWidth = 6;
    g.strokeRect(3, 3, w - 6, h - 6);

    const cols = 6, rows = 3;
    const cellW = (w - 24) / cols;
    const cellH = (h - 20) / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = 12 + (c + 0.5) * cellW;
        const cy = 10 + (r + 0.5) * cellH;
        g.fillStyle = '#fef08a';
        g.beginPath();
        g.arc(cx, cy, 13, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = '#ffffff';
        g.beginPath();
        g.arc(cx, cy, 8, 0, Math.PI * 2);
        g.fill();
      }
    }
  });

  const towerMat = toonMat({ color: 0x475569 });
  const headFrameMat = toonMat({ color: 0x1e293b });
  const headFaceMat = new THREE.MeshBasicMaterial({ map: floodBankTex });
  const headMats = [headFrameMat, headFrameMat, headFrameMat, headFrameMat, headFaceMat, headFrameMat];

  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + (i * Math.PI) / 2;
    const r = boardR + 36.8;
    const tx = Math.sin(a) * r;
    const tz = F.centerZ + Math.cos(a) * r;
    const inX = -Math.sin(a);
    const inZ = -Math.cos(a);

    // Vertical pylon stops at y = 48.0m below the floodlight head
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.70, 1.35, 48, 8), towerMat);
    tower.position.set(tx, 24, tz);
    attachOutline(tower, 0.08, 0x141413);
    scene.add(tower);

    // Steel tower cap / rear yoke block
    const yoke = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.0, 2.8), towerMat);
    yoke.position.set(tx + inX * 0.8, 48.2, tz + inZ * 0.8);
    yoke.lookAt(0, 48.2, F.centerZ);
    attachOutline(yoke, 0.07, 0x141413);
    scene.add(yoke);

    // Light bank offset 2.4m inward toward field center (+Z faces field)
    const head = new THREE.Mesh(new THREE.BoxGeometry(11.0, 5.4, 1.2), headMats);
    head.position.set(tx + inX * 2.4, 50.2, tz + inZ * 2.4);
    head.lookAt(0, 0, F.centerZ);
    attachOutline(head, 0.09, 0x141413);
    scene.add(head);

    // Rear mounting bracket connecting the back (-Z) of the head to the tower yoke
    const bracket = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 2.2), towerMat);
    bracket.position.copy(head.position);
    bracket.quaternion.copy(head.quaternion);
    bracket.translateZ(-1.4);
    attachOutline(bracket, 0.07, 0x141413);
    scene.add(bracket);
  }

  // --- 13. Architectural Framed Sight Screens (Non-overlapping Matte Dark Center + Perimeter Frame)
  const buildSightScreen = (zPos, rotY) => {
    const sg = new THREE.Group();
    sg.position.set(0, 0, zPos);
    sg.rotation.y = rotY;

    const screenMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    const frameMat = toonMat({ color: 0xe2e8f0 });
    const steelMat = toonMat({ color: 0x334155 });

    // Single solid matte dark-slate sight screen block (zero overlapping coplanar faces)
    const screen = new THREE.Mesh(new THREE.BoxGeometry(18.0, 8.2, 0.38), screenMat);
    screen.position.set(0, 5.3, 0);
    sg.add(screen);

    // 4 separate outer border frame beams around the perimeter
    const topBar = new THREE.Mesh(new THREE.BoxGeometry(18.88, 0.44, 0.46), frameMat);
    topBar.position.set(0, 9.62, 0);
    attachOutline(topBar, 0.05, 0x141413);
    sg.add(topBar);

    const bottomBar = new THREE.Mesh(new THREE.BoxGeometry(18.88, 0.44, 0.46), frameMat);
    bottomBar.position.set(0, 0.98, 0);
    attachOutline(bottomBar, 0.05, 0x141413);
    sg.add(bottomBar);

    const leftCol = new THREE.Mesh(new THREE.BoxGeometry(0.44, 8.2, 0.46), frameMat);
    leftCol.position.set(-9.22, 5.3, 0);
    attachOutline(leftCol, 0.05, 0x141413);
    sg.add(leftCol);

    const rightCol = new THREE.Mesh(new THREE.BoxGeometry(0.44, 8.2, 0.46), frameMat);
    rightCol.position.set(9.22, 5.3, 0);
    attachOutline(rightCol, 0.05, 0x141413);
    sg.add(rightCol);

    // Rear support legs
    for (const sx of [-7.5, 0, 7.5]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.45, 9.4, 0.45), steelMat);
      leg.position.set(sx, 4.7, -0.45);
      attachOutline(leg, 0.04, 0x141413);
      sg.add(leg);
    }

    scene.add(sg);
  };
  buildSightScreen(F.centerZ - F.boundaryRadius - 4.8, 0);
  buildSightScreen(F.centerZ + F.boundaryRadius + 4.8, Math.PI);

  // --- 14. Match Umpire & Non-Striker Batter
  const umpire = buildUmpireNPC();
  umpire.position.set(-0.55, 0, -PITCH_LENGTH - 2.5);
  scene.add(umpire);

  const nonStriker = buildNonStrikerNPC();
  nonStriker.position.set(-1.38, 0, -PITCH_LENGTH + 0.9);
  nonStriker.rotation.y = 0.14;
  scene.add(nonStriker);

  return {
    flags,
    clouds: cloudGroup,
    update(t) {
      for (let i = 0; i < flags.length; i++) {
        const f = flags[i];
        f.rotation.y = f.userData.baseRotY + Math.sin(t * 4.2 + f.userData.phase) * 0.18;
        f.rotation.z = Math.sin(t * 5.0 + f.userData.phase) * 0.08;
      }
      cloudGroup.rotation.y = t * 0.008;

      // Subtle breathing & stance sway on Umpire and Non-Striker
      if (umpire.userData.body) {
        umpire.userData.body.position.y = Math.sin(t * 2.1) * 0.012;
        umpire.userData.body.rotation.z = Math.sin(t * 0.9) * 0.018;
      }
      if (nonStriker.userData.body) {
        nonStriker.userData.body.position.y = Math.sin(t * 2.6 + 1.1) * 0.016;
        nonStriker.userData.body.rotation.x = Math.sin(t * 1.4) * 0.022;
      }
    }
  };
}

// ============================================================================
// STADIUM JUMBOTRON (ARCHITECTURAL FRAME, PILLARS, SPEAKERS & POP-ART DISPLAY)
// ============================================================================

export class StadiumScreen {
  constructor(scene) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 1024;
    this.canvas.height = 512;
    this.ctx = this.canvas.getContext('2d');
    this.tex = new THREE.CanvasTexture(this.canvas);
    this.tex.colorSpace = THREE.SRGBColorSpace;

    // Mounted on the upper grandstand outside the playing field (well beyond the boundary rope)
    const boardR = CONFIG.field.boundaryRadius + 4.2;
    const a = Math.PI + 0.44;
    const r = boardR + 27;
    const screenY = 25.0;

    this.group = new THREE.Group();
    this.group.position.set(Math.sin(a) * r, screenY, CONFIG.field.centerZ + Math.cos(a) * r);
    // Strictly horizontal lookAt so local Y stays vertical and poles (-Z) never cross the front (+Z)
    this.group.lookAt(0, screenY, CONFIG.field.centerZ);

    const mat = new THREE.MeshBasicMaterial({
      map: this.tex,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2
    });
    const geo = new THREE.PlaneGeometry(22, 11);
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set(0, 0, 0.08);
    this.group.add(this.mesh);

    // Steel bezel frame (front face at z = 0.0, back face at z = -1.0)
    const frame = new THREE.Mesh(new THREE.BoxGeometry(23.4, 12.2, 1.0), toonMat({ color: 0x1e293b }));
    frame.position.set(0, 0, -0.50);
    attachOutline(frame, 0.12, 0x141413);
    this.group.add(frame);

    // Top speaker pods & gold trim
    const podMat = toonMat({ color: 0x334155 });
    const hornMat = toonMat({ color: 0xf59e0b });
    for (const sx of [-7.5, 0, 7.5]) {
      const pod = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.5, 0.95), podMat);
      pod.position.set(sx, 6.85, -0.50);
      attachOutline(pod, 0.08, 0x141413);
      this.group.add(pod);

      const trim = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.30, 1.02), hornMat);
      trim.position.set(sx, 6.85, -0.50);
      this.group.add(trim);
    }

    // Rear support pillars & grandstand tie-back beams strictly behind the frame (-Z)
    const pillarMat = toonMat({ color: 0x475569 });
    const pillarGeo = new THREE.CylinderGeometry(0.42, 0.52, 11.0, 8);
    const beamGeo = new THREE.BoxGeometry(0.55, 0.55, 8.5);
    for (const sx of [-8.2, 8.2]) {
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(sx, -4.5, -1.55);
      attachOutline(pillar, 0.08, 0x141413);
      this.group.add(pillar);

      for (const sy of [3.2, -3.2]) {
        const tieBeam = new THREE.Mesh(beamGeo, pillarMat);
        tieBeam.position.set(sx, sy, -5.2);
        attachOutline(tieBeam, 0.06, 0x141413);
        this.group.add(tieBeam);
      }
    }

    scene.add(this.group);
    this.update(0, 0, '0.0', 'MATCH IN PROGRESS');
  }

  update(runs, wkts, overs, banner = '') {
    const g = this.ctx, w = 1024, h = 512;

    g.fillStyle = '#0f172a';
    g.fillRect(0, 0, w, h);

    // Subtle halftone background pattern
    g.fillStyle = 'rgba(56, 189, 248, 0.08)';
    for (let y = 24; y < h; y += 28) {
      for (let x = 24; x < w; x += 28) {
        g.beginPath();
        g.arc(x, y, 4, 0, Math.PI * 2);
        g.fill();
      }
    }

    g.strokeStyle = '#38bdf8';
    g.lineWidth = 12;
    g.strokeRect(6, 6, w - 12, h - 12);

    g.fillStyle = '#1e3a8a';
    g.fillRect(16, 16, w - 32, 84);
    g.strokeStyle = '#fbbf24';
    g.lineWidth = 4;
    g.strokeRect(16, 16, w - 32, 84);

    g.fillStyle = '#ffffff';
    g.font = '900 42px system-ui, sans-serif';
    g.textAlign = 'center';
    g.fillText('⚡ ARCADE STADIUM SCOREBOARD ⚡', w / 2, 72);

    g.fillStyle = '#ffffff';
    g.font = '900 144px monospace';
    g.fillText(`${runs}/${wkts}`, w / 2, 236);

    g.fillStyle = '#fbbf24';
    g.font = '900 46px system-ui, sans-serif';
    g.fillText(`OVERS ${overs}`, w / 2, 316);

    const isSix = banner.includes('6');
    const isFour = banner.includes('4');
    const isWkt = banner.includes('WICKET');
    g.fillStyle = isSix ? '#d97706' : isFour ? '#059669' : isWkt ? '#dc2626' : '#1e293b';
    g.fillRect(16, 356, w - 32, 136);
    g.strokeStyle = '#141413';
    g.lineWidth = 8;
    g.strokeRect(16, 356, w - 32, 136);

    g.fillStyle = '#ffffff';
    g.font = '900 48px system-ui, sans-serif';
    g.fillText(banner || '✦ TIMING IS KEY · DRIVE HARD ✦', w / 2, 440);

    this.tex.needsUpdate = true;
  }
}

// ============================================================================
// STUMPS & LED ZING BAILS (ASH WOOD GRAIN + STEPPED TURNED BAILS)
// ============================================================================

export class StumpsView {
  constructor(scene, z) {
    this.group = new THREE.Group();
    this.z = z;
    const S = CONFIG.stumps;

    const ashTex = canvasTexture(128, 512, (ctx, w, h) => {
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(0, 0, w, h);

      // Natural ash wood grain lines
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 2.5;
      for (let i = 1; i <= 5; i++) {
        const x = (i / 6) * w;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.bezierCurveTo(x + 4, h * 0.35, x - 4, h * 0.7, x + 2, h);
        ctx.stroke();
      }

      // Dark base sleeve & gold/ink sponsor collar band
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, h * 0.86, w, h * 0.14);
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, h * 0.44, w, h * 0.08);
      ctx.fillStyle = '#141413';
      ctx.fillRect(0, h * 0.44, w, 4);
      ctx.fillRect(0, h * 0.52 - 4, w, 4);
    });

    this.mat = toonMat({ map: ashTex, color: 0xffffff });
    const geo = new THREE.CylinderGeometry(S.radius, S.radius * 1.03, S.height, 14);
    geo.translate(0, S.height / 2, 0);

    this.holeMat = new THREE.MeshBasicMaterial({ color: 0x2a1e12, transparent: true, opacity: 0.75, depthWrite: false });
    const holeGeo = new THREE.CircleGeometry(S.radius * 1.65, 14);
    holeGeo.rotateX(-Math.PI / 2);

    this.stumps = [];
    this.outlines = [];

    for (let i = -1; i <= 1; i++) {
      const hole = new THREE.Mesh(holeGeo, this.holeMat);
      hole.position.set(i * S.spacing, 0.007, z);
      this.group.add(hole);

      const s = new THREE.Mesh(geo, this.mat);
      s.position.set(i * S.spacing, 0, z);
      s.castShadow = true;
      s.receiveShadow = true;
      const ol = attachOutline(s, 0.0042, 0x141413);
      this.group.add(s);
      this.stumps.push(s);
      this.outlines.push(ol);
    }

    // Stepped turned-wood cricket bail profile using LatheGeometry
    const halfLen = S.spacing * 0.49;
    const pts = [
      new THREE.Vector2(0.004, -halfLen),
      new THREE.Vector2(0.0055, -halfLen * 0.62),
      new THREE.Vector2(0.0115, -halfLen * 0.42),
      new THREE.Vector2(0.013, 0),
      new THREE.Vector2(0.0115, halfLen * 0.42),
      new THREE.Vector2(0.0055, halfLen * 0.62),
      new THREE.Vector2(0.004, halfLen)
    ];
    const bailGeo = new THREE.LatheGeometry(pts, 12);
    bailGeo.rotateZ(Math.PI / 2);

    this.bailMat = toonMat({ color: 0xf59e0b, emissive: 0x000000 });
    this.bails = [];

    for (const off of [-0.5, 0.5]) {
      const b = new THREE.Mesh(bailGeo, this.bailMat);
      b.position.set(off * S.spacing, S.height + 0.012, z);
      b.castShadow = true;
      const ol = attachOutline(b, 0.0032, 0x141413);
      this.group.add(b);
      this.bails.push(b);
      this.outlines.push(ol);
    }

    scene.add(this.group);
    this.reset();
  }

  setOpacity(alpha) {
    const a = Math.max(0, Math.min(1, alpha));
    const isTrans = a < 0.999;

    if (this.mat.transparent !== isTrans) {
      this.mat.transparent = isTrans;
      this.mat.needsUpdate = true;
    }
    this.mat.opacity = a;
    this.mat.depthWrite = !isTrans;

    if (this.bailMat.transparent !== isTrans) {
      this.bailMat.transparent = isTrans;
      this.bailMat.needsUpdate = true;
    }
    this.bailMat.opacity = a;
    this.bailMat.depthWrite = !isTrans;

    this.holeMat.opacity = a * 0.75;

    this.outlines.forEach(ol => {
      ol.material.uniforms.uOpacity.value = a;
      ol.material.transparent = isTrans;
      ol.material.depthWrite = !isTrans;
    });
  }

  reset() {
    const S = CONFIG.stumps;
    this.anim = null;
    this.bailMat.color.setHex(0xf59e0b);
    this.bailMat.emissive.setHex(0x000000);
    this.stumps.forEach((s, i) => {
      s.position.set((i - 1) * S.spacing, 0, this.z);
      s.rotation.set(0, 0, 0);
    });
    this.bails.forEach((b, i) => {
      b.position.set((i - 0.5) * S.spacing, S.height + 0.012, this.z);
      b.rotation.set(0, 0, 0);
    });
  }

  shatter(stumpIndex, ballVel) {
    this.setOpacity(1.0);
    // Activate LED Zing-bail crimson glow on impact
    this.bailMat.color.setHex(0xff2a55);
    this.bailMat.emissive.setHex(0xff1e42);
    const v = ballVel.clone().multiplyScalar(0.28);
    this.anim = {
      t: 0,
      stump: this.stumps[stumpIndex + 1],
      tiltX: Math.max(0.65, Math.min(1.3, v.z * 0.35)),
      tiltZ: -v.x * 0.45,
      bails: this.bails.map(() => new THREE.Vector3((Math.random() - 0.5) * 3.5 + v.x, 2.8 + Math.random() * 2.2, 2.2 + Math.random() * 2.2 + v.z)),
      spins: this.bails.map(() => new THREE.Vector3(Math.random() * 22, Math.random() * 22, Math.random() * 22))
    };
  }

  update(dt) {
    const a = this.anim;
    if (!a || a.t > 3) return;
    a.t += dt;
    const k = Math.min(1, a.t / 0.18);
    a.stump.rotation.x = a.tiltX * k;
    a.stump.rotation.z = a.tiltZ * k;
    this.bails.forEach((b, i) => {
      const v = a.bails[i];
      if (b.position.y > 0.01) {
        v.y -= 9.81 * dt;
        b.position.addScaledVector(v, dt);
        b.rotation.x += a.spins[i].x * dt;
        b.rotation.y += a.spins[i].y * dt;
      } else {
        b.position.y = 0.01;
        v.set(0, 0, 0);
      }
    });
  }
}

// ============================================================================
// BAT (HERO FIRST-PERSON ENGLISH WILLOW WITH V-SPLICE, SWEET SPOT & STICKER)
// ============================================================================

export function buildBatMesh() {
  const B = CONFIG.bat;
  const g = new THREE.Group();

  const willowTex = canvasTexture(512, 1024, (ctx, w, h) => {
    // Rich warm English willow gradient
    const grd = ctx.createLinearGradient(0, 0, w, 0);
    grd.addColorStop(0.0, '#facc15');
    grd.addColorStop(0.18, '#fef08a');
    grd.addColorStop(0.50, '#fef9c3');
    grd.addColorStop(0.82, '#fef08a');
    grd.addColorStop(1.0, '#facc15');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, w, h);

    // 8 natural willow wood grains
    ctx.strokeStyle = 'rgba(202, 138, 4, 0.55)';
    ctx.lineWidth = 4;
    const grains = 8;
    for (let i = 1; i <= grains; i++) {
      const x = (i / (grains + 1)) * w;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x + 8, h * 0.35, x - 8, h * 0.70, x + 3, h);
      ctx.stroke();
    }

    // Splice V-insert near shoulders (top of texture: v -> 1, canvas y -> 0)
    ctx.fillStyle = '#b45309';
    ctx.beginPath();
    ctx.moveTo(w * 0.25, 0);
    ctx.lineTo(w * 0.50, h * 0.14);
    ctx.lineTo(w * 0.75, 0);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#141413';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Crisp side-edge shading borders
    ctx.fillStyle = 'rgba(20, 20, 19, 0.14)';
    ctx.fillRect(0, 0, 14, h);
    ctx.fillRect(w - 14, 0, 14, h);
  });

  const willow = toonMat({ map: willowTex, color: 0xffffff });
  const toeMat = toonMat({ color: 0x141413 });
  const collarMat = toonMat({ color: 0x1e3a8a });

  const hw = B.bladeWidth / 2;
  const shape = new THREE.Shape();
  const face = B.bladeFace, back = B.bladeBack;
  shape.moveTo(-hw, face);
  shape.lineTo(hw, face);
  shape.lineTo(hw, face - 0.015);
  shape.quadraticCurveTo(hw * 0.58, back, 0, back - 0.008);
  shape.quadraticCurveTo(-hw * 0.58, back, -hw, face - 0.015);
  shape.lineTo(-hw, face);

  const blade = new THREE.ExtrudeGeometry(shape, {
    depth: B.bladeLength,
    bevelEnabled: true,
    bevelThickness: 0.004,
    bevelSize: 0.003,
    bevelSegments: 2,
    curveSegments: 8
  });
  blade.rotateX(Math.PI / 2);
  blade.translate(0, B.bladeLength, 0);

  // Remap UVs cleanly across blade width [0..1] and length [0..1]
  const posAttr = blade.attributes.position;
  const uvAttr = blade.attributes.uv;
  for (let i = 0; i < posAttr.count; i++) {
    const vx = posAttr.getX(i);
    const vy = posAttr.getY(i);
    const u = Math.max(0, Math.min(1, (vx + hw) / B.bladeWidth));
    const v = Math.max(0, Math.min(1, vy / B.bladeLength));
    uvAttr.setXY(i, u, v);
  }
  uvAttr.needsUpdate = true;

  const bladeMesh = new THREE.Mesh(blade, willow);
  bladeMesh.castShadow = true;
  bladeMesh.receiveShadow = true;
  attachOutline(bladeMesh, 0.0055, 0x141413);
  g.add(bladeMesh);

  // Sweet-spot targeting decal on front striking face (with subtle scuff zone)
  const sweetTex = canvasTexture(256, 256, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    // Faint seam scuff ring in sweet spot
    ctx.fillStyle = 'rgba(180, 83, 9, 0.14)';
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w * 0.28, 0, Math.PI * 2);
    ctx.fill();

    // Crisp arcade chevron guides
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(w * 0.18, h * 0.56);
    ctx.lineTo(w * 0.50, h * 0.36);
    ctx.lineTo(w * 0.82, h * 0.56);
    ctx.stroke();

    ctx.strokeStyle = '#141413';
    ctx.lineWidth = 4;
    ctx.stroke();
  });
  const sweetDecal = new THREE.Mesh(
    new THREE.PlaneGeometry(B.bladeWidth * 0.84, 0.10),
    new THREE.MeshBasicMaterial({
      map: sweetTex,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2
    })
  );
  sweetDecal.position.set(0, B.sweetSpotFromToe, face + 0.0045);
  g.add(sweetDecal);

  // Front shoulder brand decal
  const shoulderTex = canvasTexture(256, 128, (ctx, w, h) => {
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(8, 12, w - 16, h - 24);
    ctx.strokeStyle = '#141413';
    ctx.lineWidth = 6;
    ctx.strokeRect(8, 12, w - 16, h - 24);
    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 38px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚡ TITAN ⚡', w / 2, h / 2);
  });
  const shoulderDecal = new THREE.Mesh(
    new THREE.PlaneGeometry(B.bladeWidth * 0.68, 0.044),
    new THREE.MeshBasicMaterial({
      map: shoulderTex,
      transparent: true,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2
    })
  );
  shoulderDecal.position.set(0, B.bladeLength - 0.06, face + 0.0045);
  g.add(shoulderDecal);

  // Back comic shield sticker (prominently seen in first-person stance)
  const stickerTex = canvasTexture(256, 512, (ctx, w, h) => {
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(0, 0, w, h);

    // Diagonal racing stripes
    ctx.fillStyle = '#2563eb';
    ctx.beginPath();
    ctx.moveTo(0, h * 0.18);
    ctx.lineTo(w, h * 0.05);
    ctx.lineTo(w, h * 0.25);
    ctx.lineTo(0, h * 0.38);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 10;
    ctx.strokeRect(8, 8, w - 16, h - 16);

    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 44px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('⚡ TITAN ⚡', w / 2, h * 0.32);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 28px system-ui, sans-serif';
    ctx.fillText('PRO EDITION', w / 2, h * 0.48);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '900 22px system-ui, sans-serif';
    ctx.fillText('240HZ PHYSICS', w / 2, h * 0.68);
  });

  const sticker = new THREE.Mesh(
    new THREE.PlaneGeometry(B.bladeWidth * 0.72, 0.24),
    new THREE.MeshBasicMaterial({
      map: stickerTex,
      side: THREE.DoubleSide,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2
    })
  );
  sticker.position.set(0, B.bladeLength * 0.70, back - 0.0125);
  sticker.rotation.y = Math.PI;
  g.add(sticker);

  // Toe guard with dark ink outline
  const toeGuard = new THREE.Mesh(
    new THREE.BoxGeometry(B.bladeWidth + 0.006, 0.019, face - back + 0.006),
    toeMat
  );
  toeGuard.position.set(0, 0.0095, (face + back) / 2);
  toeGuard.castShadow = true;
  attachOutline(toeGuard, 0.004, 0x141413);
  g.add(toeGuard);

  // Rubber splice collar at shoulder/handle junction
  const hc = (face + back) / 2;
  const collar = new THREE.Mesh(
    new THREE.CylinderGeometry(B.handleRadius * 1.38, B.handleRadius * 1.52, 0.026, 16),
    collarMat
  );
  collar.position.set(0, B.bladeLength + 0.01, hc);
  attachOutline(collar, 0.0035, 0x141413);
  g.add(collar);

  // Dual-tone spiral/chevron rubber grip handle
  const hl = B.totalLength - B.bladeLength;
  const gripTex = canvasTexture(128, 512, (ctx, w, h) => {
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 18) {
      ctx.fillStyle = '#1e3a8a';
      ctx.fillRect(0, y, w, 7);
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(0, y + 7, w, 3);
      ctx.fillStyle = '#141413';
      ctx.fillRect(0, y + 10, w, 2);
    }
  });
  gripTex.wrapS = gripTex.wrapT = THREE.RepeatWrapping;
  gripTex.repeat.set(1, 3);

  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(B.handleRadius, B.handleRadius * 1.08, hl, 16),
    toonMat({ map: gripTex })
  );
  handle.position.set(0, B.bladeLength + hl / 2, hc);
  handle.castShadow = true;
  attachOutline(handle, 0.0035, 0x141413);
  g.add(handle);

  // Top handle cap
  const topCap = new THREE.Mesh(
    new THREE.SphereGeometry(B.handleRadius * 1.05, 12, 8),
    toonMat({ color: 0xf59e0b })
  );
  topCap.position.set(0, B.totalLength, hc);
  attachOutline(topCap, 0.003, 0x141413);
  g.add(topCap);

  return g;
}

// ============================================================================
// PITCH MARKER (ARCADE BULLSEYE RETICLE FOR BOUNCE LENGTH)
// ============================================================================

export class PitchMarker {
  constructor(scene) {
    this.group = new THREE.Group();

    const reticleTex = canvasTexture(128, 128, (ctx, w, h) => {
      const cx = w / 2, cy = h / 2;
      ctx.clearRect(0, 0, w, h);

      // Ink outer shadow ring
      ctx.strokeStyle = '#141413';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.arc(cx, cy, 46, 0, Math.PI * 2);
      ctx.stroke();

      // Segmented bright inner arcs
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 8;
      for (let i = 0; i < 4; i++) {
        const a0 = i * (Math.PI / 2) + 0.18;
        const a1 = (i + 1) * (Math.PI / 2) - 0.18;
        ctx.beginPath();
        ctx.arc(cx, cy, 46, a0, a1);
        ctx.stroke();
      }
    });

    this.ringMat = new THREE.MeshBasicMaterial({
      map: reticleTex,
      color: 0x10b981,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false
    });
    this.dotMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false
    });
    this.pulseMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false
    });

    const ring = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.52), this.ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.renderOrder = 10;

    const dot = new THREE.Mesh(new THREE.CircleGeometry(0.065, 24), this.dotMat);
    dot.rotation.x = -Math.PI / 2;
    dot.renderOrder = 10;

    this.pulseRing = new THREE.Mesh(new THREE.RingGeometry(0.28, 0.33, 32), this.pulseMat);
    this.pulseRing.rotation.x = -Math.PI / 2;
    this.pulseRing.renderOrder = 10;

    this.group.add(ring, dot, this.pulseRing);
    this.group.renderOrder = 10;
    this.group.position.y = 0.024;
    this.active = false;
    this.fading = false;
    this.alpha = 0;
    this.timer = 0;
    scene.add(this.group);
  }

  show(lineX, bounceDist) {
    const keepTimer = this.active && !this.fading;
    this.group.position.set(lineX, 0.024, CONFIG.stumps.z - bounceDist);
    const col = bounceDist < 1.9 ? 0x00e5ff : bounceDist < 4.5 ? 0x10b981 : bounceDist < 7.8 ? 0xf59e0b : 0xef4444;
    this.ringMat.color.setHex(col);
    this.pulseMat.color.setHex(col);
    this.active = true;
    this.fading = false;
    this.alpha = 0.95;
    if (!keepTimer) this.timer = 0;
  }

  fadeOut() {
    this.fading = true;
  }

  hide() {
    this.active = false;
    this.alpha = 0;
    this.ringMat.opacity = 0;
    this.dotMat.opacity = 0;
    this.pulseMat.opacity = 0;
  }

  update(dt, t) {
    if (!this.active) return;
    this.timer += dt;
    if (this.fading) {
      this.alpha = Math.max(0, this.alpha - dt * 2.8);
      if (this.alpha <= 0.01) this.hide();
    }
    const pulse = 1 + 0.10 * Math.sin(t * 14);
    this.group.scale.setScalar(pulse);
    this.group.rotation.y = t * 0.9;
    this.ringMat.opacity = this.alpha;
    this.dotMat.opacity = this.alpha * 0.85;

    const contract = 1.0 + Math.max(0, 1 - (this.timer * 2.2 % 1)) * 1.3;
    this.pulseRing.scale.setScalar(contract);
    this.pulseMat.opacity = this.alpha * 0.6;
  }
}

// ============================================================================
// CRICKET BALL (CRISP WHITE KOOKABURRA ODI MATCH BALL + TARGET DROP SHADOW)
// ============================================================================

export function buildBall() {
  const tex = canvasTexture(1024, 512, (g, w, h) => {
    const grad = g.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.5, '#f8fafc');
    grad.addColorStop(1, '#e2e8f0');
    g.fillStyle = grad;
    g.fillRect(0, 0, w, h);

    const cy = h / 2;
    // Quarter-seam panel lines for 4-piece leather realism
    g.strokeStyle = 'rgba(15, 81, 50, 0.35)';
    g.lineWidth = 3;
    g.beginPath(); g.moveTo(w * 0.25, 0); g.lineTo(w * 0.25, h); g.stroke();
    g.beginPath(); g.moveTo(w * 0.75, 0); g.lineTo(w * 0.75, h); g.stroke();

    // Emerald & gold contrast primary seam ribbon
    g.fillStyle = '#065f46';
    g.fillRect(0, cy - 14, w, 28);
    g.strokeStyle = '#141413';
    g.lineWidth = 3;
    g.beginPath(); g.moveTo(0, cy - 14); g.lineTo(w, cy - 14); g.stroke();
    g.beginPath(); g.moveTo(0, cy + 14); g.lineTo(w, cy + 14); g.stroke();

    // Center deep ridge
    g.strokeStyle = '#141413';
    g.lineWidth = 5;
    g.beginPath(); g.moveTo(0, cy); g.lineTo(w, cy); g.stroke();

    // Crisp double-row white & gold cross-stitches
    const stitches = 48;
    for (let i = 0; i < stitches; i++) {
      const x = (i / stitches) * w;
      g.strokeStyle = '#ffffff';
      g.lineWidth = 4;
      g.beginPath(); g.moveTo(x, cy - 10); g.lineTo(x + 8, cy - 3); g.stroke();
      g.beginPath(); g.moveTo(x, cy + 10); g.lineTo(x + 8, cy + 3); g.stroke();

      g.strokeStyle = '#fde047';
      g.lineWidth = 2;
      g.beginPath(); g.moveTo(x + 5, cy - 10); g.lineTo(x + 12, cy - 3); g.stroke();
      g.beginPath(); g.moveTo(x + 5, cy + 10); g.lineTo(x + 12, cy + 3); g.stroke();
    }

    // Gold embossed match crest
    g.fillStyle = '#f59e0b';
    g.beginPath();
    g.arc(w * 0.25, h * 0.26, 22, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = '#141413';
    g.lineWidth = 4;
    g.stroke();
  });

  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(CONFIG.ball.radius, 28, 20),
    toonMat({
      map: tex,
      color: 0xffffff,
      emissive: 0x383838 // Self-luminous pop against pitch & stadium
    })
  );
  mesh.castShadow = true;
  attachOutline(mesh, 0.0028, 0x141413);

  // Stylized cartoon drop shadow & segmented flight locator ring
  const shadow = new THREE.Group();
  const shadowDisc = new THREE.Mesh(
    new THREE.CircleGeometry(CONFIG.ball.radius * 1.55, 18),
    new THREE.MeshBasicMaterial({ color: 0x141413, transparent: true, opacity: 0.55, depthWrite: false })
  );
  shadowDisc.rotation.x = -Math.PI / 2;

  const spotTex = canvasTexture(128, 128, (ctx, w, h) => {
    const cx = w / 2, cy = h / 2;
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 10;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(cx, cy, 48, i * Math.PI / 2 + 0.25, (i + 1) * Math.PI / 2 - 0.25);
      ctx.stroke();
    }
  });
  const spotRing = new THREE.Mesh(
    new THREE.PlaneGeometry(0.56, 0.56),
    new THREE.MeshBasicMaterial({ map: spotTex, color: 0xf59e0b, side: THREE.DoubleSide, transparent: true, opacity: 0, depthWrite: false })
  );
  spotRing.rotation.x = -Math.PI / 2;
  spotRing.position.y = 0.005;

  shadow.add(shadowDisc, spotRing);
  shadow.userData.disc = shadowDisc;
  shadow.userData.ring = spotRing;

  return { mesh, shadow };
}

// ============================================================================
// TRAIL (3D TAPERED CROSS-RIBBON COMET + CRISP CORE LINE)
// ============================================================================

export class Trail {
  constructor(scene, n = 90) {
    this.n = n;
    this.count = 0;
    this.points = Array.from({ length: n }, () => new THREE.Vector3());

    // 1. Crisp core line
    this.positions = new Float32Array(n * 3);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.mat = new THREE.LineBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.90, depthWrite: false });
    this.line = new THREE.Line(this.geo, this.mat);
    this.line.frustumCulled = false;
    this.line.renderOrder = 8;
    scene.add(this.line);

    // 2. Dual perpendicular 3D tapered ribbons (visible from any camera angle)
    this.ribbonMat = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uColor: { value: new THREE.Color(0xf59e0b) },
        uOpacity: { value: 0.85 }
      },
      vertexShader: `
        attribute float aFade;
        varying float vFade;
        void main() {
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vFade;
        void main() {
          vec3 headTint = mix(uColor, vec3(1.0), smoothstep(0.65, 1.0, vFade) * 0.55);
          gl_FragColor = vec4(headTint, vFade * uOpacity);
        }
      `
    });

    const indices = [];
    for (let i = 0; i < n - 1; i++) {
      const a = 2 * i;
      const b = 2 * i + 1;
      const c = 2 * (i + 1);
      const d = 2 * (i + 1) + 1;
      indices.push(a, b, c, b, d, c);
    }

    const makeRibbon = () => {
      const posArr = new Float32Array(n * 2 * 3);
      const fadeArr = new Float32Array(n * 2);
      const rGeo = new THREE.BufferGeometry();
      rGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
      rGeo.setAttribute('aFade', new THREE.BufferAttribute(fadeArr, 1));
      rGeo.setIndex(indices);
      const mesh = new THREE.Mesh(rGeo, this.ribbonMat);
      mesh.frustumCulled = false;
      mesh.renderOrder = 8;
      scene.add(mesh);
      return { mesh, geo: rGeo, posArr, fadeArr };
    };

    this.ribbonA = makeRibbon();
    this.ribbonB = makeRibbon();

    this._tangent = new THREE.Vector3();
    this._up = new THREE.Vector3(0, 1, 0);
    this._altUp = new THREE.Vector3(1, 0, 0);
    this._u = new THREE.Vector3();
    this._v = new THREE.Vector3();

    this.clear();
  }

  clear() {
    this.count = 0;
    this.geo.setDrawRange(0, 0);
    this.ribbonA.geo.setDrawRange(0, 0);
    this.ribbonB.geo.setDrawRange(0, 0);
    this.setColor(0xf59e0b, 0.90);
  }

  setColor(colorHex, opacity = 0.90) {
    this.mat.color.setHex(colorHex);
    this.mat.opacity = opacity;
    this.ribbonMat.uniforms.uColor.value.setHex(colorHex);
    this.ribbonMat.uniforms.uOpacity.value = opacity * 0.72;
  }

  push(p) {
    if (this.count > 0 && p.distanceToSquared(this.points[0]) < 1e-5) return;
    if (this.count < this.n) this.count++;
    for (let i = this.count - 1; i > 0; i--) {
      this.points[i].copy(this.points[i - 1]);
    }
    this.points[0].copy(p);

    this.positions.copyWithin(3, 0, (this.n - 1) * 3);
    this.positions[0] = p.x;
    this.positions[1] = p.y;
    this.positions[2] = p.z;
    this.geo.attributes.position.needsUpdate = true;
    this.geo.setDrawRange(0, this.count);

    if (this.count < 2) {
      this.ribbonA.geo.setDrawRange(0, 0);
      this.ribbonB.geo.setDrawRange(0, 0);
      return;
    }

    const posA = this.ribbonA.posArr;
    const posB = this.ribbonB.posArr;
    const fadeA = this.ribbonA.fadeArr;
    const fadeB = this.ribbonB.fadeArr;
    const denom = Math.max(1, this.count - 1);
    const maxW = CONFIG.ball.radius * 0.95;

    for (let i = 0; i < this.count; i++) {
      const cur = this.points[i];
      const prev = this.points[Math.max(0, i - 1)];
      const next = this.points[Math.min(this.count - 1, i + 1)];
      this._tangent.subVectors(prev, next);
      if (this._tangent.lengthSq() < 1e-8) this._tangent.set(0, 0, -1);
      else this._tangent.normalize();

      const ref = Math.abs(this._tangent.y) > 0.92 ? this._altUp : this._up;
      this._u.crossVectors(this._tangent, ref).normalize();
      this._v.crossVectors(this._tangent, this._u).normalize();

      const lifeFrac = 1 - i / denom;
      const w = maxW * Math.pow(lifeFrac, 1.35);
      const idx = i * 6;

      posA[idx]     = cur.x + this._u.x * w;
      posA[idx + 1] = cur.y + this._u.y * w;
      posA[idx + 2] = cur.z + this._u.z * w;
      posA[idx + 3] = cur.x - this._u.x * w;
      posA[idx + 4] = cur.y - this._u.y * w;
      posA[idx + 5] = cur.z - this._u.z * w;

      posB[idx]     = cur.x + this._v.x * w;
      posB[idx + 1] = cur.y + this._v.y * w;
      posB[idx + 2] = cur.z + this._v.z * w;
      posB[idx + 3] = cur.x - this._v.x * w;
      posB[idx + 4] = cur.y - this._v.y * w;
      posB[idx + 5] = cur.z - this._v.z * w;

      const fIdx = i * 2;
      fadeA[fIdx] = fadeA[fIdx + 1] = lifeFrac;
      fadeB[fIdx] = fadeB[fIdx + 1] = lifeFrac;
    }

    const triIndices = (this.count - 1) * 6;
    this.ribbonA.geo.attributes.position.needsUpdate = true;
    this.ribbonA.geo.attributes.aFade.needsUpdate = true;
    this.ribbonA.geo.setDrawRange(0, triIndices);

    this.ribbonB.geo.attributes.position.needsUpdate = true;
    this.ribbonB.geo.attributes.aFade.needsUpdate = true;
    this.ribbonB.geo.setDrawRange(0, triIndices);
  }
}

// ============================================================================
// BOWLER (DETAILED CEL-SHADED ATHLETE — KINEMATIC HIERARCHY MATCHED TO BOWLER_DIMS)
// ============================================================================

export class BowlerModel {
  constructor(scene) {
    const D = BOWLER_DIMS;

    // Textured athletic jersey: u=0.75 is front chest (+Z), u=0.25 is back (-Z) after geo.rotateY(PI/2)
    const jerseyTex = canvasTexture(512, 512, (ctx, w, h) => {
      ctx.fillStyle = '#1d4ed8';
      ctx.fillRect(0, 0, w, h);

      // Side athletic stripes (u=0 and u=0.5 under arms)
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(0, 0, w * 0.04, h);
      ctx.fillRect(w * 0.96, 0, w * 0.04, h);
      ctx.fillRect(w * 0.46, 0, w * 0.08, h);

      // Front chest gold & cyan V-chevron centered at x = w * 0.75
      const fc = w * 0.75;
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(fc - 68, h * 0.25);
      ctx.lineTo(fc, h * 0.44);
      ctx.lineTo(fc + 68, h * 0.25);
      ctx.lineTo(fc + 68, h * 0.35);
      ctx.lineTo(fc, h * 0.54);
      ctx.lineTo(fc - 68, h * 0.35);
      ctx.closePath();
      ctx.fill();

      // White collar trim
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, w, h * 0.10);

      // Back jersey number #99 centered at x = w * 0.25
      ctx.fillStyle = '#f8fafc';
      ctx.font = '900 96px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('99', w * 0.25, h * 0.44);
    });

    const shirt = toonMat({ map: jerseyTex, color: 0xffffff });
    const sleeveMat = toonMat({ color: 0x1d4ed8 });
    const pants = toonMat({ color: 0xf8fafc });
    const beltMat = toonMat({ color: 0x0f172a });
    const skin = toonMat({ color: 0xd9823b });
    const shoeMat = toonMat({ color: 0xf8fafc });
    const shoeStripeMat = toonMat({ color: 0x1d4ed8 });
    const shoeSoleMat = toonMat({ color: 0x0f172a });
    const visorMat = toonMat({ color: 0x06b6d4, emissive: 0x083344 });
    const capMat = toonMat({ color: 0x1e3a8a });
    const capPeakMat = toonMat({ color: 0xf59e0b });
    const wristbandMat = toonMat({ color: 0xfbbf24 });

    this.root = new THREE.Group();

    // Contact ground shadow disc
    this.groundShadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.36, 18),
      new THREE.MeshBasicMaterial({ color: 0x141413, transparent: true, opacity: 0.44, depthWrite: false })
    );
    this.groundShadow.rotation.x = -Math.PI / 2;
    this.groundShadow.position.y = 0.012;
    this.root.add(this.groundShadow);

    this.hips = new THREE.Group();
    this.hips.position.y = D.hipHeight;
    this.root.add(this.hips);

    // Sculpted pelvis & athletic belt
    const pelvis = new THREE.Mesh(new THREE.CylinderGeometry(0.165, 0.155, 0.14, 12), pants);
    pelvis.scale.set(1.12, 1, 0.80);
    pelvis.castShadow = true;
    attachOutline(pelvis, 0.012, 0x141413);
    this.hips.add(pelvis);

    const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.04, 12), beltMat);
    belt.position.y = 0.055;
    belt.scale.set(1.13, 1, 0.81);
    this.hips.add(belt);

    this.torso = new THREE.Group();
    this.hips.add(this.torso);

    const chestGeo = new THREE.CapsuleGeometry(0.18, D.torsoLength - 0.18, 6, 16);
    chestGeo.rotateY(Math.PI / 2);
    const chest = new THREE.Mesh(chestGeo, shirt);
    chest.position.y = D.torsoLength / 2;
    chest.scale.set(1.16, 1, 0.80);
    chest.castShadow = true;
    attachOutline(chest, 0.014, 0x141413);
    this.torso.add(chest);

    // Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.065, 0.10, 10), skin);
    neck.position.y = D.torsoLength + 0.06;
    attachOutline(neck, 0.008, 0x141413);
    this.torso.add(neck);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 12), skin);
    head.position.y = D.torsoLength + 0.19;
    head.castShadow = true;
    attachOutline(head, 0.012, 0x141413);
    this.torso.add(head);

    // Sporty shield sunglasses facing +Z
    const visorFrame = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.055, 0.05), beltMat);
    visorFrame.position.set(0, head.position.y + 0.015, 0.102);
    attachOutline(visorFrame, 0.004, 0x141413);
    this.torso.add(visorFrame);

    const visorLens = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.04, 0.054), visorMat);
    visorLens.position.set(0, head.position.y + 0.015, 0.105);
    this.torso.add(visorLens);

    // Baseball cap crown + forward visor brim (+Z)
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.126, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.54), capMat);
    cap.position.y = head.position.y + 0.02;
    attachOutline(cap, 0.008, 0x141413);
    this.torso.add(cap);

    const capBrim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.135, 0.14, 0.014, 12, 1, false, -Math.PI * 0.36, Math.PI * 0.72),
      capPeakMat
    );
    capBrim.position.set(0, head.position.y + 0.035, 0.085);
    capBrim.rotation.x = 0.16;
    attachOutline(capBrim, 0.005, 0x141413);
    this.torso.add(capBrim);

    // Arm builder (short sleeve + bare forearm + sweatband + hand centered at y = -D.armLength)
    const buildArm = (shoulderX) => {
      const armGrp = new THREE.Group();
      armGrp.position.set(shoulderX, D.torsoLength, 0);

      const sleeve = new THREE.Mesh(new THREE.CapsuleGeometry(0.058, 0.18, 4, 10), sleeveMat);
      sleeve.position.y = -0.11;
      sleeve.castShadow = true;
      attachOutline(sleeve, 0.011, 0x141413);
      armGrp.add(sleeve);

      const forearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.042, D.armLength - 0.30, 4, 10), skin);
      forearm.position.y = -D.armLength * 0.60;
      forearm.castShadow = true;
      attachOutline(forearm, 0.010, 0x141413);
      armGrp.add(forearm);

      const band = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.055, 10), wristbandMat);
      band.position.y = -D.armLength + 0.085;
      attachOutline(band, 0.005, 0x141413);
      armGrp.add(band);

      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.048, 10, 8), skin);
      hand.position.y = -D.armLength;
      hand.castShadow = true;
      attachOutline(hand, 0.008, 0x141413);
      armGrp.add(hand);

      this.torso.add(armGrp);
      return armGrp;
    };

    // Exact kinematic positions: armR at (-D.shoulderHalf, D.torsoLength, 0)
    this.armR = buildArm(-D.shoulderHalf);
    this.armL = buildArm(D.shoulderHalf);

    // Leg builder (thigh, knee joint, shin, spiked cricket shoe)
    const limb = (len, r, mat) => {
      const grp = new THREE.Group();
      const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len - 2 * r, 4, 10), mat);
      m.position.y = -len / 2;
      m.castShadow = true;
      attachOutline(m, 0.012, 0x141413);
      grp.add(m);
      return grp;
    };

    const leg = (side) => {
      const thigh = limb(D.legLength / 2, 0.076, pants);
      thigh.position.set(side * 0.105, 0, 0);

      const shin = limb(D.legLength / 2, 0.064, pants);
      shin.position.y = -D.legLength / 2;
      thigh.add(shin);

      const knee = new THREE.Mesh(new THREE.SphereGeometry(0.068, 10, 8), pants);
      knee.position.y = 0;
      attachOutline(knee, 0.008, 0x141413);
      shin.add(knee);

      // Spiked cricket shoe
      const shoeBody = new THREE.Mesh(new THREE.BoxGeometry(0.115, 0.075, 0.25), shoeMat);
      shoeBody.position.set(0, -D.legLength / 2 + 0.025, 0.06);
      shoeBody.castShadow = true;
      attachOutline(shoeBody, 0.010, 0x141413);
      shin.add(shoeBody);

      const shoeStripe = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.028, 0.18), shoeStripeMat);
      shoeStripe.position.set(0, -D.legLength / 2 + 0.03, 0.05);
      shin.add(shoeStripe);

      const shoeSole = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.022, 0.26), shoeSoleMat);
      shoeSole.position.set(0, -D.legLength / 2 - 0.015, 0.06);
      shin.add(shoeSole);

      this.hips.add(thigh);
      return { thigh, shin };
    };

    this.legL = leg(1);
    this.legR = leg(-1);
    scene.add(this.root);
  }

  apply(p) {
    this.root.position.set(p.x, p.y, p.z);
    // Keep contact shadow anchored on the pitch surface during vertical bob
    this.groundShadow.position.y = 0.012 - p.y;
    this.torso.rotation.x = p.lean;
    this.armR.rotation.x = p.armR;
    this.armL.rotation.x = p.armL;
    this.legL.thigh.rotation.x = p.legL;
    this.legR.thigh.rotation.x = p.legR;
    this.legL.shin.rotation.x = p.kneeL;
    this.legR.shin.rotation.x = p.kneeR;
  }
}

// ============================================================================
// PARTICLE FX (COMIC ACTION STARS, CONFETTI & IMPACT SHOCKWAVE RINGS)
// ============================================================================

export class ParticleFX {
  constructor(scene, maxParticles = 160) {
    this.max = maxParticles;

    // 8-point comic burst star with dark ink edge
    const starTex = canvasTexture(64, 64, (ctx, w, h) => {
      const cx = w / 2, cy = h / 2;
      ctx.beginPath();
      ctx.moveTo(cx, 3);
      ctx.quadraticCurveTo(cx, cy, w - 3, cy);
      ctx.quadraticCurveTo(cx, cy, cx, h - 3);
      ctx.quadraticCurveTo(cx, cy, 3, cy);
      ctx.quadraticCurveTo(cx, cy, cx, 3);
      ctx.closePath();
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.strokeStyle = '#141413';
      ctx.lineWidth = 3;
      ctx.stroke();
    });

    const geo = new THREE.PlaneGeometry(0.068, 0.068);
    const mat = new THREE.MeshBasicMaterial({
      map: starTex,
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false
    });

    this.mesh = new THREE.InstancedMesh(geo, mat, maxParticles);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);

    this.particles = [];
    for (let i = 0; i < maxParticles; i++) {
      this.particles.push({
        active: false,
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        rot: new THREE.Vector3(),
        rotV: new THREE.Vector3(),
        color: new THREE.Color(),
        scale: 1,
        life: 0,
        maxLife: 1,
        gravity: 9.8
      });
    }

    // Pool of 3 expanding 3D comic impact shockwave rings
    this.shockwaves = [];
    const waveGeo = new THREE.RingGeometry(0.08, 0.12, 28);
    for (let i = 0; i < 3; i++) {
      const waveMat = new THREE.MeshBasicMaterial({
        color: 0xfef08a,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0,
        depthWrite: false
      });
      const ring = new THREE.Mesh(waveGeo, waveMat);
      ring.visible = false;
      scene.add(ring);
      this.shockwaves.push({
        mesh: ring,
        mat: waveMat,
        active: false,
        life: 0,
        maxLife: 0.28,
        maxScale: 4.5
      });
    }

    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._s = new THREE.Vector3();
    this._zAxis = new THREE.Vector3(0, 0, 1);
    this._nVec = new THREE.Vector3();
    this._zero = new THREE.Matrix4().makeScale(0, 0, 0);

    for (let i = 0; i < maxParticles; i++) {
      this.mesh.setMatrixAt(i, this._zero);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  spawnShockwave(pos, normal, colorHex, maxScale = 4.5, maxLife = 0.28) {
    let sw = this.shockwaves.find(s => !s.active) || this.shockwaves[0];
    sw.active = true;
    sw.life = 0;
    sw.maxLife = maxLife;
    sw.maxScale = maxScale;
    sw.mat.color.setHex(colorHex);
    sw.mat.opacity = 0.92;
    sw.mesh.position.copy(pos);
    this._nVec.copy(normal).normalize();
    sw.mesh.quaternion.setFromUnitVectors(this._zAxis, this._nVec);
    sw.mesh.scale.setScalar(0.5);
    sw.mesh.visible = true;
  }

  spawn(x, y, z, vx, vy, vz, colorHex, size, maxLife, gravity = 9.8) {
    let p = null;
    for (let i = 0; i < this.max; i++) {
      if (!this.particles[i].active) { p = this.particles[i]; break; }
    }
    if (!p) p = this.particles[Math.floor(Math.random() * this.max)];
    p.active = true;
    p.pos.set(x, y, z);
    p.vel.set(vx, vy, vz);
    p.rot.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    p.rotV.set((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 14);
    p.color.setHex(colorHex);
    p.scale = size;
    p.life = 0;
    p.maxLife = maxLife;
    p.gravity = gravity;
  }

  pitchDust(pos) {
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 0.5 + Math.random() * 1.4;
      const up = 0.6 + Math.random() * 1.5;
      const col = Math.random() > 0.4 ? 0xd4a373 : 0xcaa974;
      this.spawn(
        pos.x + (Math.random() - 0.5) * 0.08,
        0.02,
        pos.z + (Math.random() - 0.5) * 0.08,
        Math.cos(a) * sp,
        up,
        Math.sin(a) * sp,
        col,
        0.045 + Math.random() * 0.03,
        0.35 + Math.random() * 0.25,
        3.5
      );
    }
  }

  impactSparks(pos, normal) {
    this.spawnShockwave(pos, normal, 0x38bdf8, 3.2, 0.22);
    for (let i = 0; i < 18; i++) {
      const sp = 2.5 + Math.random() * 4.8;
      const dir = normal.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 1.2
      )).normalize();
      const col = Math.random() > 0.3 ? 0xf59e0b : 0xdc2626;
      this.spawn(
        pos.x, pos.y, pos.z,
        dir.x * sp, dir.y * sp, dir.z * sp,
        col,
        0.038 + Math.random() * 0.03,
        0.26 + Math.random() * 0.18,
        5.5
      );
    }
  }

  sweetSpotBurst(pos, normal) {
    this.spawnShockwave(pos, normal, 0xfef08a, 5.4, 0.28);
    for (let i = 0; i < 36; i++) {
      const sp = 3.5 + Math.random() * 7.5;
      const dir = normal.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 1.8,
        (Math.random() - 0.5) * 1.8,
        (Math.random() - 0.5) * 1.8
      )).normalize();
      const palette = [0xf59e0b, 0x38bdf8, 0xdc2626, 0xffffff, 0x059669];
      const col = palette[Math.floor(Math.random() * palette.length)];
      this.spawn(
        pos.x, pos.y, pos.z,
        dir.x * sp, dir.y * sp, dir.z * sp,
        col,
        0.058 + Math.random() * 0.045,
        0.42 + Math.random() * 0.25,
        4.5
      );
    }
  }

  boundaryFirework(pos) {
    const palette = [0xf59e0b, 0x059669, 0x0284c7, 0xdc2626, 0xffffff, 0xdb2777];
    for (let i = 0; i < 56; i++) {
      const a = Math.random() * Math.PI * 2;
      const elev = 0.4 + Math.random() * 1.5;
      const sp = 4.5 + Math.random() * 9.0;
      const col = palette[Math.floor(Math.random() * palette.length)];
      this.spawn(
        pos.x,
        Math.max(0.5, pos.y),
        pos.z,
        Math.cos(a) * sp,
        elev * sp,
        Math.sin(a) * sp,
        col,
        0.08 + Math.random() * 0.05,
        1.8 + Math.random() * 0.9,
        3.8
      );
    }
  }

  confetti(pos) {
    const palette = [0xf59e0b, 0x059669, 0x0284c7, 0xdc2626, 0xffffff, 0xdb2777];
    for (let i = 0; i < 62; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 2.0 + Math.random() * 8.0;
      const up = 4.8 + Math.random() * 6.8;
      const col = palette[Math.floor(Math.random() * palette.length)];
      this.spawn(
        pos.x + (Math.random() - 0.5) * 1.8,
        pos.y + 0.5,
        pos.z + (Math.random() - 0.5) * 1.8,
        Math.cos(a) * r,
        up,
        Math.sin(a) * r,
        col,
        0.068 + Math.random() * 0.045,
        2.5 + Math.random() * 1.2,
        2.8
      );
    }
  }

  update(dt) {
    for (let i = 0; i < this.max; i++) {
      const p = this.particles[i];
      if (!p.active) {
        this.mesh.setMatrixAt(i, this._zero);
        continue;
      }
      p.life += dt;
      if (p.life >= p.maxLife) {
        p.active = false;
        this.mesh.setMatrixAt(i, this._zero);
        continue;
      }
      p.vel.y -= p.gravity * dt;
      p.pos.addScaledVector(p.vel, dt);
      if (p.pos.y < 0.01) { p.pos.y = 0.01; p.vel.multiplyScalar(0.4); }
      p.rot.addScaledVector(p.rotV, dt);

      const fade = 1 - p.life / p.maxLife;
      const curScale = p.scale * Math.max(0.01, fade);
      this._e.set(p.rot.x, p.rot.y, p.rot.z);
      this._q.setFromEuler(this._e);
      this._s.set(curScale, curScale, curScale);
      this._m.compose(p.pos, this._q, this._s);
      this.mesh.setMatrixAt(i, this._m);
      this.mesh.setColorAt(i, p.color);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;

    // Update impact shockwave rings
    for (let i = 0; i < this.shockwaves.length; i++) {
      const sw = this.shockwaves[i];
      if (!sw.active) continue;
      sw.life += dt;
      if (sw.life >= sw.maxLife) {
        sw.active = false;
        sw.mesh.visible = false;
        continue;
      }
      const u = sw.life / sw.maxLife;
      const easeOut = 1 - (1 - u) * (1 - u);
      sw.mesh.scale.setScalar(0.5 + (sw.maxScale - 0.5) * easeOut);
      sw.mat.opacity = 0.92 * (1 - u);
    }
  }
}
