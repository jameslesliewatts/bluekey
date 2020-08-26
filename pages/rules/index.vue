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
      <h2>General</h2>
      <div v-for="(rule, index) in rules.all" :key="index">
        &bull; {{ rule }}
      </div>
      <h2>Fountain</h2>
      <div v-for="rule in rules.fountain" :key="rule.key">
        &bull; {{ rule }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      verified: false,
      password: '',
      rules: {},
      correctPasswords: ['223@Fountain'],
    }
  },
  computed: {
    ...mapGetters(['getRules']),
    component() {
      return () => {
        if (this.$route.params.prop) {
          return import(`./${this.$route.params.prop}`)
        }
      }
    },
  },
  mounted() {
    this.rules = this.getRules
    console.log(this.rules)
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
  font-weight: regular;
}
.container {
  text-align: center;
}
h2 {
  font-weight: 700;
  font-size: 20px;
}
input {
  border: 1px solid #000;
  border-radius: 5px;
}
</style>
