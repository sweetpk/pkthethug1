// Procedural Web Audio sound effects - no asset downloads.

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.crowdGain = null;
    this.enabled = true;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.9;
    this.master.connect(this.ctx.destination);
    this.noise = this._makeNoise(2);
    this._startCrowd();
  }

  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }

  _makeNoise(seconds) {
    const len = this.ctx.sampleRate * seconds;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  _noiseBurst({ freq, q = 1, type = 'bandpass', gain = 0.5, attack = 0.001, decay = 0.08, when = 0 }) {
    if (gain <= 0.0001) return;
    const c = this.ctx;
    const t = c.currentTime + when;
    const src = c.createBufferSource();
    src.buffer = this.noise;
    const f = c.createBiquadFilter();
    f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
    src.connect(f).connect(g).connect(this.master);
    src.start(t, Math.random()); src.stop(t + attack + decay + 0.05);
  }

  _tone({ freq, endFreq, gain = 0.3, decay = 0.1, type = 'sine', when = 0 }) {
    if (gain <= 0.0001) return;
    const c = this.ctx;
    const t = c.currentTime + when;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, t + decay);
    const g = c.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + decay + 0.05);
  }

  /** Bat-ball contact. quality 0..1, intensity 0..1, edge / soft flags. */
  batHit(quality, intensity, edge, soft) {
    if (!this.ctx) return;
    const v = 0.25 + 0.75 * intensity;
    if (edge) {
      // thin, sharp metallic/fibrous nick
      this._noiseBurst({ freq: 3600, q: 7, gain: 0.55 * v, decay: 0.028 });
      this._tone({ freq: 2200, endFreq: 1500, gain: 0.15 * v, decay: 0.045, type: 'triangle' });
    } else if (soft) {
      // muted defensive pat / dead bat tap
      this._noiseBurst({ freq: 650, q: 1.4, type: 'lowpass', gain: 0.55 * v, decay: 0.045 });
      this._tone({ freq: 240, endFreq: 160, gain: 0.30 * v, decay: 0.055 });
    } else {
      // authentic English willow "CRACK" - deep woody thud + resonant hollow cavity + high willow snap
      const q = Math.max(0, Math.min(1, quality));
      const ring = 0.05 + 0.12 * q;
      // High snap of willow grain
      this._noiseBurst({ freq: 2200 + 800 * q, q: 3.5, gain: 0.95 * v * (0.8 + 0.4 * q), decay: 0.025 + 0.02 * q });
      // Mid wood cavity resonance
      this._tone({ freq: 560 + 140 * q, endFreq: 380, gain: 0.42 * v * (0.6 + 0.5 * q), decay: ring, type: 'triangle' });
      // Low solid impact thump
      this._tone({ freq: 175, endFreq: 110, gain: 0.45 * v * (0.7 + 0.3 * q), decay: ring * 1.3, type: 'sine' });
      // Subtle secondary timber resonance for sweet spot middled shots
      if (q > 0.7) {
        this._tone({ freq: 880, endFreq: 720, gain: 0.18 * v, decay: ring * 0.7, type: 'sine', when: 0.002 });
      }
    }
  }

  bounce(intensity) {
    if (!this.ctx) return;
    const v = Math.min(1, intensity);
    // Turf impact: low thud + turf grass brush
    this._noiseBurst({ freq: 320, q: 1.2, type: 'lowpass', gain: 0.32 * v, decay: 0.045 });
    this._noiseBurst({ freq: 1100, q: 2.0, type: 'bandpass', gain: 0.15 * v, decay: 0.025 });
    this._tone({ freq: 140, endFreq: 85, gain: 0.20 * v, decay: 0.04 });
  }

  stumps() {
    if (!this.ctx) return;
    // Timber stumps shattered: wood snap + bails clattering
    this._noiseBurst({ freq: 2400, q: 3.2, gain: 0.75, decay: 0.05 });
    this._tone({ freq: 920, endFreq: 520, gain: 0.35, decay: 0.14, type: 'triangle' });
    this._noiseBurst({ freq: 1700, q: 4.5, gain: 0.45, decay: 0.04, when: 0.04 });
    this._tone({ freq: 1250, endFreq: 700, gain: 0.22, decay: 0.08, type: 'square', when: 0.06 });
    this._noiseBurst({ freq: 1300, q: 3.0, gain: 0.35, decay: 0.06, when: 0.09 });
    this.cheer(0.65, 2.2);
  }

  whoosh(intensity) {
    if (!this.ctx) return;
    this._noiseBurst({ freq: 1100, q: 1.0, gain: 0.18 * intensity, attack: 0.03, decay: 0.14 });
    this.gasp();
  }

  gasp() {
    if (!this.ctx || !this.crowdGain) return;
    const g = this.crowdGain.gain, t = this.ctx.currentTime;
    g.cancelScheduledValues(t);
    g.setValueAtTime(g.value, t);
    // Sudden crowd breath intake on near miss / wicket play
    g.linearRampToValueAtTime(0.08, t + 0.12);
    g.linearRampToValueAtTime(0.035, t + 1.2);
  }

  _startCrowd() {
    const c = this.ctx;
    const src = c.createBufferSource();
    src.buffer = this.noise; src.loop = true;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 850; f.Q.value = 0.55;
    this.crowdGain = c.createGain(); this.crowdGain.gain.value = 0.035;
    src.connect(f).connect(this.crowdGain).connect(this.master);
    src.start();
  }

  cheer(level = 1, dur = 2.5) {
    if (!this.ctx || !this.crowdGain) return;
    const g = this.crowdGain.gain, t = this.ctx.currentTime;
    g.cancelScheduledValues(t);
    g.setValueAtTime(g.value, t);
    // Smooth, massive stadium roar that swells and reverberates
    g.linearRampToValueAtTime(0.035 + 0.28 * level, t + 0.18);
    g.exponentialRampToValueAtTime(0.035, t + dur);
  }

  /** Stadium boundary fanfare melody on 4s and 6s. */
  boundaryFanfare(six = false) {
    if (!this.ctx || !this.enabled) return;
    const notes = six ? [523.25, 659.25, 783.99, 1046.50] : [523.25, 659.25, 783.99];
    const stepDur = six ? 0.13 : 0.11;
    notes.forEach((freq, idx) => {
      this._tone({
        freq,
        gain: 0.18,
        decay: 0.24,
        type: 'triangle',
        when: idx * stepDur
      });
      this._tone({
        freq: freq * 2,
        gain: 0.08,
        decay: 0.16,
        type: 'sine',
        when: idx * stepDur
      });
    });
  }

  appeal() {
    if (!this.ctx || !this.enabled) return;
    this._tone({ freq: 280, endFreq: 420, gain: 0.24, decay: 0.28, type: 'triangle' });
    this._tone({ freq: 440, endFreq: 620, gain: 0.16, decay: 0.22, type: 'sine' });
    this._noiseBurst({ freq: 1400, q: 2.2, gain: 0.22, decay: 0.18, attack: 0.02 });
  }

  wicketWhistle() {
    if (!this.ctx || !this.enabled) return;
    this._tone({ freq: 2800, gain: 0.22, decay: 0.38, type: 'sine', when: 0.12 });
    this._tone({ freq: 2980, gain: 0.20, decay: 0.38, type: 'sine', when: 0.12 });
  }

  /** Rhythmic stadium crowd clapping on boundaries (4s and 6s). */
  boundaryClap() {
    if (!this.ctx || !this.enabled) return;
    const claps = 6;
    const bpm = 126;
    const interval = 60 / bpm;
    for (let i = 0; i < claps; i++) {
      this._noiseBurst({
        freq: 1250 + (Math.random() - 0.5) * 180,
        q: 2.0,
        type: 'bandpass',
        gain: 0.30,
        decay: 0.038,
        when: 0.42 + i * interval
      });
      this._tone({
        freq: 210,
        gain: 0.10,
        decay: 0.032,
        when: 0.42 + i * interval
      });
    }
  }

  /** Bowler landing stride sound before release. */
  bowlerStride() {
    if (!this.ctx || !this.enabled) return;
    this._noiseBurst({ freq: 220, q: 1.2, type: 'lowpass', gain: 0.22, decay: 0.05 });
    this._tone({ freq: 115, endFreq: 68, gain: 0.20, decay: 0.065 });
  }

  /** Bowler release grunt on delivery. */
  bowlerRelease() {
    if (!this.ctx || !this.enabled) return;
    this._noiseBurst({ freq: 620, q: 1.6, gain: 0.16, decay: 0.07, attack: 0.02 });
    this._tone({ freq: 185, endFreq: 125, gain: 0.14, decay: 0.09, type: 'triangle' });
  }

  /** Aerodynamic ball flight whoosh towards the batter for fast balls (>110 km/h). */
  ballFlyby(speedKmH) {
    if (!this.ctx || !this.enabled || speedKmH < 105) return;
    const intensity = Math.min(1, (speedKmH - 95) / 45);
    this._noiseBurst({
      freq: 1350 + intensity * 650,
      q: 2.2,
      gain: 0.15 * intensity,
      attack: 0.04,
      decay: 0.12
    });
  }

  toggleMute() {
    this.enabled = !this.enabled;
    if (this.master) {
      this.master.gain.value = this.enabled ? 0.9 : 0;
    }
    return this.enabled;
  }
}
