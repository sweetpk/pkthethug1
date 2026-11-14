import * as THREE from 'three';
import { CONFIG, PITCH_LENGTH, loadUserSettings, saveUserSettings } from './config.js';
import { World } from './physics/World.js';
import { DeliveryPlanner, solveRelease } from './bowling/DeliveryPlanner.js';
import { makeRunup, bowlerPose } from './bowling/bowlerPose.js';
import { DeliveryJudge } from './game/DeliveryJudge.js';
import { Input } from './input/Input.js';
import { AudioEngine } from './audio/AudioEngine.js';
import { buildEnvironment, StumpsView, buildBatMesh, PitchMarker, buildBall, Trail, BowlerModel, ParticleFX, StadiumScreen } from './render/visuals.js';

loadUserSettings();

// ============================================================ setup
const $ = (id) => document.getElementById(id);
const canvas = $('game');
const isTouch = Boolean(
  (typeof window !== 'undefined' && ('ontouchstart' in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0))) ||
  (typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches)
);
if (isTouch) {
  document.body.classList.add('touch');
  document.body.classList.remove('desktop');
} else {
  document.body.classList.add('desktop');
  document.body.classList.remove('touch');
}

const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isTouch || devicePixelRatio < 2, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, isTouch ? 1.5 : 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = !isTouch || devicePixelRatio <= 2;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(CONFIG.camera.verticalFov, 1, 0.03, 900);
const env = buildEnvironment(scene, isTouch ? 'low' : 'high');
const jumbotron = new StadiumScreen(scene);

const strikerStumps = new StumpsView(scene, CONFIG.stumps.z);
const nonStrikerStumps = new StumpsView(scene, -PITCH_LENGTH);
const bowlerModel = new BowlerModel(scene);
const batMesh = buildBatMesh();
scene.add(batMesh);
const pitchMarker = new PitchMarker(scene);
const { mesh: ballMesh, shadow: ballShadow } = buildBall();
scene.add(ballMesh, ballShadow);
const trail = new Trail(scene);
const particleFX = new ParticleFX(scene);

const world = new World();
const planner = new DeliveryPlanner();
const judge = new DeliveryJudge();
const input = new Input(canvas, $('joystick'), $('knob'));
const audio = new AudioEngine();

// ============================================================ game state
const G = {
  mode: 'menu',          // menu | playing | paused | over
  phase: 'idle',         // runup | live | result
  phaseTime: 0,
  runupTime: 0,
  runs: 0, wickets: 0, balls: 0, fours: 0, sixes: 0,
  delivery: null, runup: null, releasePos: new THREE.Vector3(), releaseVel: new THREE.Vector3(),
  result: null,
  hitThisBall: false,
  flinched: false,
  best: +(localStorage.getItem('physics-cricket-best') || 0),
  overBalls: [],
  m25: false,
  m50: false,
  newBestAnnounced: false,
  lastStrideStep: -1,
  hitFreeze: 0,
  hasFlybyPlayed: false,
  lastBanner: 'MATCH IN PROGRESS'
};
const pose = {};
const lastTarget = new THREE.Vector2().copy(world.bat.target);
const stepTarget = new THREE.Vector2();

// camera feedback & post-hit zoom-out state
const camFx = {
  shake: 0, kick: 0, yaw: 0, pitch: 0,
  follow: false, hitTime: 0, zoom: 0,
  dirX: 0, dirZ: -1,
  lookPos: new THREE.Vector3(0, 0.5, -10),
  zoomPos: new THREE.Vector3()
};

// ============================================================ resize
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  // keep a minimum horizontal field of view on tall (portrait) screens
  const vf = CONFIG.camera.verticalFov;
  const minH = CONFIG.camera.minHorizontalFov * Math.PI / 180;
  const vNeeded = 2 * Math.atan(Math.tan(minH / 2) / camera.aspect) * 180 / Math.PI;
  camera.fov = Math.min(100, Math.max(vf, vNeeded));
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 200));
resize();

// ============================================================ HUD helpers
let msgTimer = 0;
function showMessage(text, cls, dur = 1.4) {
  const m = $('message');
  m.className = '';
  m.textContent = text;
  void m.offsetWidth;
  m.className = `${cls} show`;
  msgTimer = dur;
}
function setHint(text) {
  const h = $('hint');
  if (text) { h.textContent = text; h.classList.add('show'); } else h.classList.remove('show');
}
function oversText(b) { return `${Math.floor(b / CONFIG.game.ballsPerOver)}.${b % CONFIG.game.ballsPerOver}`; }
function updateScoreboard() {
  $('runs').textContent = G.runs;
  $('wkts').textContent = G.wickets;
  $('overs').textContent = oversText(G.balls);
  if ($('boundaries')) {
    $('boundaries').textContent = `4s: ${G.fours} · 6s: ${G.sixes}`;
  }
  if ($('strikeRate')) {
    const sr = G.balls ? Math.round((G.runs / G.balls) * 100) : 0;
    $('strikeRate').textContent = `SR ${sr}`;
  }
  if ($('overStrip')) {
    const html = G.overBalls.map((b) => `<span class="ball-dot ${b.cls}">${b.txt}</span>`).join('');
    $('overStrip').innerHTML = html;
  }
  if (jumbotron) {
    jumbotron.update(G.runs, G.wickets, oversText(G.balls), G.lastBanner || '');
  }
}

// ============================================================ deliveries
function startDelivery() {
  if (G.balls % CONFIG.game.ballsPerOver === 0 && G.balls > 0 && G.overBalls.length >= CONFIG.game.ballsPerOver) {
    G.overBalls = [];
  }
  if (G.balls % CONFIG.game.ballsPerOver === 0 && G.balls / CONFIG.game.ballsPerOver !== planner.overIndex) {
    planner.startOver(G.balls / CONFIG.game.ballsPerOver);
  }
  const d = planner.next();
  G.delivery = d;
  G.runup = makeRunup(d.bowler);
  bowlerPose(G.runup.tRelease, G.runup, pose);
  G.releasePos.copy(pose.hand);
  G.releaseVel.copy(solveRelease(G.releasePos, d));
  G.phase = 'runup';
  G.phaseTime = 0;
  G.runupTime = 0;
  G.hitThisBall = false;
  G.flinched = false;
  G.lastStrideStep = -1;
  G.hasFlybyPlayed = false;
  world.resetDelivery();
  strikerStumps.reset();
  nonStrikerStumps.reset();
  trail.clear();
  pitchMarker.hide();
  camFx.follow = false;
  camFx.hitTime = 0;
  camFx.zoom = 0;
  batMesh.visible = true;
  $('bowlerName').textContent = `${d.bowler.name} bowler`;
  $('speed').textContent = '';
  G.lastBanner = 'MATCH IN PROGRESS';
  updateScoreboard();
}

function release() {
  world.ball.launch(G.releasePos, G.releaseVel);
  judge.start();
  pitchMarker.show(G.delivery.lineX, G.delivery.bounceDist);
  trail.setColor(0x38bdf8, 0.88);
  G.phase = 'live';
  G.phaseTime = 0;
  audio.bowlerRelease();
  $('speed').textContent = `${Math.round(G.delivery.kmh)} km/h`;
}

function endDelivery(res) {
  G.result = res;
  G.phase = 'result';
  G.phaseTime = 0;
  G.balls++;
  G.runs += res.runs;
  planner.recordOutcome(res.runs);

  // Record over timeline
  let ballTxt = '•', ballCls = 'dot';
  if (res.kind === 'four') { ballTxt = '4'; ballCls = 'four'; }
  else if (res.kind === 'six') { ballTxt = '6'; ballCls = 'six'; }
  else if (res.kind === 'wicket') { ballTxt = 'W'; ballCls = 'wicket'; }
  else if (res.runs > 0) { ballTxt = String(res.runs); ballCls = 'runs'; }
  G.overBalls.push({ txt: ballTxt, cls: ballCls });

  if (res.kind === 'four') {
    G.fours++;
    showMessage('FOUR!', 'four');
    audio.cheer(0.85, 2.5);
    audio.boundaryFanfare(false);
    audio.boundaryClap();
    trail.setColor(0x38bdf8, 0.9);
    G.lastBanner = '★ FOUR! ★';
  } else if (res.kind === 'six') {
    G.sixes++;
    showMessage('SIX!', 'six');
    audio.cheer(1, 3.4);
    audio.boundaryFanfare(true);
    audio.boundaryClap();
    trail.setColor(0xffd166, 0.95);
    particleFX.confetti(new THREE.Vector3(0, 1.8, -1.22));
    particleFX.boundaryFirework(new THREE.Vector3(world.ball.pos.x, 2.5, world.ball.pos.z));
    G.lastBanner = '★ MAXIMUM SIX! ★';
  } else if (res.kind === 'runs') {
    showMessage(res.text, 'runs', 1.3);
    audio.cheer(0.35 + res.runs * 0.12, 1.4);
    G.lastBanner = `${res.runs} RUNS`;
  } else if (res.kind === 'wicket') {
    G.wickets++;
    showMessage('WICKET!', 'wicket', 1.8);
    audio.wicketWhistle();
    camFx.shake = Math.max(camFx.shake, 0.6);
    G.lastBanner = '★ WICKET! ★';
  } else {
    showMessage(res.text, 'minor', 1.0);
    G.lastBanner = 'DOT BALL';
  }

  // Innings milestones
  if (!G.m25 && G.runs >= 25) {
    G.m25 = true;
    setTimeout(() => { showMessage('⚡ QUICKFIRE 25! ⚡', 'milestone', 2.0); audio.cheer(0.7, 2.0); }, 1300);
  }
  if (!G.m50 && G.runs >= 50) {
    G.m50 = true;
    setTimeout(() => {
      showMessage('🏆 HALF CENTURY! 50 RUNS 🏆', 'milestone', 2.5);
      audio.cheer(1.0, 3.2);
      particleFX.confetti(new THREE.Vector3(0, 2.0, -1.22));
    }, 1300);
  }
  if (G.runs > G.best && G.best > 0 && !G.newBestAnnounced) {
    G.newBestAnnounced = true;
    setTimeout(() => { showMessage('⭐ NEW HIGH SCORE! ⭐', 'milestone', 2.2); audio.cheer(0.85, 2.5); }, 1400);
  }

  if (res.distance && G.hitThisBall && $('lastShot').innerHTML && !$('lastShot').innerHTML.includes('m ·')) {
    $('lastShot').innerHTML += ` · <span class="shot-dist">${res.distance}m</span>`;
  }
  updateScoreboard();
}

function classifyShot(ballVel, e) {
  if (e.edge) return 'Edge';
  if (e.batNormalSpeed < 3.6 && e.exitSpeed < 10) return 'Defensive Block';
  const dirDeg = Math.atan2(ballVel.x, -ballVel.z) * 180 / Math.PI;
  const loft = ballVel.y / Math.max(1, Math.hypot(ballVel.x, ballVel.z));
  const prefix = loft > 0.36 && e.exitSpeed > 18 ? 'Lofted ' : '';
  if (Math.abs(dirDeg) <= 12) return `${prefix}Straight Drive`;
  if (dirDeg > 12 && dirDeg <= 52) return `${prefix}Cover Drive`;
  if (dirDeg > 52) return 'Square Cut';
  if (dirDeg < -12 && dirDeg >= -48) return `${prefix}On Drive`;
  if (dirDeg < -48 && dirDeg >= -85) return 'Leg Flick';
  return 'Pull Shot';
}

function handleEvents(events) {
  for (const e of events) {
    if (e.type === 'bat') {
      if (e.repeat) continue;
      pitchMarker.fadeOut();
      const intensity = Math.min(1, e.impulse / 9);
      const soft = e.batNormalSpeed < 4 && !e.edge;
      audio.batHit(e.quality, intensity, e.edge, soft);
      if (e.quality > 0.82 && !e.edge) {
        particleFX.sweetSpotBurst(e.pos, e.normal);
        G.hitFreeze = 0.022; // 22ms crisp impact freeze for sweet spot crunch
      } else if (e.quality > 0.52 && !e.edge) {
        particleFX.impactSparks(e.pos, e.normal);
      } else if (e.edge) {
        audio.appeal();
      }
      camFx.shake = Math.max(camFx.shake, 0.15 + 0.55 * intensity * (e.edge ? 0.6 : 1));
      camFx.kick = Math.max(camFx.kick, 0.4 * intensity);
      if (!G.hitThisBall) {
        G.hitThisBall = true;
        trail.setColor(0xf59e0b, 0.92);
        camFx.follow = true;
        camFx.hitTime = 0;
        const vh = Math.hypot(world.ball.vel.x, world.ball.vel.z);
        if (vh > 0.5) {
          camFx.dirX = world.ball.vel.x / vh;
          camFx.dirZ = world.ball.vel.z / vh;
        } else {
          camFx.dirX = 0;
          camFx.dirZ = -1;
        }
        camFx.lookPos.copy(world.ball.pos);
        const shotName = classifyShot(world.ball.vel, e);
        let tag = '';
        if (e.edge) tag = ' · <span class="tag-edge">EDGED</span>';
        else if (e.quality > 0.82) tag = ' · <span class="tag-sweet">SWEET SPOT ⭐</span>';
        else if (e.quality > 0.55) tag = ' · <span class="tag-clean">CRISP</span>';
        $('lastShot').innerHTML = `${shotName} · ${Math.round(e.exitSpeed * 3.6)} km/h${tag}`;
      }
    } else if (e.type === 'bounce') {
      pitchMarker.fadeOut();
      audio.bounce(Math.min(1, e.speed / 8));
      particleFX.pitchDust(e.pos);
    } else if (e.type === 'stumps') {
      audio.stumps();
      const targetStumps = e.isNonStriker ? nonStrikerStumps : strikerStumps;
      targetStumps.shatter(e.stump, world.ball.vel.clone().add(e.normal.clone().multiplyScalar(-e.speed * 0.5)));
    }
  }
}

// One fixed physics step of the whole game.
function simStep(dt, target) {
  G.phaseTime += dt;
  if (G.phase === 'runup' || G.phase === 'live' || G.phase === 'result') G.runupTime += dt;

  if (G.phase === 'runup') {
    // Bowler running footsteps
    const strideStep = Math.floor(G.runupTime * 5.4);
    if (strideStep !== G.lastStrideStep && G.runupTime < G.runup.tRelease - 0.08) {
      G.lastStrideStep = strideStep;
      audio.bowlerStride();
    }
    if (!pitchMarker.active && G.runupTime >= G.runup.tRun) {
      pitchMarker.show(G.delivery.lineX, G.delivery.bounceDist);
    }
  }

  if (G.phase === 'runup' && G.runupTime >= G.runup.tRelease) release();

  world.step(dt, target);
  const events = world.drainEvents();
  handleEvents(events);

  if (G.phase === 'live') {
    if (!G.hasFlybyPlayed && world.ball.pos.z > -4.5 && world.ball.pos.z < -1.2) {
      G.hasFlybyPlayed = true;
      audio.ballFlyby(G.delivery.kmh);
    }
    // near miss: a quick flinch when an unplayed ball zips past the head
    if (!G.hitThisBall && !G.flinched) {
      const d = world.ball.pos.distanceTo(camera.position);
      if (d < 0.65) { G.flinched = true; camFx.shake = Math.max(camFx.shake, 0.35); audio.whoosh(1); }
    }
    const res = judge.update(dt, world.ball, events);
    if (res) endDelivery(res);
  } else if (G.phase === 'result') {
    const wait = G.result.kind === 'wicket' ? 1.9 : CONFIG.game.resultPause + (G.result.runs ? 0.7 : 0);
    if (G.phaseTime > wait) {
      if (G.wickets >= CONFIG.game.wickets) gameOver();
      else startDelivery();
    }
  }
}

// ============================================================ flow
function updateJoystickVisibility() {
  const mode = CONFIG.control.showJoystick || 'auto';
  const shouldShow = mode === 'on' || (mode === 'auto' && isTouch);
  $('joystick').classList.toggle('hidden', !shouldShow || G.mode !== 'playing');
}

function startGame() {
  audio.init();
  G.runs = G.wickets = G.balls = G.fours = G.sixes = 0;
  G.overBalls = [];
  G.m25 = G.m50 = G.newBestAnnounced = false;
  G.lastBanner = 'MATCH IN PROGRESS';
  planner.reset();
  world.bat.reset();
  lastTarget.copy(world.bat.target);
  updateScoreboard();
  $('lastShot').textContent = '';
  $('startScreen').classList.add('hidden');
  $('overScreen').classList.add('hidden');
  $('pauseScreen').classList.add('hidden');
  $('hud').classList.remove('hidden');
  
  // Set mode to playing BEFORE updating joystick visibility so it shows immediately
  G.mode = 'playing';
  updateJoystickVisibility();

  if (!isTouch) input.requestLock();
  startDelivery();
  G.runupTime = -0.6; // a short breath before the first run-up
}

function pause() {
  if (G.mode !== 'playing') return;
  G.mode = 'paused';
  input.releaseLock();
  audio.suspend();
  syncSettingsUI();
  updateJoystickVisibility();
  $('pauseScreen').classList.remove('hidden');
}

function resume() {
  if (G.mode !== 'paused') return;
  $('pauseScreen').classList.add('hidden');
  G.mode = 'playing';
  audio.init();
  audio.resume();
  if (!isTouch) input.requestLock();
  updateJoystickVisibility();
  accumulator = 0;
  lastTime = performance.now();
}

function gameOver() {
  G.mode = 'over';
  input.releaseLock();
  updateJoystickVisibility();
  if (G.runs > G.best) { G.best = G.runs; localStorage.setItem('physics-cricket-best', String(G.best)); }
  $('overTitle').textContent = G.result && G.result.text ? G.result.text.replace('!', '').toUpperCase() + '!' : 'OUT!';
  $('finalRuns').textContent = G.runs;
  $('finalBalls').textContent = G.balls;
  $('finalStats').textContent = `${G.fours} fours · ${G.sixes} sixes · strike rate ${G.balls ? Math.round((G.runs / G.balls) * 100) : 0}`;
  $('best').textContent = `Best: ${G.best}`;
  $('overScreen').classList.remove('hidden');
}

$('playBtn').addEventListener('click', startGame);
$('againBtn').addEventListener('click', startGame);
$('restartBtn').addEventListener('click', startGame);
$('resumeBtn').addEventListener('click', resume);
$('pauseBtn').addEventListener('click', (e) => { e.stopPropagation(); pause(); });
if ($('soundBtn')) {
  $('soundBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    const enabled = audio.toggleMute();
    $('soundBtn').textContent = enabled ? '🔊' : '🔇';
    $('soundBtn').setAttribute('title', enabled ? 'Mute Sound (M)' : 'Unmute Sound (M)');
  });
}
canvas.addEventListener('click', () => {
  if (G.mode === 'playing' && !isTouch && !input.locked) input.requestLock();
});
input.onLockChange = (locked) => {
  if (isTouch) return;
  if (!locked && G.mode === 'playing') pause();
};
window.addEventListener('blur', pause);
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
window.addEventListener('keydown', (e) => {
  if (e.key === 'p' || e.key === 'P') { G.mode === 'paused' ? resume() : pause(); }
  if ((e.key === 'r' || e.key === 'R') && (G.mode === 'over' || G.mode === 'paused')) startGame();
  if (e.key === 'Enter' && (G.mode === 'menu' || G.mode === 'over')) startGame();
  if (e.key === 'm' || e.key === 'M') {
    const enabled = audio.toggleMute();
    if ($('soundBtn')) {
      $('soundBtn').textContent = enabled ? '🔊' : '🔇';
      $('soundBtn').setAttribute('title', enabled ? 'Mute Sound (M)' : 'Unmute Sound (M)');
    }
  }
});
// block page gestures on mobile
document.addEventListener('touchmove', (e) => { if (G.mode === 'playing') e.preventDefault(); }, { passive: false });
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('contextmenu', (e) => e.preventDefault());

// settings sliders
function syncSettingsUI() {
  const c = CONFIG.control;
  for (const [id, key] of [['mouseSens', 'mouseSensitivity'], ['joySens', 'joystickSensitivity'], ['resp', 'responsiveness']]) {
    $(id).value = c[key];
    $(id + 'V').textContent = c[key].toFixed(2);
  }
  if ($('joyMode')) $('joyMode').value = c.showJoystick || 'auto';
}
for (const [id, key] of [['mouseSens', 'mouseSensitivity'], ['joySens', 'joystickSensitivity'], ['resp', 'responsiveness']]) {
  $(id).addEventListener('input', () => {
    CONFIG.control[key] = parseFloat($(id).value);
    $(id + 'V').textContent = CONFIG.control[key].toFixed(2);
    saveUserSettings();
  });
}
if ($('joyMode')) {
  $('joyMode').addEventListener('change', () => {
    CONFIG.control.showJoystick = $('joyMode').value;
    saveUserSettings();
    updateJoystickVisibility();
  });
}

// ============================================================ render helpers
const camBase = new THREE.Vector3(CONFIG.camera.position.x, CONFIG.camera.position.y, CONFIG.camera.position.z);
const basePitch = CONFIG.camera.pitchDeg * Math.PI / 180;
const tmpV = new THREE.Vector3();
const fpPos = new THREE.Vector3();
const fpQuat = new THREE.Quaternion();
const zoomQuat = new THREE.Quaternion();
const lookMat = new THREE.Matrix4();
const worldUp = new THREE.Vector3(0, 1, 0);
const ballRenderPos = new THREE.Vector3();

function updateCamera(dt, t) {
  camFx.shake *= Math.exp(-9 * dt);
  camFx.kick *= Math.exp(-12 * dt);
  const s = camFx.shake * 0.012;

  // First-person base pose at the batting crease
  fpPos.set(
    camBase.x + s * Math.sin(t * 91.3),
    camBase.y + s * Math.sin(t * 77.1 + 1.3) - camFx.kick * 0.01,
    camBase.z + camFx.kick * 0.015
  );
  camera.rotation.order = 'YXZ';
  camera.rotation.set(
    basePitch + s * 0.6 * Math.sin(t * 63.7),
    0,
    s * 0.4 * Math.sin(t * 57.9)
  );
  fpQuat.copy(camera.quaternion);

  // Post-hit zoom-out camera: smoothly rises and pulls back behind the shot
  // so the player can clearly see where the ball is travelling on the field.
  if (camFx.follow) {
    camFx.hitTime += dt;
    const dx = ballRenderPos.x;
    const dz = ballRenderPos.z - (-1.22);
    const dist = Math.hypot(dx, dz);
    if (dist > 1.2) {
      const kDir = 1 - Math.exp(-6 * dt);
      camFx.dirX += (dx / dist - camFx.dirX) * kDir;
      camFx.dirZ += (dz / dist - camFx.dirZ) * kDir;
      const dLen = Math.hypot(camFx.dirX, camFx.dirZ) || 1;
      camFx.dirX /= dLen;
      camFx.dirZ /= dLen;
    }

    const targetZoom = camFx.hitTime > 0.05 ? Math.min(1, (camFx.hitTime - 0.05) / 0.38) : 0;
    camFx.zoom += (targetZoom - camFx.zoom) * (1 - Math.exp(-9 * dt));

    // Position the zoomed-out camera elevated behind the crease along the shot line,
    // trailing part-way after the ball into the outfield.
    const pullBack = 7.2;
    const followFrac = 0.34;
    const camHeight = 5.0 + 0.14 * Math.min(dist, 50) + 0.30 * Math.max(0, ballRenderPos.y);
    camFx.zoomPos.set(
      -camFx.dirX * pullBack + dx * followFrac,
      camHeight,
      -1.22 - camFx.dirZ * pullBack + dz * followFrac
    );

    tmpV.set(
      ballRenderPos.x + world.ball.vel.x * 0.08,
      Math.max(0.25, ballRenderPos.y * 0.65),
      ballRenderPos.z + world.ball.vel.z * 0.08
    );
    camFx.lookPos.lerp(tmpV, 1 - Math.exp(-14 * dt));

    camera.position.lerpVectors(fpPos, camFx.zoomPos, camFx.zoom);
    lookMat.lookAt(camera.position, camFx.lookPos, worldUp);
    zoomQuat.setFromRotationMatrix(lookMat);
    camera.quaternion.slerpQuaternions(fpQuat, zoomQuat, camFx.zoom);

    const showFpBat = camFx.zoom < 0.22;
    batMesh.visible = showFpBat;
  } else {
    camFx.zoom *= Math.exp(-10 * dt);
    camera.position.copy(fpPos);
    camera.quaternion.copy(fpQuat);
    batMesh.visible = true;
  }
}

function render(alpha, dt, t) {
  // bat (interpolated within the last physics step)
  world.bat.poseAt(alpha, batMesh.position, batMesh.quaternion);
  pitchMarker.update(dt, t);

  // bowler
  const rt = Math.max(0, G.runupTime);
  if (G.runup) bowlerPose(rt, G.runup, pose); else Object.assign(pose, { x: 0.42, y: 0, z: -30, lean: 0, armR: 0, armL: 0, legL: 0, legR: 0, kneeL: 0, kneeR: 0 });
  bowlerModel.apply(pose);

  // ball
  const ball = world.ball;
  if (ball.active) {
    ballRenderPos.lerpVectors(ball.prevPos, ball.pos, alpha);
    ballMesh.quaternion.copy(ball.orientation);
    if (G.phase !== 'runup') trail.push(ballRenderPos);
  } else if (G.phase === 'runup' && pose.hand) {
    ballRenderPos.copy(pose.hand);
  } else {
    ballRenderPos.set(0, -10, 0);
  }
  ballMesh.position.copy(ballRenderPos);
  ballShadow.position.set(ballRenderPos.x, 0.012, ballRenderPos.z);
  const h = Math.max(0, ballRenderPos.y);
  const disc = ballShadow.userData.disc;
  const ring = ballShadow.userData.ring;
  if (disc) {
    disc.material.opacity = Math.max(0.10, 0.5 - h * 0.08);
    disc.scale.setScalar(1 + h * 0.25);
  }
  if (ring) {
    ring.material.opacity = G.hitThisBall ? 0.78 : 0;
    ring.scale.setScalar(1 + Math.min(2.5, camFx.zoom * 1.6));
  }
  ballShadow.visible = ballRenderPos.y > -1;

  // Translucent wickets during batting: clear view of ball and pitch, solid on contact/zoom
  if (strikerStumps.anim) {
    strikerStumps.setOpacity(1.0);
  } else {
    const targetAlpha = THREE.MathUtils.lerp(0.35, 1.0, Math.min(1, camFx.zoom * 2.5));
    strikerStumps.setOpacity(targetAlpha);
  }

  strikerStumps.update(dt);
  nonStrikerStumps.update(dt);
  particleFX.update(dt);
  env.update(t);
  updateCamera(dt, t);
  renderer.render(scene, camera);
}

// ============================================================ main loop
let lastTime = performance.now();
let accumulator = 0;
const PHYS_DT = CONFIG.physics.dt;

function frame(now) {
  requestAnimationFrame(frame);
  let dt = (now - lastTime) / 1000;
  lastTime = now;
  if (dt > 0.1) dt = 0.1; // tab hiccup guard
  if (msgTimer > 0) { msgTimer -= dt; if (msgTimer <= 0) $('message').classList.remove('show'); }

  // Tactile sweet spot micro-pause freeze frame
  if (G.hitFreeze > 0) {
    G.hitFreeze -= dt;
    dt = 0;
  }

  if (G.mode === 'playing') {
    // input -> bat target (identical path for mouse and joystick)
    input.applyTo(world.bat, G.phase === 'result', dt);
    if (!isTouch) setHint(input.locked ? '' : 'Click to take guard (locks the mouse)');

    accumulator += dt;
    let n = Math.floor(accumulator / PHYS_DT);
    if (n > CONFIG.physics.maxStepsPerFrame) { n = CONFIG.physics.maxStepsPerFrame; accumulator = n * PHYS_DT; }
    // spread this frame's input evenly over its physics steps -> smooth, true bat velocity
    for (let i = 0; i < n; i++) {
      stepTarget.lerpVectors(lastTarget, world.bat.target, (i + 1) / n);
      simStep(PHYS_DT, stepTarget);
    }
    if (n > 0) lastTarget.copy(world.bat.target);
    accumulator -= n * PHYS_DT;
  } else if (G.mode === 'menu') {
    // idle bowler + gentle bat sway in the background
    world.bat.step(PHYS_DT, world.bat.target);
  }
  render(G.mode === 'playing' ? accumulator / PHYS_DT : 1, dt, now / 1000);
}
requestAnimationFrame(frame);

// expose for debugging in the console
window.__cricket = { world, G, CONFIG };
