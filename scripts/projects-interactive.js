// scripts/projects-interactive.js
// Smooth Year-Scrubber Navigation, Scroll-Spy & Click-to-Zoom Lightbox

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------
     1. SMOOTH SCROLL FOR TIMELINE BAR PILLS
     --------------------- */
  const warpPills = Array.from(document.querySelectorAll('.warp-pill'));
  const yearNodes = Array.from(document.querySelectorAll('[data-year-node]'));

  function jumpToTarget(selector) {
    const target = document.querySelector(selector);
    if (!target) return;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start'
    });
    const card = target.querySelector('.timeline-card');
    if (card) {
      card.classList.remove('is-highlighted');
      void card.offsetWidth;
      card.classList.add('is-highlighted');
    }
  }

  warpPills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      const href = pill.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        warpPills.forEach((p) => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        jumpToTarget(href);
      }
    });
  });

  /* ---------------------
     2. INTERSECTION OBSERVER SCROLL-SPY FOR TIMELINE BAR
     --------------------- */
  if ('IntersectionObserver' in window && yearNodes.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const yr = entry.target.getAttribute('data-year-node');
            warpPills.forEach((p) => {
              const active = p.getAttribute('data-year') === yr;
              p.classList.toggle('is-active', active);
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -62% 0px',
        threshold: 0.05
      }
    );

    yearNodes.forEach((node) => observer.observe(node));
  }

  /* ---------------------
     3. LIGHTBOX VIEWER FOR ALL 16 PROJECT SCREENSHOTS
     --------------------- */
  const triggers = Array.from(document.querySelectorAll('.lightbox-trigger'));
  const lightbox = document.getElementById('project-lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbYear = document.getElementById('lightbox-year');
  const lbCounter = document.getElementById('lightbox-counter');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');
  const lbBackdrop = document.getElementById('lightbox-backdrop');
  const lbPrev = document.getElementById('lightbox-prev');
  const lbNext = document.getElementById('lightbox-next');

  let currentIndex = 0;

  function showSlide(index) {
    if (!triggers.length || !lightbox) return;
    currentIndex = (index + triggers.length) % triggers.length;
    const item = triggers[currentIndex];
    const src = item.getAttribute('data-full') || '';
    const yr = item.getAttribute('data-year') || '';
    const cap = item.getAttribute('data-caption') || '';
    const imgEl = item.querySelector('img');

    lbImg.src = src;
    lbImg.alt = imgEl ? imgEl.alt : cap;
    lbYear.textContent = yr;
    lbCounter.textContent = `${currentIndex + 1} / ${triggers.length}`;
    lbCaption.textContent = cap;
  }

  function openLightbox(index) {
    if (!lightbox) return;
    showSlide(index);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  triggers.forEach((trigger, idx) => {
    trigger.addEventListener('click', () => openLightbox(idx));
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', () => showSlide(currentIndex - 1));
  if (lbNext) lbNext.addEventListener('click', () => showSlide(currentIndex + 1));

  window.addEventListener('keydown', (e) => {
    if (!lightbox || lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showSlide(currentIndex - 1);
    if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
  });
})();
