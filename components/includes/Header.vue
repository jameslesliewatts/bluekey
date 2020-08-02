/* eslint-disable max-len */
<template>
  <div>
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
          <nuxt-link :to="{ name: 'Listings' }">For Rent</nuxt-link>
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
    <div class="logo-container">
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
.logo-container {
  height: 100%;
  text-align: center;

  #logo {
    vertical-align: middle;
  }
}
@media screen and (max-width: 44em) {
  $menu_width: 20em;
  $content_offset: 0.5em;
}
</style>
