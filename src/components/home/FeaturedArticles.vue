<template>
  <article>
    <h5>Featured Articles:</h5>
    <ul id="featured">
      <li v-for="article in featuredData" :key="article.id" class="article">
        <a :href="article.link">
          <img :src="`/article-images/thumbs/${article.thumb}`" alt="article.title" width="120" class="thumbnail">
        </a>
        <div class="headline">
          <h6> <a :href="article.link">{{ article.title }}</a> </h6>
          <p class="description"> {{ article.description }} </p>
          <p class="postmeta">Filed under: <a :href="article.categoryLink">{{ article.category }}</a>
            . Posted: {{ article.date }}
          </p>
        </div>
      </li>
    </ul>
  </article>
</template>

<script setup>
import { featuredData } from '../../data/featuredData'

</script>

<style scoped>
ul#featured {
  margin: 1rem 0 0 0 !important;
  padding: 0;
}

.article {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0rem;
  margin-bottom: 1rem;
}

article{
  min-height: 300px;
}
@media (max-width: 768px) {
  .article {
    grid-template-columns: 1fr;
  }
}

.article p {
  font-size: .9rem;
}

li.article {
  list-style: none;
  padding: 0;
  /* margin-bottom: 1.25rem; */
  list-style: none;
}

ul#featured>*:last-child {
  margin-bottom: 0 !important;
  /* background-color: aquamarine; */
}

.thumbnail {
  border-radius: 5px;
  margin-right: 10px;
}

h5 {
  margin: 0 0 .5rem 0 !important;
}

h6 {
  margin-top: .25rem;
  font-size: 1.1rem !important;
}

p.description {
  line-height: .9rem;
  padding: 0 !important;
  margin: 0 0 5px 0 !important;
  font-size: .9rem;
}

p.postmeta,
.headline a {
  padding: 0;
  font-weight: 600;
  font-size: .8rem;
}
</style>
