<template>
  <article id="hero">
    <h2>Why Choose φhi?</h2>
   
      <ul>
        <li> 🌱  Superposition Freshness: φhi is both fresh and fresher. </li>
        <li> 🌐 AI-Powered Content: φhi has machine learning models that predicts your reading needs. </li>
        <li> 📡 φhichain - A decentralized, cloud-enhanced, NFT-compatible database for literally anything. </li>
      </ul>

      <p>🚀 Download φhi, and get a free Schrödinger's Salad Kit—where the dressing is both applied and not applied until you take a bite.</p>
      <button aria-label="Read More" rel="prev" class="secondary" @click="handleClick()">
        Read More...
      </button>
    <footer>
      You can see φhi in action at <a href="https://weblog.network/">The Weblog Network</a>
      <br />
      You can grab the latest version here at <a href="https://github.com/Turner-Kendall/phi">Github.</a> 
    </footer>
  </article>


</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function handleClick() {
  router.push('/page/about')
};

</script>

<style>
#hero {
  padding: 1rem;
}

#hero h2 {
  padding: 0 0 1rem 0;
}

#hero footer {
  font-size: .9rem;
  font-weight: 800;
}

#hero button {
  margin: 1rem auto;
  padding: 0;
  min-width: 420px;
}
#hero .secondary{
  margin-top: 2rem;
}

#under-fold {
  padding-top: 2rem;
}
</style>