<template>
  <div class="navbar-container">
    <div class="navbar">
      <a href="/">首頁</a>
      <a href="/ar">AR</a>
      <a href="/about">關於</a>
      <a href="/point">集點</a>
      <a href="/puzzle">小游戲</a>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.navbar-container {
  position: fixed; 
  top: 0; 
  left: 0;
  width: 100%;
  height: 100%; 
  z-index: 1000; 
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.navbar a {
  text-decoration: none;
  color: #333333; 
  font-size: 16px;
  font-weight: bold;
  padding: 8px 12px; 
  border-radius: 4px;
  transition: background-color 0.3s ease; 
}

.navbar a:hover {
  background-color: #f0f0f0; /* 鼠标悬停时的背景色 */
}

</style>
