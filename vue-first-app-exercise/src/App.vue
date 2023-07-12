<template>
  <div class="app">
    <HeaderPart />
    <div class="content">
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  </div>
</template>

<script>
import ProductItem from './components/ProductItem.vue'
import HeaderPart from './components/Header.vue'

export default {
  name: 'App',
  components: {
    ProductItem,
    HeaderPart
  }
}
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
