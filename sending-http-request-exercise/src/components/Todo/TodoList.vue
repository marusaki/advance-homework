<template>
  <base-section>
    <h2>Todo List</h2>
    <p v-if="isLoading">Loading...</p>
    <p v-if="error">{{ error }}</p>
    <todo-info
      v-for="(todo, index) in todos"
      :key="index"
      :title="todo.title"
      :description="todo.description"
      :priority="todo.priority"
      :id ="todo.id"
    ></todo-info>
  </base-section>
</template>

<script>
import axios from "axios";
import BaseSection from '../UI/BaseSection.vue';
import TodoInfo from './TodoInfo.vue';

export default {
  components: {
    BaseSection,
    TodoInfo
  },
  data() {
    return {
      todos: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    getTodolist() {
      this.isLoading = true;
      const url = "https://61e4e01a595afe00176e51df.mockapi.io/todo";
      axios
        .get(url)
        .then(response => (this.todos = response.data))
        .catch(err => {
          // handling error here
          this.error = err.message;
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getTodolist();
  }
};
</script>

<style scoped>
h2, p {
  text-align: center;
}
</style>
