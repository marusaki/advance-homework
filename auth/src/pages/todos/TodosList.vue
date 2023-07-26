<template>
  <div>
    <section>
      <base-card>
        <div v-if="!!error">{{ error }}</div>
        <div v-else-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasTodo">
          <todo-item
            v-for="todo in todos"
            :key="todo.id"
            :id="todo.id"
            :title="todo.title"
            :description="todo.description"
          ></todo-item>
        </ul>
        <h3 v-else>No todo</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoItem from '../../components/todos/TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      isLoading: false,
      error: '',
    };
  },
  computed: {
    hasTodo() {
      return this.todos.length > 0;
    },
    ...mapGetters(['todos']),
  },
  methods: {
    async getTodos() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('getTodos');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
  },
  created() {
    this.getTodos();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
