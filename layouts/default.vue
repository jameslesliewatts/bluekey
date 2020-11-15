<template>
  <div class="main-layout-container">
    <div class="main-content">
      <site-header />
      <nuxt />
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
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.main-layout-container {
  $footer-height: 200px;
  position: relative;
  min-height: 100vh;
  .main-content {
    padding-bottom: $footer-height;
    text-align: center;
  }
  site-footer {
    height: $footer-height;
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
