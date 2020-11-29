<template>
  <div class="social">
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

<style lang="scss" scoped>
@import url(https://assets.juicer.io/embed.css);

.social {
  max-width: $max-width;
  width: 90vw;
  margin: 0 auto;
}
</style>
