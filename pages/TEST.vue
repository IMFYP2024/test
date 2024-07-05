
<template>
  <div>
    <label>name</label>
    <input type="text" v-model="user.name" />
    <label>email</label>
    <input type="email" v-model="user.email" />

    <button @click="addUser()">Add User</button>
  </div>
</template>

<script setup>
const user = ref({
  name: '',
  email: ''
});

const addUser = async () => {
  const response = await $fetch('/api/Model/user', {
    method: 'POST',
    body: {
      ...user.value
    }
  });
  console.log(response);
};
</script>

<style scoped>
/* 在这里编写你的 CSS 样式 */
div {
  padding: 20px;
}

label {
  font-weight: bold;
}

input {
  margin-top: 10px;
  display: block;
}
</style>