/* eslint-disable max-len */
<template>
  <div id="main-nav">
    <input id="menu" type="checkbox" />
    <label for="menu" onclick></label>

    <nav role="off-canvas">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'About' }">About</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'ForRent' }">For Rent</nuxt-link>
        </li>
        <li>
          <router-link :to="{ name: 'Furnished' }">Our City</router-link>
        </li>
        <li>
          <a
            href="https://jessicawatts.managebuilding.com/Resident/portal/login"
            target="_blank"
            >Login</a
          >
        </li>
      </ul>
    </nav>
    <br />
    <div class="logo-container">
      <h4>The Property Management Team of</h4>
      <img
        id="logo"
        src="@/assets/images/aspire-logo.png"
        alt="logo"
        width="200"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#main-nav {
  width: 100vw;
  display: block;
}
.logo-container {
  margin-top: 130px;
  height: 100%;
  text-align: center;
  width: 100vw;
  #logo {
    vertical-align: middle;
    margin: 10px auto;
  }
}
@media screen and (max-width: 44em) {
  $menu_width: 20em;
  $content_offset: 0.5em;
}
</style>
