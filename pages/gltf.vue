<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  name: 'ThreeScene',
  mounted() {
    this.initThree();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mousemove', this.onMouseMove);
  },
  methods: {
    initThree() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.threeContainer.appendChild(this.renderer.domElement);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.update();

      this.glbObject1 = null;
      this.glbObject2 = null;
      this.glbObject3 = null;
    
      const loader = new GLTFLoader();

      // 加载FONT.glb
      loader.load('/images/FONT.glb', (glb) => {
        const fontObject = glb.scene;
        fontObject.position.set(0, 4.5, -1);
        this.scene.add(fontObject);
      });

      // 加载Ar darkblue.glb并创建多个实例
      loader.load('/images/Ar_darkblue.glb', (glb) => {
        this.glbObject1 = glb.scene;
        this.glbObject1.position.set(0, 2.2, 0);
        this.glbObject1.scale.set(0.5, 0.5, 0.5);
        this.glbObject1.rotation.x = Math.PI / 2;
        this.scene.add(this.glbObject1);
      });
      loader.load('/images/introducedark1.glb', (glb) => {
        this.glbObject2 = glb.scene;
        this.glbObject2.position.set(0, 0.7, 0);
        this.glbObject2.scale.set(0.5, 0.5, 0.5);
        this.glbObject2.rotation.x = Math.PI / 2;
        this.scene.add(this.glbObject2);
      });
      loader.load('/images/pointcard_darkblue.glb', (glb) => {
        this.glbObject3 = glb.scene;
        this.glbObject3.position.set(0, -0.8, 0);
        this.glbObject3.scale.set(0.5, 0.5, 0.5);
        this.glbObject3.rotation.x = Math.PI / 2;
        this.scene.add(this.glbObject3);
      });
      loader.load('/images/pointcard_darkblue.glb', (glb) => {
        this.glbObject4 = glb.scene;
        this.glbObject4.position.set(0, -2.3, 0);
        this.glbObject4.scale.set(0.5, 0.5, 0.5);
        this.glbObject4.rotation.x = Math.PI / 2;
        this.scene.add(this.glbObject4);
      });

      // 创建视频元素
      const video = document.createElement('video');
      video.src = '/videos/IMG_0184.mov';
      video.crossOrigin = 'anonymous';
      video.loop = true; // 设置循环播放
      video.muted = true;
      video.load();
      video.play();

      const videoTexture = new THREE.VideoTexture(video);
      const geometry = new THREE.BoxGeometry(7.5, 16, 2);
      const material = new THREE.MeshBasicMaterial({ map: videoTexture });
      const box = new THREE.Mesh(geometry, material);
      box.position.set(0, 0, -4.4);
      this.scene.add(box);

      // 添加环境光
      //2d
     /*
      const ambientLight = new THREE.AmbientLight(0xffffff, 3);
      this.scene.add(ambientLight);
     */
    
       const light = new THREE.DirectionalLight(0xffffff,3);
        light.position.set(5, 6, 14);
        light.target.position.set(0, 15, -2);
        this.scene.add(light);
        this.scene.add(light.target);
     
      // 设置相机位置
      this.camera.position.set(0, 0, 7);

      // 添加坐标轴助手
      const axesHelper = new THREE.AxesHelper(10);
      this.scene.add(axesHelper);

      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2();

      window.addEventListener('resize', this.onWindowResize, false);
      window.addEventListener('mousedown', this.onMouseDown, false);
      window.addEventListener('mousemove', this.onMouseMove, false);

      this.animate();
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    onMouseMove(event) {
      event.preventDefault();
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    },
    onMouseDown(event) {
      event.preventDefault();
      this.onMouseMove(event);
      this.raycaster.setFromCamera(this.mouse, this.camera);

      const intersects = this.raycaster.intersectObjects([this.glbObject1, this.glbObject2, this.glbObject3]);

      if (intersects.length > 0) {
        const object = intersects[0].object;

        if (object === this.glbObject1) {
          this.$emit('switch-component', 'ArComponent');
        } else if (object === this.glbObject2) {
          this.$emit('switch-component', 'IntroduceComponent');
        } else if (object === this.glbObject3) {
          this.$emit('switch-component', 'PointComponent');
        }
      }
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
      this.controls.update();
    }
  }
};
definePageMeta({
  layout: false
});
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.three-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
