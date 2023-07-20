<template>
  <div>
    Todo Detail {{ id }}
    <p :to="getTodo(id)">Description: {{ todos.description }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      todos: ""
    }
  },
  props: ["id"],
  methods: {
    getTodo(id) {
      const url = "https://61e4e01a595afe00176e51df.mockapi.io/todo/" + id;
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
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}
</style>
