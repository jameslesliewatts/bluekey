/* eslint-disable max-len */
<template>
  <div id="main-nav">
    <input id="menu" type="checkbox" />
    <label for="menu" onclick></label>

    <nav role="off-canvas">
      <ul>
        <li @mouseover="moveMenuLogo(0, 3)">
          <router-link to="/">Home</router-link>
        </li>
        <li @mouseover="moveMenuLogo(1, 3)">
          <nuxt-link :to="{ name: 'About' }">About</nuxt-link>
        </li>
        <li @mouseover="moveMenuLogo(3, 3)">
          <nuxt-link :to="{ name: 'ForRent' }">For Rent</nuxt-link>
        </li>
        <li @mouseover="moveMenuLogo(3, 1)">
          <router-link :to="{ name: 'Furnished' }">Our City</router-link>
        </li>
        <li @mouseover="moveMenuLogo(3, 0)">
          <a
            href="https://jessicawatts.managebuilding.com/Resident/portal/login"
            target="_blank"
            >Login</a
          >
        </li>
      </ul>
    </nav>
    <div class="welcome-bar">
      <div class="welcome-block welcome-block-left" :style="flexSizeLeft"></div>
      <div class="logo-container">
        <!-- <p class="welcome-text">Welcome to</p> -->
        <img id="logo" src="@/assets/images/main-logo.png" alt="logo" />
      </div>
      <div
        class="welcome-block welcome-block-right"
        :style="flexSizeRight"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flexSizeLeft: 'flex-grow: 1',
      flexSizeRight: 'flex-grow: 40',
    }
  },
  computed: {},
  methods: {
    moveMenuLogo(left, right) {
      this.flexSizeLeft = `flex-grow: ${left}`
      this.flexSizeRight = `flex-grow: ${right}`
    },
  },
}
</script>

<style lang="scss">
#main-nav {
  width: 100%;
  display: block;
}

/* Advanced Checkbox Hack */
body {
  -webkit-animation: bugfix infinite 1s;
}
@-webkit-keyframes bugfix {
  from {
    padding: 0;
  }
  to {
    padding: 0;
  }
}

input[type='checkbox'] {
  position: absolute;
  top: -9999px;
  left: -9999px;
}

label {
  position: absolute;
  left: 0;
  display: none;
  width: 2em;
  height: 2.25em;
  padding: 0.35em;
  font-size: 1.1em;
  color: #fff;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  user-select: none;
  margin: 0;
  background: rgba(0, 0, 0, 0.4);
}

/* big screens */
nav[role='off-canvas'] {
  position: relative;
  // width: 45em;
  margin: 0 auto;
  transition-duration: 0.3s, 0.5s;
  transition-timing-function: ease-in-out;
  transition-property: left, opacity, box-shadow;

  a {
    color: #fff;
    text-decoration: none;
    font: 1.4em 'Open Sans', sans-serif;
    transition: color 0.3s ease-in-out;
    display: table-cell;
    vertical-align: middle;
  }

  ul {
    padding: 0;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;

    > li {
      flex-grow: 1;
      padding: 0.55em;
      width: calc(20vw - 1.2em);
      height: 8em;
      margin: 1em 0 1em 1em;
      &:last-child {
        margin-right: 1em;
      }
      opacity: 0.8;

      text-transform: uppercase;
      display: table;
      background: $menu-red;
      cursor: pointer;

      text-align: center;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
      transition-property: box-shadow, color, opacity, padding-left;
      cursor: pointer;

      &:hover {
        color: #fff;
        opacity: 1;
        box-shadow: 0 0 0 0.5em rgba(255, 255, 255, 0.95);

        > a {
          color: #fff;
        }
      }

      &:nth-child(2) {
        background: $menu-yellow;
      }
      &:nth-child(3) {
        background: $menu-green;
        // background: hsla(64, 100%, 43%, 0.65);
      }
      &:nth-child(4) {
        background: $menu-blue;
      }
      &:nth-child(5) {
        background: $menu-violet;
      }
    }
  }
}

.welcome-bar {
  display: flex;
  margin-bottom: 20px;
  .welcome-block {
    background-color: $bluekey-blue;
    // opacity: 0.8;
    // width: 100%;
    margin: 0 1em;
  }
  .welcome-block {
    transition: 1s ease;
    min-width: 1em;
  }
}
.logo-container {
  // margin-top: 20px 0;
  display: flex;
  flex-direction: column;
  // padding: 20px;
  height: 100%;
  text-align: center;
  // width: 150px;
  // background-color: $menu-blue;
  // opacity: 0.8;
  .welcome-text {
    width: 150px;
    font-weight: 600;
    text-align: center;
    display: none;
    margin: 0 auto;
    // &:after {
    //   content: '';
    //   display: inline-block;
    //   width: 100%;
    // }
  }
  #logo {
    vertical-align: middle;
    margin: 0 auto;
    width: 13vw;
  }
}
/* small screens */
@media screen and (max-width: 44em) {
  $menu_width: 20em;
  $content_offset: 0.5em;

  html,
  body {
    margin: 0;
    overflow-x: hidden;
  }

  .content {
    margin: 2.5em 0.5em 0 0.5em;
  }

  nav[role='off-canvas'] {
    position: absolute;
    top: 3em;
    left: -$menu_width;
    width: $menu_width;
    opacity: 0;

    ul > li {
      height: 100%;
      width: 100%;
      text-align: left;
      margin: 0;

      &:hover {
        box-shadow: inset 0 0 0 0.15em rgba(255, 255, 255, 0.45);
      }
    }
  }

  label {
    display: block;
  }

  label:after {
    position: absolute;
    right: 0.25em;
    top: 0;
    content: '\2261';
    font-size: 1.8em;
  }

  label:hover,
  input:checked ~ label {
    color: #000;
  }

  input:checked ~ nav[role='off-canvas'] {
    opacity: 1;
    left: 0;
    box-shadow: -30em 0 0 30em rgba(0, 0, 0, 0.3);

    ul > li {
      padding: 0.55em 0.55em 0.55em 1.5em;

      &:hover {
        padding-left: 3.5em;
      }

      &:after {
        position: absolute;
        right: 0.25em;
        content: '\203A';
        font: bold 1.4em sans-serif;
        color: inherit;
      }
    }
  }

  input:checked ~ .content {
    margin-left: $menu_width + $content_offset;
    margin-right: -($menu_width + $content_offset);
  }
}
</style>
