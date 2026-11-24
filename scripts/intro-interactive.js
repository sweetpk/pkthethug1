// scripts/intro-interactive.js
// Tactile 3D tilt, acoustic guitar chord easter egg, and comic interactions for who-tf.html

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // 1. Subtle 3D perspective tilt + holo sheen on the Collector Portrait Card
  const portraitCard = document.getElementById('portrait-card');
  if (portraitCard && canHover && !prefersReducedMotion) {
    portraitCard.addEventListener('pointermove', (e) => {
      const rect = portraitCard.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = (px * 12).toFixed(2);
      const rotX = (-py * 12).toFixed(2);
      portraitCard.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.025)`;
      portraitCard.style.setProperty('--glare-x', `${((px + 0.5) * 100).toFixed(1)}%`);
      portraitCard.style.setProperty('--glare-y', `${((py + 0.5) * 100).toFixed(1)}%`);
    });

    portraitCard.addEventListener('pointerleave', () => {
      portraitCard.style.transform = '';
    });
  }

  // 2. Smooth scroll to "(my) big four" cards when clicking the pink pill
  const bigFourJump = document.getElementById('big4-jump');
  const bigFourSection = document.getElementById('big-four-section');
  if (bigFourJump && bigFourSection) {
    bigFourJump.addEventListener('click', () => {
      bigFourSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
    });
  }

  // 3. Film & Music card: clapper snap + warm Web Audio acoustic guitar chord strum
  const filmCard = document.getElementById('film-music-card');
  let audioCtx = null;

  function playGuitarStrum() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    try {
      if (!audioCtx) audioCtx = new AudioContextClass();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      // Warm Maj9-ish open acoustic voicing (E3, B3, E4, G#4, D#5)
      const freqs = [164.81, 246.94, 329.63, 415.3, 622.25];
      const now = audioCtx.currentTime;

      freqs.forEach((freq, idx) => {
        const start = now + idx * 0.042;
        const osc = audioCtx.createOscillator();
        const overtone = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();
        const gain = audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);

        overtone.type = 'sine';
        overtone.frequency.setValueAtTime(freq * 2, start);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2400, start);
        filter.frequency.exponentialRampToValueAtTime(520, start + 0.9);

        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.linearRampToValueAtTime(0.075, start + 0.018);
        gain.gain.exponentialRampToValueAtTime(0.0008, start + 1.05);

        osc.connect(filter);
        overtone.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(start);
        overtone.start(start);
        osc.stop(start + 1.1);
        overtone.stop(start + 1.1);
      });
    } catch (_) {
      // Ignore Web Audio errors if blocked by browser policy
    }
  }

  if (filmCard) {
    filmCard.addEventListener('click', () => {
      filmCard.classList.remove('is-clapping');
      void filmCard.offsetWidth;
      filmCard.classList.add('is-clapping');
      playGuitarStrum();
    });
  }

  // 4. Cya! ticket stub bounce
  const cyaStub = document.getElementById('cya-stub');
  if (cyaStub) {
    cyaStub.addEventListener('click', () => {
      cyaStub.classList.remove('is-popped');
      void cyaStub.offsetWidth;
      cyaStub.classList.add('is-popped');
    });
  }
})();
