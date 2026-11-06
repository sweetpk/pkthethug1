// scripts/cartoon-pop.js
// Interactive Cartoon Starbursts, Confetti Pops & Groovy Flower Physics

(function () {
  const canvas = document.getElementById('pop-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const COLORS = [
    '#FFD43B', // Sunshine Yellow
    '#FF5733', // Coral Red
    '#FF70A6', // Bubblegum Pink
    '#00D2A0', // Groovy Mint
    '#4CC9F0', // Sky Cyan
    '#FFFDF7'  // Paper White
  ];

  const pops = [];

  function spawnCartoonBurst(x, y, count = 10) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.45;
      const speed = 3 + Math.random() * 5.5;
      const shapeRoll = Math.random();
      pops.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.2,
        gravity: 0.22,
        size: 8 + Math.random() * 8,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.16,
        color: COLORS[i % COLORS.length],
        shape: shapeRoll < 0.5 ? 'star' : shapeRoll < 0.8 ? 'block' : 'circle',
        life: 1
      });
    }
  }

  function drawCartoonStar(cx, cy, r, rot, fill, alpha) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = fill;
    ctx.strokeStyle = '#141413';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    const inner = r * 0.36;
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2;
      const na = a + Math.PI / 4;
      if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
      else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      ctx.lineTo(Math.cos(na) * inner, Math.sin(na) * inner);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  // Click anywhere for a subtle cartoon star pop
  window.addEventListener('pointerdown', (e) => {
    spawnCartoonBurst(e.clientX, e.clientY, 7);
  });

  // Spin the daisy flower when clicking it directly
  const flowerWrapper = document.getElementById('groovy-flower');
  const daisySvg = document.querySelector('.daisy-svg');
  let daisyAngle = 0;

  if (flowerWrapper && daisySvg) {
    flowerWrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      daisyAngle += 160;
      daisySvg.style.transform = `rotate(${daisyAngle}deg)`;
      const rect = flowerWrapper.getBoundingClientRect();
      spawnCartoonBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 16);
    });
  }

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = pops.length - 1; i >= 0; i--) {
      const p = pops[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.rotSpeed;
      p.life -= 0.022;

      if (p.life <= 0) {
        pops.splice(i, 1);
        continue;
      }

      const alpha = Math.min(1, p.life * 1.4);

      if (p.shape === 'star') {
        drawCartoonStar(p.x, p.y, p.size, p.rotation, p.color, alpha);
      } else if (p.shape === 'block') {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = '#141413';
        ctx.lineWidth = 2;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      } else {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = '#141413';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
})();
