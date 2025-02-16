<template>
  <article class="the-headlines">
    <h5>The latest articles from across the network:</h5>

    <div class="headlines-container">

      <ul class="column hleft">
        <li v-for="article in articleData" :key="article.id">
          <div class="article">

            <a :href="article.link">
              <img :src="`/article-images/thumbs/${article.thumb}`" alt="article.title" width="90">
            </a>

            <div class="headline">
              <a :href="article.link">{{ article.title }}</a>
              <p>
                {{ article.description }}
                <br> filed under: <a :href="article.categoryLink">{{ article.category }}</a>
              </p>
            </div>

          </div>
        </li>
      </ul>

      <ul class="column hright">
        <li v-for="headline in headlineData" :key="headline.id">
          <div class="article">

            <a :href="headline.link">
              <img :src="`/article-images/thumbs/${headline.thumb}`" alt="headline.title" width="90">
            </a>

            <div class="headline">
              <a :href="headline.link">{{ headline.title }}</a>
              <p>
                {{ headline.description }}
                <br> filed under: <a :href="headline.categoryLink">{{ headline.category }}</a>
              </p>
            </div>

          </div>
        </li>
      </ul>
    </div>


  </article>
</template>

<script setup>
import { articleData } from '../../js/articleData'
import { headlineData } from '../../js/headlineData'
</script>

<style scoped>

article {
  min-height: 300px;
}

.article {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 0rem;
  margin-bottom: 1rem;
}

.the-headlines {
  padding: 1rem;
}

.headlines-container {
  display: flex;
  flex-wrap: wrap;
}

.headlines-container ul {
  list-style: none;
  padding: 0;
}

.headlines-container ul li {
  margin-bottom: .25rem;
  list-style: none;
}

.hleft {
  margin-right: 2rem;
}

.column {
  flex: 1;
  min-width: 300px;
}

.column p {
  line-height: 1.25;
}

.column img {
  border-radius: .5rem;
}

.headline {
  padding-left: 5px;
  margin-bottom: .25rem !important;
  line-height: 1;
}

@media (max-width: 700px) {
  .column {
    flex: 100%;
  }

  .hleft {
    margin-right: 0 !important;
  }

}
</style>
