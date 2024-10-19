<template>
  <article id="hero">
    <h2>Who Are You?</h2>
    <p>
      You might know me as <a href="https://turnerkendall.com">
        Turner Kendall
      </a>, <a href="https://tripkendall.com" target="_blank" rel="noopener">
        Trip Kendall</a>, James, or even
      <a href="http://web.archive.org/web/20120212150556/http://imjtk.com/">JTk</a> - hey I've been around a while.
      Right now I am writing Rust and it is an entirely new experience.
    </p>
    <p>
      Previously I Co-founded what became the biggest web dev company
      in the state, created Nikki Haley's website when she ran for governor,
      and delivered literally dozens of custom solutions as an indy dev.
      <br />
      <button aria-label="Read More" rel="prev" class="secondary" onclick="modalExample.close()">
        Read More...
      </button>
    </p>
    <footer>
      This website is based on the Vue Skin I am working on
      <a href="https://phi.skin">φhi.skin</a>
    </footer>

  </article>
  <article id="under-fold">
    <h4>Skills:</h4>
    <p>
      I write code and manage dev stacks and servers. I like VSCode, Git, Rust, and Jet Brains Mono. I also code in
      Python, Javascript, and Go. I have experience with multiple databases and a plethora of frameworks. I love
      learning new technologies, techniques, and tools
    </p>
    <h4>Previously</h4>
    <ul>
      <li>AtMorph — Senior Developer</li>
      <li>D2 Interactive — COO</li>
      <li>eWebCorp - CTO</li>
      <li>Kaboodle Inc. - Lead Developer</li>
    </ul>
  </article>
</template>


s
<style>
#hero {
  padding: 1.33rem;
}

#hero h2 {
  padding-top: .33rem;
}

#hero footer {
  font-size: .9rem;
  font-weight: 800;
}

#hero button {
  margin: 1rem auto;
  padding: 0;
}

#under-fold {
  padding-top: 2rem;
}
</style>