<template>
  <section id="section-components" class="section section-components pb-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <h2 class="text-center">
            <span>Available Listings</span>
          </h2>
          <!-- <div class="tabs">
            <div class="traditional">
              <h3>Traditional</h3>
            </div>
            <div class="furnished">
              <h3>Furnished</h3>
            </div>
          </div> -->
          <div class="flex flex-wrap">
            <div class="w-full">
              <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                    :class="{
                      'text-pink-600 bg-white': openTab !== 1,
                      'text-white bg-pink-600': openTab === 1,
                    }"
                    @click="toggleTabs(1)"
                  >
                    Traditional
                  </a>
                </li>
                <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                    :class="{
                      'text-pink-600 bg-white': openTab !== 2,
                      'text-white bg-pink-600': openTab === 2,
                    }"
                    @click="toggleTabs(2)"
                  >
                    Furnished
                  </a>
                </li>
              </ul>
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
              >
                <div class="px-4 py-5 flex-auto">
                  <div class="tab-content tab-space">
                    <div
                      :class="{
                        hidden: openTab !== 1,
                        block: openTab === 1,
                      }"
                    >
                      <div v-for="(listing, index) in listings" :key="index">
                        <SingleListing :listing="listing" />
                      </div>
                    </div>
                    <div
                      :class="{
                        hidden: openTab !== 2,
                        block: openTab === 2,
                      }"
                    >
                      <!-- <div v-for="(listing, index) in listings" :key="index">
                        <SingleListing :listing="listing" />
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import SingleListing from '../../components/SingleListing.vue'

export default {
  components: {
    SingleListing,
  },
  data() {
    return {
      listings: [],
      openTab: 1,
    }
  },
  computed: {
    ...mapGetters(['getListings']),
  },
  created() {
    this.listings = this.getListings
    console.log(this.listings)
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },
  },
}
</script>
<style></style>
