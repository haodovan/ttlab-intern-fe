<template>
  <div class="footer-wrapper pt-10 d-flex flex-column">
    <!-- SUBSCRIBE -->
    <div class="wrapper d-flex align-center justify-space-between bg-black">
      <h1 class="subscribe-header">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
      <div class="action-bar">
        <v-text-field
          class="input-email bg-white"
          variant="outlined"
          placeholder="Enter your email address"
          prepend-inner-icon="mdi-email-outline"
          hide-details
        >
        </v-text-field>
        <v-btn class="input-email mt-2 bg-white" block
          >Subscribe to Newsletter</v-btn
        >
      </div>
    </div>
    <div class="footer-inside">
      <div
        class="link-grid d-flex flex-wrap align-content-center justify-space-evenly"
      >
        <div class="link-col">
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
        <div class="link-col d-flex">
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
      <v-divider></v-divider>
      <div class="badges d-flex flex-wrap align-center justify-space-between">
        <span>© 2000-2021, All rights reserved</span>
        <div style="display: flex">
          <img src="../assets/Badge1.png" />
          <img src="../assets/Badge2.png" />
          <img src="../assets/Badge3.png" />
          <img src="../assets/Badge4.png" />
          <img src="../assets/Badge5.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { useUserStore } from "../stores/app";

const icons = useUserStore().icons;
</script>

<style lang="scss" scoped>
.footer-wrapper {
  padding-left: 84px;
  .wrapper {
    padding: 43px 64px;
    position: absolute;
    top: -90px;
    border-radius: 2rem;
    height: 180px;
    max-width: 1240px;

    .subscribe-header {
      font-family: "Integralcf-Bold", sans-serif;
      font-size: 40px;
      font-weight: 700;
      line-height: 45px;
      text-align: left;
      margin-right: 150px;
    }
    .action-bar {
      .input-email {
        border-radius: 2rem;
        width: 293px;
      }
      .v-btn {
        height: 46px;
      }
    }
  }
  .footer-inside {
    margin-top: 6px;
    max-width: 1240px;
    .link-grid {
      margin-top: 3rem;

      .link-col {
        display: flex;
        flex-direction: column;
        padding-right: 133px;
        p {
          max-width: 248px;
        }
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

        margin-top: 25px;
        margin-bottom: 35px;
      }

      b {
        font-family: "Satoshi-Regular", sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 3px;
        text-align: left;

        margin: 16px 0;
      }
    }

    .v-divider {
      margin-bottom: 20px;
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
        height: 50px;
      }
    }
  }
}
@media only screen and (max-width: 600px) and (min-width: 320px) {
  .footer-wrapper {
    padding: 0;

    .wrapper {
      max-width: calc(100vw - 32px);
      flex-wrap: wrap;
      height: 297px;
      padding: 0;
      top: -140px;

      .subscribe-header {
        font-size: 32px;
        line-height: 35px;
        margin: 0;
        margin: 32px 37px 32px 24px;
      }
      .action-bar {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        margin-left: 24px;
        .input-email {
          max-width: calc(100vw - 100px);
          height: 42px;
        }
        .v-text-field {
          width: 333px;
          height: 50px;
        }
      }
    }
    .footer-inside {
      margin-top: 100px;
      .link-grid {
        .link-col {
          padding-right: 0;
          margin-right: 75px;
          P {
            max-width: calc(100vw - 70px);
            margin: 4px 0 20px 0;
          }
        }
      }
      .v-divider {
        margin-top: 40px;
        margin-bottom: 16px;
      }
      .badges {
        justify-content: center !important;
      }
    }
  }
}
</style>
