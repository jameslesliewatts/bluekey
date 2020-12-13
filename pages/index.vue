<template>
  <div class="container">
    <h1 class="headline">
      Blue Key Property Mgmt.
    </h1>
    <div class="links parallax">
      <nuxt-link
        to="listings"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary"
        >I Need A Home</nuxt-link
      >
      <nuxt-link
        to="about"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary"
        >I Need A Property Manager</nuxt-link
      >
      <div
        class="rentometer-leadgen"
        data-button-text="FREE Rent Analysis"
      ></div>
    </div>
    <social-feed />
  </div>
</template>

<script>
import SocialFeed from '../components/Social.vue'

export default {
  components: { SocialFeed },
  head() {
    return {
      titleTemplate: 'Home | %s',
      script: [
        {
          src:
            'https://www.rentometer.com/leadgen/load.js?api_key=zgmY1IiRLuym_7mbzouOow',
          defer: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.headline {
  @extend .page-heading;
  font-size: 4rem;
}
.links {
  background-image: linear-gradient($bk-primary-opacity, $bk-primary-opacity),
    url('../assets/images/overhead-background.png');
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 10vw;
  height: 50vh;
  max-height: 500px;
  margin-bottom: 40px;
  .btn {
    @extend .primary-button;
    margin-right: 10px;
  }
  @media screen and (max-width: $mobile-break) {
    flex-direction: column;
    .btn {
      margin-bottom: 10px;
    }
  }
  // THIS OVERWRITES STYLES FOR RENTOMETER BUTTON
  /deep/ #romLeadGenBtn0 {
    font-size: 1.1rem !important;
    @extend .btn;
  }
}
</style>
