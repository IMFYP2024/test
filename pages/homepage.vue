<template>
  <div class="container">
    <video autoplay muted loop class="background-video">
      <source src="/videos/IMG_0184.mov" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <h1>AR校園導覽</h1>
      <div class="buttons">
        <button @click="handleClick('AR')">AR</button>
        <button @click="handleClick('科系介紹')">科系介紹</button>
        <button @click="handleClick('集點卡')">集點卡</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(button) {
      alert(`You clicked ${button}`);
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  z-index: 1;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: rgba(255, 255, 255, 1);
}
</style>
