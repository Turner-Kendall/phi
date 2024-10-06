<template>
  <header class="main-header">
    <img src="/images/phi.png" id="logo">
    <h1>{{ title }}</h1>
    <section class="intro"> {{ intro }}

    </section>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const title = ref("φhi.skin");
const intro = ref("A minimal Vue3 skin based on the golden ration...");

</script>

<style lang="css" scoped>
.intro {
  margin: 0 var(--half);
  /* margin: 0 var(--two-one); */
  font-size: 1rem;
}

#logo {
  height: 3rem;
  margin: 1.3rem 0 0 .3rem;
}

.main-header {
  padding: 1rem 0 0 1rem;
  text-align: left;
}



@media (min-width: 1024px) {
  .main-header {
    padding: 0;
    text-align: left;
  }
  #logo {
    height: 5rem;
    margin: 0;
  }
}
</style>