// scripts/wip-game.js
// Cartoony-Blocky "Star Catcher!" Mini-Game for wip.html (Desktop, Tablet & Mobile)

(function () {
  const canvas = document.getElementById('wip-game-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const scoreEl = document.getElementById('game-score');
  const livesEl = document.getElementById('game-lives');
  const bestEl = document.getElementById('game-best');
  const overlayEl = document.getElementById('game-overlay');
  const overlayBadgeEl = document.getElementById('overlay-badge');
  const overlayTitleEl = document.getElementById('overlay-title');
  const overlaySubEl = document.getElementById('overlay-sub');
  const startBtn = document.getElementById('game-start-btn');
  const leftBtn = document.getElementById('ctrl-left');
  const rightBtn = document.getElementById('ctrl-right');

  const LOGICAL_W = 460;
  let LOGICAL_H = 300;

  // Player cartoon smiley catcher
  const player = {
    x: LOGICAL_W / 2,
    y: LOGICAL_H - 34,
    w: 76,
    h: 28,
    targetX: LOGICAL_W / 2,
    speed: 6.2,
    mood: 'happy', // 'happy' | 'excited' | 'ouch'
    moodTimer: 0
  };

  function setupCanvasDPI() {
    const rect = canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      LOGICAL_H = Math.round(LOGICAL_W * (rect.height / rect.width));
    } else {
      LOGICAL_H = 300;
    }
    player.y = LOGICAL_H - 34;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = LOGICAL_W * dpr;
    canvas.height = LOGICAL_H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  setupCanvasDPI();
  window.addEventListener('resize', setupCanvasDPI);

  let bestScore = parseInt(localStorage.getItem('pk_wip_best') || '0', 10);
  if (bestEl) bestEl.textContent = bestScore;

  let running = false;
  let score = 0;
  let lives = 3;
  let frameCount = 0;
  let shakeFrames = 0;

  const keys = { left: false, right: false };
  const items = [];
  const floatTexts = [];
  const particles = [];

  function resetGame() {
    setupCanvasDPI();
    score = 0;
    lives = 3;
    frameCount = 0;
    items.length = 0;
    floatTexts.length = 0;
    particles.length = 0;
    player.x = LOGICAL_W / 2;
    player.y = LOGICAL_H - 34;
    player.targetX = LOGICAL_W / 2;
    player.mood = 'happy';
    updateHUD();
  }

  function updateHUD() {
    if (scoreEl) scoreEl.textContent = score;
    if (livesEl) {
      livesEl.textContent = '♥'.repeat(Math.max(0, lives)) + '♡'.repeat(Math.max(0, 3 - lives));
    }
    if (score > bestScore) {
      bestScore = score;
      localStorage.setItem('pk_wip_best', String(bestScore));
      if (bestEl) bestEl.textContent = bestScore;
    }
  }

  function spawnItem() {
    const difficulty = Math.min(1.8, 1 + score / 250);
    const roll = Math.random();
    let type = 'star'; // +10
    if (roll < 0.25) type = 'bomb'; // -1 life
    else if (roll < 0.42) type = 'bolt'; // +25

    items.push({
      x: 28 + Math.random() * (LOGICAL_W - 56),
      y: -24,
      r: type === 'bomb' ? 15 : 14,
      vy: (2.2 + Math.random() * 1.6) * difficulty,
      rot: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.08,
      type
    });
  }

  function addFloatText(text, x, y, color) {
    floatTexts.push({ text, x, y, vy: -1.6, life: 1, color });
  }

  function addBurst(x, y, color) {
    for (let i = 0; i < 8; i++) {
      const a = (Math.PI * 2 * i) / 8;
      particles.push({
        x,
        y,
        vx: Math.cos(a) * (2 + Math.random() * 2.5),
        vy: Math.sin(a) * (2 + Math.random() * 2.5),
        r: 4 + Math.random() * 3,
        color,
        life: 1
      });
    }
  }

  // Controls: Keyboard
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
  });
  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
  });

  // Controls: Pointer / Touch Drag directly on Canvas
  function handlePointerMove(clientX) {
    const rect = canvas.getBoundingClientRect();
    const relX = ((clientX - rect.left) / rect.width) * LOGICAL_W;
    player.targetX = Math.max(player.w / 2 + 8, Math.min(LOGICAL_W - player.w / 2 - 8, relX));
  }

  canvas.addEventListener('pointermove', (e) => {
    if (!running) return;
    handlePointerMove(e.clientX);
  });

  canvas.addEventListener('pointerdown', (e) => {
    if (!running) return;
    handlePointerMove(e.clientX);
  });

  canvas.addEventListener(
    'touchmove',
    (e) => {
      if (!running || !e.touches[0]) return;
      e.preventDefault();
      handlePointerMove(e.touches[0].clientX);
    },
    { passive: false }
  );

  // Controls: On-screen Mobile/Tablet Arcade Buttons
  function bindHoldButton(btn, dir) {
    if (!btn) return;
    const setKey = (val) => {
      keys[dir] = val;
    };
    btn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      setKey(true);
    });
    btn.addEventListener('pointerup', () => setKey(false));
    btn.addEventListener('pointerleave', () => setKey(false));
    btn.addEventListener('pointercancel', () => setKey(false));
  }
  bindHoldButton(leftBtn, 'left');
  bindHoldButton(rightBtn, 'right');

  // Drawing Helpers
  function drawStarShape(x, y, r, rot, fill) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.fillStyle = fill;
    ctx.strokeStyle = '#141413';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const a = (i * Math.PI * 2) / 5 - Math.PI / 2;
      const na = a + Math.PI / 5;
      if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
      else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      ctx.lineTo(Math.cos(na) * (r * 0.45), Math.sin(na) * (r * 0.45));
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function drawBoltShape(x, y, r, fill) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = fill;
    ctx.strokeStyle = '#141413';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(4, -r);
    ctx.lineTo(-r * 0.7, 2);
    ctx.lineTo(0, 2);
    ctx.lineTo(-4, r);
    ctx.lineTo(r * 0.7, -2);
    ctx.lineTo(0, -2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function drawBombShape(x, y, r) {
    ctx.save();
    ctx.translate(x, y);
    // Fuse spark
    ctx.strokeStyle = '#141413';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(0, -r);
    ctx.quadraticCurveTo(6, -r - 7, 10, -r - 4);
    ctx.stroke();

    ctx.fillStyle = '#FF5733';
    ctx.beginPath();
    ctx.arc(11, -r - 4, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Bomb body
    ctx.fillStyle = '#141413';
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();

    // Cartoon highlight
    ctx.fillStyle = '#FFFDF7';
    ctx.beginPath();
    ctx.arc(-r * 0.35, -r * 0.35, r * 0.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawPlayer() {
    const { x, y, w, h, mood } = player;
    ctx.save();
    ctx.translate(x, y);

    // Blocky shadow
    ctx.fillStyle = '#141413';
    ctx.beginPath();
    ctx.roundRect(-w / 2 + 4, -h / 2 + 4, w, h, 14);
    ctx.fill();

    // Main paddle body
    ctx.fillStyle = mood === 'ouch' ? '#FF5733' : mood === 'excited' ? '#00D2A0' : '#FFD43B';
    ctx.strokeStyle = '#141413';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(-w / 2, -h / 2, w, h, 14);
    ctx.fill();
    ctx.stroke();

    // Cute cartoon face on the paddle
    ctx.fillStyle = '#141413';
    if (mood === 'ouch') {
      // X eyes
      ctx.font = '800 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('×   ×', 0, 4);
    } else {
      ctx.beginPath();
      ctx.arc(-12, -2, 3, 0, Math.PI * 2);
      ctx.arc(12, -2, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.arc(0, 0, 6, 0.15 * Math.PI, 0.85 * Math.PI);
      ctx.stroke();
    }

    ctx.restore();
  }

  function endGame() {
    running = false;
    if (overlayBadgeEl) overlayBadgeEl.textContent = '💥 GAME OVER 💥';
    if (overlayTitleEl) overlayTitleEl.textContent = `Score: ${score}`;
    if (overlaySubEl) {
      overlaySubEl.textContent =
        score >= bestScore && score > 0
          ? `New High Score: ${bestScore}! 🎉`
          : `Best Score: ${bestScore} — Try again!`;
    }
    if (startBtn) startBtn.querySelector('span').textContent = 'Play Again';
    if (overlayEl) overlayEl.classList.remove('is-hidden');
  }

  function update() {
    if (!running) return;
    frameCount++;

    if (keys.left) player.targetX -= player.speed;
    if (keys.right) player.targetX += player.speed;
    player.targetX = Math.max(
      player.w / 2 + 8,
      Math.min(LOGICAL_W - player.w / 2 - 8, player.targetX)
    );
    player.x += (player.targetX - player.x) * 0.28;

    if (player.moodTimer > 0) {
      player.moodTimer--;
      if (player.moodTimer === 0) player.mood = 'happy';
    }

    const spawnRate = Math.max(24, 48 - Math.floor(score / 40));
    if (frameCount % spawnRate === 0) {
      spawnItem();
    }

    for (let i = items.length - 1; i >= 0; i--) {
      const it = items[i];
      it.y += it.vy;
      it.rot += it.vRot;

      // Check collision with player paddle
      const hitX = Math.abs(it.x - player.x) < player.w / 2 + it.r * 0.75;
      const hitY = Math.abs(it.y - player.y) < player.h / 2 + it.r * 0.75;

      if (hitX && hitY) {
        if (it.type === 'bomb') {
          lives--;
          shakeFrames = 10;
          player.mood = 'ouch';
          player.moodTimer = 24;
          addBurst(it.x, it.y, '#FF5733');
          addFloatText('BOOM! -1♥', it.x, it.y - 10, '#FF5733');
          updateHUD();
          items.splice(i, 1);
          if (lives <= 0) {
            endGame();
            return;
          }
        } else {
          const pts = it.type === 'bolt' ? 25 : 10;
          const col = it.type === 'bolt' ? '#4CC9F0' : '#FFD43B';
          score += pts;
          player.mood = 'excited';
          player.moodTimer = 18;
          addBurst(it.x, it.y, col);
          addFloatText(`+${pts}!`, it.x, it.y - 10, '#141413');
          updateHUD();
          items.splice(i, 1);
        }
        continue;
      }

      if (it.y > LOGICAL_H + 30) {
        items.splice(i, 1);
      }
    }

    for (let i = floatTexts.length - 1; i >= 0; i--) {
      const ft = floatTexts[i];
      ft.y += ft.vy;
      ft.life -= 0.03;
      if (ft.life <= 0) floatTexts.splice(i, 1);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.04;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  function render() {
    ctx.save();
    if (shakeFrames > 0) {
      shakeFrames--;
      ctx.translate((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8);
    }

    // Background sky inside arcade screen
    ctx.fillStyle = '#FFFDF7';
    ctx.fillRect(0, 0, LOGICAL_W, LOGICAL_H);

    // Subtle cartoon grid lines
    ctx.strokeStyle = 'rgba(20, 20, 19, 0.07)';
    ctx.lineWidth = 1;
    for (let x = 0; x < LOGICAL_W; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, LOGICAL_H);
      ctx.stroke();
    }
    for (let y = 0; y < LOGICAL_H; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(LOGICAL_W, y);
      ctx.stroke();
    }

    // Floor strip
    ctx.fillStyle = '#FFF5C0';
    ctx.fillRect(0, LOGICAL_H - 14, LOGICAL_W, 14);
    ctx.strokeStyle = '#141413';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(0, LOGICAL_H - 14);
    ctx.lineTo(LOGICAL_W, LOGICAL_H - 14);
    ctx.stroke();

    // Items
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      if (it.type === 'star') drawStarShape(it.x, it.y, it.r, it.rot, '#FFD43B');
      else if (it.type === 'bolt') drawBoltShape(it.x, it.y, it.r, '#4CC9F0');
      else drawBombShape(it.x, it.y, it.r);
    }

    // Particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.strokeStyle = '#141413';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    // Player paddle
    drawPlayer();

    // Floating score texts
    for (let i = 0; i < floatTexts.length; i++) {
      const ft = floatTexts[i];
      ctx.save();
      ctx.globalAlpha = ft.life;
      ctx.font = '800 15px "Fredoka", sans-serif';
      ctx.fillStyle = ft.color;
      ctx.textAlign = 'center';
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }

    ctx.restore();
  }

  function loop() {
    update();
    render();
    requestAnimationFrame(loop);
  }

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      resetGame();
      running = true;
      if (overlayEl) overlayEl.classList.add('is-hidden');
    });
  }

  resetGame();
  loop();
})();
