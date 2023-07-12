<template>
  <li class="product-item">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
  </li>
</template>

<script>
export default {
  // property is to define component name
  name: 'ProductItem',
  data() {
    return {
      product: {
        id: '1',
        name: 'Product 1',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-item {
  list-style: none;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 2rem;
  margin: 1rem 0;
  border-radius: 12px;
  background-color: #ccc;
  font-size: 1.2rem;
}
</style>
