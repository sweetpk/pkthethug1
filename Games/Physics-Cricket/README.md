# Physics Cricket – First-Person Cricket Batting Game

A pure, immersive, browser-based 3D cricket batting game inspired by the batting experience of IB Cricket.

Playable directly in modern desktop and mobile browsers.

---

## 🏏 Core Philosophy

- **Zero pre-canned shot animations:** Every shot emerges dynamically from the physical contact between the bat and the ball.
- **Zero shot-selection buttons:** You directly control the position, tilt, and swing of the cricket bat.
- **Direct physics simulation:** Ball speed, elevation, launch direction, and spin transfer are calculated from collision geometry, relative velocities, sweet-spot quality, restitution, and Coulomb friction.
- **Pure batting focus:** No distracting career modes or clutter. Just you, the crease, the bowler, and the incoming delivery.

---

## 🕹️ Controls

### 🖱️ Desktop (Mouse Pointer Lock)
- **Click the screen** to lock the mouse cursor and take your guard.
- **Mouse Relative Movement:**
  - Pull **down** to raise the bat into a backlift.
  - Push **up** to drive through the line of the ball.
  - Move **left / right** to steer the bat towards leg or off.
- **Swing Speed:** Fast flicks generate high exit velocities.
- **Defensive Play:** Hold the bat still in line with soft hands to block good-length deliveries.
- **Horizontal Shots:** Lift the bat high and sweep horizontally across the body to play pull shots and cuts.
- **Pause / Settings:** Press `P` or `Esc` (or click the pause icon) to pause and access sensitivity settings.

### 📱 Mobile (Virtual Analog Joystick)
- An on-screen virtual analog joystick is positioned comfortably in the bottom-right corner.
- Drag **down** to backlift, flick **up** to drive, and angle **left/right** to play across the wicket.
- Release the joystick to return smoothly to your batting stance.
- Both desktop and mobile share the **exact same underlying physics and bat controller**.

---

## ⚙️ Architecture & Systems

- **3D Rendering (`Three.js`):** Clean, realistic stadium with pitch, crease markings, sight screens, 30-yard circle, boundary ropes, stands, animated bails, and ball shadow.
- **Independent 240Hz Physics World:**
  - Fixed-step simulation running at 240Hz, decoupled from the rendering refresh rate.
  - Sub-stepped Continuous Collision Detection (CCD) preventing high-speed ball tunneling through the bat blade or stumps.
  - Projectile ball flight with quadratic air resistance, gravity, and Magnus effect.
  - Grass rolling resistance and pitch bounce dynamics.
- **Sweet Spot & Collision Response:**
  - Realistic bat collider with blade box and cylindrical handle.
  - Continuous sweet spot falloff along and across the blade face.
  - Effective mass calculation for free rigid impact.
  - Spin coupling on bat and ground impacts via Coulomb friction.
- **Procedural Bowler Action (`BowlerModel`):**
  - Smooth kinematic run-up, gather, delivery stride, arm rotation, and follow-through.
  - Varied deliveries:
    - **Speeds:** Slow (75–95 km/h), Medium (105–120 km/h), Fast (130–145 km/h).
    - **Lines:** Outside off, off stump, middle, leg, outside leg.
    - **Lengths:** Yorker, full, good length, short / bouncers.
    - Release trajectory solved against aerodynamic drag to land accurately on target.
- **Procedural Web Audio Engine:**
  - Synthetic real-time audio (no audio asset downloads needed).
  - Crisp woody crack for sweet-spot strikes.
  - Sharp thin nick for edges.
  - Soft muted thud for defensive blocks.
  - Whoosh sound for near misses whistling past the helmet.
  - Stumps shattering impact and crowd cheering on boundaries.
- **Full Scoring & Game Loop:**
  - Boundaries detected automatically (4 runs for ground boundaries, 6 runs for aerial cleared boundaries).
  - Dot balls, defensive stops, bowled, and played-on wickets recorded with scoreboard tracking.
  - High scores saved locally across sessions.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)

### Installation & Run
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Or build for production
npm run build
npm run preview
```

### Headless Physics Simulation Benchmarks
Run the automated test suite that simulates shots across multiple lines, lengths, and speeds:
```bash
npm run sim
```
