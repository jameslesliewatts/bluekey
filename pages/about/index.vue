<template>
  <div class="about">
    <h1 class="page-heading">Who We Are</h1>
    <p class="about-text">
      At Blue Key Property Mgmt. we believe what sets us apart is a genuine
      commitment to customer service. We consider it a fundamental piece of our
      business to go above and beyond expectations! This extends to our owners,
      tenants, contractors, and everyone else whom's help is necessary to
      complete the day to day task of what we do.
    </p>
    <p class="about-text">
      Please email with any questions you have and we look forward to working
      with in whatever capacity serves your needs!
    </p>
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
        <!-- <p class="bio-fun-fact"><strong>Fun Fact:</strong> {{ bio.funFact }}</p> -->
      </div>
    </div>
  </div>
</template>
<script>
import Bios from '@/content/bios.json'

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
.about-text {
  width: $container-width;
  max-width: $max-width;
  margin: 0 auto $lg-margin;
  text-align: left;
}
.bio {
  display: flex;
  justify-content: left;
  max-width: $max-width;
  margin: 32px auto 0;
  width: $container-width;
  .bio-image-container {
    .bio-image {
      width: 300px;
      height: auto;
      border-radius: 8px;
    }
  }
  .bio-text-container {
    text-align: left;
    margin-left: $lg-margin;
    .bio-name {
      border-bottom: $bk-border;
    }
    .bio-title {
      font-size: 0.8rem;
    }
    p {
      margin-top: $lg-margin;
      font-size: 1.1rem;
    }
    .bio-text {
    }
  }
  @media screen and (max-width: $mobile-break) {
    justify-content: center;
    flex-direction: column;
    .bio-text-container {
      margin-left: 0;
    }
  }
}
</style>
