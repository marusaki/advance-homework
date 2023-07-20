<template>
  <li>
    <router-link :to="linkToDetailTodo"><h3>{{ name }}</h3></router-link>
    <span class="badge" :class="classes">{{ priority }}</span>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'priority'],
  computed: {
    classes() {
      return {
        'badge--urgent': this.priority === 'urgent',
        'badge--normal': this.priority === 'normal',
      };
    },
    linkToDetailTodo() {
      return {
        name: 'todo-detail', 
        params: {
          id: this.id
        }
      }
    }
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
  display: flex;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background-color: #ccc;
  color: #2e2e2e;
}

.badge--urgent {
  background-color: #f14545;
  color: white;
}

.badge--normal {
  background-color: #ccc;
  color: white;
}
</style>