<template>
  <div>
    <the-header></the-header>
    <new-todo></new-todo>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TodoList from "./components/Todo/TodoList.vue";
import NewTodo from "./components/Todo/NewTodo.vue";

export default {
  components: {
    TheHeader,
    TodoList,
    NewTodo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
