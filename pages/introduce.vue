<template>
    <div class="video-overlay">
        <h1>introduce</h1>
    </div>
  </template>
  
  <script>
  export default {
    // 组件逻辑
  }
  </script>
  
  <style scoped>
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
  