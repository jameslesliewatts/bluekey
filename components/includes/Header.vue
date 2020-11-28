/* eslint-disable max-len */
<template>
  <div id="header">
    <div class="buffer-left"></div>
    <div class="header-content">
      <nav id="main-nav">
        <ul id="nav-list">
          <li class="nav-item" @mouseover="moveMenuLogo(0, 3)">
            <nuxt-link :to="{ name: 'About' }">About</nuxt-link>
          </li>
          <li class="nav-item" @mouseover="moveMenuLogo(1, 3)">
            <nuxt-link :to="{ name: 'ForRent' }">For Rent</nuxt-link>
          </li>
          <li class="nav-item" @mouseover="moveMenuLogo(3, 3)">
            <router-link :to="{ name: 'Furnished' }">Our City</router-link>
          </li>
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
          <router-link to="/">
            <img id="logo" src="@/assets/images/main-logo.png" alt="logo" />
          </router-link>
        </div>
        <div
          class="welcome-block welcome-block-right"
          :style="flexSizeRight"
        ></div>
      </div>
    </div>
    <div class="buffer-right"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flexSizeLeft: 'flex-grow: 1',
      flexSizeRight: 'flex-grow: 3',
    }
  },
  computed: {},
  methods: {
    moveMenuLogo(left, right) {
      this.flexSizeLeft = `flex-grow: ${left}`
      this.flexSizeRight = `flex-grow: ${right}`
    },
    toggleNav() {
      const navList = document.getElementById('nav-list')
      if (navList.style.display === 'block') {
        navList.style.display = 'none'
      } else {
        navList.style.display = 'block'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// #main-nav {
//   width: 100%;
//   display: block;
// }

/* Advanced Checkbox Hack */
// body {
//   -webkit-animation: bugfix infinite 3s;
// }
// @-webkit-keyframes bugfix {
//   from {
//     padding: 0;
//   }
//   to {
//     padding: 100;
//   }
// }
$nav-margin-lg: 16px;
$nav-margin-small: 8px;
/* big screens */
#header {
  display: flex;
  @media screen and (min-width: 1232px) {
    .buffer-left,
    .buffer-right {
      background: $bk-primary;
      width: 100%;
      height: 333px;
      margin-top: $nav-margin-lg;
      min-width: $nav-margin-lg;
    }
  }
}
.header-content {
  max-width: 1200px;
  margin: 0 auto;
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
      display: flex;
      align-items: center;
      justify-content: center;
      background: $bk-secondary-opacity;
      cursor: pointer;
      text-align: center;
      transition: box-shadow, color, opacity, padding-left 0.3s ease-in-out;
      &:last-child {
        margin-right: $nav-margin-lg;
      }
      a {
        color: #fff;
        text-decoration: none;
        font: 1.4em 'OptiFutura', sans-serif;
        font-weight: 700;
        letter-spacing: 2px;
        transition: color 0.3s ease-in-out;
        white-space: nowrap;
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
@media screen and (max-width: 700px) {
  nav {
    #nav-list {
      // visibility: hidden;
      &.is-shown {
        visibility: visible;
      }
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
      // flex-direction: column;
    }
  }
  .welcome-bar {
    .welcome-block {
      min-width: $nav-margin-small;
      // min-width: 0;
      margin: 0;
      &-left {
        margin-left: $nav-margin-small;
      }
      &-right {
        margin-right: $nav-margin-small;
      }
    }
    .logo-container {
      margin: 0 $nav-margin-small;
    }
  }
}
</style>
