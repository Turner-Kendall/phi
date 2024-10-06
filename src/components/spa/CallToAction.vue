<template>

  <article>
    <header>
      <h2>Get φhi!</h2>
      <p>
        You can <a href="#">Download a zip file here</a> but the best way to
        get φhi is to <a href="https://github.com/Turner-Kendall/phi">clone it from the repository</a>.
      </p>
    </header>

    <blockquote>
      "This is a great starting point for creating a clean, modern Vue site. I appriciate having Vue router setup as
      well as a SPA selection of components."
      <footer>
        <cite>- <a href="https://turnerkendall.com">Turner Kendall</a></cite>
      </footer>
    </blockquote>

    <figure>
      <img src="/images/dark.webp" alt="phi skin for vue" />
      <figcaption>
        Image from
        <a :href="link" target="_blank">{{ credit }}</a>
      </figcaption>
    </figure>

  </article>
</template>

<script setup>
import {ref} from 'vue';
let link = "https://unsplash.com/photos/dark-staircase-EzoGykQmUYI"
let credit = ref('unsplash.com')
</script>