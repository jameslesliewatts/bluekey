<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <h1 class="subtitle welcome-message">
        Welcome to Blue Key Property Management!
      </h1>
      <br />
      <span class="subtitle help-question">How can we help?</span>
      <div class="links">
        <nuxt-link
          to="Listings"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
          >I Need A Home</nuxt-link
        >
        <nuxt-link
          to="About"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
          >I Need A Property Manager</nuxt-link
        >
        <div class="social">
          <!-- <link
            href="https://assets.juicer.io/embed.css"
            media="all"
            rel="stylesheet"
            type="text/css"
          />-->
          <!-- <ul class="juicer-feed" data-feed-id="rentlittlerock">
          <h1 class="referral">-->
          <!-- <a href="https://www.juicer.io">Powered by Juicer.io</a> -->
          <!-- </h1>
          </ul>-->
          <!-- <iframe
            src="https://www.juicer.io/api/feeds/rentlittlerock/iframe"
            frameborder="0"
            height="300"
            style="display: block; margin: 0 auto; width: 100%;"
          ></iframe> -->
          <!-- <script
            src="https://assets.juicer.io/embed.js"
            type="text/javascript"
          ></script> -->
          <!-- <link
            href="https://assets.juicer.io/embed.css"
            media="all"
            rel="stylesheet"
            type="text/css"
          /> -->
          <!-- <script
            src="https://assets.juicer.io/embed.js"
            type="text/javascript"
          ></script> -->
          <!-- <link
            href="https://assets.juicer.io/embed.css"
            media="all"
            rel="stylesheet"
            type="text/css"
          /> -->
          <ul
            class="juicer-feed"
            data-feed-id="rentlittlerock"
            data-truncate="100"
            data-pages="2"
            data-per="3"
          >
            <h1 class="referral">
              <!-- <a href="https://www.juicer.io">Powered by Juicer.io</a> -->
            </h1>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (process.client) {
      this.loadScripts()
    }
  },
  methods: {
    loadScripts() {
      const tag = document.createElement('script')
      tag.setAttribute('src', 'https://assets.juicer.io/embed.js')
      document.head.appendChild(tag)
    },
  },
}
</script>

<style lang="scss">
@import url(https://assets.juicer.io/embed.css);
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  &.welcome-message {
    text-decoration: none;
  }
  span.help-question {
    color: #333;
    text-decoration: unset;
  }
}
.links {
  padding-top: 15px;
}
</style>
<style lang="scss" scoped>
.container {
  align-items: flex-start;
}
.social {
  padding: 20px;
  // max-width: 100vw;
}
</style>
