<template>
  <div>
    <iframe
      src="https://jessicawatts.managebuilding.com/Resident/Public/Rentals?hidenav=true"
      height="400"
      frameborder="0"
    ></iframe>
    <div class="apply-button">
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
      titleTemplate: 'For Rent | %s',
    }
  },
}
</script>
<style lang="scss">
.apply-button {
  margin-top: 32px;
}
iframe {
  margin: 0 auto;
  max-width: $max-width;
  width: $container-width;
}
/deep/
  html
  > body
  > div
  > div
  > div.hide--desktop.column.column--md12.column--sm12 {
  display: none !important;
}
</style>
