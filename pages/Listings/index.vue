<template>
  <div class="listings">
    <h1 class="page-heading">For Rent</h1>
    <tabs class="listing-tabs">
      <tab name="Traditional" selected>
        <for-rent />
      </tab>
      <tab name="Furnished">
        <furnished />
      </tab>
    </tabs>
  </div>
</template>
<script>
import Tabs from '../../components/Tabs.vue'
import Tab from '../../components/Tab.vue'
import ForRent from '../for-rent.vue'
import Furnished from '../furnished.vue'

export default {
  components: {
    Tabs,
    Tab,
    ForRent,
    Furnished,
  },
  head() {
    return {
      titleTemplate: 'Listings | %s',
    }
  },
}
</script>

<style src="vue-slim-tabs/themes/default.css"></style>

<style lang="scss" scoped>
// .listing-tabs {
//   justify-content: center;
//   display: flex;
// }
</style>
