<template>
  <base-list-item>
    <template v-slot:header>
      <h3>{{ title }}</h3>
      <base-badge :type="priority" :caption="priority.toUpperCase()"></base-badge>
    </template>
    <p>{{ description }}</p>
    <button name="name" @click="deleteTodo(id)" type="button">Delete</button>
  </base-list-item>
</template>

<script>
import axios from "axios";
import BaseListItem  from '../UI/BaseListItem.vue';

export default {
  props: ['title', 'description', 'priority', 'id'],
  components: {
    BaseListItem
  },
  data() {
    return {
    }
  },
  methods: {
    deleteTodo(id) {
      const url = "https://61e4e01a595afe00176e51df.mockapi.io/todo/" + id;
      axios
        .delete(url)
        .then(response => (this.todos = response.data))
        .catch(err => {
          // handling error here
          this.error = err.message;
        });
    },
  },
};
</script>
