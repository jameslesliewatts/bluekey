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
import Tabs from '@/components/Tabs.vue'
import Tab from '@/components/Tab.vue'
import ForRent from '@/components/listings/for-rent.vue'
import Furnished from '@/components/listings/furnished.vue'

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
<style lang="scss" scoped></style>
