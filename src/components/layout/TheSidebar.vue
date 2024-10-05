<template>
  <aside>
    <section id="preview">
      <h3>Preview</h3>
      <p>
        Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla
        iaculis eros a elit pharetra egestas.
      </p>
      <form>
        <input type="text" name="firstname" placeholder="First name" aria-label="First name" required />
        <input type="email" name="email" placeholder="Email address" aria-label="Email address" autocomplete="email"
          required />
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
</template>