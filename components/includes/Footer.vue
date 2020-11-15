<template>
  <div class="footer">
    <div class="column left">
      <p>
        <strong>Blue Key Property Mgmt.</strong><br />
        A Division of
        <a href="http://www.aspirerealtylr.com/" target="_blank"
          >Aspire Realty</a
        >
      </p>
    </div>
    <div class="column center">Center</div>
    <div class="column right">Right</div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  background-color: #06446c;
  display: flex;
  justify-content: space-between;
  padding: 4vw;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  .column {
    // width: 30vw;
    color: #fff;
  }
}
</style>
