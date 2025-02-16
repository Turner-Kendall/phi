<template>
  <main>
    <TheHeader />
    <div class="inner-row">
      <div class="inner-col">
        <router-view />
      </div>
      <TheSidebar />
    </div>
    <TheFooter />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheFooter from './components/layout/TheFooter.vue';
import TheHeader from './components/layout/TheHeader.vue'
import TheSidebar from './components/layout/TheSidebar.vue'
</script>
