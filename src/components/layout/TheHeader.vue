<template>
  <header>
    <img src="/images/avatar.png" height="128" width="128">
    <h1>{{ title }}</h1>
    <section class="intro"> {{ intro }}

    </section>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const title = ref("φhi");
const intro = ref("A minimal Vue3 theme or template based on the golden ration...");

</script>

<style lang="css" scoped>
  .intro{
  margin: 0 var(--half);
  /* margin: 0 var(--two-one); */
  font-size: 1rem;
}
</style>