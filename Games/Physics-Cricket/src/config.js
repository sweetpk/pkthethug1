// Central tunables. Everything that affects feel lives here so it can be tuned
// without touching the systems themselves.
//
// World coordinates (metres):
//   +X = off side for a right-handed batter (to the camera's right)
//   -X = leg / on side (to the camera's left)
//   +Y = up
//   -Z = towards the bowler. Batting stumps at z = 0, bowling stumps at z = -20.12

export const PITCH_LENGTH = 20.12;

export const CONFIG = {
  physics: {
    dt: 1 / 240,            // fixed physics timestep
    maxStepsPerFrame: 24,   // spiral-of-death guard
    gravity: 9.81,
    airDensity: 1.2,
    maxMicroSteps: 64,      // CCD micro-steps per physics step for close bat/ball/stump encounters
    microStepDistance: 0.006 // max relative travel (m) per micro-step
  },

  ball: {
    radius: 0.036,
    mass: 0.16,
    dragCoefficient: 0.28,
    magnusCoefficient: 1.6e-4, // a = k * (omega x v)
    spinDecay: 0.20,           // 1/s
    maxMagnusAccel: 3.4
  },

  ground: {
    pitchRestitution: 0.58,
    pitchFriction: 0.24,
    outfieldRestitution: 0.48,
    outfieldFriction: 0.20,
    rollingResistance: 0.12,  // coefficient * g, deceleration while rolling on lush outfield grass
    rollThreshold: 0.85       // below this vertical speed (m/s) after a bounce, ball rolls
  },

  bat: {
    mass: 1.28,
    totalLength: 0.965,
    bladeLength: 0.56,
    bladeWidth: 0.108,        // visual width of the blade (m)
    collisionWidth: 0.145,    // effective physics width (m) for 3D depth forgiveness
    bladeFace: 0.020,         // local z of the striking face (face normal = +Z local)
    bladeBack: -0.032,        // local z of the back of the blade collider
    handleRadius: 0.018,
    gripFromToe: 0.80,        // the pivot held by the hands
    comFromToe: 0.39,
    inertiaTransverse: 0.090, // kg m^2 about the centre of mass
    inertiaLong: 0.0022,      // twist about the long axis
    sweetSpotFromToe: 0.19,
    sweetSpotWidth: 0.18,     // generous sweet spot along the blade
    restitution: 0.84,        // punchy bat-ball COR at the sweet spot for big sixes
    restitutionFloor: 0.65,   // fraction of COR retained far from the sweet spot
    handCouplingMass: 1.40,   // extra translational mass from the batter's grip/wrists
    edgeRestitutionLoss: 0.25,
    friction: 0.26,
    softHandsMin: 0.40,       // COR multiplier for a stationary (dead) bat -> defensive block
    softHandsSpeed: 4.5,      // bat speed (m/s) at which full COR applies
    swingPowerMultiplier: 1.25, // boosts bat swing velocity transfer at impact
    maxExitSpeed: 56          // safety clamp for big sixes (~200 km/h)
  },

  control: {
    // User-adjustable (settings panel); stored in localStorage
    mouseSensitivity: 1.0,
    joystickSensitivity: 1.0,
    responsiveness: 1.0,
    showJoystick: 'auto',   // 'auto' | 'on' | 'off'
    // Base mapping
    mouseRadPerPixel: 0.0068,
    joystickRangeA: 1.75,   // tilt range (rad) of the stick, sideways
    joystickRangeB: 1.85,   // tilt range (rad) of the stick, forward/back
    springFrequency: 46,    // rad/s - natural frequency of bat tracking
    damping: 0.92,          // damping ratio
    maxTiltSpeed: 62,       // rad/s - physical limit on how fast the bat can rotate
    maxTiltAccel: 2600,     // rad/s^2 - controlled acceleration
    faceFollowRate: 30,     // 1/s - how quickly the face squares to the swing direction
    faceVelocityRef: 7.0,   // m/s - swing speed at which motion dominates face direction
    // Neutral guard position; player has full direct control over the bat
    restTilt: { a: 0.0, b: 0.25 },
    tiltMin: { a: -1.45, b: -1.35 },
    tiltMax: { a: 1.45, b: 3.0 },
    recenterRate: 0,        // disabled for mouse so the bat never fights player control
    handsRest: { x: 0.04, y: 0.81, z: -1.12 },
    swingMemoryTau: 0.080   // s - preserves swing momentum when mouse flick finishes at the ball
  },

  body: {
    // Batter's body cylinder (bat must not pass through it)
    x: -0.10, z: -0.80, radius: 0.21, height: 1.5
  },

  camera: {
    // Over-the-shoulder batting view with full bat & crease visibility
    position: { x: -0.06, y: 1.58, z: 0.82 },
    pitchDeg: -14.5,
    verticalFov: 66,
    minHorizontalFov: 74
  },

  stumps: {
    z: 0,
    spacing: 0.1143,
    height: 0.711,
    radius: 0.0175
  },

  field: {
    boundaryRadius: 55,
    centerZ: -PITCH_LENGTH / 2,
    pitchHalfWidth: 1.52
  },

  bowling: {
    speeds: {
      slow: [78, 95],
      medium: [105, 120],
      fast: [128, 144]
    },
    releaseHeight: 2.15,
    lines: {
      // x at the batting stumps
      outsideOff: [0.18, 0.32],
      off: [0.07, 0.14],
      middle: [-0.03, 0.03],
      leg: [-0.13, -0.07],
      outsideLeg: [-0.26, -0.17]
    },
    lengths: {
      // distance of the bounce from the batting stumps (m) — no short balls
      yorker: [1.1, 1.8],
      full: [2.4, 4.2],
      good: [4.4, 6.2],
      short: [5.0, 6.5]
    }
  },

  game: {
    ballsPerOver: 6,
    wickets: 3,
    deadBallTimeout: 8.5,
    resultPause: 1.25
  }
};

const STORAGE_KEY = 'physics-cricket-settings-v1';

export function loadUserSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const s = JSON.parse(raw);
    for (const k of ['mouseSensitivity', 'joystickSensitivity', 'responsiveness']) {
      if (typeof s[k] === 'number' && isFinite(s[k])) CONFIG.control[k] = s[k];
    }
    if (typeof s.showJoystick === 'string') CONFIG.control.showJoystick = s.showJoystick;
  } catch { /* ignore */ }
}

export function saveUserSettings() {
  try {
    const c = CONFIG.control;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      mouseSensitivity: c.mouseSensitivity,
      joystickSensitivity: c.joystickSensitivity,
      responsiveness: c.responsiveness,
      showJoystick: c.showJoystick
    }));
  } catch { /* ignore */ }
}
