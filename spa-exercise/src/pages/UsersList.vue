<template>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      :email="user.email">
    </user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      users: [
        { id: '1', name: 'Viola Twitty', email: 'viola@abc.com' },
        { id: '2', name: 'Clarissa Skeldon', email: 'clarissa@abc.com' },
      ],
    }
  },
  beforeRouteLeave () {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (!answer) return false
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>