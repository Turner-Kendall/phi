<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheNav from './components/layout/TheNav.vue'
</script>

<template>

  <main>
    <nav class="outer-col-1">
      <TheNav />
    </nav>

    <div class="outer-col-2">

      <TheHeader />

      <div class="inner-row">
        <div class="inner-col">
          <article>

            <!-- Article-->
            <article id="article">
              <h2>Article</h2>
              <p>
                Nullam dui arcu, malesuada et sodales eu, efficitur vitae dolor. Sed ultricies dolor non
                ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit
                pharetra egestas. Nunc placerat facilisis cursus. Sed vestibulum metus eget dolor pharetra
                rutrum.
              </p>
              <footer>
                <small>Duis nec elit placerat, suscipit nibh quis, finibus neque.</small>
              </footer>
            </article>
            <!-- ./ Article-->
          </article>
          <footer>
            <!-- Footer -->
            <footer>
              <small>Built with <a href="https://picocss.com">Pico</a> •
                <a href="https://github.com/picocss/examples/blob/master/v2-html-classless/index.html">Source
                  code</a></small>
            </footer>
          </footer>
        </div>
        <aside>
          <section id="preview">
            <h3>Preview</h3>
            <p>
              Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla
              iaculis eros a elit pharetra egestas.
            </p>
            <form>
              <input type="text" name="firstname" placeholder="First name" aria-label="First name" required />
              <input type="email" name="email" placeholder="Email address" aria-label="Email address"
                autocomplete="email" required />
              <button type="submit">Subscribe</button>
              <fieldset>
                <label for="terms">
                  <input type="checkbox" role="switch" id="terms" name="terms" />
                  I agree to the
                  <a href="#" onclick="event.preventDefault()">Privacy Policy</a>
                </label>
              </fieldset>
            </form>
          </section>
          <!-- ./ Preview -->
        </aside>
      </div>
    </div>

  </main>



</template>



