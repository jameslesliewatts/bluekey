export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Blue Key Property Mgmt' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Blue Key Property Management is a property management company located in Little Rock, AR. It is a division of Aspire Realty Group. What sets us apart is our dedication to excellent customer service to both owners and tenants as well as a strong sense of responsibility to go above and beyond for everyone who counts on us.',
      },
      { hid: 'og:title', name: 'og:title', content: 'Blue Key Property Mgmt.' },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: 'http://bluekeypropertymgmt.com/logo-og.png',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'Property Management for Central Arkansas',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  // css: ['~assets/scss/tailwind.scss'],
  css: ['~assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faPhone', 'faEnvelope'],
    },
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
  ],
  noscript: [{ innerHTML: 'This website requires JavaScript.' }],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL,
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  webfontloader: {
    google: {
      families: ['Lato:400,700'], // Loads Lato font with weights 400 and 700
    },
  },
  styleResources: {
    scss: ['~/assets/scss/vars.scss', '~/assets/scss/mixins.scss'],
  },
}
