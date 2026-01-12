import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// Camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(3, 3, 6);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 5);
dirLight.castShadow = true;
scene.add(dirLight);

// Mesh
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({
  color: 0x00ffcc,
  metalness: 0.3,
  roughness: 0.4
});
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
scene.add(cube);

// Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ color: 0x222222 })
);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

// Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.y += 0.01;
  controls.update();

  renderer.render(scene, camera);
}

animate();
