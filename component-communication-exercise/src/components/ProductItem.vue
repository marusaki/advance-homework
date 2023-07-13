<template>
  <!-- Component Communication Exercise2 -->
  <li v-for="(product, index) in products" class="product-item" :key="index" @click="removeProduct(index)">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
  </li>
</template>

<script>
export default {
  // props: {
  //   name: {
  //     type: String,
  //     required: true
  //   },
  //   description: String
  // }
  inject: ["products"],

  //Component Communication Exercise2
  methods: {
    removeProduct: function(index) {
      this.products.splice(index, 1);
    }
  }
};
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
