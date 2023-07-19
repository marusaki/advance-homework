<template>
  <button><slot></slot></button>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
