<template>
  <aside id="preview">
  
      <h4>Phi Updates</h4>
      <p class="smaller">
        Stay up to date with the latest Phi news and updates.
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
            <a href="#" onclick="event.preventDefault()">Receive Emails</a>
          </label>
        </fieldset>
      </form>

  </aside>
</template>