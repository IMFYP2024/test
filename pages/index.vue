<template>
  <div>
    <div ref="canvasContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import images1 from '~/static/images/28.jpg';
import images2 from '~/static/images/2k_sun.jpg';

const canvasContainer = ref(null);
let camera, scene, renderer, controls;
let cube1, cube2;
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

onMounted(() => {
  if (canvasContainer.value) {
    init();
    animate();
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
  } else {
    console.error('Canvas container element is not ready.');
  }
});

function init() {
  // Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvasContainer.value.appendChild(renderer.domElement);

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Scene
  scene = new THREE.Scene();

  // Orbit controls
  controls = new OrbitControls(camera, renderer.domElement);

  // Cubes
  const textureLoader1 = new THREE.TextureLoader();
  const texture1 = textureLoader1.load(images1);
  const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
  const geometry1 = new THREE.SphereGeometry(1, 32, 32);
  cube1 = new THREE.Mesh(geometry1, material1);
  cube1.position.x = -2;
  scene.add(cube1);

  const textureLoader2 = new THREE.TextureLoader();
  const texture2 = textureLoader2.load(images2);
  const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
  const geometry2 = new THREE.SphereGeometry(1, 32, 32);
  cube2 = new THREE.Mesh(geometry2, material2);
  cube2.position.x = 2;
  scene.add(cube2);
}

function animate() {
  requestAnimationFrame(animate);

  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
  cube2.rotation.x -= 0.01;
  cube2.rotation.y -= 0.01;

  controls.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onMouseDown(event) {
  event.preventDefault();

  // Raycast from camera to the clicked position
  raycaster.setFromCamera(mouse, camera);

  // Check intersections with cubes
  const intersects = raycaster.intersectObjects([cube1, cube2]);

  if (intersects.length > 0) {
    const object = intersects[0].object;

    if (object === cube1) {
      window.location.href = '/ar';
    } else if (object === cube2) {
      window.location.href = '/about';
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
}

#info {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
  color: white;
  font-size: 50px;
  font-family: monospace;
}
</style>
