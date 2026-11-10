import * as THREE from 'three';
import { CONFIG, PITCH_LENGTH } from '../config.js';
import { BOWLER_DIMS } from '../bowling/bowlerPose.js';

// All visual construction. Purely presentational: nothing here feeds physics.

function canvasTexture(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function buildEnvironment(scene, quality) {
  const F = CONFIG.field;

  // --- sky
  scene.background = new THREE.Color(0x8fc3ec);
  scene.fog = new THREE.Fog(0x9fcbee, 120, 280);
  const skyGeo = new THREE.SphereGeometry(400, 24, 12);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {},
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    fragmentShader: 'varying vec3 vP; void main(){ float h = normalize(vP).y; vec3 top = vec3(0.24,0.48,0.84); vec3 hor = vec3(0.82,0.90,0.96); gl_FragColor = vec4(mix(hor, top, smoothstep(0.0,0.45,h)),1.0);}'
  });
  scene.add(new THREE.Mesh(skyGeo, skyMat));

  // --- lights & directional sun with dynamic shadows
  scene.add(new THREE.HemisphereLight(0xdfefff, 0x4a6a32, 1.15));
  const sun = new THREE.DirectionalLight(0xfff6e8, 2.3);
  sun.position.set(-28, 55, 18);
  sun.castShadow = true;
  sun.shadow.mapSize.width = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.near = 10;
  sun.shadow.camera.far = 130;
  sun.shadow.camera.left = -18;
  sun.shadow.camera.right = 18;
  sun.shadow.camera.top = 22;
  sun.shadow.camera.bottom = -30;
  sun.shadow.bias = -0.0006;
  scene.add(sun);

  // --- outfield with authentic circular mowing pattern + radial grain
  const grassTex = canvasTexture(1024, 1024, (g, w, h) => {
    g.fillStyle = '#42782e'; g.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    // concentric mowing circles radiating from pitch center
    const rings = 14;
    for (let r = rings; r >= 1; r--) {
      g.beginPath();
      g.arc(cx, cy, (r * w) / (2 * rings), 0, Math.PI * 2);
      g.fillStyle = r % 2 === 0 ? '#498533' : '#3c7028';
      g.fill();
    }
    // fine grass blade fiber noise
    for (let i = 0; i < 22000; i++) {
      const a = Math.random() * Math.PI * 2;
      const dist = Math.sqrt(Math.random()) * (w / 2);
      g.fillStyle = `rgba(${35 + Math.random() * 45},${75 + Math.random() * 55},${25 + Math.random() * 35},0.28)`;
      g.fillRect(cx + Math.cos(a) * dist, cy + Math.sin(a) * dist, 2, 2);
    }
  });
  grassTex.wrapS = grassTex.wrapT = THREE.RepeatWrapping;
  grassTex.repeat.set(1, 1);
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(F.boundaryRadius + 14, 72),
    new THREE.MeshLambertMaterial({ map: grassTex })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, 0, F.centerZ);
  ground.receiveShadow = true;
  scene.add(ground);

  // --- 30-yard circle (dotted)
  const dotGeo = new THREE.CircleGeometry(0.18, 8);
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const dots = new THREE.InstancedMesh(dotGeo, dotMat, 90);
  const m = new THREE.Matrix4();
  for (let i = 0; i < 90; i++) {
    const a = (i / 90) * Math.PI * 2;
    m.makeRotationX(-Math.PI / 2).setPosition(Math.sin(a) * 27.4, 0.01, F.centerZ + Math.cos(a) * 27.4);
    dots.setMatrixAt(i, m);
  }
  scene.add(dots);

  // --- pitch with clay-loam turf, worn patches and authentic crease wear
  const pitchTex = canvasTexture(256, 1024, (g, w, h) => {
    g.fillStyle = '#caa974'; g.fillRect(0, 0, w, h);
    // fine turf grain & earthy striations
    for (let i = 0; i < 12000; i++) {
      const s = Math.random();
      g.fillStyle = `rgba(${160 + s * 55},${130 + s * 45},${85 + s * 35},0.32)`;
      g.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 3);
    }
    // worn bowler & batter footholds at both ends
    for (const y of [0.08, 0.92]) {
      const grd = g.createRadialGradient(w / 2, h * y, 4, w / 2, h * y, w * 0.58);
      grd.addColorStop(0, 'rgba(135,105,65,0.65)');
      grd.addColorStop(0.6, 'rgba(150,118,75,0.35)');
      grd.addColorStop(1, 'rgba(150,118,75,0)');
      g.fillStyle = grd; g.fillRect(0, 0, w, h);
    }
    // subtle dry cracks
    g.strokeStyle = 'rgba(110,85,50,0.25)';
    g.lineWidth = 1;
    for (let i = 0; i < 24; i++) {
      const y0 = Math.random() * h;
      g.beginPath();
      g.moveTo(w * 0.2 + Math.random() * w * 0.6, y0);
      g.lineTo(w * 0.2 + Math.random() * w * 0.6, y0 + 12 + Math.random() * 25);
      g.stroke();
    }
  });
  const pitchLen = PITCH_LENGTH + 2 * 2.4;
  const pitch = new THREE.Mesh(
    new THREE.PlaneGeometry(F.pitchHalfWidth * 2, pitchLen),
    new THREE.MeshLambertMaterial({ map: pitchTex })
  );
  pitch.rotation.x = -Math.PI / 2;
  pitch.position.set(0, 0.004, -PITCH_LENGTH / 2);
  pitch.receiveShadow = true;
  scene.add(pitch);

  // --- painted chalk crease markings
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xfdfdf8 });
  const line = (w, d, x, z) => {
    const l = new THREE.Mesh(new THREE.PlaneGeometry(w, d), lineMat);
    l.rotation.x = -Math.PI / 2; l.position.set(x, 0.008, z); scene.add(l);
  };
  for (const end of [0, -PITCH_LENGTH]) {
    const dir = end === 0 ? -1 : 1;
    line(3.66, 0.06, 0, end);                 // bowling crease
    line(3.66, 0.06, 0, end + dir * 1.22);    // popping crease
    for (const sx of [-1.32, 1.32]) line(0.06, 2.44, sx, end + dir * 0.0); // return creases
    // Authentic T20 / ODI wide guideline markings on popping crease
    for (const wx of [-0.89, 0.89]) line(0.05, 0.44, wx, end + dir * 1.0);
  }

  // --- authentic boundary rope + triangular foam sponsor wedges
  const rope = new THREE.Mesh(
    new THREE.TorusGeometry(F.boundaryRadius, 0.10, 6, 160),
    new THREE.MeshLambertMaterial({ color: 0xf2f2f2 })
  );
  rope.rotation.x = Math.PI / 2;
  rope.position.set(0, 0.09, F.centerZ);
  scene.add(rope);

  // Triangular foam boundary cushion wedges
  const wedgeGeo = new THREE.CylinderGeometry(0.32, 0.32, 3.4, 3);
  wedgeGeo.rotateZ(Math.PI / 2);
  const wedgeMat = new THREE.MeshLambertMaterial({ color: 0x1d4fa8, roughness: 0.65 });
  const wedgeCount = 44;
  const wedges = new THREE.InstancedMesh(wedgeGeo, wedgeMat, wedgeCount);
  const wm = new THREE.Matrix4();
  const wRot = new THREE.Matrix4();
  const wPos = new THREE.Vector3();
  for (let i = 0; i < wedgeCount; i++) {
    const a = (i / wedgeCount) * Math.PI * 2;
    const wr = F.boundaryRadius + 0.42;
    wPos.set(Math.sin(a) * wr, 0.15, F.centerZ + Math.cos(a) * wr);
    wRot.makeRotationY(a + Math.PI / 2);
    wm.makeTranslation(wPos.x, wPos.y, wPos.z).multiply(wRot);
    wedges.setMatrixAt(i, wm);
  }
  wedges.receiveShadow = true;
  scene.add(wedges);

  // --- advertising boards + stands
  const boardTex = canvasTexture(1024, 64, (g, w, h) => {
    const cols = ['#1d4fa8', '#c8102e', '#0b7a3e', '#1c2430', '#d97706'];
    const words = ['PHYSICS CRICKET', 'SWEET SPOT', 'TIMING IS EVERYTHING', 'MAXIMUM SIX!', 'PLAY STRAIGHT'];
    for (let i = 0; i < 5; i++) {
      g.fillStyle = cols[i]; g.fillRect((i * w) / 5, 0, w / 5, h);
      g.fillStyle = '#fff'; g.font = 'bold 24px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(words[i], ((i + 0.5) * w) / 5, h / 2);
    }
  });
  boardTex.wrapS = THREE.RepeatWrapping; boardTex.repeat.set(8, 1);
  const boardR = F.boundaryRadius + 4;
  const boards = new THREE.Mesh(
    new THREE.CylinderGeometry(boardR, boardR, 1.0, 96, 1, true),
    new THREE.MeshBasicMaterial({ map: boardTex, side: THREE.BackSide })
  );
  boards.position.set(0, 0.5, F.centerZ);
  scene.add(boards);

  const standTex = canvasTexture(512, 256, (g, w, h) => {
    g.fillStyle = '#5b6470'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 8) {
      for (let x = 0; x < w; x += 6) {
        const r = Math.random();
        g.fillStyle = r < 0.25 ? '#d8d8d8' : r < 0.4 ? '#2a4d8f' : r < 0.55 ? '#b03030' : r < 0.7 ? '#e0c060' : '#3c4450';
        g.fillRect(x, y, 4, 5);
      }
    }
  });
  standTex.wrapS = THREE.RepeatWrapping; standTex.repeat.set(6, 1);
  const stands = new THREE.Mesh(
    new THREE.CylinderGeometry(boardR + 30, boardR + 2, 22, 64, 1, true),
    new THREE.MeshLambertMaterial({ map: standTex, side: THREE.BackSide })
  );
  stands.position.set(0, 11, F.centerZ);
  scene.add(stands);
  const roof = new THREE.Mesh(
    new THREE.CylinderGeometry(boardR + 36, boardR + 26, 3, 64, 1, true),
    new THREE.MeshLambertMaterial({ color: 0xdedede, side: THREE.DoubleSide })
  );
  roof.position.set(0, 24, F.centerZ);
  scene.add(roof);

  // --- vibrant stadium roof flag pennants
  const flagCols = [0x1d4fa8, 0xf0b429, 0xffffff, 0xc8102e, 0x0b7a3e, 0x38bdf8];
  const flagPoleMat = new THREE.MeshLambertMaterial({ color: 0xdcdcdc });
  const flags = [];
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const fr = boardR + 34;
    const fx = Math.sin(a) * fr;
    const fz = F.centerZ + Math.cos(a) * fr;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 4.5, 6), flagPoleMat);
    pole.position.set(fx, 26.5, fz);
    scene.add(pole);

    const flagGeo = new THREE.BufferGeometry();
    const col = flagCols[i % flagCols.length];
    const flagMat = new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide });
    const vertices = new Float32Array([
      0, 1.8, 0,
      1.6, 1.1, 0.3,
      0, 0.4, 0
    ]);
    flagGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    flagGeo.computeVertexNormals();
    const flag = new THREE.Mesh(flagGeo, flagMat);
    flag.position.set(fx, 26.2, fz);
    flag.rotation.y = a + Math.PI / 4;
    flag.userData = { baseRotY: a + Math.PI / 4, phase: i * 0.7 };
    scene.add(flag);
    flags.push(flag);
  }

  // floodlight towers
  if (quality !== 'low') {
    const towerMat = new THREE.MeshLambertMaterial({ color: 0x9aa0a8 });
    for (let i = 0; i < 4; i++) {
      const a = Math.PI / 4 + (i * Math.PI) / 2;
      const r = boardR + 22;
      const t = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 1.0, 45, 6), towerMat);
      t.position.set(Math.sin(a) * r, 22.5, F.centerZ + Math.cos(a) * r);
      scene.add(t);
      const head = new THREE.Mesh(new THREE.BoxGeometry(8, 4, 1), new THREE.MeshBasicMaterial({ color: 0xfffbe8 }));
      head.position.set(t.position.x, 46, t.position.z);
      head.lookAt(0, 0, F.centerZ);
      scene.add(head);
    }
  }

  // --- sight screens at both ends (dark, for a white ball)
  const ssMat = new THREE.MeshBasicMaterial({ color: 0x15171c });
  const ssBowler = new THREE.Mesh(new THREE.PlaneGeometry(16, 7.5), ssMat);
  ssBowler.position.set(0, 4.5, F.centerZ - F.boundaryRadius - 5);
  scene.add(ssBowler);

  const ssBatter = new THREE.Mesh(new THREE.PlaneGeometry(16, 7.5), ssMat);
  ssBatter.position.set(0, 4.5, F.centerZ + F.boundaryRadius + 5);
  ssBatter.rotation.y = Math.PI;
  scene.add(ssBatter);

  return {
    flags,
    update(t) {
      for (let i = 0; i < flags.length; i++) {
        const f = flags[i];
        f.rotation.y = f.userData.baseRotY + Math.sin(t * 3.8 + f.userData.phase) * 0.16;
        f.rotation.z = Math.sin(t * 4.6 + f.userData.phase) * 0.07;
      }
    }
  };
}

// ---------------------------------------------------------------- stadium jumbotron
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

    const frameGeo = new THREE.BoxGeometry(16.6, 8.6, 0.4);
    const frameMat = new THREE.MeshLambertMaterial({ color: 0x111827 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.copy(this.mesh.position);
    frame.quaternion.copy(this.mesh.quaternion);
    frame.translateZ(-0.25);
    scene.add(frame);

    this.update(0, 0, '0.0', 'MATCH IN PROGRESS');
  }

  update(runs, wkts, overs, banner = '') {
    const g = this.ctx, w = 512, h = 256;
    g.fillStyle = '#0a0f1d';
    g.fillRect(0, 0, w, h);
    g.strokeStyle = '#f0b429';
    g.lineWidth = 6;
    g.strokeRect(3, 3, w - 6, h - 6);
    g.fillStyle = '#1d4fa8';
    g.fillRect(6, 6, w - 12, 42);
    g.fillStyle = '#ffffff';
    g.font = 'bold 22px system-ui, sans-serif';
    g.textAlign = 'center';
    g.fillText('PHYSICS CRICKET STADIUM', w / 2, 35);
    g.fillStyle = '#ffffff';
    g.font = '900 68px monospace';
    g.fillText(`${runs}/${wkts}`, w / 2, 118);
    g.fillStyle = '#ffd166';
    g.font = 'bold 24px system-ui, sans-serif';
    g.fillText(`OVERS ${overs}`, w / 2, 160);
    g.fillStyle = banner.includes('6') ? '#f59e0b' : banner.includes('4') ? '#38bdf8' : banner.includes('WICKET') ? '#f43f5e' : '#1e293b';
    g.fillRect(6, 180, w - 12, 68);
    g.fillStyle = '#ffffff';
    g.font = '900 28px system-ui, sans-serif';
    g.fillText(banner || 'PLAY STRAIGHT · TIME THE BALL', w / 2, 224);
    this.tex.needsUpdate = true;
  }
}

// ---------------------------------------------------------------- stumps
export class StumpsView {
  constructor(scene, z) {
    this.group = new THREE.Group();
    this.z = z;
    const S = CONFIG.stumps;
    this.mat = new THREE.MeshStandardMaterial({ color: 0xf5ecc8, roughness: 0.44, metalness: 0.03 });
    const geo = new THREE.CylinderGeometry(S.radius, S.radius, S.height, 12);
    geo.translate(0, S.height / 2, 0);
    this.stumps = [];
    for (let i = -1; i <= 1; i++) {
      const s = new THREE.Mesh(geo, this.mat);
      s.position.set(i * S.spacing, 0, z);
      s.castShadow = true;
      s.receiveShadow = true;
      this.group.add(s);
      this.stumps.push(s);
    }
    const bailGeo = new THREE.CylinderGeometry(0.008, 0.008, S.spacing, 8);
    bailGeo.rotateZ(Math.PI / 2);
    this.bailMat = new THREE.MeshStandardMaterial({ color: 0xedd69a, roughness: 0.38 });
    this.bails = [];
    for (const off of [-0.5, 0.5]) {
      const b = new THREE.Mesh(bailGeo, this.bailMat);
      b.position.set(off * S.spacing, S.height + 0.01, z);
      b.castShadow = true;
      this.group.add(b);
      this.bails.push(b);
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
  }

  reset() {
    const S = CONFIG.stumps;
    this.anim = null;
    this.stumps.forEach((s, i) => { s.position.set((i - 1) * S.spacing, 0, this.z); s.rotation.set(0, 0, 0); });
    this.bails.forEach((b, i) => { b.position.set((i - 0.5) * S.spacing, S.height + 0.01, this.z); b.rotation.set(0, 0, 0); });
  }

  /** Visual reaction to the ball hitting the stumps. */
  shatter(stumpIndex, ballVel) {
    this.setOpacity(1.0);
    const v = ballVel.clone().multiplyScalar(0.25);
    this.anim = {
      t: 0,
      stump: this.stumps[stumpIndex + 1],
      tiltX: Math.max(0.6, Math.min(1.2, v.z * 0.3)),
      tiltZ: -v.x * 0.4,
      bails: this.bails.map(() => new THREE.Vector3((Math.random() - 0.5) * 3 + v.x, 2.5 + Math.random() * 2, 2 + Math.random() * 2 + v.z)),
      spins: this.bails.map(() => new THREE.Vector3(Math.random() * 20, Math.random() * 20, Math.random() * 20))
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
        b.rotation.x += a.spins[i].x * dt; b.rotation.y += a.spins[i].y * dt;
      } else { b.position.y = 0.01; v.set(0, 0, 0); }
    });
  }
}

// ---------------------------------------------------------------- bat
export function buildBatMesh() {
  const B = CONFIG.bat;
  const g = new THREE.Group();

  // Procedural authentic English willow grain texture
  const willowTex = canvasTexture(256, 1024, (ctx, w, h) => {
    // warm golden straw willow base
    ctx.fillStyle = '#eeddb7'; ctx.fillRect(0, 0, w, h);
    // fine natural wood grain growth rings running lengthwise
    const grains = 9;
    for (let i = 1; i <= grains; i++) {
      const x = (i / (grains + 1)) * w + (Math.random() - 0.5) * 6;
      ctx.strokeStyle = 'rgba(195, 162, 110, 0.45)';
      ctx.lineWidth = 1.2 + Math.random() * 1.4;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x + 5, h * 0.35, x - 4, h * 0.7, x + 1, h);
      ctx.stroke();
    }
    // fine heartwood texture
    for (let i = 0; i < 4000; i++) {
      ctx.fillStyle = `rgba(180, 142, 90, ${Math.random() * 0.07})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 1, 3);
    }
    // Authentic match-wear ball seam impact scuffs on the sweet spot
    const sy = h * (B.sweetSpotFromToe / B.totalLength);
    for (let s = 0; s < 4; s++) {
      const sx = w * 0.45 + (Math.random() - 0.5) * 32;
      const py = sy + (Math.random() - 0.5) * 42;
      ctx.fillStyle = 'rgba(165, 42, 42, 0.22)';
      ctx.beginPath();
      ctx.ellipse(sx, py, 12, 22, (Math.random() - 0.5) * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  const willow = new THREE.MeshStandardMaterial({
    map: willowTex,
    roughness: 0.52,
    metalness: 0.02
  });
  const darker = new THREE.MeshStandardMaterial({ color: 0x1f242d, roughness: 0.85 }); // modern composite toe guard

  // blade: shaped profile (thicker spine at the back, flat striking face)
  const hw = B.bladeWidth / 2;
  const shape = new THREE.Shape();
  const face = B.bladeFace, back = B.bladeBack;
  shape.moveTo(-hw, face);
  shape.lineTo(hw, face);
  shape.lineTo(hw, face - 0.015);
  shape.quadraticCurveTo(hw * 0.58, back, 0, back - 0.007);
  shape.quadraticCurveTo(-hw * 0.58, back, -hw, face - 0.015);
  shape.lineTo(-hw, face);
  const blade = new THREE.ExtrudeGeometry(shape, { depth: B.bladeLength, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.003, bevelSegments: 2, curveSegments: 6 });
  blade.rotateX(Math.PI / 2);
  blade.translate(0, B.bladeLength, 0);
  const bladeMesh = new THREE.Mesh(blade, willow);
  bladeMesh.castShadow = true;
  bladeMesh.receiveShadow = true;
  g.add(bladeMesh);

  // Subtle laser-etched sweet-spot chevron on face
  const faceChevron = new THREE.Mesh(
    new THREE.PlaneGeometry(B.bladeWidth * 0.74, 0.016),
    new THREE.MeshBasicMaterial({ color: 0x142850, transparent: true, opacity: 0.42 })
  );
  faceChevron.position.set(0, B.sweetSpotFromToe, face + 0.0012);
  g.add(faceChevron);

  // Modern gold & navy brand sticker on the back spine
  const stickerTex = canvasTexture(256, 512, (ctx, w, h) => {
    ctx.fillStyle = '#0f172a'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 6;
    ctx.strokeRect(6, 6, w - 12, h - 12);
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TITAN', w / 2, h * 0.35);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('PRO WILLOW', w / 2, h * 0.52);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('GENUINE PHYSICS', w / 2, h * 0.72);
  });
  const sticker = new THREE.Mesh(
    new THREE.PlaneGeometry(B.bladeWidth * 0.74, 0.22),
    new THREE.MeshStandardMaterial({ map: stickerTex, roughness: 0.35 })
  );
  sticker.position.set(0, B.bladeLength * 0.72, back - 0.008);
  sticker.rotation.y = Math.PI;
  g.add(sticker);

  // Protective rubber/composite toe guard
  const toeGuard = new THREE.Mesh(new THREE.BoxGeometry(B.bladeWidth + 0.004, 0.016, face - back + 0.004), darker);
  toeGuard.position.set(0, 0.008, (face + back) / 2);
  toeGuard.castShadow = true;
  g.add(toeGuard);

  // Cane handle with textured spiral rubber grip
  const hl = B.totalLength - B.bladeLength;
  const hc = (face + back) / 2;
  const gripTex = canvasTexture(128, 512, (ctx, w, h) => {
    ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, 0, w, h);
    // Spiral tread rings
    for (let y = 0; y < h; y += 12) {
      ctx.fillStyle = '#94a3b8'; ctx.fillRect(0, y, w, 4);
      ctx.fillStyle = '#1e3a8a'; ctx.fillRect(0, y + 4, w, 2);
    }
  });
  gripTex.wrapS = gripTex.wrapT = THREE.RepeatWrapping;
  gripTex.repeat.set(1, 3);
  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(B.handleRadius, B.handleRadius * 1.08, hl, 16),
    new THREE.MeshStandardMaterial({ map: gripTex, roughness: 0.75 })
  );
  handle.position.set(0, B.bladeLength + hl / 2, hc);
  handle.castShadow = true;
  g.add(handle);

  return g;
}

// ---------------------------------------------------------------- pitch bounce length marker
export class PitchMarker {
  constructor(scene) {
    this.group = new THREE.Group();
    this.ringMat = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
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
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.12, 0.18, 32), this.ringMat);
    ring.rotation.x = -Math.PI / 2;
    const dot = new THREE.Mesh(new THREE.CircleGeometry(0.048, 24), this.dotMat);
    dot.rotation.x = -Math.PI / 2;
    this.pulseRing = new THREE.Mesh(new THREE.RingGeometry(0.22, 0.26, 32), this.pulseMat);
    this.pulseRing.rotation.x = -Math.PI / 2;
    this.group.add(ring, dot, this.pulseRing);
    this.group.position.y = 0.012;
    this.active = false;
    this.fading = false;
    this.alpha = 0;
    this.timer = 0;
    scene.add(this.group);
  }

  show(lineX, bounceDist) {
    this.group.position.set(lineX, 0.012, CONFIG.stumps.z - bounceDist);
    // Color-code by length: cyan = yorker, green = full, amber = good, coral = short
    const col = bounceDist < 1.9 ? 0x38bdf8 : bounceDist < 4.5 ? 0x4ade80 : bounceDist < 7.8 ? 0xfbbf24 : 0xfb7185;
    this.ringMat.color.setHex(col);
    this.pulseMat.color.setHex(col);
    this.active = true;
    this.fading = false;
    this.alpha = 0.90;
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
    const pulse = 1 + 0.08 * Math.sin(t * 14);
    this.group.scale.setScalar(pulse);
    this.ringMat.opacity = this.alpha;
    this.dotMat.opacity = this.alpha * 0.8;
    // Outer timing ring contracts inward toward the bounce center
    const contract = 1.0 + Math.max(0, 1 - (this.timer * 2.2 % 1)) * 1.2;
    this.pulseRing.scale.setScalar(contract);
    this.pulseMat.opacity = this.alpha * 0.55;
  }
}

// ---------------------------------------------------------------- ball
export function buildBall() {
  const tex = canvasTexture(512, 256, (g, w, h) => {
    // pristine glossy white leather base
    g.fillStyle = '#f8f8f5'; g.fillRect(0, 0, w, h);
    // subtle leather grain
    for (let i = 0; i < 4000; i++) {
      g.fillStyle = `rgba(215, 215, 210, ${Math.random() * 0.14})`;
      g.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
    }
    const cy = h / 2;
    // Darker seam leather ribbon
    g.fillStyle = '#e6e3d8';
    g.fillRect(0, cy - 6, w, 12);
    // Core dark seam groove
    g.strokeStyle = '#6b1414';
    g.lineWidth = 1.5;
    g.beginPath(); g.moveTo(0, cy); g.lineTo(w, cy); g.stroke();
    // Interlocking hand-stitched threads
    const stitches = 44;
    for (let i = 0; i < stitches; i++) {
      const x = (i / stitches) * w;
      // top stitch
      g.strokeStyle = '#8a1c1c'; g.lineWidth = 2;
      g.beginPath(); g.moveTo(x, cy - 5); g.lineTo(x + 4, cy - 1); g.stroke();
      g.fillStyle = '#fff'; g.fillRect(x + 1, cy - 4, 1.8, 1.8);
      // bottom stitch
      g.beginPath(); g.moveTo(x, cy + 5); g.lineTo(x + 4, cy + 1); g.stroke();
      g.fillStyle = '#fff'; g.fillRect(x + 1, cy + 2, 1.8, 1.8);
    }
    // Gold manufacturer crest on polished hemisphere
    g.fillStyle = '#c5a059';
    g.beginPath();
    g.arc(w * 0.25, h * 0.28, 10, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#fff';
    g.font = 'bold 8px sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText('TITAN', w * 0.25, h * 0.28);
  });
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(CONFIG.ball.radius, 24, 16),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.32, metalness: 0.05 })
  );
  mesh.castShadow = true;

  // contact shadow - critical for judging length + outfield tracking ring when zoomed out
  const shadow = new THREE.Group();
  const shadowDisc = new THREE.Mesh(
    new THREE.CircleGeometry(CONFIG.ball.radius * 1.4, 16),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.45, depthWrite: false })
  );
  shadowDisc.rotation.x = -Math.PI / 2;
  const spotRing = new THREE.Mesh(
    new THREE.RingGeometry(0.18, 0.26, 24),
    new THREE.MeshBasicMaterial({ color: 0xffd166, side: THREE.DoubleSide, transparent: true, opacity: 0, depthWrite: false })
  );
  spotRing.rotation.x = -Math.PI / 2;
  spotRing.position.y = 0.004;
  shadow.add(shadowDisc, spotRing);
  shadow.userData.disc = shadowDisc;
  shadow.userData.ring = spotRing;
  return { mesh, shadow };
}

export class Trail {
  constructor(scene, n = 90) {
    this.n = n;
    this.positions = new Float32Array(n * 3);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.mat = new THREE.LineBasicMaterial({ color: 0xffe082, transparent: true, opacity: 0.85 });
    this.line = new THREE.Line(this.geo, this.mat);
    this.line.frustumCulled = false;
    this.count = 0;
    scene.add(this.line);
    this.clear();
  }
  clear() {
    this.count = 0;
    this.geo.setDrawRange(0, 0);
    this.setColor(0xffe082, 0.82);
  }
  setColor(colorHex, opacity = 0.85) {
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

// ---------------------------------------------------------------- bowler
export class BowlerModel {
  constructor(scene) {
    const D = BOWLER_DIMS;
    const shirt = new THREE.MeshLambertMaterial({ color: 0x1d4fa8 });
    const pants = new THREE.MeshLambertMaterial({ color: 0x1a3570 });
    const skin = new THREE.MeshLambertMaterial({ color: 0xa7745a });
    const shoe = new THREE.MeshLambertMaterial({ color: 0xffffff });

    this.root = new THREE.Group();
    this.hips = new THREE.Group();
    this.hips.position.y = D.hipHeight;
    this.root.add(this.hips);

    this.torso = new THREE.Group();
    this.hips.add(this.torso);
    const chest = new THREE.Mesh(new THREE.CapsuleGeometry(0.17, D.torsoLength - 0.2, 4, 8), shirt);
    chest.position.y = D.torsoLength / 2;
    chest.scale.set(1.15, 1, 0.75);
    chest.castShadow = true;
    this.torso.add(chest);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.11, 12, 10), skin);
    head.position.y = D.torsoLength + 0.17;
    head.castShadow = true;
    this.torso.add(head);

    const limb = (len, r, mat) => {
      const grp = new THREE.Group();
      const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len - 2 * r, 4, 8), mat);
      m.position.y = -len / 2;
      m.castShadow = true;
      grp.add(m);
      return grp;
    };
    this.armR = limb(D.armLength, 0.045, shirt);
    this.armR.position.set(-D.shoulderHalf, D.torsoLength, 0);
    this.torso.add(this.armR);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), skin);
    hand.position.y = -D.armLength;
    hand.castShadow = true;
    this.armR.add(hand);
    this.armL = limb(D.armLength, 0.045, shirt);
    this.armL.position.set(D.shoulderHalf, D.torsoLength, 0);
    this.torso.add(this.armL);

    const leg = (side) => {
      const thigh = limb(D.legLength / 2, 0.07, pants);
      thigh.position.set(side * 0.1, 0, 0);
      const shin = limb(D.legLength / 2, 0.06, pants);
      shin.position.y = -D.legLength / 2;
      thigh.add(shin);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.07, 0.24), shoe);
      foot.position.set(0, -D.legLength / 2 + 0.02, 0.06);
      foot.castShadow = true;
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

// ---------------------------------------------------------------- particle FX
export class ParticleFX {
  constructor(scene, maxParticles = 140) {
    this.max = maxParticles;
    const geo = new THREE.PlaneGeometry(0.045, 0.045);
    const mat = new THREE.MeshBasicMaterial({
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
    p.rotV.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12);
    p.color.setHex(colorHex);
    p.scale = size;
    p.life = 0;
    p.maxLife = maxLife;
    p.gravity = gravity;
  }

  pitchDust(pos) {
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 0.4 + Math.random() * 1.2;
      const up = 0.5 + Math.random() * 1.4;
      const col = Math.random() > 0.4 ? 0xd7c49e : 0xb59e74;
      this.spawn(
        pos.x + (Math.random() - 0.5) * 0.08,
        0.02,
        pos.z + (Math.random() - 0.5) * 0.08,
        Math.cos(a) * sp,
        up,
        Math.sin(a) * sp,
        col,
        0.035 + Math.random() * 0.025,
        0.35 + Math.random() * 0.25,
        3.5
      );
    }
  }

  impactSparks(pos, normal) {
    for (let i = 0; i < 16; i++) {
      const sp = 2.2 + Math.random() * 4.5;
      const dir = normal.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 1.2
      )).normalize();
      const col = Math.random() > 0.3 ? 0xffd166 : 0xfff3b0;
      this.spawn(
        pos.x, pos.y, pos.z,
        dir.x * sp, dir.y * sp, dir.z * sp,
        col,
        0.028 + Math.random() * 0.02,
        0.22 + Math.random() * 0.16,
        6.0
      );
    }
  }

  sweetSpotBurst(pos, normal) {
    // Brilliant radiant golden/cyan particle pop on perfectly middled strokes
    for (let i = 0; i < 28; i++) {
      const sp = 3.2 + Math.random() * 6.5;
      const dir = normal.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 1.6,
        (Math.random() - 0.5) * 1.6,
        (Math.random() - 0.5) * 1.6
      )).normalize();
      const col = Math.random() > 0.4 ? 0xffd166 : Math.random() > 0.5 ? 0xffffff : 0x38bdf8;
      this.spawn(
        pos.x, pos.y, pos.z,
        dir.x * sp, dir.y * sp, dir.z * sp,
        col,
        0.04 + Math.random() * 0.03,
        0.35 + Math.random() * 0.22,
        5.0
      );
    }
  }

  boundaryFirework(pos) {
    const palette = [0xffd166, 0x06d6a0, 0x38bdf8, 0xf43f5e, 0xffffff, 0xfb923c];
    for (let i = 0; i < 48; i++) {
      const a = Math.random() * Math.PI * 2;
      const elev = 0.4 + Math.random() * 1.4;
      const sp = 4.0 + Math.random() * 8.5;
      const col = palette[Math.floor(Math.random() * palette.length)];
      this.spawn(
        pos.x,
        Math.max(0.5, pos.y),
        pos.z,
        Math.cos(a) * sp,
        elev * sp,
        Math.sin(a) * sp,
        col,
        0.06 + Math.random() * 0.04,
        1.8 + Math.random() * 0.9,
        4.0
      );
    }
  }

  confetti(pos) {
    const palette = [0xffd166, 0x06d6a0, 0x38bdf8, 0xf43f5e, 0xffffff, 0xa855f7];
    for (let i = 0; i < 54; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 2.0 + Math.random() * 7.5;
      const up = 4.5 + Math.random() * 6.5;
      const col = palette[Math.floor(Math.random() * palette.length)];
      this.spawn(
        pos.x + (Math.random() - 0.5) * 1.8,
        pos.y + 0.5,
        pos.z + (Math.random() - 0.5) * 1.8,
        Math.cos(a) * r,
        up,
        Math.sin(a) * r,
        col,
        0.05 + Math.random() * 0.04,
        2.4 + Math.random() * 1.2,
        3.0
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
