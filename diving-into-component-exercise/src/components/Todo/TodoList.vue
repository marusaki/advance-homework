<template>
  <div>
    <todo-info v-for="(todo, index) in todos"
    :key="index"
    :title="todo.title"
    :description="todo.description"
    :priority="todo.priority"
  ></todo-info>
  </div>
</template>

<script>
import TodoInfo from './TodoInfo.vue';

export default {
  components: {
    TodoInfo
    },
  data() {
    return {
      todos: [{
        title:'This is an urgent task',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        priority: 'urgent',
      },
      {
        title: 'This is a normal task',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        priority: 'normal',
      }]
    };
  }
};
</script>
