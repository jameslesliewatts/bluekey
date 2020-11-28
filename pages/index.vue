<template>
  <div class="container">
    <div class="headline">
      Blue Key Property Mgmt.
    </div>
    <div>
      <div class="links parallax">
        <nuxt-link
          to="Listings"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
          >I Need A Home</nuxt-link
        >
        <nuxt-link
          to="About"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
          >I Need A Property Manager</nuxt-link
        >
        <script
          async
          src="https://www.rentometer.com/leadgen/load.js?api_key=zgmY1IiRLuym_7mbzouOow"
        ></script>
        <div
          class="rentometer-leadgen"
          data-button-text="FREE Rent Analysis"
        ></div>
      </div>
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
          data-pages="1"
          data-per="3"
        >
          <h1 class="referral">
            <!-- <a href="https://www.juicer.io">Powered by Juicer.io</a> -->
          </h1>
        </ul>
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

<style lang="scss" scoped>
@import url(https://assets.juicer.io/embed.css);

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .headline {
    font-size: 4rem;
    text-transform: uppercase;
    font-family: 'OptiFutura', sans-serif;
    margin: 30px 0;
  }
}
.subtitle {
  font-weight: 700;
  font-size: 3rem;
  color: $bk-dark;
  word-spacing: 5px;
  font-family: 'OptiFutura', sans-serif;
  margin-bottom: 10px;
}
.parallax {
  background-image: linear-gradient($bk-primary-opacity, $bk-primary-opacity),
    url('../assets/images/overhead-background.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 10vw;
  margin-top: 20px;
  height: 50vh;
  max-height: 500px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
  .btn {
    border-radius: 4px;
    text-decoration: none;
    padding: 15px 25px;
    font-weight: 700;
    font-size: 1.1rem;
    color: #fff;
    background-color: $bk-primary;
    margin-right: 10px;
    white-space: nowrap;
    &:hover {
      background: $bk-red;
      border-color: $bk-red;
      color: #fff;
      transform: scale(1.05);
    }
    @media screen and (max-width: 700px) {
      margin-bottom: 10px;
    }
  }

  // THIS OVERWRITES STYLES FOR RENTOMETER BUTTON
  /deep/ #romLeadGenBtn0 {
    font-size: 1.1rem !important;
    @extend .btn;
  }
}
.social {
  padding: 40px;
}
</style>
