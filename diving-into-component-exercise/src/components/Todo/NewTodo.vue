<template>
  <div>
    <p><label>Name:</label><input ref="name" type="text"></p>
    <p><label>Description:</label><textarea ref="description"></textarea></p>
    <p><button @click="addNewProduct">Add Todo</button></p>
  </div>
</template>

<script>
export default{
}
</script>

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

</style>
