<template>
    <div class="video-player" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      <video ref="video" class="video" :src="videoSrc">
        Your browser does not support the video tag.
      </video>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const video = ref(null)
  const videoSrc = '/video/8810.mp4'
  
  let startY = 0
  let currentTime = 0
  
  const handleTouchStart = (event) => {
    startY = event.touches[0].clientY
    currentTime = video.value.currentTime
  }
  
  const handleTouchMove = (event) => {
    const deltaY = startY - event.touches[0].clientY
    const newTime = currentTime + deltaY * 0.1 // 調整這個係數來控制快進或倒退的速度
    video.value.currentTime = Math.max(0, Math.min(video.value.duration, newTime))
  }
  
  const handleTouchEnd = () => {
    // 可以根據需要在這裡添加結束拖動後的處理邏輯
  }
  </script>
  
  <style scoped>
  .video-player {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .video {
    width: 100%;
    height: auto;
  }
  </style>
  