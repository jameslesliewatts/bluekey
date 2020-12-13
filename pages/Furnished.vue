<template>
  <div class="furnished">
    <div
      v-for="(listing, dataId) in listings"
      :key="dataId"
      class="airbnb-embed-frame furnished-listing"
      :data-id="listing.dataId"
      data-view="home"
      style="width: 450px; height: 300px; margin: auto;"
    >
      <a
        :href="`https://www.airbnb.com/rooms/${dataId}?s=66&amp;unique_share_id=${listing.uniqueShareId}&amp;source=embed_widget`"
        >View On Airbnb</a
      ><a
        :href="`https://www.airbnb.com/rooms/${dataId}?s=66&amp;unique_share_id=${listing.uniqueShareId}&amp;source=embed_widget`"
        rel="nofollow"
        >{{ listing.name }}</a
      >
      <script
        async=""
        src="https://www.airbnb.com/embeddable/airbnb_jssdk"
      ></script>
    </div>
  </div>
</template>
<script>
import Listings from '../content/furnished-listings.json'

export default {
  name: 'Furnished',
  data() {
    return {
      listings: Listings,
    }
  },
  head() {
    return {
      titleTemplate: 'Furnished | %s',
      // script: [
      //   {
      //     src: 'https://www.airbnb.com/embeddable/airbnb_jssdk',
      //     defer: true,
      //   },
      // ],
    }
  },
}
</script>
<style lang="scss" scoped>
.furnished {
  display: flex;
  flex-wrap: wrap;
  margin-right: 16px;
  .furnished-listing {
    width: 450px;
    height: 300px;
    margin: auto;
    // margin-left: 16px;
    // width: clamp(300px, 100%, 450px);
    // width: calc(50% - 24px);
  }
}
</style>
