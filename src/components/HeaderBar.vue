<template>
  <!-- advertise -->
  <v-app-bar class="advertise" height="38">
    <v-container class="d-flex justify-center">
      <span>Sign up and get 20% off to your first order.</span>
      <a>Sign Up Now</a>
    </v-container>
    <v-icon class="mr-5">mdi:mdi-close</v-icon>
  </v-app-bar>
  <!-- Navbar -->
  <v-app-bar flat class="bg-white" height="100" style="padding: 0 100px;">
    <v-container class="d-flex align-center justify-space-between" fluid style="padding: 0;">
      <v-flex cols="1" class="d-flex align-center justify-center">
        <v-icon class="hidden-lg-and-up">mdi-menu</v-icon>
        <span class="logo">SHOP.CO</span>
      </v-flex>
      <v-flex cols="3" class="links d-flex hidden-sm-and-down">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn class="nav-btn text-capitalize hidden-sm-and-down" variant="text" color="black" v-bind="props"
              append-icon="mdi-menu-down">
              Shop
            </v-btn>
          </template>
          <v-list class="bg-white">
            <v-list-item v-for="link in links" :key="link" :value="link">
              <v-list-item-title>{{ link }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn class="nav-btn text-capitalize hidden-sm-and-down" variant="text">On Sale</v-btn>
        <v-btn class="nav-btn text-capitalize hidden-sm-and-down" variant="text">New Arrivals</v-btn>
        <v-btn class="nav-btn text-capitalize hidden-sm-and-down" variant="text">Brands</v-btn>
      </v-flex>
      <v-col cols="5" class="hidden-md-and-down">
        <v-text-field class="hidden-md-and-down search-bar" label="Search for products..." rounded density="comfortable"
          variant="solo" flat hide-details single-line prepend-inner-icon="mdi:mdi-magnify" bg-color="#f0f0f0"></v-text-field>
      </v-col>
      <v-col cols="1">
        <div class="icon-wrapper">
          <v-icon aria-hidden="false" icon="mdi:mdi-cart-outline" />
          <v-icon aria-hidden="false" icon="mdi:mdi-account-circle-outline" />
        </div>
      </v-col>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">

import { useUserStore } from '../stores/app';
const links = useUserStore().lists;

</script>

<style lang="scss" scoped>
.v-app-bar {
  .nav-btn {
    font-family: 'Satoshi-Regular', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.6px;
    text-align: left;
  }

  .logo {
    font-family: 'Integralcf-Bold', sans-serif;
    font-size: 32px;
    font-weight: 1000;
    line-height: 38.4px;
    text-align: left;
    padding-left: 0;
    margin-bottom: 8px;
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .links {
    display: flex;
  }

  .search-bar {
    font-family: 'Satoshi-Regular', sans-serif;
    font-size: 16px;
    line-height: 21.6px;
    text-align: left;
    background-color: #f0f0f0 !important;
    border: 1px solid #f0f0f0;
    border-radius: 62px;
  }
}
</style>