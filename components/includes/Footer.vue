<template>
  <div class="footer">
    <div class="top">
      <div class="column left">
        <p>
          <strong
            >A Division of
            <a
              class="aspire-link"
              href="http://www.aspirerealtylr.com/"
              target="_blank"
            >
              Aspire Realty Group
            </a>
          </strong>
        </p>
        <p>2821 Kavanaugh Blvd.</p>
        <p>Little Rock, Arkansas 72205</p>
        <p>
          <a href="tel:501-379-8480"><fa icon="phone" /> (501) 379-8480</a>
        </p>
      </div>
      <div class="column right">
        <p><strong>Blue Key Property Mgmt.</strong></p>
        <p>
          <a href="mailto:jesi@bluekeypropertymgmt.com"
            ><fa icon="envelope" /> jesi@bluekeypropertymgmt.com</a
          >
        </p>
        <p>
          <a href="tel:501-313-3793"><fa icon="phone" /> (501) 313-3793</a>
        </p>
      </div>
    </div>
    <div class="bottom">
      <img
        id="aspire-logo"
        src="@/assets/images/aspire-logo.png"
        alt="aspire logo"
      />
      <img
        id="bk-logo"
        src="@/assets/images/main-logo.png"
        alt="blue key logo"
      />
    </div>
    <div class="copyright">
      <p>&copy; 2020 - jlwDevs</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $bk-primary;
  padding: 2vw 4vw;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  .bottom,
  .top {
    width: $container-width;
    max-width: $max-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .column {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 1rem;
    margin-top: 10px;
    &.right {
      text-align: right;
    }
    p {
      padding-bottom: $sm-margin;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
    .aspire-link {
      color: $aspire-green;
    }
  }
  .bottom {
    height: 100px;
    align-items: center;
    img {
      margin: $sm-margin 0;
      &#aspire-logo {
        height: 64%;
        width: auto;
      }
      &#bk-logo {
        height: 100%;
        width: auto;
      }
    }
  }
  @media screen and (max-width: $mobile-break) {
    .top {
      flex-direction: column-reverse;
      .column {
        align-items: center;
      }
    }
    .bottom {
      height: 80px;
    }
  }
  .copyright {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
  }
}
</style>
