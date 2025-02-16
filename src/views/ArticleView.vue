<template>
  <article class="page-wrapper">
    <div v-if="pageRoute == 'list'">
      <ArticleIndex />
    </div>
    <div v-if="pageRoute == 'turbo-sloth'">
      <TurboSloth />
    </div>
    <div v-else-if="pageRoute == 'moon-toast'">
      <MoonToast />
    </div>
  </article>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ArticleIndex from '../components/articles/ArticleIndex.vue'

import TurboSloth from '@/components/articles/TurboSloth.vue';
import MoonToast from '@/components/articles/MoonToast.vue';


const route = useRoute();
const pageRoute = ref(route.params.name);

watch(route, (newRoute) => {
  pageRoute.value = newRoute.params.name;
});
</script>
