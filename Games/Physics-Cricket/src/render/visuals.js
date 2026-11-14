import * as THREE from 'three';
import { CONFIG, PITCH_LENGTH } from '../config.js';
import { BOWLER_DIMS } from '../bowling/bowlerPose.js';

// ============================================================================
// CEL-SHADING & TOON RENDER PIPELINE
// Vibrant discrete stepped cel lighting + inverted-hull cartoon ink outlines
// ============================================================================

let _toonRamp = null;
function getToonRamp() {
  if (_toonRamp) return _toonRamp;
  const canvas = document.createElement('canvas');
  canvas.width = 4;
  canvas.height = 1;
  const ctx = canvas.getContext('2d');
  // 4 discrete stepped cel tone bands with punchy highlight
  const tones = [85, 150, 215, 255];
  for (let i = 0; i < 4; i++) {
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
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// ============================================================================
// ENVIRONMENT (VIBRANT SUNNY SKY, CLOUD OUTLINES, BALANCED LIGHTING)
// ============================================================================

export function buildEnvironment(scene, quality) {
  const F = CONFIG.field;

  // --- 1. Vibrant Cheerful Anime Sky Dome (Crisp, sunny & slightly brighter)
  scene.background = new THREE.Color(0x38bdf8);
  scene.fog = new THREE.Fog(0x7dd3fc, 160, 380);

  const skyGeo = new THREE.SphereGeometry(420, 32, 16);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {},
    vertexShader: `
      varying vec3 vP;
      void main() {
        vP = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vP;
      void main() {
        float h = normalize(vP).y;
        vec3 topColor = vec3(0.08, 0.46, 0.92);   // Vibrant Azure Blue
        vec3 midColor = vec3(0.22, 0.72, 0.98);   // Sunny Electric Sky
        vec3 horColor = vec3(0.88, 0.95, 0.99);   // Bright Clear Horizon
        vec3 col = mix(horColor, midColor, smoothstep(0.0, 0.30, h));
        col = mix(col, topColor, smoothstep(0.30, 0.85, h));
        gl_FragColor = vec4(col, 1.0);
      }
    `
  });
  scene.add(new THREE.Mesh(skyGeo, skyMat));

  // --- 2. High-Altitude Distant Cartoon Clouds (Natural, high in the sky, pure white with ink outlines)
  const cloudMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const cloudGroup = new THREE.Group();

  // 10 distant cloud formations placed high (y: 120-175) and far (radius: 240-330m)
  const cloudClusters = [
    { angle: 0.25, dist: 260, y: 135, s: 2.4 },
    { angle: 0.85, dist: 300, y: 160, s: 3.0 },
    { angle: 1.45, dist: 250, y: 125, s: 2.2 },
    { angle: 2.05, dist: 290, y: 150, s: 2.8 },
    { angle: 2.70, dist: 320, y: 170, s: 3.2 },
    { angle: 3.35, dist: 270, y: 130, s: 2.5 },
    { angle: 3.95, dist: 310, y: 165, s: 2.9 },
    { angle: 4.55, dist: 255, y: 140, s: 2.3 },
    { angle: 5.20, dist: 295, y: 155, s: 2.7 },
    { angle: 5.85, dist: 280, y: 145, s: 2.6 }
  ];

  cloudClusters.forEach(cc => {
    const cg = new THREE.Group();
    const cx = Math.sin(cc.angle) * cc.dist;
    const cz = F.centerZ + Math.cos(cc.angle) * cc.dist;
    cg.position.set(cx, cc.y, cz);

    const puffSizes = [
      { r: 8.5, x: 0, y: 0, z: 0 },
      { r: 6.8, x: -7, y: -1.2, z: 1 },
      { r: 7.2, x: 7, y: -0.8, z: -1 },
      { r: 5.5, x: 12, y: -2.0, z: 2 },
      { r: 5.0, x: -12, y: -2.2, z: -1.5 },
      { r: 6.0, x: 2, y: 3.5, z: 0 }
    ];

    puffSizes.forEach(p => {
      const pm = new THREE.Mesh(new THREE.SphereGeometry(p.r, 14, 12), cloudMat);
      pm.position.set(p.x, p.y, p.z);
      attachOutline(pm, 0.45, 0x141413);
      cg.add(pm);
    });

    cg.scale.set(cc.s * 1.35, cc.s * 0.85, cc.s * 1.15);
    cloudGroup.add(cg);
  });
  scene.add(cloudGroup);
  scene.add(cloudGroup);

  // --- 3. Perfectly Balanced Sunny Lighting (Vibrant & crisp, never washed out)
  const hemi = new THREE.HemisphereLight(0xcfe8ff, 0x588746, 1.15);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xfff7ea, 1.95);
  sun.position.set(-28, 55, 18);
  sun.castShadow = true;
  sun.shadow.mapSize.width = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.near = 10;
  sun.shadow.camera.far = 130;
  sun.shadow.camera.left = -20;
  sun.shadow.camera.right = 20;
  sun.shadow.camera.top = 24;
  sun.shadow.camera.bottom = -32;
  sun.shadow.bias = -0.0006;
  scene.add(sun);

  // --- 4. Fresh, Vibrant Cartoon Lawn (Rich emerald with sunny mowing rings)
  const grassTex = canvasTexture(1024, 1024, (g, w, h) => {
    // Fresh vibrant green base
    g.fillStyle = '#22a640'; g.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;

    // Alternating cartoon mowing rings
    const rings = 12;
    for (let r = rings; r >= 1; r--) {
      g.beginPath();
      g.arc(cx, cy, (r * w) / (2 * rings), 0, Math.PI * 2);
      g.fillStyle = r % 2 === 0 ? '#2cb94b' : '#1e9b3a';
      g.fill();
    }

    // Playful grass blade flecks
    g.fillStyle = 'rgba(255, 255, 255, 0.08)';
    for (let i = 0; i < 280; i++) {
      const a = Math.random() * Math.PI * 2;
      const dist = Math.sqrt(Math.random()) * (w * 0.48);
      g.fillRect(cx + Math.cos(a) * dist, cy + Math.sin(a) * dist, 3, 3);
    }
  });

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(F.boundaryRadius + 14, 72),
    toonMat({ map: grassTex })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, 0, F.centerZ);
  ground.receiveShadow = true;
  scene.add(ground);

  // --- 5. 30-Yard Circle (Clean White Dots)
  const dotGeo = new THREE.CircleGeometry(0.18, 10);
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const dots = new THREE.InstancedMesh(dotGeo, dotMat, 84);
  const m = new THREE.Matrix4();
  for (let i = 0; i < 84; i++) {
    const a = (i / 84) * Math.PI * 2;
    m.makeRotationX(-Math.PI / 2).setPosition(Math.sin(a) * 27.4, 0.012, F.centerZ + Math.cos(a) * 27.4);
    dots.setMatrixAt(i, m);
  }
  scene.add(dots);

  // --- 6. Warm, Sunny Clay-Turf Pitch (Golden caramel tan)
  const pitchTex = canvasTexture(256, 1024, (g, w, h) => {
    // Warm sunny caramel pitch base
    g.fillStyle = '#d8b075'; g.fillRect(0, 0, w, h);

    // Subtle center wear strip
    g.fillStyle = '#caa165';
    g.fillRect(w * 0.20, 0, w * 0.60, h);

    // Clean worn batting/bowling foot-crease zones
    for (const y of [0.08, 0.92]) {
      const grd = g.createRadialGradient(w / 2, h * y, 4, w / 2, h * y, w * 0.50);
      grd.addColorStop(0, '#af864c');
      grd.addColorStop(0.7, '#c29b5d');
      grd.addColorStop(1, '#d8b075');
      g.fillStyle = grd;
      g.fillRect(0, y === 0.08 ? 0 : h * 0.85, w, h * 0.15);
    }
  });

  const pitchLen = PITCH_LENGTH + 2 * 2.4;
  const pitch = new THREE.Mesh(
    new THREE.PlaneGeometry(F.pitchHalfWidth * 2, pitchLen),
    toonMat({ map: pitchTex })
  );
  pitch.rotation.x = -Math.PI / 2;
  pitch.position.set(0, 0.005, -PITCH_LENGTH / 2);
  pitch.receiveShadow = true;
  scene.add(pitch);

  // Pitch perimeter dark comic border
  const pitchBorder = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.PlaneGeometry(F.pitchHalfWidth * 2, pitchLen)),
    new THREE.LineBasicMaterial({ color: 0x141413, linewidth: 2 })
  );
  pitchBorder.rotation.x = -Math.PI / 2;
  pitchBorder.position.set(0, 0.007, -PITCH_LENGTH / 2);
  scene.add(pitchBorder);

  // Painted chalk crease markings
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const line = (lw, ld, lx, lz) => {
    const l = new THREE.Mesh(new THREE.PlaneGeometry(lw, ld), lineMat);
    l.rotation.x = -Math.PI / 2;
    l.position.set(lx, 0.010, lz);
    scene.add(l);
  };

  for (const end of [0, -PITCH_LENGTH]) {
    const dir = end === 0 ? -1 : 1;
    line(3.66, 0.07, 0, end);                             // bowling crease
    line(3.66, 0.07, 0, end + dir * 1.22);                // popping crease
    for (const sx of [-1.32, 1.32]) line(0.07, 2.44, sx, end + dir * 0.0); // return creases
    for (const wx of [-0.89, 0.89]) line(0.06, 0.44, wx, end + dir * 1.0); // wide guidelines
  }

  // --- 7. Boundary Rope (Cel-Shaded Cream White with Inked Outline)
  const rope = new THREE.Mesh(
    new THREE.TorusGeometry(F.boundaryRadius, 0.11, 8, 140),
    toonMat({ color: 0xf8fafc })
  );
  rope.rotation.x = Math.PI / 2;
  rope.position.set(0, 0.10, F.centerZ);
  attachOutline(rope, 0.024, 0x141413);
  scene.add(rope);

  // --- 8. Cartoon Foam Boundary Wedges (Rich pop colors with ink outlines)
  const wedgeGeo = new THREE.CylinderGeometry(0.34, 0.34, 3.4, 3);
  wedgeGeo.rotateZ(Math.PI / 2);

  const wedgeColors = [0x2563eb, 0xe11d48, 0xf59e0b, 0x059669, 0x7c3aed];
  const wedgeMaterials = wedgeColors.map(c => toonMat({ color: c }));
  const wedgeCount = 44;
  const wm = new THREE.Matrix4();
  const wRot = new THREE.Matrix4();
  const wPos = new THREE.Vector3();

  for (let i = 0; i < wedgeCount; i++) {
    const a = (i / wedgeCount) * Math.PI * 2;
    const wr = F.boundaryRadius + 0.44;
    wPos.set(Math.sin(a) * wr, 0.16, F.centerZ + Math.cos(a) * wr);
    wRot.makeRotationY(a + Math.PI / 2);
    wm.makeTranslation(wPos.x, wPos.y, wPos.z).multiply(wRot);

    const mat = wedgeMaterials[i % wedgeMaterials.length];
    const wedge = new THREE.Mesh(wedgeGeo, mat);
    wedge.position.copy(wPos);
    wedge.rotation.y = a + Math.PI / 2;
    wedge.castShadow = true;
    wedge.receiveShadow = true;
    attachOutline(wedge, 0.022, 0x141413);
    scene.add(wedge);
  }

  // --- 9. Comic Billboards Around Boundary
  const boardTex = canvasTexture(1024, 64, (g, w, h) => {
    const bgCols = ['#1d4ed8', '#be123c', '#d97706', '#047857', '#6d28d9'];
    const textCols = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];
    const words = ['★ PHYSICS CRICKET ★', 'POW! ✦ MAXIMUM 6', '⚡ SWEET SPOT ⚡', 'CRACK! ✦ DRIVE FOR 4', '✦ PLAY STRAIGHT ✦'];
    for (let i = 0; i < 5; i++) {
      const segW = w / 5;
      g.fillStyle = bgCols[i];
      g.fillRect(i * segW, 0, segW, h);
      g.strokeStyle = '#141413';
      g.lineWidth = 4;
      g.strokeRect(i * segW + 2, 2, segW - 4, h - 4);
      g.fillStyle = textCols[i];
      g.font = '900 22px system-ui, sans-serif';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(words[i], (i + 0.5) * segW, h / 2);
    }
  });
  boardTex.wrapS = THREE.RepeatWrapping;
  boardTex.repeat.set(8, 1);

  const boardR = F.boundaryRadius + 4.2;
  const boards = new THREE.Mesh(
    new THREE.CylinderGeometry(boardR, boardR, 1.1, 96, 1, true),
    new THREE.MeshBasicMaterial({ map: boardTex, side: THREE.BackSide })
  );
  boards.position.set(0, 0.55, F.centerZ);
  scene.add(boards);

  // --- 10. DEEP, BALANCED GRANDSTANDS (NON-GLARING CHARCOAL & SLATE)
  const standTex = canvasTexture(512, 256, (g, w, h) => {
    // Deep slate architectural concrete base
    g.fillStyle = '#1e293b'; g.fillRect(0, 0, w, h);

    // Deep tier step shadows & seating rows
    for (let y = 0; y < h; y += 14) {
      g.fillStyle = '#0f172a'; g.fillRect(0, y, w, 3);
      g.fillStyle = '#334155'; g.fillRect(0, y + 3, w, 2);

      // Muted atmospheric crowd gallery
      for (let x = 0; x < w; x += 7) {
        const r = Math.random();
        g.fillStyle = r < 0.30 ? '#1e3a8a' : r < 0.50 ? '#831843' : r < 0.70 ? '#065f46' : r < 0.85 ? '#b45309' : '#475569';
        g.beginPath();
        g.arc(x + (Math.random() - 0.5) * 2, y + 8, 2.8, 0, Math.PI * 2);
        g.fill();
      }
    }
  });
  standTex.wrapS = THREE.RepeatWrapping;
  standTex.repeat.set(6, 1);

  const stands = new THREE.Mesh(
    new THREE.CylinderGeometry(boardR + 32, boardR + 2, 24, 64, 1, true),
    toonMat({ map: standTex, side: THREE.BackSide })
  );
  stands.position.set(0, 12, F.centerZ);
  scene.add(stands);

  // Stadium canopy roof in slate steel
  const roof = new THREE.Mesh(
    new THREE.CylinderGeometry(boardR + 38, boardR + 26, 3.2, 64, 1, true),
    toonMat({ color: 0x334155, side: THREE.DoubleSide })
  );
  roof.position.set(0, 25, F.centerZ);
  attachOutline(roof, 0.08, 0x141413);
  scene.add(roof);

  // --- 11. Fluttering Pennant Flags
  const flagCols = [0x2563eb, 0xf59e0b, 0xdc2626, 0x059669, 0x9333ea, 0x0284c7];
  const flagPoleMat = toonMat({ color: 0x64748b });
  const flags = [];

  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    const fr = boardR + 35;
    const fx = Math.sin(a) * fr;
    const fz = F.centerZ + Math.cos(a) * fr;

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.12, 5.0, 6), flagPoleMat);
    pole.position.set(fx, 27.5, fz);
    attachOutline(pole, 0.03, 0x141413);
    scene.add(pole);

    const flagGeo = new THREE.BufferGeometry();
    const col = flagCols[i % flagCols.length];
    const flagMat = new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide });
    const vertices = new Float32Array([
      0, 2.0, 0,
      1.8, 1.2, 0.3,
      0, 0.4, 0
    ]);
    flagGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    flagGeo.computeVertexNormals();

    const flag = new THREE.Mesh(flagGeo, flagMat);
    flag.position.set(fx, 27.0, fz);
    flag.rotation.y = a + Math.PI / 4;
    flag.userData = { baseRotY: a + Math.PI / 4, phase: i * 0.7 };
    scene.add(flag);
    flags.push(flag);
  }

  // --- 12. Floodlight Towers (Slate Steel)
  if (quality !== 'low') {
    const towerMat = toonMat({ color: 0x475569 });
    for (let i = 0; i < 4; i++) {
      const a = Math.PI / 4 + (i * Math.PI) / 2;
      const r = boardR + 24;
      const t = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 1.1, 48, 6), towerMat);
      t.position.set(Math.sin(a) * r, 24, F.centerZ + Math.cos(a) * r);
      attachOutline(t, 0.08, 0x141413);
      scene.add(t);

      const head = new THREE.Mesh(new THREE.BoxGeometry(9, 4.5, 1.2), toonMat({ color: 0x1e293b }));
      head.position.set(t.position.x, 48, t.position.z);
      head.lookAt(0, 0, F.centerZ);
      attachOutline(head, 0.08, 0x141413);
      scene.add(head);
    }
  }

  // --- 13. High-Contrast Sight Screens
  const ssMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
  const ssBowler = new THREE.Mesh(new THREE.PlaneGeometry(18, 8.5), ssMat);
  ssBowler.position.set(0, 4.8, F.centerZ - F.boundaryRadius - 4.5);
  scene.add(ssBowler);

  const ssBatter = new THREE.Mesh(new THREE.PlaneGeometry(18, 8.5), ssMat);
  ssBatter.position.set(0, 4.8, F.centerZ + F.boundaryRadius + 4.5);
  ssBatter.rotation.y = Math.PI;
  scene.add(ssBatter);

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
    }
  };
}

// ============================================================================
// STADIUM JUMBOTRON (POP-ART SCOREBOARD)
// ============================================================================

export class StadiumScreen {
  constructor(scene) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 512;
    this.canvas.height = 256;
    this.ctx = this.canvas.getContext('2d');
    this.tex = new THREE.CanvasTexture(this.canvas);
    this.tex.colorSpace = THREE.SRGBColorSpace;

    const mat = new THREE.MeshBasicMaterial({ map: this.tex });
    const geo = new THREE.PlaneGeometry(16, 8);
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set(-36, 15, CONFIG.field.centerZ - 26);
    this.mesh.lookAt(0, 2, CONFIG.field.centerZ);
    scene.add(this.mesh);

    const frameGeo = new THREE.BoxGeometry(16.8, 8.8, 0.5);
    const frameMat = toonMat({ color: 0x1e293b });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.copy(this.mesh.position);
    frame.quaternion.copy(this.mesh.quaternion);
    frame.translateZ(-0.28);
    attachOutline(frame, 0.12, 0x141413);
    scene.add(frame);

    this.update(0, 0, '0.0', 'MATCH IN PROGRESS');
  }

  update(runs, wkts, overs, banner = '') {
    const g = this.ctx, w = 512, h = 256;

    g.fillStyle = '#0f172a';
    g.fillRect(0, 0, w, h);
    g.strokeStyle = '#38bdf8';
    g.lineWidth = 6;
    g.strokeRect(3, 3, w - 6, h - 6);

    g.fillStyle = '#1e3a8a';
    g.fillRect(8, 8, w - 16, 42);
    g.fillStyle = '#ffffff';
    g.font = '900 22px system-ui, sans-serif';
    g.textAlign = 'center';
    g.fillText('⚡ ARCADE STADIUM SCOREBOARD ⚡', w / 2, 36);

    g.fillStyle = '#ffffff';
    g.font = '900 72px monospace';
    g.fillText(`${runs}/${wkts}`, w / 2, 118);

    g.fillStyle = '#fbbf24';
    g.font = '900 24px system-ui, sans-serif';
    g.fillText(`OVERS ${overs}`, w / 2, 158);

    const isSix = banner.includes('6');
    const isFour = banner.includes('4');
    const isWkt = banner.includes('WICKET');
    g.fillStyle = isSix ? '#d97706' : isFour ? '#059669' : isWkt ? '#dc2626' : '#1e293b';
    g.fillRect(8, 178, w - 16, 68);
    g.strokeStyle = '#141413';
    g.lineWidth = 4;
    g.strokeRect(8, 178, w - 16, 68);

    g.fillStyle = '#ffffff';
    g.font = '900 24px system-ui, sans-serif';
    g.fillText(banner || '✦ TIMING IS KEY · DRIVE HARD ✦', w / 2, 220);

    this.tex.needsUpdate = true;
  }
}

// ============================================================================
// STUMPS & BAILS (CEL-SHADED TIMBER WITH INKED OUTLINES)
// ============================================================================

export class StumpsView {
  constructor(scene, z) {
    this.group = new THREE.Group();
    this.z = z;
    const S = CONFIG.stumps;

    this.mat = toonMat({ color: 0xf59e0b });
    const geo = new THREE.CylinderGeometry(S.radius, S.radius, S.height, 14);
    geo.translate(0, S.height / 2, 0);

    this.stumps = [];
    this.outlines = [];

    for (let i = -1; i <= 1; i++) {
      const s = new THREE.Mesh(geo, this.mat);
      s.position.set(i * S.spacing, 0, z);
      s.castShadow = true;
      s.receiveShadow = true;
      const ol = attachOutline(s, 0.004, 0x141413);
      this.group.add(s);
      this.stumps.push(s);
      this.outlines.push(ol);
    }

    const bailGeo = new THREE.CylinderGeometry(0.009, 0.009, S.spacing, 10);
    bailGeo.rotateZ(Math.PI / 2);
    this.bailMat = toonMat({ color: 0xd97706 });
    this.bails = [];

    for (const off of [-0.5, 0.5]) {
      const b = new THREE.Mesh(bailGeo, this.bailMat);
      b.position.set(off * S.spacing, S.height + 0.012, z);
      b.castShadow = true;
      const ol = attachOutline(b, 0.003, 0x141413);
      this.group.add(b);
      this.bails.push(b);
      this.outlines.push(ol);
    }

    scene.add(this.group);
    this.reset();
  }

  setOpacity(alpha) {
    const isTrans = alpha < 0.999;
    if (this.mat.transparent !== isTrans) {
      this.mat.transparent = isTrans;
      this.mat.needsUpdate = true;
    }
    this.mat.opacity = Math.max(0, Math.min(1, alpha));

    if (this.bailMat.transparent !== isTrans) {
      this.bailMat.transparent = isTrans;
      this.bailMat.needsUpdate = true;
    }
    this.bailMat.opacity = Math.max(0, Math.min(1, alpha));

    this.outlines.forEach(ol => {
      ol.material.uniforms.uOpacity.value = alpha;
      ol.material.transparent = isTrans;
    });
  }

  reset() {
    const S = CONFIG.stumps;
    this.anim = null;
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
// BAT (CEL-SHADED WILLOW WITH INKED OUTLINES & STICKER)
// ============================================================================

export function buildBatMesh() {
  const B = CONFIG.bat;
  const g = new THREE.Group();

  const willowTex = canvasTexture(256, 1024, (ctx, w, h) => {
    ctx.fillStyle = '#fef08a'; ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#eab308';
    ctx.lineWidth = 3.5;
    const grains = 6;
    for (let i = 1; i <= grains; i++) {
      const x = (i / (grains + 1)) * w;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x + 4, h * 0.4, x - 4, h * 0.7, x + 2, h);
      ctx.stroke();
    }
  });

  const willow = toonMat({
    map: willowTex,
    color: 0xffffff
  });

  const toeMat = toonMat({ color: 0x141413 });

  const hw = B.bladeWidth / 2;
  const shape = new THREE.Shape();
  const face = B.bladeFace, back = B.bladeBack;
  shape.moveTo(-hw, face);
  shape.lineTo(hw, face);
  shape.lineTo(hw, face - 0.015);
  shape.quadraticCurveTo(hw * 0.58, back, 0, back - 0.007);
  shape.quadraticCurveTo(-hw * 0.58, back, -hw, face - 0.015);
  shape.lineTo(-hw, face);

  const blade = new THREE.ExtrudeGeometry(shape, {
    depth: B.bladeLength,
    bevelEnabled: true,
    bevelThickness: 0.004,
    bevelSize: 0.003,
    bevelSegments: 2,
    curveSegments: 6
  });
  blade.rotateX(Math.PI / 2);
  blade.translate(0, B.bladeLength, 0);

  const bladeMesh = new THREE.Mesh(blade, willow);
  bladeMesh.castShadow = true;
  bladeMesh.receiveShadow = true;
  attachOutline(bladeMesh, 0.0055, 0x141413);
  g.add(bladeMesh);

  const faceChevron = new THREE.Mesh(
    new THREE.PlaneGeometry(B.bladeWidth * 0.76, 0.018),
    new THREE.MeshBasicMaterial({ color: 0xd97706, side: THREE.DoubleSide })
  );
  faceChevron.position.set(0, B.sweetSpotFromToe, face + 0.0015);
  g.add(faceChevron);

  const stickerTex = canvasTexture(256, 512, (ctx, w, h) => {
    ctx.fillStyle = '#1e3a8a'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 8;
    ctx.strokeRect(6, 6, w - 12, h - 12);

    ctx.fillStyle = '#f59e0b';
    ctx.font = '900 42px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('⚡ TITAN ⚡', w / 2, h * 0.32);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 24px system-ui, sans-serif';
    ctx.fillText('✦ 3D CEL-SHADED ✦', w / 2, h * 0.50);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '900 20px system-ui, sans-serif';
    ctx.fillText('GENUINE PHYSICS', w / 2, h * 0.70);
  });

  const sticker = new THREE.Mesh(
    new THREE.PlaneGeometry(B.bladeWidth * 0.74, 0.24),
    new THREE.MeshBasicMaterial({ map: stickerTex, side: THREE.DoubleSide })
  );
  sticker.position.set(0, B.bladeLength * 0.72, back - 0.008);
  sticker.rotation.y = Math.PI;
  g.add(sticker);

  const toeGuard = new THREE.Mesh(
    new THREE.BoxGeometry(B.bladeWidth + 0.005, 0.018, face - back + 0.005),
    toeMat
  );
  toeGuard.position.set(0, 0.009, (face + back) / 2);
  toeGuard.castShadow = true;
  attachOutline(toeGuard, 0.004, 0x141413);
  g.add(toeGuard);

  const hl = B.totalLength - B.bladeLength;
  const hc = (face + back) / 2;
  const gripTex = canvasTexture(128, 512, (ctx, w, h) => {
    ctx.fillStyle = '#f8fafc'; ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 14) {
      ctx.fillStyle = '#1e3a8a'; ctx.fillRect(0, y, w, 5);
      ctx.fillStyle = '#141413'; ctx.fillRect(0, y + 5, w, 2);
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

  return g;
}

// ============================================================================
// PITCH MARKER (RADAR TARGET FOR BOUNCE DISTANCE)
// ============================================================================

export class PitchMarker {
  constructor(scene) {
    this.group = new THREE.Group();

    this.ringMat = new THREE.MeshBasicMaterial({
      color: 0x059669,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      depthWrite: false
    });
    this.dotMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      depthWrite: false
    });
    this.pulseMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      depthWrite: false
    });

    const ring = new THREE.Mesh(new THREE.RingGeometry(0.14, 0.20, 32), this.ringMat);
    ring.rotation.x = -Math.PI / 2;

    const dot = new THREE.Mesh(new THREE.CircleGeometry(0.055, 24), this.dotMat);
    dot.rotation.x = -Math.PI / 2;

    this.pulseRing = new THREE.Mesh(new THREE.RingGeometry(0.24, 0.28, 32), this.pulseMat);
    this.pulseRing.rotation.x = -Math.PI / 2;

    this.group.add(ring, dot, this.pulseRing);
    this.group.position.y = 0.014;
    this.active = false;
    this.fading = false;
    this.alpha = 0;
    this.timer = 0;
    scene.add(this.group);
  }

  show(lineX, bounceDist) {
    this.group.position.set(lineX, 0.014, CONFIG.stumps.z - bounceDist);
    const col = bounceDist < 1.9 ? 0x0284c7 : bounceDist < 4.5 ? 0x059669 : bounceDist < 7.8 ? 0xd97706 : 0xdc2626;
    this.ringMat.color.setHex(col);
    this.pulseMat.color.setHex(col);
    this.active = true;
    this.fading = false;
    this.alpha = 0.95;
    this.timer = 0;
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
    this.ringMat.opacity = this.alpha;
    this.dotMat.opacity = this.alpha * 0.85;

    const contract = 1.0 + Math.max(0, 1 - (this.timer * 2.2 % 1)) * 1.3;
    this.pulseRing.scale.setScalar(contract);
    this.pulseMat.opacity = this.alpha * 0.6;
  }
}

// ============================================================================
// CRICKET BALL (BRIGHT WHITE ONE-DAY MATCH BALL WITH INK OUTLINE)
// ============================================================================

export function buildBall() {
  const tex = canvasTexture(512, 256, (g, w, h) => {
    // Brilliant pristine glossy white leather base
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);

    const grad = g.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.5, '#f8fafc');
    grad.addColorStop(1, '#f1f5f9');
    g.fillStyle = grad;
    g.fillRect(0, 0, w, h);

    const cy = h / 2;
    // Dark green / slate contrast seam ribbon (classic ODI ball)
    g.fillStyle = '#0f5132';
    g.fillRect(0, cy - 6, w, 12);

    // Deep center seam line
    g.strokeStyle = '#141413';
    g.lineWidth = 2.5;
    g.beginPath(); g.moveTo(0, cy); g.lineTo(w, cy); g.stroke();

    // Bold clean white cross-stitches (× × ×)
    const stitches = 40;
    g.strokeStyle = '#ffffff';
    g.lineWidth = 2.2;
    for (let i = 0; i < stitches; i++) {
      const x = (i / stitches) * w;
      g.beginPath(); g.moveTo(x, cy - 5); g.lineTo(x + 4, cy - 1); g.stroke();
      g.beginPath(); g.moveTo(x, cy + 5); g.lineTo(x + 4, cy + 1); g.stroke();
    }

    // Golden embossed crest
    g.fillStyle = '#f59e0b';
    g.beginPath();
    g.arc(w * 0.25, h * 0.28, 11, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = '#141413';
    g.lineWidth = 2;
    g.stroke();
  });

  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(CONFIG.ball.radius, 24, 18),
    toonMat({
      map: tex,
      color: 0xffffff,
      emissive: 0x333333 // Self-luminous white glow so it pops brightly in all lighting conditions
    })
  );
  mesh.castShadow = true;
  attachOutline(mesh, 0.0028, 0x141413);

  // Stylized cartoon contact drop shadow
  const shadow = new THREE.Group();
  const shadowDisc = new THREE.Mesh(
    new THREE.CircleGeometry(CONFIG.ball.radius * 1.5, 18),
    new THREE.MeshBasicMaterial({ color: 0x141413, transparent: true, opacity: 0.55, depthWrite: false })
  );
  shadowDisc.rotation.x = -Math.PI / 2;

  const spotRing = new THREE.Mesh(
    new THREE.RingGeometry(0.20, 0.28, 24),
    new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide, transparent: true, opacity: 0, depthWrite: false })
  );
  spotRing.rotation.x = -Math.PI / 2;
  spotRing.position.y = 0.005;

  shadow.add(shadowDisc, spotRing);
  shadow.userData.disc = shadowDisc;
  shadow.userData.ring = spotRing;

  return { mesh, shadow };
}

// ============================================================================
// TRAIL (GLOWING CARTOON COMET TRAIL)
// ============================================================================

export class Trail {
  constructor(scene, n = 90) {
    this.n = n;
    this.positions = new Float32Array(n * 3);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.mat = new THREE.LineBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.90 });
    this.line = new THREE.Line(this.geo, this.mat);
    this.line.frustumCulled = false;
    this.count = 0;
    scene.add(this.line);
    this.clear();
  }

  clear() {
    this.count = 0;
    this.geo.setDrawRange(0, 0);
    this.setColor(0xf59e0b, 0.90);
  }

  setColor(colorHex, opacity = 0.90) {
    this.mat.color.setHex(colorHex);
    this.mat.opacity = opacity;
  }

  push(p) {
    if (this.count < this.n) this.count++;
    this.positions.copyWithin(3, 0, (this.n - 1) * 3);
    this.positions[0] = p.x; this.positions[1] = p.y; this.positions[2] = p.z;
    this.geo.attributes.position.needsUpdate = true;
    this.geo.setDrawRange(0, this.count);
  }
}

// ============================================================================
// BOWLER (CEL-SHADED ATHLETE WITH SHARP CONTRAST AGAINST RED BALL)
// ============================================================================

export class BowlerModel {
  constructor(scene) {
    const D = BOWLER_DIMS;

    const shirt = toonMat({ color: 0x1d4ed8 });
    const pants = toonMat({ color: 0xf8fafc });
    const skin = toonMat({ color: 0xd97706 });
    const shoe = toonMat({ color: 0x0f172a });

    this.root = new THREE.Group();
    this.hips = new THREE.Group();
    this.hips.position.y = D.hipHeight;
    this.root.add(this.hips);

    this.torso = new THREE.Group();
    this.hips.add(this.torso);

    const chest = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, D.torsoLength - 0.2, 4, 10), shirt);
    chest.position.y = D.torsoLength / 2;
    chest.scale.set(1.15, 1, 0.80);
    chest.castShadow = true;
    attachOutline(chest, 0.014, 0x141413);
    this.torso.add(chest);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 12), skin);
    head.position.y = D.torsoLength + 0.18;
    head.castShadow = true;
    attachOutline(head, 0.012, 0x141413);
    this.torso.add(head);

    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.125, 12, 10, 0, Math.PI * 2, 0, Math.PI / 2), shirt);
    cap.position.y = head.position.y + 0.02;
    this.torso.add(cap);

    const limb = (len, r, mat) => {
      const grp = new THREE.Group();
      const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len - 2 * r, 4, 10), mat);
      m.position.y = -len / 2;
      m.castShadow = true;
      attachOutline(m, 0.012, 0x141413);
      grp.add(m);
      return grp;
    };

    this.armR = limb(D.armLength, 0.048, shirt);
    this.armR.position.set(-D.shoulderHalf, D.torsoLength, 0);
    this.torso.add(this.armR);

    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.048, 10, 8), skin);
    hand.position.y = -D.armLength;
    hand.castShadow = true;
    attachOutline(hand, 0.008, 0x141413);
    this.armR.add(hand);

    this.armL = limb(D.armLength, 0.048, shirt);
    this.armL.position.set(D.shoulderHalf, D.torsoLength, 0);
    this.torso.add(this.armL);

    const leg = (side) => {
      const thigh = limb(D.legLength / 2, 0.075, pants);
      thigh.position.set(side * 0.1, 0, 0);
      const shin = limb(D.legLength / 2, 0.065, pants);
      shin.position.y = -D.legLength / 2;
      thigh.add(shin);

      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.25), shoe);
      foot.position.set(0, -D.legLength / 2 + 0.02, 0.06);
      foot.castShadow = true;
      attachOutline(foot, 0.010, 0x141413);
      shin.add(foot);

      this.hips.add(thigh);
      return { thigh, shin };
    };

    this.legL = leg(1);
    this.legR = leg(-1);
    scene.add(this.root);
  }

  apply(p) {
    this.root.position.set(p.x, p.y, p.z);
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
// PARTICLE FX (COMIC ACTION STARS & CONFETTI)
// ============================================================================

export class ParticleFX {
  constructor(scene, maxParticles = 140) {
    this.max = maxParticles;

    const starTex = canvasTexture(64, 64, (ctx, w, h) => {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      const cx = w / 2, cy = h / 2;
      ctx.moveTo(cx, 4);
      ctx.quadraticCurveTo(cx, cy, w - 4, cy);
      ctx.quadraticCurveTo(cx, cy, cx, h - 4);
      ctx.quadraticCurveTo(cx, cy, 4, cy);
      ctx.quadraticCurveTo(cx, cy, cx, 4);
      ctx.closePath();
      ctx.fill();
    });

    const geo = new THREE.PlaneGeometry(0.06, 0.06);
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

    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._s = new THREE.Vector3();
    this._zero = new THREE.Matrix4().makeScale(0, 0, 0);

    for (let i = 0; i < maxParticles; i++) {
      this.mesh.setMatrixAt(i, this._zero);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
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
    for (let i = 0; i < 34; i++) {
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
        0.055 + Math.random() * 0.045,
        0.42 + Math.random() * 0.25,
        4.5
      );
    }
  }

  boundaryFirework(pos) {
    const palette = [0xf59e0b, 0x059669, 0x0284c7, 0xdc2626, 0xffffff, 0xdb2777];
    for (let i = 0; i < 52; i++) {
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
    for (let i = 0; i < 58; i++) {
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
        0.065 + Math.random() * 0.045,
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
  }
}
