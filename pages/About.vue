<template>
  <div class="about">
    <h1 class="page-heading">Who We Are</h1>
    <div v-for="(bio, id) in bios" :key="id" class="bio">
      <div class="bio-image-container bio-contents">
        <img
          :src="require(`~/assets/images/bios/${bio.profileImg.src}.jpg`)"
          :alt="bio.profileImg.alt"
          class="bio-image"
        />
      </div>
      <div class="bio-text-container bio-contents">
        <h2 class="bio-name">{{ bio.firstName }} {{ bio.lastName }}</h2>
        <h4 class="bio-title">{{ bio.title }} &bull; {{ bio.email }}</h4>
        <p class="bio-text" v-html="bio.bio"></p>
        <p class="bio-fun-fact"><strong>Fun Fact:</strong> {{ bio.funFact }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Bios from '../content/bios.json'

export default {
  data() {
    return {
      bios: Bios,
    }
  },
  head() {
    return {
      titleTemplate: 'About | %s',
    }
  },
}
</script>
<style lang="scss">
.bio {
  display: flex;
  justify-content: center;
  max-width: $max-width;
  margin: 0 auto 32px;
  width: 90vw;
  .bio-image-container {
    // width: 40%;
    .bio-image {
      width: 100%;
      height: auto;
      max-width: 400px;
      min-width: 288px;
      border-radius: 8px;
    }
  }
  .bio-text-container {
    text-align: left;
    margin-left: 16px;
    .bio-name {
      border-bottom: $bk-border;
    }
    .bio-title {
      font-size: 0.8rem;
    }
    p {
      margin-top: 16px;
      font-size: 1.1rem;
    }
    .bio-text {
    }
  }
  @media screen and (max-width: $mobile-break) {
    flex-direction: column;
    .bio-text-container {
      margin-left: 0;
    }
  }
}
</style>
