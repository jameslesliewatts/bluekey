<template>
  <tabs class="listing-tabs">
    <tab title="Traditional">
      <for-rent />
    </tab>
    <tab title="Furnished">
      <furnished />
    </tab>
  </tabs>
</template>
<script>
import { Tabs, Tab } from 'vue-slim-tabs'
import ForRent from '../for-rent.vue'
import Furnished from '../Furnished.vue'

export default {
  components: {
    Tabs,
    Tab,
    ForRent,
    Furnished,
  },
}
</script>

<style src="vue-slim-tabs/themes/default.css"></style>
