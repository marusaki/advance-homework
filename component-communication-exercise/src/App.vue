<template>
  <div class="app">
    <header>
      <h1>Vue - Component Communication</h1>
    </header>
    <div class="content">
      <NewProduct @add-product="addProduct"/>
      <ProductItem />
    </div>
  </div>
</template>

<script>
import ProductItem from "./components/ProductItem.vue";
import NewProduct from "./components/NewProduct.vue";

export default {
  name: "App",
  components: {
    ProductItem,
    NewProduct,
  },
  data() {
    return {
      products: [
        {
          name: "Product 1",
          description: "Product 1 description",
        },
        {
          name: "Product 2",
          description: "Product 2 description",
        },
        {
          name: "Product 3",
          description: "Product 3 description",
        },
      ],
    };
  },
  //Using provide
  provide(){
    return {
      products: this.products,
    }
  },
  methods: {
    addProduct(product) {
      this.products.push(product);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}
.content {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem 1rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}
</style>
