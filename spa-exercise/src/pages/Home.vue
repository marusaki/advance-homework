<template>
  <p>Welcome to our website</p>
</template>

<script>
export default {
  props: ['name'],
};
</script>

<style scoped>
p {
  margin: 1rem 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}
</style>