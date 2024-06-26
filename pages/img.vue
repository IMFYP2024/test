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
  background-color: white; /* 覆盖颜色可以根据你的需要自定义 */
  z-index: 100; /* 确保覆盖在视频上方 */
}
</style>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
// 接收路由传递过来的值
const imageUrl = route.query.image || '';
</script>

<script>
export default {
  mounted() {
    window.addEventListener('message', this.handleRecognitionResult);
  },
  beforeUnmount() { // 注意这里的生命周期钩子名称
    window.removeEventListener('message', this.handleRecognitionResult);
  },
  methods: {
    handleRecognitionResult(event) {
      // 检查消息来源 (可选，视情况决定是否启用)
      // if (event.origin !== 'trusted_origin') return;
      //console.log('Received message:', event.data);
      const { cellId, value } = event.data;
      if (cellId && value) {
        window.parent.postMessage({ cellId, value }, '*');
      }
    },
  },
};
</script>
