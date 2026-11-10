import { CONFIG } from '../config.js';

// Unified input: desktop mouse (pointer lock, relative deltas) and mobile
// virtual analog joystick. Both drive the bat's swing target through the
// same BatController API — there are no separate batting mechanics per platform.

export class Input {
  constructor(canvas, joystickEl, knobEl) {
    this.canvas = canvas;
    this.isTouchDevice = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    this.locked = false;
    this.mouseDX = 0;
    this.mouseDY = 0;
    this.mouseIdleTime = 0;
    this.stick = { x: 0, y: 0, active: false, id: null };
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
    if (!el) return;
    const radius = () => el.clientWidth * 0.5;
    const update = (t) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      let dx = (t.clientX - cx) / radius(), dy = (t.clientY - cy) / radius();
      const m = Math.hypot(dx, dy);
      if (m > 1) { dx /= m; dy /= m; }
      this.stick.x = dx; this.stick.y = dy;
      this.knobEl.style.transform = `translate(${dx * radius() * 0.75}px, ${dy * radius() * 0.75}px)`;
    };
    el.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const t = e.changedTouches[0];
      this.stick.id = t.identifier;
      this.stick.active = true;
      this.usingJoystick = true;
      update(t);
    }, { passive: false });
    el.addEventListener('touchmove', (e) => {
      e.preventDefault();
      for (const t of e.changedTouches) {
        if (t.identifier === this.stick.id) update(t);
      }
    }, { passive: false });
    const end = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === this.stick.id) {
          this.stick.active = false;
          this.stick.id = null;
          this.stick.x = 0;
          this.stick.y = 0;
          this.knobEl.style.transform = 'translate(0px, 0px)';
        }
      }
    };
    el.addEventListener('touchend', end);
    el.addEventListener('touchcancel', end);

    // Mouse fallback on joystick so desktop users can also test joystick directly
    let dragging = false;
    el.addEventListener('mousedown', (e) => {
      dragging = true;
      this.stick.active = true;
      this.usingJoystick = true;
      update(e);
      e.stopPropagation();
    });
    window.addEventListener('mousemove', (e) => {
      if (dragging) update(e);
    });
    window.addEventListener('mouseup', () => {
      if (!dragging) return;
      dragging = false;
      this.stick.active = false;
      this.stick.x = 0;
      this.stick.y = 0;
      this.knobEl.style.transform = 'translate(0px, 0px)';
    });
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
