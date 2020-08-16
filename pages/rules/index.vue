<template>
  <div class="container">
    <h1 class="title">Welcome!</h1>
    <div v-if="!verified" class="password">
      <p>Please enter the Wifi password to view this page:</p>
      <input v-model="password" type="text" @keypress.enter="verifyPassword" />
    </div>
    <div :class="{ blurred: !verified }">
      <p>
        Below are some basic house rules along with how to contact us and some
        other information that might be useful.
      </p>
      <component :is="component" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      verified: false,
      password: '',
      correctPasswords: ['223@Fountain'],
    }
  },
  computed: {
    component() {
      return () => {
        if (this.$route.params.prop) {
          return import(`./${this.$route.params.prop}`)
        }
      }
    },
  },
  methods: {
    verifyPassword() {
      this.verified = this.correctPasswords.includes(this.password)
    },
  },
}
</script>
<style lang="scss">
.blurred {
  filter: blur(5px);
}
</style>
