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
  position: fixed; /* 使用固定定位 */
  top: 0; /* 位于页面顶部 */
  left: 0;
  width: 100%; /* 宽度占满整个页面 */
  background-color: #ffffff; /* 背景色，可以根据需要进行调整 */
  z-index: 1000; /* 设置 z-index，确保在其他内容上方 */
  padding: 10px; /* 可根据需要添加内边距 */
  
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.navbar a {
  text-decoration: none;
  color: #333333; /* 链接颜色 */
  font-size: 16px;
  font-weight: bold;
  padding: 8px 12px; /* 链接的内边距 */
  border-radius: 4px;
  transition: background-color 0.3s ease; /* 添加过渡效果 */
}

.navbar a:hover {
  background-color: #f0f0f0; /* 鼠标悬停时的背景色 */
}
</style>
