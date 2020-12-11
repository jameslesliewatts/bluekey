<template>
  <div>
    <iframe
      src="https://jessicawatts.managebuilding.com/Resident/Public/Rentals?hidenav=true"
      width="801"
      height="400"
      frameborder="0"
    ></iframe>
    <div>
      <a
        class="primary-button"
        href="https://jessicawatts.managebuilding.com/Resident/apps/rentalapp/"
      >
        Apply Now
      </a>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      titleTemplate: 'For Rent %s',
    }
  },
}
</script>
<style lang="scss">
iframe {
  margin: 0 auto;
}
</style>
