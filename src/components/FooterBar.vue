<template>
  <v-footer class="pt-16 d-flex flex-column" color="#f0f0f0" height="500">
    <!-- SUBSCRIBE -->
    <v-container fluid style="padding: 0 100px">
      <v-container
        class="px-16 d-flex align-center justify-space-between bg-black"
        style="
          position: absolute;
          top: -90px;
          border-radius: 2rem;
          height: 180px;
          max-width: 1240;
        "
      >
        <v-col-2 class="subscribe-header">
          <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        </v-col-2>
        <v-col-2 justify-center align-center>
          <v-text-field
            class="input-email bg-white"
            variant="outlined"
            placeholder="Enter your email address"
            prepend-inner-icon="mdi-email-outline"
            hide-details
          >
          </v-text-field>
          <v-btn class="input-email mt-2 bg-white" style="height: 46px" block
            >Subscribe to Newsletter</v-btn
          >
        </v-col-2>
      </v-container>
      <v-container class="footer-inside mt-8" fluid>
        <v-container class="link-grid d-flex justify-space-between">
          <v-col cols="3">
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
          </v-col>
          <v-col cols="2" offset="1" class="d-flex">
            <b>COMPANY</b>
            <a>About</a>
            <a>Features</a>
            <a>Works</a>
            <a>Career</a>
          </v-col>
          <v-col cols="2">
            <b>HELP</b>
            <a>Customer Support</a>
            <a>Delivery Details</a>
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
          </v-col>
          <v-col cols="2">
            <b>FAQ</b>
            <a>Account</a>
            <a>Manage Deliveries</a>
            <a>Orders</a>
            <a>Payments</a>
          </v-col>
          <v-col cols="2">
            <b>RESOURCES</b>
            <a>Free eBooks</a>
            <a>Development Tutorial</a>
            <a>How to - Blog</a>
            <a>Youtube Playlist</a>
          </v-col>
        </v-container>
        <v-divider></v-divider>
        <v-container class="badges d-flex justify-space-between">
          <div>© 2000-2021, All rights reserved</div>
          <div style="display: flex">
            <v-img src="../assets/Badge1.png"></v-img>
            <v-img src="../assets/Badge2.png"></v-img>
            <v-img src="../assets/Badge3.png"></v-img>
            <v-img src="../assets/Badge4.png"></v-img>
            <v-img src="../assets/Badge5.png"></v-img>
          </div>
        </v-container>
      </v-container>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { useUserStore } from "../stores/app";

// const model = null;

const icons = useUserStore().icons;

// const slideGroup = ref<any>(null);

// const nextSlide = () => {
// };

// const prevSlide = () => {
// };
</script>

<style lang="scss" scoped>
.subscribe-header {
  font-family: "Integralcf-Bold", sans-serif;
  font-size: 20px;
  line-height: 45px;
  text-align: left;
  width: 600px;
}

.input-email {
  border-radius: 2rem;
  width: 350px;
}

.footer-inside {
  .link-grid {
    margin-top: 3rem;

    .v-col {
      display: flex;
      flex-direction: column;
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
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 3px;
      text-align: left;

      margin: 16px 0;
    }
  }

  .badges {
    div {
      font-family: "Satoshi-Regular", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 18.9px;
      text-align: right;
    }

    .v-img {
      width: 46.61px;
      height: 30.03px;
      padding: 10.65px 6.01px 10.18px 6.05px;
      gap: 0px;
      border-radius: 5.38px 0px 0px 0px;
      border: 0.22px 0px 0px 0px;
      opacity: 0px;
    }
  }
}
</style>
