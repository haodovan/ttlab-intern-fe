<template>
  <!-- advertise -->
  <div class="advertise d-flex justify-center align-center bg-black">
    <div class="d-flex justify-center align-center">
      <span>Sign up and get 20% off to your first order.</span>
      <a>Sign Up Now</a>
    </div>
    <v-icon class="hidden-sm-and-down">mdi:mdi-close</v-icon>
  </div>
  <!-- Navbar -->
  <div flat class="navbar bg-white">
    <div class="wrapper d-flex align-center justify-start">
      <div class="logo-wrapper d-flex align-center justify-center">
        <v-icon class="menu hidden-lg-and-up">mdi-menu</v-icon>
        <span class="logo">SHOP.CO</span>
      </div>
      <div class="link-nav d-flex hidden-sm-and-down">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              class="nav-btn text-capitalize hidden-sm-and-down"
              variant="text"
              color="black"
              v-bind="props"
              append-icon="mdi-menu-down"
            >
              Shop
            </v-btn>
          </template>
          <v-list class="bg-white">
            <v-list-item v-for="link in links" :key="link" :value="link">
              <v-list-item-title>{{ link }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn class="nav-btn text-capitalize hidden-sm-and-down" variant="text"
          >On Sale</v-btn
        >
        <v-btn class="nav-btn text-capitalize hidden-sm-and-down" variant="text"
          >New Arrivals</v-btn
        >
        <v-btn class="nav-btn text-capitalize hidden-sm-and-down" variant="text"
          >Brands</v-btn
        >
      </div>
      <div class="search-bar-wrapper d-flex align-center hidden-md-and-down">
        <v-text-field
          class="hidden-md-and-down search-bar"
          label="Search for products..."
          rounded
          density="comfortable"
          variant="solo"
          flat
          hide-details
          single-line
          prepend-inner-icon="mdi:mdi-magnify"
          bg-color="#f0f0f0"
        ></v-text-field>
      </div>
      <div>
        <div class="icon-wrapper">
          <v-icon
            class="hidden-md-and-up"
            aria-hidden="false"
            icon="mdi:mdi-magnify"
          />
          <v-icon
            class="cart-icon"
            aria-hidden="false"
            icon="mdi:mdi-cart-outline"
          />
          <v-icon aria-hidden="false" icon="mdi:mdi-account-circle-outline" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../../stores/app";
const links = useUserStore().lists;
</script>

<style lang="scss" scoped>
.advertise {
  height: 38px;
  z-index: 2000;
  position: fixed !important;
  width: 100vw !important;
  top: 0;
  padding: 0 100px;
  div {
    width: 100vw !important;
    span {
      font-family: "Satoshi-Regular", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 18.9px;
      text-align: left;
    }
    a {
      cursor: pointer;
      font-family: "Satoshi-Regular", sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 18.9px;
      text-align: left;
      text-decoration: underline;
      padding-left: 2px;
    }
  }
}
.navbar {
  z-index: 1000;
  position: fixed !important;
  width: 100vw !important;
  top: 38px !important;
  padding: 12px 0;
  .wrapper {
    padding: 0 100px;
    .logo-wrapper {
      margin-right: 28px;
      .logo {
        font-family: "Integralcf-Bold", sans-serif;
        font-size: 32px;
        font-weight: 700;
        line-height: 38.4px;
        text-align: left;
        margin-bottom: 8px;
      }
    }

    .link-nav {
      display: flex;
      margin-right: 40px;
      .nav-btn {
        font-family: "Satoshi-Regular", sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 21.6px;
        text-align: left;
        padding: 0 12px;
      }
    }
    .search-bar-wrapper {
      height: 72px;
      width: 577px;
      margin-right: 40px;
      .search-bar {
        font-family: "Satoshi-Regular", sans-serif;
        font-size: 16px;
        line-height: 21.6px;
        text-align: left;
        background-color: #f0f0f0 !important;
        border: 1px solid #f0f0f0;
        border-radius: 62px;
      }
    }

    .icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      .cart-icon {
        margin: 0 14px;
      }
    }
  }
}

@media only screen and (max-width: 600px) and (min-width: 320px) {
  .advertise {
    height: 34px;
    padding: 0;
    div {
      span {
        font-size: 12px;
        line-height: 16.2px;
      }
      a {
        font-size: 12px;
        line-height: 16.2px;
      }
    }
  }
  .navbar {
    top: 34px !important;
    padding: 0;
    .wrapper {
      padding: 0 16px;
      height: 64px;
      .logo-wrapper {
        .menu {
          margin-right: 16px;
        }
        .logo {
          font-size: 18px;
          line-height: 30.24px;
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>
