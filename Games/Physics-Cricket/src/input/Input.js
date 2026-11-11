import { CONFIG } from '../config.js';

// Unified input: desktop mouse (pointer lock, relative deltas) and mobile
// screen-wide virtual analog touch control. Both drive the bat's swing target through
// the same BatController API — there are no separate batting mechanics per platform.

export class Input {
  constructor(canvas, joystickEl, knobEl) {
    this.canvas = canvas;
    this.isTouchDevice = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    this.locked = false;
    this.mouseDX = 0;
    this.mouseDY = 0;
    this.mouseIdleTime = 0;
    this.stick = { x: 0, y: 0, active: false, id: null };
    this.originX = 0;
    this.originY = 0;
    this.usingJoystick = this.isTouchDevice;
    this.joyEl = joystickEl;
    this.knobEl = knobEl;
    this.onLockChange = null;

    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      if (this.onLockChange) this.onLockChange(this.locked);
    });
    document.addEventListener('pointerlockerror', () => {
      this.locked = false;
      // Do not re-trigger pause on throttled lock requests
    });
    document.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      if (Math.abs(e.movementX) > 400 || Math.abs(e.movementY) > 400) return;
      this.mouseDX += e.movementX;
      this.mouseDY += e.movementY;
    });

    this._setupJoystick();
  }

  requestLock() {
    if (this.locked) return;
    try {
      const p = this.canvas.requestPointerLock({ unadjustedMovement: true });
      if (p && p.catch) p.catch(() => {
        try { this.canvas.requestPointerLock(); } catch {}
      });
    } catch {
      try { this.canvas.requestPointerLock(); } catch {}
    }
  }

  releaseLock() {
    if (document.pointerLockElement) {
      try { document.exitPointerLock(); } catch {}
    }
  }

  _setupJoystick() {
    const el = this.joyEl;
    const knob = this.knobEl;

    const radius = () => {
      if (el && el.clientWidth > 20) return el.clientWidth * 0.5;
      return 70;
    };

    const isInteractive = (target) => {
      if (!target || !target.closest) return false;
      return !!(
        target.closest('#topControls') ||
        target.closest('.icon-btn') ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('.overlay:not(.hidden)')
      );
    };

    const updateFromTouch = (t) => {
      const r = radius();
      let dx = (t.clientX - this.originX) / r;
      let dy = (t.clientY - this.originY) / r;
      const m = Math.hypot(dx, dy);
      if (m > 1) { dx /= m; dy /= m; }
      this.stick.x = dx;
      this.stick.y = dy;
      if (knob) {
        knob.style.transform = `translate(${dx * r * 0.75}px, ${dy * r * 0.75}px)`;
      }
    };

    // Full-screen touch control: player can touch anywhere on the screen
    window.addEventListener('touchstart', (e) => {
      // Don't intercept touches on buttons, UI controls, or open overlays
      if (isInteractive(e.target)) return;
      if (document.querySelector('.overlay:not(.hidden)')) return;
      if (this.stick.active) return; // already tracking the primary finger

      const t = e.changedTouches[0];
      if (!t) return;

      e.preventDefault();
      this.stick.id = t.identifier;
      this.stick.active = true;
      this.usingJoystick = true;
      this.originX = t.clientX;
      this.originY = t.clientY;
      this.stick.x = 0;
      this.stick.y = 0;

      if (el) {
        el.style.left = `${t.clientX}px`;
        el.style.top = `${t.clientY}px`;
        el.style.right = 'auto';
        el.style.bottom = 'auto';
        el.classList.add('active');
      }
      if (knob) {
        knob.style.transform = 'translate(0px, 0px)';
      }
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (!this.stick.active) return;
      for (const t of e.changedTouches) {
        if (t.identifier === this.stick.id) {
          e.preventDefault();
          updateFromTouch(t);
          break;
        }
      }
    }, { passive: false });

    const endTouch = (e) => {
      if (!this.stick.active) return;
      for (const t of e.changedTouches) {
        if (t.identifier === this.stick.id) {
          this.stick.active = false;
          this.stick.id = null;
          this.stick.x = 0;
          this.stick.y = 0;
          if (el) el.classList.remove('active');
          if (knob) knob.style.transform = 'translate(0px, 0px)';
          break;
        }
      }
    };

    window.addEventListener('touchend', endTouch);
    window.addEventListener('touchcancel', endTouch);

    window.addEventListener('blur', () => {
      if (this.stick.active) {
        this.stick.active = false;
        this.stick.id = null;
        this.stick.x = 0;
        this.stick.y = 0;
        if (el) el.classList.remove('active');
        if (knob) knob.style.transform = 'translate(0px, 0px)';
      }
    });

    // Mouse fallback so desktop testing of the touch drag is still possible without pointer lock
    let dragging = false;
    if (el) {
      el.addEventListener('mousedown', (e) => {
        if (this.locked) return;
        dragging = true;
        this.stick.active = true;
        this.usingJoystick = true;
        this.originX = e.clientX;
        this.originY = e.clientY;
        el.style.left = `${e.clientX}px`;
        el.style.top = `${e.clientY}px`;
        el.classList.add('active');
        e.stopPropagation();
      });
      window.addEventListener('mousemove', (e) => {
        if (dragging && !this.locked) {
          const r = radius();
          let dx = (e.clientX - this.originX) / r;
          let dy = (e.clientY - this.originY) / r;
          const m = Math.hypot(dx, dy);
          if (m > 1) { dx /= m; dy /= m; }
          this.stick.x = dx;
          this.stick.y = dy;
          if (knob) knob.style.transform = `translate(${dx * r * 0.75}px, ${dy * r * 0.75}px)`;
        }
      });
      window.addEventListener('mouseup', () => {
        if (!dragging) return;
        dragging = false;
        this.stick.active = false;
        this.stick.x = 0;
        this.stick.y = 0;
        el.classList.remove('active');
        if (knob) knob.style.transform = 'translate(0px, 0px)';
      });
    }
  }

  /**
   * Feed input into the bat target. Called once per rendered frame.
   * Mouse: relative (position control — the bat stays where you place it).
   * Joystick: analog displacement around the stance; releasing returns to neutral stance.
   */
  applyTo(bat, allowRecenter, dt) {
    const c = CONFIG.control;
    if (this.mouseDX || this.mouseDY) {
      this.usingJoystick = false;
      const k = c.mouseRadPerPixel * c.mouseSensitivity;
      bat.addTargetDelta(this.mouseDX * k, -this.mouseDY * k);
      this.mouseDX = 0;
      this.mouseDY = 0;
    }

    if (this.stick.active) {
      this.usingJoystick = true;
      const s = c.joystickSensitivity;
      const r = c.restTilt;
      const shape = (v) => Math.sign(v) * Math.pow(Math.abs(v), 1.25);
      const sx = shape(this.stick.x), sy = shape(-this.stick.y);
      const bRange = sy >= 0 ? c.tiltMax.b - r.b : r.b - c.tiltMin.b;
      bat.setTargetAbsolute(r.a + sx * c.joystickRangeA * s, r.b + sy * bRange * s);
    } else if (this.usingJoystick) {
      bat.recenter(dt, 6.0);
    }
  }
}
