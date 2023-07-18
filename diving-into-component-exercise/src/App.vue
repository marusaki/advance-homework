<template>
  <div>
    <the-header></the-header>
    <p>
      <button @click="setDisplayComponent('TodoList')">Show Todo List</button>
      <button @click="setDisplayComponent('NewTodo')">Show New Todo</button>
      <button @click="setDisplayComponent('ProductList')">Show Product List</button>
    </p>
    <keep-alive>
      <component :is="displayComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TodoList from './components/Todo/TodoList.vue';
import NewTodo from './components/Todo/NewTodo.vue';
import ProductList from './components/Product/ProductList.vue';

export default {
  components: {
    TheHeader,
    TodoList,
    NewTodo,
    ProductList
  },
  data(){
    return {
      displayComponent: "TodoList"
    };
  },
  methods: {
    setDisplayComponent(componentName) {
      this.displayComponent = componentName;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #337ab7;
  background-color: #337ab7;
  color: white;
  padding: 0.5rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  border-radius: 20px;
  margin: 0 1rem;
}

</style>
