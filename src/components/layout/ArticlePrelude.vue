<template>
  <div class="prelude">
    <h2>{{ article.title }}</h2>
    <h5>{{ article.description }}</h5>
    Filed under: <a :href="article.category.link">{{ article.category.name }}</a> .
    Published: {{ article.date }} by <a :href="article.publisher.link">{{ article.publisher.name }}</a>
    <img :src="article.image.url" :alt="article.title" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  article: {
    type: Object,
    required: true,
    default: () => ({
      title: 'φhi Article',
      description: "",
      category: { name: 'home', link: '/home/index' },
      date: 'January 6th 2025',
      publisher: { name: 'Weblog.Network', link: '/page/about' },
      image: { url: '/article-images/default-header.webp' },
    }),
  },
});
</script>

<style scoped>
.prelude img {
  display: block;
  margin-top: 10px;
  max-width: 100%;
  height: auto;
}

h5 {
  margin-bottom: 5px !important;
}
</style>
