<template>
  <base-list-item>
    <span class="badge" :class="classes">{{ caption }}</span>
  </base-list-item>
</template>

<script>
import BaseListItem from './BaseListItem.vue';
export default {
  components: { BaseListItem },
  props: ['type', 'caption'],
  computed: {
    classes() {
      return {
        'badge--urgent': this.type === 'urgent',
        'badge--normal': this.type === 'normal',
      };
    },
  },
};
</script>

<style scoped>
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