<template>
  <section id="faq">
    <h4>Frequent Questions</h4>
    <details>
      <summary>why φhi!</summary>
      <p>
        I had an idea to create a minimal Vue3 theme or template based
        on The Golden Ratio, the Fibonacci sequence, and other
        "sacred geometry".
      </p>
      <p>
        Full disclosure I was inspired by Disney's
        <a href="https://www.youtube.com/watch?v=hl6JDv4ZG7U">
          Donald in Mathmagic Land</a>...
      </p>
    </details>
    <details open>
      <summary>φhi features</summary>
      <ul>
        <li>Fast to spin up, fast to load.</li>
        <li>Minimal / Simple.</li>
        <li>Simple CSS based on Pico.css</li>
        <li>Vue Router Pages, SPA Components, Custom Templates</li>
      </ul>
    </details>
    <details>
      <summary>what's included?</summary>
      <ul class="included-list">
        <li>Pico.css</li>
        <li>vue use core</li>
        <li>vue3-burger-menu</li>
        <li>Sweet Alert 2</li>
        <li>Custom Image Gallery</li>
      </ul>
    </details>
    <details>
      <summary>who are you?</summary>
      <p>
        You might know me as <a href="https://turnerkendall.com">
          Turner Kendall </a>, 
        <a href="https://tripkendall.com" target="_blank" rel="noopener">
          Trip Kendall</a>, James, or even
        <a href="http://web.archive.org/web/20120212150556/http://imjtk.com/">JTk</a> - hey I've been around a while.
        Right now I am writing Rust and it is an entirely new experience.
      </p>
    </details>

    <details>
      <summary>Customize φhi</summary>
      <p>
        You can find this component in:
        <span class="smaller">src/components/shared/FrequentQuestions.vue</span>
      </p>
      <p>
        Most of the action takes place in the components directory. You also want to check out /src//views
      </p>
    </details>
  </section>
</template>

<style>
#faq {
  padding-top: 3rem;
}

summary {
  font-size: 1rem;
  font-weight: 700;
}

details ul {
  text-align: right;
  line-height: .9;
  font-size: .9rem;
}

details p {
  text-align: right;
  font-size: .85rem;
  line-height: .9rem;
}
</style>