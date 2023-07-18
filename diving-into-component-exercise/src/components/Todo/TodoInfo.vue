<template>
  <base-list-item>
    <template v-slot:header>
      <h3>{{ title }}</h3>
      <base-badge :type="priority" :caption="priority.toUpperCase()"></base-badge>
    </template>
    <p>{{ description }}</p>
  </base-list-item>
</template>

<script>
import BaseListItem from '../UI/BaseListItem.vue';

export default {
  props: ['title', 'description', 'priority'],
  components: {
    BaseListItem
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>