<template>
  <div >
    <div class="container">
    <label class="switch"  >
  <input type="checkbox" @click=" toggleContent">
  <span class="slider round" >
    <span class="slider-content" data-on="文字" data-off="影片" ></span>
  </span>
</label>
</div>
    <transition name="fade">
      <div v-if="isVideoVisible">
        <div
          class="video-player"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <video ref="video" class="video" :src="videoSrc">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div v-else class="photo-wall">
        <img src="/images/1.png" alt="Photo" class="w-full max-w-md mx-auto" />
        <div class="messages">内容介紹</div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVideoVisible = ref(true)
const video = ref(null)
const videoSrc = '/video/8810.mp4'

const toggleContent = () => {
  isVideoVisible.value = !isVideoVisible.value
}

let startY = 0
let currentTime = 0

const handleTouchStart = (event) => {
  startY = event.touches[0].clientY
  currentTime = video.value.currentTime
}

const handleTouchMove = (event) => {
  const deltaY = startY - event.touches[0].clientY
  const newTime = currentTime + deltaY * 0.01 // 調整這個係數來控制快進或倒退的速度
  video.value.currentTime = Math.max(0, Math.min(video.value.duration, newTime))
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-end; /* 將容器內部內容推到右邊 */
  padding: 20px;
}
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


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
 
}

.photo-wall {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.messages {
  margin-top: 16px;
  text-align: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 44px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: green;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 36px;
  width: 36px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(36px);
  -ms-transform: translateX(36px);
  transform: translateX(36px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 44px;
}

.slider.round:before {
  border-radius: 50%;
}

.slider-content {
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  color: black;
  margin-left: 10px;
  margin-top:10px;
}

input:checked + .slider .slider-content:before {
  content: attr(data-on);
  transform: translateX(36px);
}

.slider .slider-content:before {
  content: attr(data-off);
  transition: transform 0.4s;
}
</style>
