<template>
  <nav class="menu">
    <Slide>
      <a id="home" href="/"> <span class="bm-link">The Home Page</span> </a>

      <a id="political" href="/pol/list">
        <span class="bm-link">The Political Category</span>
      </a>

      <a id="tech" href="/tech/list">
        <span class="bm-link">The Tech Category</span>
      </a>

      <a id="home-health" href="/home/list">
        <span class="bm-link">Home and Health</span>
      </a>

      <a id="entertainment" href="/ent/list">
        <span class="bm-link">Entertainment Category</span>
      </a>

      <a id="law" href="/law/list">
        <span class="bm-link">The Legal Category</span>
      </a>

    </Slide>
  </nav>
</template>

<script>
import { Slide } from 'vue3-burger-menu';

export default {
  components: {
    Slide
  }
}
</script>

<style>
.bm-menu,
nav {
  display: block;
  margin-bottom: .5rem;
}

.bm-link {
  line-height: 1;
}



/* Light */

html[data-theme="light"] .bm-menu,
html[data-theme="light"] nav {
  background-color: #b2b2b3e5;
}

html[data-theme="light"] .bm-item-list a {
  color: #0969da !important;
}

html[data-theme="light"] .bm-item-list a:hover {
  background-color: #9a9a9b51 !important;
  color: #0969da !important;
  border-bottom: 2px solid #ffffff50 !important;
  border-left: 1px solid #ffffff49 !important;
}

/* Dark */

html[data-theme="dark"] .bm-menu,
html[data-theme="dark"] nav {
  background-color: #0d1016c8;
}

html[data-theme="dark"] .bm-menu .bm-item-list a:hover {
  background-color: #0c0d12e4 !important;
  border-bottom: 2px solid #5662cc3a !important;
  border-left: 1px solid #6365753a !important;
}

/* .bm-menu,
.bm-burger-bars.line-style {}

.bm-item-list a:hover {
  background-color: #122322 !important;
  color: #03bc80 !important;
} */
</style>
