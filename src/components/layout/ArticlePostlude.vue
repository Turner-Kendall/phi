<template>
  <section class="postlude">
    <div class="icon-group">
      <RouterLink :to="article.category.link" class="btn btn-primary">
        <IconBack /> Back to {{ article.category.name }} Articles
      </RouterLink>
      <span class="icon-group-right">
        <RouterLink :to="article.next.link" class="btn btn-primary">
          Next: {{ article.next.name }}
          <IconNext />
        </RouterLink>
      </span>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import IconBack from '../icons/IconBack.vue';
import IconNext from '../icons/IconNext.vue';
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>
