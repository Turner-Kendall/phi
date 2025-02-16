<template>
  <header class="main-header" id="top">
    <TheNav />
    <section class="masthead">
      <h1><a href="/">φhi</a></h1>
      <h4>A minimal Vue3 starter template</h4>
    </section>
  </header>
</template>

<script setup>
import TheNav from './TheNav.vue'
</script>

<style lang="css" scoped>
/* Don't move to main css file */
a {
  font-size: 2rem;
  font-weight: 900 !important;
  letter-spacing: -1px;
}

a:hover {
  font-weight: 900 !important;
  color: #d24e69 !important;
  text-decoration: none;
}

h1{
  margin-top: -10px;
}
</style>
