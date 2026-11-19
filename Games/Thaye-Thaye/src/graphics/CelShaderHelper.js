import * as THREE from "three";

let sharedGradientMap = null;
let sharedEdgeMat = null;

export function getToonGradientMap() {
  if (sharedGradientMap) return sharedGradientMap;
  // 3-band crisp cel-shading ramp (deep shadow, clean midtone, bright highlight)
  const data = new Uint8Array([
    112, 112, 112, 255,
    182, 182, 182, 255,
    255, 255, 255, 255,
  ]);
  const tex = new THREE.DataTexture(data, 3, 1, THREE.RGBAFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  sharedGradientMap = tex;
  return tex;
}

export function toToonMaterial(origMat, opts = {}) {
  const color = origMat?.color ? origMat.color.clone() : new THREE.Color(0xcccccc);
  const origIntensity = origMat?.emissiveIntensity ?? 1.0;
  const rawEmissive = !opts.ignoreEmissive && origIntensity > 0.01 && origMat?.emissive
    ? origMat.emissive.clone()
    : new THREE.Color(0x000000);
  const hasEmissive = rawEmissive.r > 0.02 || rawEmissive.g > 0.02 || rawEmissive.b > 0.02;

  const mat = new THREE.MeshToonMaterial({
    name: origMat?.name || "",
    color,
    gradientMap: getToonGradientMap(),
    emissive: rawEmissive,
    emissiveIntensity: hasEmissive ? (opts.emissiveIntensity ?? 1.45) : 0,
    transparent: origMat?.transparent ?? false,
    opacity: origMat?.opacity ?? 1.0,
    side: origMat?.side ?? THREE.FrontSide,
  });
  return mat;
}

export function getInkEdgeMaterial() {
  if (sharedEdgeMat) return sharedEdgeMat;
  sharedEdgeMat = new THREE.LineBasicMaterial({
    color: 0x0b0f17,
    transparent: true,
    opacity: 0.85,
  });
  return sharedEdgeMat;
}

/**
 * Adds crisp comic-book ink line edges onto a static or rigid mesh.
 */
export function addInkEdges(mesh, thresholdAngle = 24) {
  if (!mesh?.geometry) return;
  const edgesGeo = new THREE.EdgesGeometry(mesh.geometry, thresholdAngle);
  const lines = new THREE.LineSegments(edgesGeo, getInkEdgeMaterial());
  lines.name = `${mesh.name}_InkEdges`;
  lines.renderOrder = 1;
  mesh.add(lines);
}

function buildSmoothOutlineGeometry(srcGeo) {
  const geo = srcGeo.clone();
  geo.clearGroups();
  const pos = geo.attributes.position;
  const norm = geo.attributes.normal;
  if (!pos || !norm) return geo;

  const accum = new Map();
  const keys = new Array(pos.count);
  for (let i = 0; i < pos.count; i++) {
    const key = `${Math.round(pos.getX(i) * 1000)}_${Math.round(pos.getY(i) * 1000)}_${Math.round(pos.getZ(i) * 1000)}`;
    keys[i] = key;
    let v = accum.get(key);
    if (!v) {
      v = [0, 0, 0];
      accum.set(key, v);
    }
    v[0] += norm.getX(i);
    v[1] += norm.getY(i);
    v[2] += norm.getZ(i);
  }

  const smooth = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const v = accum.get(keys[i]);
    const len = Math.hypot(v[0], v[1], v[2]) || 1;
    smooth[i * 3] = v[0] / len;
    smooth[i * 3 + 1] = v[1] / len;
    smooth[i * 3 + 2] = v[2] / len;
  }
  geo.setAttribute("normal", new THREE.BufferAttribute(smooth, 3));
  return geo;
}

/**
 * Adds a view-space extruded BackSide ink outline SkinnedMesh sharing the character's skeleton.
 */
export function addSkinnedInkOutline(skinnedMesh, outlineWidth = 0.0065) {
  const outlineMat = new THREE.MeshToonMaterial({
    color: 0x000000,
    emissive: 0x0a0d14,
    emissiveIntensity: 1.0,
    side: THREE.BackSide,
  });
  outlineMat.onBeforeCompile = (shader) => {
    shader.uniforms.uOutlineWidth = { value: outlineWidth };
    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        "#include <common>\nuniform float uOutlineWidth;"
      )
      .replace(
        "#include <project_vertex>",
        `#include <project_vertex>
        vec3 viewNorm = normalize( transformedNormal );
        vec4 clipNorm = projectionMatrix * vec4( viewNorm, 0.0 );
        vec2 offsetDir = length( clipNorm.xy ) > 0.0001 ? normalize( clipNorm.xy ) : vec2( 0.0, 1.0 );
        gl_Position.xy += offsetDir * uOutlineWidth * gl_Position.w;`
      );
  };

  const outlineGeo = buildSmoothOutlineGeometry(skinnedMesh.geometry);
  const outlineMesh = new THREE.SkinnedMesh(outlineGeo, outlineMat);
  outlineMesh.name = `${skinnedMesh.name}_Outline`;
  outlineMesh.position.copy(skinnedMesh.position);
  outlineMesh.quaternion.copy(skinnedMesh.quaternion);
  outlineMesh.scale.copy(skinnedMesh.scale);
  outlineMesh.frustumCulled = false;
  outlineMesh.castShadow = false;
  outlineMesh.receiveShadow = false;
  outlineMesh.bind(skinnedMesh.skeleton, skinnedMesh.bindMatrix);
  if (skinnedMesh.parent) {
    skinnedMesh.parent.add(outlineMesh);
  }
  return outlineMesh;
}
