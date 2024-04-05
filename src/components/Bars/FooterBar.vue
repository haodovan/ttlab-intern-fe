<template>
  <div class="footer-wrapper pt-10 d-flex flex-column">
    <!-- SUBSCRIBE -->
    <div class="wrapper d-flex align-center justify-center bg-black">
      <h1 class="subscribe-header">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
      <v-spacer class="hidden-md-and-down"></v-spacer>
      <div class="action-bar">
        <v-text-field
          class="input-email bg-white"
          variant="outlined"
          placeholder="Enter your email address"
          prepend-inner-icon="mdi-email-outline"
          hide-details
          center-affix
        >
        </v-text-field>
        <v-btn class="input-email mt-2 bg-white" block
          >Subscribe to Newsletter</v-btn
        >
      </div>
    </div>
    <div class="footer-inside">
      <div class="link-grid d-flex flex-wrap align-content-center">
        <div class="logo">
          <span>SHOP.CO</span>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div class="d-flex">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              size="small"
              variant="plain"
            ></v-btn>
          </div>
        </div>
        <div class="d-flex flex-wrap">
          <div class="link-col">
            <b>COMPANY</b>
            <a>About</a>
            <a>Features</a>
            <a>Works</a>
            <a>Career</a>
          </div>
          <div class="link-col">
            <b>HELP</b>
            <a>Customer Support</a>
            <a>Delivery Details</a>
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
          </div>
          <div class="link-col">
            <b>FAQ</b>
            <a>Account</a>
            <a>Manage Deliveries</a>
            <a>Orders</a>
            <a>Payments</a>
          </div>
          <div class="link-col final">
            <b>RESOURCES</b>
            <a>Free eBooks</a>
            <a>Development Tutorial</a>
            <a>How to - Blog</a>
            <a>Youtube Playlist</a>
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="badges d-flex flex-wrap align-center justify-space-between">
        <span>© 2000-2021, All rights reserved</span>
        <div style="display: flex">
          <img src="../../assets/Badge1.png" />
          <img src="../../assets/Badge2.png" />
          <img src="../../assets/Badge3.png" />
          <img src="../../assets/Badge4.png" />
          <img src="../../assets/Badge5.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { useUserStore } from "../../stores/app";

const icons = useUserStore().icons;
</script>

<style lang="scss" scoped>
.footer-wrapper {
  padding-left: 5.25rem;
  padding-right: 5.25rem;
  position: relative;
  .wrapper {
    padding: 2.6875rem 4rem;
    position: absolute;
    top: -5.625rem;
    border-radius: 2rem;
    height: 11.25rem;
    width: 77.5rem;

    .subscribe-header {
      font-family: "Integralcf-Bold", sans-serif;
      font-size: 40px;
      font-weight: 700;
      line-height: 45px;
      text-align: left;
      width: 34.4375rem;
    }
    .action-bar {
      .input-email {
        border-radius: 2rem;
        width: 18.3125rem;
      }
      .v-btn {
        height: 2.875rem;
      }
    }
  }
  .footer-inside {
    margin-top: 6px;
    max-width: 77.5rem;
    .link-grid {
      margin-top: 3rem;
      .logo {
        padding-right: 8.3125rem;
        p {
          max-width: 15.5rem;
        }
      }
      .link-col {
        display: flex;
        flex-direction: column;
        padding-right: 8.3125rem;
        flex: 1 1;
        box-sizing: border-box;
      }
      .final {
        padding-right: 0;
      }

      span {
        font-family: "Integralcf-Bold", sans-serif;
        font-size: 33.45px;
        line-height: 40.15px;
        text-align: left;
        padding-bottom: 10px;
        display: block;
      }

      a {
        font-family: "Satoshi-Regular", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;

        margin: 10px 0;
        cursor: pointer;
      }

      p {
        font-family: "Satoshi-Regular", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;

        margin-top: 1.5625rem;
        margin-bottom: 2.1875rem;
      }

      b {
        font-family: "Satoshi-Regular", sans-serif;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.125rem;
        letter-spacing: 3px;
        text-align: left;

        margin: 1rem 0;
      }
    }

    .v-divider {
      margin-bottom: 1.25rem;
    }

    .badges {
      span {
        font-family: "Satoshi-Regular", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 18.9px;
        text-align: right;
      }
      img {
        /* width: 46.61px; */
        height: 3.125rem;
      }
    }
  }
}
@media only screen and (max-width: 800px) {
  .footer-wrapper {
    padding: 0;

    .wrapper {
      max-width: calc(100vw - 2rem);
      flex-wrap: wrap;
      height: 18.5625rem;
      padding: 0;
      top: -8.75rem;

      .subscribe-header {
        font-size: 2rem;
        line-height: 2.1875rem;
        margin: 0;
        margin: 2rem 0 2rem 1.5rem;
      }
      .action-bar {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        margin-left: 1.5rem;
        .input-email {
          max-width: calc(100vw - 6.25rem);
          height: 2.625rem;
        }
        .v-text-field {
          width: 20.8125rem;
          height: 3.125rem;
        }
      }
    }
    .footer-inside {
      margin-top: 6.25rem;
      .link-grid {
        .logo {
          padding-right: 3.125rem;
          P {
            max-width: calc(100vw - 4.375rem);
            margin: 0.25rem 0 1.25rem 0;
          }
        }
        .link-col {
          padding-right: 3.125rem;
          P {
            max-width: calc(100vw - 4.375rem);
            margin: 0.25rem 0 1.25rem 0;
          }
        }
      }
      .v-divider {
        margin-top: 2.5rem;
        margin-bottom: 1rem;
      }
      .badges {
        justify-content: center !important;
      }
    }
  }
}
</style>
