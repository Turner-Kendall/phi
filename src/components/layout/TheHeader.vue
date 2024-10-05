<template>
  <header>
    <img src="/avatar.png" height="128" width="128">
    <h1>{{ title }}</h1>
    <section class="intro"> {{ intro }}

    </section>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const title = ref("φphi");
const intro = ref("Aliquam lobortis vitae nibh nec rhoncus. Morbi mattis neque eget efficitur feugiat.");

</script>

<style lang="css" scoped>
  .intro{
  margin: 0 var(--half);
  /* margin: 0 var(--two-one); */
  font-size: 1rem;
}
</style>