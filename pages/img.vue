<template>
  <div class="video-overlay">
    <iframe id="iframe" ref="iframeRef" :src="`https://rayasd396kr.github.io/imgtrack/?image=${imageUrl}`" allow="fullscreen;camera"></iframe> 
  </div>
</template>

<style scoped>
iframe {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white; 
  z-index: 100; 
}
</style>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const imageUrl = route.query.image || '';
</script>

<script>
export default {
  mounted() {
    window.addEventListener('message', this.handleRecognitionResult);
  },
  beforeUnmount() { 
    window.removeEventListener('message', this.handleRecognitionResult);
  },
  methods: {
    handleRecognitionResult(event) {
      
      
      const { cellId, value } = event.data;
      if (cellId && value) {
        window.parent.postMessage({ cellId, value }, '*');
      }
    },
  },
};
</script>
