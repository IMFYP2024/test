<template>
  <div class="video-overlay">
    <h1>首頁</h1>
    <button>
      <a href="/ar">AR
    </a>
    </button>
    <button @click="navigateTo('about')">關於</button>
    <button @click="navigateTo('point')">集點</button>
    <button @click="navigateTo('introduce')">介紹</button>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false
});
</script>
<style scoped>
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
