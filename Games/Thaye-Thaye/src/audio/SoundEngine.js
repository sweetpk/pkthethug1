const WEAPON_SOUND_URLS = {
  rifle_shot: "./assets/sounds/rifle_shot.mp3",
  rifle_reload: "./assets/sounds/rifle_reload.mp3",
  shotgun_shot: "./assets/sounds/shotgun_shot.mp3",
  shotgun_reload: "./assets/sounds/shotgun_reload.mp3",
  revolver_shot: "./assets/sounds/revolver_shot.mp3",
  revolver_reload: "./assets/sounds/revolver_reload.mp3",
  grenade_explosion: "./assets/sounds/grenade_explosion.mp3",
};

/**
 * Hybrid Web Audio sound engine using recorded weapon shot/reload clips + procedural SFX.
 */
export class SoundEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.volume = 0.75;
    this.noiseBuffer = null;
    this.rawAudio = {};
    this.buffers = {};
    this.decoding = new Set();
    this.activeReloadSource = null;
  }

  async preload() {
    const entries = Object.entries(WEAPON_SOUND_URLS);
    await Promise.all(
      entries.map(async ([key, url]) => {
        try {
          const res = await fetch(url);
          if (!res.ok) return;
          this.rawAudio[key] = await res.arrayBuffer();
        } catch (err) {
          console.warn(`Audio preload skipped for ${url}:`, err);
        }
      })
    );
  }

  _decodePending() {
    if (!this.ctx) return;
    for (const [key, ab] of Object.entries(this.rawAudio)) {
      if (this.buffers[key] || this.decoding.has(key)) continue;
      this.decoding.add(key);
      this.ctx
        .decodeAudioData(ab.slice(0))
        .then((decoded) => {
          this.buffers[key] = decoded;
        })
        .catch(() => {})
        .finally(() => this.decoding.delete(key));
    }
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === "suspended" || this.ctx.state === "interrupted") {
        this.ctx.resume().catch(() => {});
      }
      this._decodePending();
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(this.ctx.destination);

    // Pre-generate 1.5s white noise buffer
    const len = Math.floor(this.ctx.sampleRate * 1.5);
    this.noiseBuffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    this._decodePending();
  }

  _playSample(key, gainVal = 0.75, rateJitter = 0.04, isReload = false) {
    if (!this.ctx || !this.buffers[key]) return false;
    const src = this.ctx.createBufferSource();
    src.buffer = this.buffers[key];
    src.playbackRate.value = isReload ? 1.0 : this._jitter(1.0, rateJitter);

    const g = this.ctx.createGain();
    g.gain.setValueAtTime(Math.max(0.001, gainVal), this.ctx.currentTime);
    src.connect(g);
    g.connect(this.master);

    if (isReload) {
      this.stopReload();
      this.activeReloadSource = src;
      src.onended = () => {
        if (this.activeReloadSource === src) this.activeReloadSource = null;
      };
    }

    src.start(this.ctx.currentTime);
    return true;
  }

  stopReload() {
    if (this.activeReloadSource) {
      try {
        this.activeReloadSource.stop();
      } catch {
        // ignore if already stopped
      }
      this.activeReloadSource = null;
    }
  }

  pause() {
    if (this.ctx && this.ctx.state === "running") {
      this.ctx.suspend().catch(() => {});
    }
  }

  resume() {
    if (this.ctx && (this.ctx.state === "suspended" || this.ctx.state === "interrupted")) {
      this.ctx.resume().catch(() => {});
    }
  }

  setVolume(v) {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.02);
    }
  }

  _noise(duration, filterType, freq, q = 1, gainVal = 0.5, delay = 0) {
    if (!this.ctx || !this.noiseBuffer) return;
    const t = this.ctx.currentTime + delay;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.setValueAtTime(freq, t);
    filter.Q.value = q;

    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gainVal, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + duration);

    src.connect(filter);
    filter.connect(g);
    g.connect(this.master);
    src.start(t);
    src.stop(t + duration + 0.02);
  }

  _osc(type, fStart, fEnd, duration, gainVal = 0.4, delay = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(fStart, t);
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, fEnd), t + duration);

    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gainVal, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + duration);

    osc.connect(g);
    g.connect(this.master);
    osc.start(t);
    osc.stop(t + duration + 0.02);
  }

  _jitter(base, amt = 0.06) {
    return base * (1 + (Math.random() * 2 - 1) * amt);
  }

  playRifle(distGain = 1.0) {
    this.init();
    if (!this.ctx) return;
    const atten = Math.pow(Math.max(0, distGain), 1.35);
    if (atten < 0.025) return;
    if (this._playSample("rifle_shot", 0.62 * atten, 0.045)) return;
    const g = 0.55 * atten;
    const p = this._jitter(1, 0.055);
    this._osc("sawtooth", 210 * p, 48 * p, 0.09, g * 0.65);
    this._noise(0.07, "bandpass", 1900 * p, 0.8, g * 0.9);
    this._noise(0.16, "lowpass", 750 * p, 0.7, g * 0.6);
  }

  playShotgun(distGain = 1.0) {
    this.init();
    if (!this.ctx) return;
    const atten = Math.pow(Math.max(0, distGain), 1.25);
    if (atten < 0.025) return;
    if (this._playSample("shotgun_shot", 0.75 * atten, 0.04)) return;
    const g = 0.85 * atten;
    const p = this._jitter(1, 0.045);
    this._osc("triangle", 150 * p, 32 * p, 0.22, g * 0.9);
    this._noise(0.24, "lowpass", 1300 * p, 0.6, g);
    this._noise(0.10, "highpass", 1800 * p, 0.7, g * 0.55);
  }

  playRevolver(distGain = 1.0) {
    this.init();
    if (!this.ctx) return;
    const atten = Math.pow(Math.max(0, distGain), 1.25);
    if (atten < 0.025) return;
    if (this._playSample("revolver_shot", 0.72 * atten, 0.04)) return;
    const g = 0.78 * atten;
    const p = this._jitter(1, 0.045);
    this._osc("sawtooth", 190 * p, 40 * p, 0.14, g * 0.82);
    this._noise(0.09, "highpass", 1600 * p, 0.8, g * 0.85);
    this._noise(0.20, "lowpass", 950 * p, 0.65, g * 0.78);
  }

  playGrenadePin(distGain = 1.0) {
    this.init();
    if (!this.ctx) return;
    const g = 0.42 * distGain;
    if (g < 0.02) return;
    this._osc("sine", 2400, 3100, 0.035, g * 0.5);
    this._noise(0.06, "bandpass", 3200, 2.4, g * 0.7, 0.03);
    this._noise(0.08, "bandpass", 1400, 1.2, g * 0.5, 0.08);
  }

  playExplosion(distGain = 1.0) {
    this.init();
    if (!this.ctx) return;
    const atten = Math.pow(Math.max(0, distGain), 1.15);
    if (atten < 0.02) return;
    if (this._playSample("grenade_explosion", 0.88 * atten, 0.04)) return;
    const g = 0.95 * atten;
    const p = this._jitter(1, 0.05);
    this._osc("sine", 115 * p, 24 * p, 0.48, g);
    this._osc("triangle", 85 * p, 20 * p, 0.52, g * 0.75);
    this._noise(0.45, "lowpass", 950 * p, 0.5, g);
    this._noise(0.28, "bandpass", 1800 * p, 0.9, g * 0.55, 0.03);
  }

  playKnifeSlash(distGain = 1.0) {
    this.init();
    if (!this.ctx) return;
    const g = 0.45 * distGain;
    if (g < 0.02) return;
    const p = this._jitter(1, 0.06);
    this._noise(0.11, "bandpass", 2400 * p, 1.8, g);
    this._osc("sine", 520 * p, 160 * p, 0.08, g * 0.3);
  }

  playKnifeHit() {
    this.init();
    if (!this.ctx) return;
    this._osc("sawtooth", 260, 55, 0.11, 0.55);
    this._noise(0.09, "bandpass", 1100, 1.2, 0.6);
  }

  playHitmarker(headshot = false, kill = false) {
    this.init();
    if (!this.ctx) return;
    const p = this._jitter(1, 0.04);
    if (headshot) {
      this._osc("triangle", 1450 * p, 920 * p, 0.07, 0.45);
      this._noise(0.04, "highpass", 3200, 1.0, 0.38);
    } else {
      this._osc("sine", 780 * p, 520 * p, 0.045, 0.28);
    }
    if (kill) {
      this._osc("sine", 980, 1320, 0.09, 0.25, 0.03);
    }
  }

  playGore(distGain = 1.0) {
    this.init();
    if (!this.ctx) return;
    const g = 0.72 * distGain;
    if (g < 0.03) return;
    // Bone snap crack + wet arterial rip
    this._noise(0.055, "highpass", 2400, 1.4, g * 0.85);
    this._noise(0.22, "bandpass", 620, 1.6, g);
    this._noise(0.14, "bandpass", 1750, 2.0, g * 0.65, 0.04);
    this._osc("sawtooth", 145, 38, 0.16, g * 0.6);
  }

  playKillStreak(streak = 2) {
    this.init();
    if (!this.ctx) return;
    const base = 520 + Math.min(streak, 5) * 90;
    this._osc("triangle", base, base * 1.25, 0.12, 0.25);
    this._osc("sine", base * 1.5, base * 1.8, 0.18, 0.22, 0.07);
  }

  playImpact(isMetal = true, distGain = 1.0) {
    this.init();
    if (!this.ctx) return;
    const g = 0.25 * distGain;
    if (g < 0.02) return;
    if (isMetal) {
      this._osc("sine", 1600 + Math.random() * 500, 900, 0.05, g * 0.5);
    }
    this._noise(0.04, "bandpass", 1600, 1.0, g);
  }

  playReload(weaponId = "rifle") {
    this.init();
    if (!this.ctx) return;
    const sampleKey =
      weaponId === "shotgun"
        ? "shotgun_reload"
        : weaponId === "revolver"
          ? "revolver_reload"
          : "rifle_reload";
    if (this._playSample(sampleKey, 0.68, 0, true)) return;
    this._noise(0.04, "bandpass", 2400, 3.0, 0.28, 0.05);
    this._noise(0.05, "bandpass", 1900, 2.5, 0.34, 0.65);
    this._noise(0.04, "bandpass", 3100, 3.0, 0.30, 0.95);
  }

  playSwitch() {
    this.init();
    if (!this.ctx) return;
    this._noise(0.035, "bandpass", 2600, 2.5, 0.22);
  }

  playFootstep(onSteel = false, gainMult = 1.0) {
    this.init();
    if (!this.ctx) return;
    const p = this._jitter(1, 0.07);
    const g = Math.min(1.6, gainMult);
    this._osc("sine", (onSteel ? 130 : 95) * p, 42 * p, 0.055, 0.16 * g);
    this._noise(0.045, "lowpass", (onSteel ? 1100 : 600) * p, 1.0, 0.12 * g);
  }

  playHurt() {
    this.init();
    if (!this.ctx) return;
    this._osc("sawtooth", 165, 58, 0.12, 0.35);
    this._noise(0.08, "lowpass", 520, 1.0, 0.35);
  }

  playPickup(kind = "health") {
    this.init();
    if (!this.ctx) return;
    if (kind === "health") {
      this._osc("sine", 523, 784, 0.14, 0.32);
      this._osc("sine", 784, 1046, 0.16, 0.28, 0.08);
    } else if (kind === "armor") {
      this._osc("triangle", 440, 660, 0.14, 0.32);
      this._osc("triangle", 660, 880, 0.16, 0.28, 0.08);
    } else {
      this._osc("sawtooth", 330, 660, 0.18, 0.34);
      this._osc("triangle", 660, 990, 0.20, 0.30, 0.09);
    }
  }
}
