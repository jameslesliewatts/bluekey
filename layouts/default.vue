<template>
  <div class="main-layout-container">
    <div class="main-content">
      <site-header />
      <nuxt class="page-content" />
      <contact />
    </div>
    <site-footer />
  </div>
</template>
<script>
import SiteHeader from '../components/includes/Header.vue'
import Contact from '../components/includes/Contact.vue'
import SiteFooter from '../components/includes/Footer.vue'

export default {
  components: {
    SiteHeader,
    Contact,
    SiteFooter,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss">
.main-layout-container {
  position: relative;
  min-height: 100vh;
  .main-content {
    text-align: center;
  }
}
</style>
