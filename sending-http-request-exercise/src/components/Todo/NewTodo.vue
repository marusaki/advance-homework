<template>
  <base-section>
    <form @submit.prevent="addNewTodo">
      <p v-if="error">{{ error }}</p>
      <p><label>Name:</label><input name="title" ref="title" v-model.trim="title" type="text"></p>
      <p><label>Description:</label><textarea name="description" ref="description" v-model.trim="description"></textarea></p>
      <p>
        <label>Priority:</label>
        <select ref="priority">
          <option value="normal">Normal</option>
          <option value="urgent">Urgent</option>
        </select>
      </p>
      <p class="center">
        <base-button>Add Todo</base-button>
      </p>
    </form>
  </base-section>
</template>

<script>
import axios from 'axios';
import BaseButton from '../UI/BaseButton.vue';
import BaseSection from '../UI/BaseSection.vue';
export default {
  components: {
    BaseButton,
    BaseSection
  },
  data() {
    return {
      error: null,
      isTitleValid: true,
      title: '',
      description: ''
    }
  },
  methods: {
    addNewTodo() {
      if (this.title.length === 0 ) {
        alert("Input Name");
      } else if (this.description.length === 0) {
        alert("Input Description")
      } else {
        const url = 'https://61e4e01a595afe00176e51df.mockapi.io/todo';
        axios
          .post(url, {
            title: this.$refs.title.value,
            description: this.$refs.description.value,
            priority: this.$refs.priority.value
          })
          .then((response) => {
            console.log(response.data);
            alert("Todo is added successfully");
          })
          .catch((err) => {
            console.log(err);
            this.error = err.message;
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label{
  width: 20%;
  min-width: 5rem;
  display: flex;
  float: left;
}
input, textarea {
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.3rem;
  width: 60%;
}

textarea {
  height: 50px;
}

input:focus {
  outline: none;
  border-color: #00dbde;
  background-color: #d7fdeb;
}
.center {
  text-align: center;
}
</style>
