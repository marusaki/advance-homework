<template>
  <ul>
    <li v-for="(product, index) in products" class="product-list" :key="index">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  components: {
    },
  data() {
    return {
      products: [{
        name:'Product 1',
        description: 'Description 1',
        price: '100',
      },
      {
        name:'Product 2',
        description: 'Description 2',
        price: '200',
      },
      {
        name:'Product 3',
          description: 'Description 3',
          price: '300',
      }]
    }
  }
};
</script>

<style scoped>
.product-list {
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