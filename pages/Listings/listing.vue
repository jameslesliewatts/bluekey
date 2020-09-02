<template>
  <div></div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      listing: '',
    }
  },
  computed: {
    ...mapGetters(['getListingById']),
  },
  created() {
    this.listing = this.getListingById()
  },
}
</script>
