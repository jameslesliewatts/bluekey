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
      <Fountain />
    </div>
  </div>
</template>
<script>
import Fountain from './Fountain'

export default {
  components: {
    Fountain,
  },
  data() {
    return {
      verified: false,
      password: '',
      correctPasswords: ['223@Fountain'],
    }
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
