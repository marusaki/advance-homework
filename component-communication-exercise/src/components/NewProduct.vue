<template>
  <div>
    <p><label>Name:</label><input ref="name" type="text"></p>
    <p><label>Description:</label><textarea ref="description"></textarea></p>
    <p><button @click="addNewProduct">Add Product</button></p>
  </div>
</template>

<script>

export default {
  methods: {
    addNewProduct() {
      const product = {
        name: this.$refs.name.value,
        description: this.$refs.description.value
      }
      this.$emit('add-product', product);
      
      //Component Communication Exercise1
      this.$refs.name.value = "";
      this.$refs.description.value = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label{
  width: 10%;
  display: flex;
  float: left;
}
input, textarea {
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  width: 60%;
}

textarea {
  height: 100px;
}

input:focus {
  outline: none;
  border-color: #00dbde;
  background-color: #d7fdeb;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #337ab7;
  background-color: #337ab7;
  color: white;
  padding: 0.5rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  border-radius: 20px;
  margin: 0 1rem;
}

button:hover,
button:active {
  background-color: #00dbde;
  border-color: #00dbde;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
