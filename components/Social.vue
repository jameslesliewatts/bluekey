<template>
  <div :key="windowWidth" class="social">
    <ul
      class="juicer-feed"
      data-feed-id="rentlittlerock"
      data-truncate="100"
      data-pages="1"
      data-per="3"
    >
      <h1 class="referral">
        <!-- <a href="https://www.juicer.io">Powered by Juicer.io</a> -->
      </h1>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: '',
    }
  },
  watch: {
    windowWidth() {
      this.txt = `it changed to ${this.windowWidth} from`
    },
  },
  head() {
    return {
      script: [
        {
          src: 'https://assets.juicer.io/embed.js',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://assets.juicer.io/embed.css',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import url(https://assets.juicer.io/embed.css);

.social {
  max-width: $max-width;
  width: $container-width;
  margin: 0 auto;
}
</style>
