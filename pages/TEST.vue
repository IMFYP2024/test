<template>
  <div id="chat-container">
    <div v-for="(message, index) in messages" :key="index" :class="['chat-box', message.side, 'fade-in']">
      <p class="chat-message">{{ message.text }}</p>
    </div>
  </div>
  <div id="options-container">
    <div>
      <h1 id="topic" >常見問題</h1>
    </div>
    <div v-if="remainingQuestions.length > 0">
      <button v-for="questionIndex in remainingQuestions" :key="questionIndex" @click="selectOption(questionIndex)">
        {{ questions[questionIndex] }}
      </button>
    </div>
    <div v-else>
      <p>已完成所有問題。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const questions = [
  "有什麽科系？",
  "資管系辦在哪一樓？",
  "圖書館在哪裡？",
  "有什麽推薦的食物嗎？",
  "體育館在哪裡？",
];

const answers = [
  "我們提供以下科系：資管、會計、財務、資訊工程。",
  "資管系辦在資訊大樓的4樓。",
  "圖書館位於中商大樓底層。",
  "并沒有我們每天都在想要吃什麽",
  "體育館位於弘業樓底層。"
];

const messages = ref([{ text: "你要問什麽問題？", side: "left" }]);
const remainingQuestions = ref([0, 1, 2, 3, 4]);

const selectOption = (questionIndex) => {
  const chatContainer = document.getElementById('chat-container');

  // 根據選擇創建用戶的對話框
  messages.value.push({ text: questions[questionIndex], side: "right" });
  messages.value.push({ text: answers[questionIndex], side: "left" });

  // 更新剩餘問題
  remainingQuestions.value = remainingQuestions.value.filter(index => index !== questionIndex);

  // 滾動到最底部
  nextTick(() => {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  });
};

onMounted(() => {
  // 初始顯示所有問題
});
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
}
#topic{
  font-size: 40px;
  font-weight: bold;
}
#chat-container {
  width: 100%;
  max-width: 500px;
  height: 60%;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  position: relative;
}
.chat-box {
  display: flex;
  align-items: center;
  margin: 10px 0;
  animation: fadeIn 0.5s ease-in-out;
}
.left {
  justify-content: flex-start;
}
.right {
  justify-content: flex-end;
}
.chat-message {
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 20px;
  word-wrap: break-word;
  position: relative;
}
.left .chat-message {
  background-color: #e0e0e0;
  color: #333;
}
.right .chat-message {
  background-color: #0084ff;
  color: white;
}
#options-container {
  text-align: center;
  margin-top: 20px;
}
button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #0084ff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #005bb5;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}
</style>
