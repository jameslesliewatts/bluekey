<template>
  <div>
    <div
      class="text-center single-listing"
      :style="{
        backgroundImage: `${bgImage}`,
      }"
    >
      <h2 class="listing-address">
        {{ address }}
      </h2>
      <p class="listing-price">${{ price }}/month</p>
      <p class="listing-info">
        Learn More
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listing: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      bgImage: '',
      address: this.listing.PropertyID[0].Address[0].Address[0],
      price: this.listing.Floorplan[0].MarketRent[0].$.Max,
    }
  },
  beforeMount() {
    this.bgImage =
      typeof this.listing.Floorplan[0].File === 'undefined'
        ? null
        : `url('${this.listing.Floorplan[0].File[0].Src[0]}')`
  },
}
</script>
<style lang="scss">
.single-listing {
  padding: $sm-margin;
  margin: $lg-margin auto;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
}
.listing-address,
.listing-price,
.listing-info {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
}
.listing-address {
  text-align: center;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 16px;
}
.listing-price {
  position: absolute;
  bottom: 0;
  left: 16px;
}
.listing-info {
  position: absolute;
  bottom: 0;
  right: 16px;
}
.house-image {
  width: 400px;
}
</style>
