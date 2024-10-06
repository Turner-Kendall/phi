<template>
  <splide :options="options">
    <splide-slide>
      <img src="/images/1.webp">
    </splide-slide>
    <splide-slide>
      <img src="/images/2.webp">
    </splide-slide>
    <splide-slide>
      <img src="/images/3.webp">
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
  export default { 
    data() {
      return {
        options: {
          rewind : true,
          width  : 800,
          gap    : '1rem',
        },
      };
    },
  }
</script>