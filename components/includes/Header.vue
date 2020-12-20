/* eslint-disable max-len */
<template>
  <div id="header">
    <div class="header-content">
      <nav id="main-nav">
        <ul id="nav-list">
          <li class="nav-item" @mouseover="moveMenuLogo(0, 3)">
            <nuxt-link to="about">About</nuxt-link>
          </li>
          <li class="nav-item" @mouseover="moveMenuLogo(1, 3)">
            <nuxt-link to="listings">For Rent</nuxt-link>
          </li>
          <li class="nav-item" @mouseover="moveMenuLogo(3, 3)">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <!-- <li class="nav-item" @mouseover="moveMenuLogo(3, 3)">
            <nuxt-link to="furnished">Our City</nuxt-link>
            <a
              href="https://www.airbnb.com/s/guidebooks?refinement_paths[]=/guidebooks/45658&s=67&unique_share_id=b0c92713-6dcc-4982-9bda-bcad4a00c275"
              target="_blank"
              >Our City</a
            >
          </li> -->
          <li class="nav-item" @mouseover="moveMenuLogo(3, 1)">
            <a
              href="https://jessicawatts.managebuilding.com/Resident/portal/login"
              target="_blank"
              >Login</a
            >
          </li>
          <li class="nav-item" @mouseover="moveMenuLogo(3, 0)">
            <a href="http://www.aspirerealtylr.com/">
              <img
                id="aspire-logo"
                src="@/assets/images/aspire-logo.png"
                alt="aspire logo"
              />
            </a>
          </li>
        </ul>
      </nav>
      <div class="welcome-bar">
        <div
          class="welcome-block welcome-block-left"
          :style="flexSizeLeft"
        ></div>
        <div class="logo-container">
          <nuxt-link to="/">
            <img id="logo" src="@/assets/images/main-logo.png" alt="logo" />
          </nuxt-link>
        </div>
        <div
          class="welcome-block welcome-block-right"
          :style="flexSizeRight"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flexSizeLeft: '',
      flexSizeRight: '',
    }
  },
  methods: {
    moveMenuLogo(left, right) {
      this.flexSizeLeft = `flex-grow: ${left}`
      this.flexSizeRight = `flex-grow: ${right}`
    },
  },
}
</script>

<style lang="scss" scoped>
$nav-margin-lg: $lg-margin;
$nav-margin-small: $sm-margin;

#header {
  display: flex;
  .header-content {
    max-width: $max-width;
    width: 100vw;
    margin: 0 auto;
  }
}

nav {
  position: relative;
  // width: 45em;
  margin: 0 auto;
  transition-duration: 0.3s, 0.5s;
  transition-timing-function: ease-in-out;
  transition-property: left, opacity, box-shadow;
  #nav-list {
    padding: 0;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    .nav-item {
      flex-grow: 1;
      padding: 0.55em;
      width: calc(20vw - 1.2em);
      height: 128px;
      margin: $nav-margin-lg;
      margin-right: 0;
      text-transform: uppercase;
      font-weight: 700;
      background: $bk-secondary-opacity;
      list-style: none;
      cursor: pointer;
      text-align: center;
      transition: box-shadow, color, opacity, padding-left 0.3s ease-in-out;
      &:last-child {
        margin-right: $nav-margin-lg;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        text-decoration: none;
        font-size: 1.4em;
        font-family: $bk-style;
        font-weight: 700;
        letter-spacing: 2px;
        transition: color 0.3s ease-in-out;
        white-space: nowrap;
        height: 100%;
        width: 100%;
        #aspire-logo {
          width: 100px;
        }
      }
      &:hover {
        background: $bk-primary;
        box-shadow: 0 0 0 0.5em rgba(255, 255, 255, 0.95);
      }
    }
  }
}

.welcome-bar {
  display: flex;
  .welcome-block {
    background-color: $bk-primary;
    transition: 1s ease;
    min-width: $nav-margin-lg;
    margin: 0 $nav-margin-lg;
    &-left {
      flex-grow: 1;
    }
    &-right {
      flex-grow: 3;
    }
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    #logo {
      vertical-align: middle;
      margin: 0 auto;
      width: calc(20vw - 3.2em);
      max-width: 189px;
      min-width: 60px;
    }
  }
}

/* small screens */
@media screen and (max-width: $mobile-break) {
  nav {
    #nav-list {
      .nav-item {
        height: 64px;
        margin: $nav-margin-small;
        margin-right: 0;
        &:last-child {
          margin-right: $nav-margin-small;
        }
        a {
          font-size: 0.7rem;
          white-space: normal;
          #aspire-logo {
            width: 100%;
          }
        }
      }
    }
  }
  .welcome-bar {
    .welcome-block {
      min-width: $nav-margin-small;
      margin: 0;
      &-left {
        margin-left: $nav-margin-small;
        flex-grow: 3;
      }
      &-right {
        margin-right: $nav-margin-small;
      }
    }
    .logo-container {
      margin: 0 $nav-margin-small;
      #logo {
        width: calc(20vw - 3.2em);
      }
    }
  }
}
</style>
