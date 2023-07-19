<template>
  <article>
    <header>
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </article>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
article {
  margin: 2rem;
  max-width: 50rem;
  padding: 1rem;
}
</style>