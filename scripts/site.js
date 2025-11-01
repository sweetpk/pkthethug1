// scripts/site.js
// Consolidated audio player + text loader for Pratik's site
// - Works per-page: finds any .audio-player block and wires controls
// - Loads text into any element with data-src attribute (e.g. <section id="blog-content" data-src="...">)

(function () {
  /* ---------------------
     Utility: time formatting
     --------------------- */
  function formatTime(time) {
    if (!isFinite(time) || time < 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  /* ---------------------
     AUDIO PLAYER SETUP
     - Looks for elements with class .audio-player and initializes independently
     --------------------- */
  function initAudioPlayers() {
    const players = document.querySelectorAll('.audio-player');
    players.forEach(player => {
      try {
        const audio = player.querySelector('audio');
        const playPauseBtn = player.querySelector('.play-pause');
        const playIcon = player.querySelector('#play-icon') || player.querySelector('.play-icon');
        const pauseIcon = player.querySelector('#pause-icon') || player.querySelector('.pause-icon');
        const progressContainer = player.querySelector('.progress-bar');
        const progressEl = player.querySelector('.progress');
        const currentTimeEl = player.querySelector('#current-time') || player.querySelector('.current-time');
        const durationEl = player.querySelector('#duration') || player.querySelector('.duration');
        const volumeSlider = player.querySelector('#volume-slider') || player.querySelector('.volume-slider');

        if (!audio || !playPauseBtn || !progressContainer || !progressEl) return;

        // ensure non-blocking defaults
        let isPlaying = false;

        // toggle play/pause
        playPauseBtn.addEventListener('click', () => {
          if (audio.paused) {
            audio.play().catch(err => {
              // autoplay policies may block play; show icons correctly anyway
              console.warn('audio play blocked:', err);
            });
          } else {
            audio.pause();
          }
        });

        // update icons on play/pause events
        audio.addEventListener('play', () => {
          if (playIcon) playIcon.style.display = 'none';
          if (pauseIcon) pauseIcon.style.display = 'block';
          isPlaying = true;
        });
        audio.addEventListener('pause', () => {
          if (playIcon) playIcon.style.display = 'block';
          if (pauseIcon) pauseIcon.style.display = 'none';
          isPlaying = false;
        });

        // when metadata loads, update duration display
        audio.addEventListener('loadedmetadata', () => {
          if (durationEl) durationEl.textContent = formatTime(audio.duration);
        });

        // update progress and time during playback
        audio.addEventListener('timeupdate', () => {
          const duration = audio.duration || 0;
          const percent = duration ? (audio.currentTime / duration) * 100 : 0;
          if (progressEl) progressEl.style.width = `${percent}%`;
          if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
          if (durationEl && !isNaN(duration) && duration > 0) durationEl.textContent = formatTime(duration);
        });

        // seeking by clicking progress bar
        progressContainer.addEventListener('click', (e) => {
          const rect = progressContainer.getBoundingClientRect();
          const clickX = (e.clientX - rect.left);
          const width = rect.width || 1;
          const pct = Math.max(0, Math.min(1, clickX / width));
          if (audio.duration && isFinite(audio.duration)) {
            audio.currentTime = pct * audio.duration;
          }
        });

        // volume slider
        if (volumeSlider && audio) {
          // set initial volume from slider (if value exists)
          const initial = parseFloat(volumeSlider.value);
          if (!isNaN(initial)) audio.volume = initial;
          volumeSlider.addEventListener('input', () => {
            audio.volume = parseFloat(volumeSlider.value);
          });
        }

        // handle ended — reset icons/progress
        audio.addEventListener('ended', () => {
          audio.currentTime = 0;
          audio.pause();
        });

      } catch (err) {
        console.error('Error initializing audio player', err);
      }
    });
  }

  /* ---------------------
     TEXT LOADER
     - For any element with data-src attribute, fetch that file and inject paragraphs
     - e.g. <section id="blog-content" data-src="blog-texts/the-first-one.txt"></section>
     --------------------- */
  async function initTextLoaders() {
    const loaders = document.querySelectorAll('[data-src]');
    for (const el of loaders) {
      const src = el.getAttribute('data-src');
      if (!src) continue;
      try {
        const resp = await fetch(src);
        if (!resp.ok) throw new Error(`Failed to fetch ${src}: ${resp.status}`);
        const text = await resp.text();

        // Approach: split paragraphs by empty lines. Preserve intra-paragraph line breaks.
        const html = text
          .trim()
          .split(/\n\s*\n/)
          .map(p => '<p>' + p.trim().replace(/\n/g, '<br>') + '</p>')
          .join('');

        el.innerHTML = html;
      } catch (err) {
        console.error('Error loading text for', src, err);
      }
    }
  }

  /* ---------------------
     Initialize everything on DOMContentLoaded
     --------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initAudioPlayers();
    initTextLoaders();
  });

  // Expose small API (optional) for future: window.siteHelpers
  window.siteHelpers = {
    formatTime,
    initAudioPlayers,
    initTextLoaders
  };
})();
