<template>
  <ul>
    <li v-if="isLoading">Loading...</li>
    <router-view></router-view>
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :name="todo.title"
      :priority="todo.priority"
    ></todo-item>
    <li v-if="error">{{ error }}</li>
  </ul>
</template>

<script>
import axios from "axios";
import TodoItem from '../components/todos/TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    getTodoList() {
      this.isLoading = true;
      const url = "https://61e4e01a595afe00176e51df.mockapi.io/todo";
      axios
        .get(url)
        .then(response => this.todos = response.data)
        .catch(err => {
          this.error = err.message;
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getTodoList();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>