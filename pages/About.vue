<template>
  <div class="about">
    <h1 class="page-heading">Who We Are</h1>
    <div v-for="(bio, id) in bios.slice(0, 1)" :key="id" class="bio">
      <div class="bio-image-container bio-contents">
        <img
          :src="require(`~/assets/images/bios/${bio.profileImg.src}.jpg`)"
          :alt="bio.profileImg.alt"
          class="bio-image"
        />
      </div>
      <div class="bio-text-container bio-contents">
        <h2 class="name">{{ bio.firstName }} {{ bio.lastName }}</h2>
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
  .bio-contents {
    padding: 10px;
  }
  .bio-image-container {
    width: 100%;
    .bio-image {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: $mobile-break) {
    flex-direction: column;
  }
}
</style>
