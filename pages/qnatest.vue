<template>
    <div class="qna-container">
      <h1>社區問答</h1>
      <div v-for="(qna, index) in qnaList" :key="index" class="qna-item">
        <div class="question">
          <h3>{{ qna.question }}</h3>
          <button @click="voteUp(index)">👍 {{ qna.votes }}</button>
        </div>
        <p>{{ qna.answer }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const qnaList = ref([
    { question: '有什麼科系？', answer: '我們提供以下科系：資管、會計、財務、資訊工程。', votes: 5 },
    { question: '資管系辦在哪一樓？', answer: '資管系辦在資訊大樓的4樓。', votes: 3 },
    // 更多問題...
  ]);
  
  const voteUp = index => {
    qnaList.value[index].votes++;
  };
  </script>
  
  <style scoped>
  .qna-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .qna-item {
    margin-bottom: 20px;
  }
  
  .question {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .question h3 {
    margin: 0;
  }
  
  .question button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    color: #0084ff;
    
  }
  </style>
  