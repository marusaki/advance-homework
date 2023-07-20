<template>
  <li>
    <h3>{{ name }}</h3>
    <p>Email: {{email}}</p>
  </li>
</template>

<script>
export default {
  props: ['name', 'email'],
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}
</style>