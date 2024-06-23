<template>
    <div class="qna-container">
      <div class="search-container">
        <input v-model="searchQuery" type="text" placeholder="搜索問題..." />
      </div>
      <div class="category-container">
        <button
          v-for="category in categories"
          :key="category"
          @click="filterByCategory(category)"
          :class="{ active: selectedCategory === category }"
        >
          {{ category }}
        </button>
      </div>
      <div class="questions-container">
        <div v-for="(question, index) in filteredQuestions" :key="index" class="question">
          <div class="question-header">
            <h3 @click="toggleAnswer(index)">{{ question.question }}</h3>
          </div>
          <p v-if="activeQuestionIndex === index">{{ question.answer }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const questions = ref([
    { category: '學系', question: '有什麼科系？', answer: '我們提供以下科系：資管、會計、財務、資訊工程。', votes: 5 },
    { category: '位置', question: '資管系辦在哪一樓？', answer: '資管系辦在資訊大樓的4樓。', votes: 3 },
    { category: '位置', question: '圖書館在哪裡？', answer: '圖書館位於中商大樓底層。', votes: 1 },
    { category: '食物', question: '有什麼推薦的食物嗎？', answer: '并沒有我們每天都在想要吃什麼。', votes: 0 },
    { category: '位置', question: '體育館在哪裡？', answer: '體育館位於弘業樓底層。', votes: 10 }
  ]);
  
  const categories = ref(['所有', '學系', '位置', '食物']);
  const selectedCategory = ref('所有');
  const searchQuery = ref('');
  const activeQuestionIndex = ref(null);
  
  const filteredQuestions = computed(() => {
    return questions.value.filter(question => {
      const matchesCategory =
        selectedCategory.value === '所有' || question.category === selectedCategory.value;
      const matchesSearchQuery = question.question.toLowerCase().includes(searchQuery.value.toLowerCase());
      return matchesCategory && matchesSearchQuery;
    });
  });
  
  const filterByCategory = category => {
    selectedCategory.value = category;
  };
  
  const toggleAnswer = index => {
    activeQuestionIndex.value = activeQuestionIndex.value === index ? null : index;
  };
  
  const voteUp = index => {
    questions.value[index].votes++;
  };
  </script>
  
  <style scoped>
  .qna-container {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .search-container {
    margin-bottom: 20px;
  }
  
  .search-container input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .category-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .category-container button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #0084ff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .category-container button.active {
    background-color: #005bb5;
  }
  
  .category-container button:hover {
    background-color: #005bb5;
  }
  
  .questions-container .question {
    margin-bottom: 20px;
  }
  
  .questions-container .question-header {
  display: flex;
  align-items: center;
}
  
  .questions-container .question h3 {
    cursor: pointer;
    margin: 0;
    padding: 10px;
  }
  
  </style>
  