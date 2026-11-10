// Prints where the sweet spot / toe end up for a grid of tilt targets.
import * as THREE from 'three';
import { CONFIG } from '../src/config.js';
import { BatController } from '../src/bat/BatController.js';

const bat = new BatController();
const t = new THREE.Vector2();
const fmt = (v) => `(${v.x.toFixed(2)},${v.y.toFixed(2)},${v.z.toFixed(2)})`;
const as = (process.argv[2] || '-1.5,-1,-0.5,0,0.5,1,1.5,2').split(',').map(Number);
const bs = (process.argv[3] || '-1,-0.5,0,0.5,1,1.5,2,2.5').split(',').map(Number);
for (const b of bs) {
  for (const a of as) {
    t.set(a, b);
    bat.target.copy(t);
    for (let i = 0; i < 400; i++) bat.step(CONFIG.physics.dt, t);
    const toe = bat.position;
    console.log(`a ${a.toFixed(1)} b ${b.toFixed(1)}  sweet ${fmt(bat.sweetPos)}  toe ${fmt(toe)}  hands ${fmt(bat.hands)} face ${fmt(bat.face)}`);
  }
}
