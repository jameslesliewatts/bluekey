<template>
  <section id="section-components" class="section section-components pb-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <h2 class="text-center">
            <span>Available Listings</span>
          </h2>
          <div v-for="(listing, index) in listings" :key="index">
            <!-- <div>{{ listing }}</div> -->
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

const parseString = require('xml2js').parseStringPromise
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
    this.getListings()
    // eslint-disable-next-line global-require
    // this.$axios
    //   .get(
    //     'http://jessicawatts.managebuilding.com/Resident/PublicPages/XMLRentals.ashx?listings=all'
    //   )
    //   .then((response) => {
    //     parseString(response.data)
    //       .then((result) => {
    //         const self = this
    //         self.listings = result.PhysicalProperty.Property
    //         console.log(`!!LISTINGS ARE ${self.listings}`)
    //       })
    //       .catch((err) => err)
    //   })
  },
  methods: {
    async getListings() {
      const res = await this.$axios.get(
        'http://jessicawatts.managebuilding.com/Resident/PublicPages/XMLRentals.ashx?listings=all'
      )
      const result = await parseString(res.data)
      this.listings = result.PhysicalProperty.Property
      console.log(this.listings)
    },
  },
}
</script>
<style></style>
