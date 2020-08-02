<template>
  <section id="section-components" class="section section-components pb-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <h2 class="text-center">
            <span>Available Listings</span>
          </h2>
          <div v-for="(listing, index) in listings" :key="index">
            <div>{{ listing }}</div>
            <SingleListing :listing="listing" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import * as axios from '@nuxtjs/axios'
import SingleListing from '../components/SingleListing.vue'

export default {
  components: {
    SingleListing,
  },
  data() {
    return {
      listings: [],
    }
  },
  mounted() {
    // eslint-disable-next-line global-require
    const parseString = require('xml2js').parseString

    this.$axios
      .get(
        'http://jessicawatts.managebuilding.com/Resident/PublicPages/XMLRentals.ashx?listings=all'
      )
      .then((response) => {
        parseString(response.data)
          .then((result) => {
            const self = this
            self.listings = result.PhysicalProperty.Property
            console.log(`!!LISTINGS ARE ${self.listings}`)
          })
          .catch((err) => err)
      })
  },
}
</script>
<style></style>
