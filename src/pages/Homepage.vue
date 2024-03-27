<template>
  <!-- nav bar -->
  <HeaderBar />
  <v-app class="vue-app" style="background-color: #ffffff; color: black">
    <!-- main content -->
    <section style="background-color: #f0f0f0">
      <v-container
        class="main-content d-flex align-center justify-between"
        fluid
        style="padding-left: 100px"
      >
        <v-col cols="6" style="padding-bottom: 0">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <v-btn>Shop Now</v-btn>
          <v-container
            class="mx-auto d-flex align-center justify-between ml-n8"
          >
            <v-card variant="none">
              <v-card-title class="card-number">200+</v-card-title>
              <v-card-text class="card-text">
                International Brands
              </v-card-text>
            </v-card>
            <v-divider vertical inset></v-divider>
            <v-card variant="none">
              <v-card-title class="card-number">2,000+</v-card-title>
              <v-card-text class="card-text">
                High-Quality Products
              </v-card-text>
            </v-card>
            <v-divider vertical inset></v-divider>
            <v-card variant="none">
              <v-card-title class="card-number">30,000+</v-card-title>
              <v-card-text class="card-text"> Happy Customers </v-card-text>
            </v-card>
          </v-container>
        </v-col>
        <v-col cols="6" style="padding-bottom: 0" height="663">
          <div class="wrapper">
            <img class="small" src="../assets/icons/small-star.png" />
            <img class="big" src="../assets/icons/big-star.png" />
            <img class="bgImg" src="../assets/bgImg.png" />
          </div>
        </v-col>
      </v-container>
    </section>
    <!-- brands name -->
    <v-container class="brands d-flex bg-black justify-space-evenly" fluid>
      <MultiIcon icon="versace" />
      <MultiIcon icon="zara" />
      <MultiIcon icon="gucci" />
      <MultiIcon icon="prada" />
      <MultiIcon icon="calvin klein" />
    </v-container>
    <!-- New Arrivals -->
    <v-container class="new-arrivals" fluid style="padding: 0 100px">
      <h1>NEW ARRIVALS</h1>
      <v-row align="center" justify="center">
        <v-col v-for="i in 4" :key="i" cols="auto">
          <v-card :variant="i" class="mx-auto" max-width="344">
            <ProductCard />
          </v-card>
        </v-col>
      </v-row>
      <v-btn color="white">View All</v-btn>
    </v-container>
    <v-container fluid style="padding: 0 50px">
      <v-divider inset></v-divider>
    </v-container>

    <!-- TOP SELLING -->

    <v-container class="new-arrivals" fluid style="padding: 0 100px">
      <h1>TOP SELLING</h1>
      <v-row align="center" justify="center">
        <v-col v-for="i in 4" :key="i" cols="auto">
          <v-card :variant="i" class="mx-auto" max-width="344">
            <ProductCard />
          </v-card>
        </v-col>
      </v-row>
      <v-btn color="white">View All</v-btn>
    </v-container>
    <!-- DRESS STYLE -->
    <v-container class="dress-style" fluid style="padding: 0 100px">
      <v-card :elevation="0" style="border-radius: 2rem">
        <h1>BROWSE BY DRESS STYLE</h1>
        <v-container>
          <v-card
            class="style-card"
            style="height: 289px; width: 407px"
            image="../assets/casual.png"
          >
            <span style="position: absolute; top: 25px; left: 36px"
              >Casual</span
            >
          </v-card>
          <v-card
            class="style-card"
            style="height: 289px; width: 684px"
            image="../assets/formal.png"
          >
            <span style="position: absolute; top: 25px; left: 36px"
              >Formal</span
            >
          </v-card>
          <v-card
            class="style-card"
            style="height: 289px; width: 684px"
            image="../assets/party.png"
          >
            <span style="position: absolute; top: 25px; left: 36px">Party</span>
          </v-card>
          <v-card
            class="style-card"
            style="height: 289px; width: 407px"
            image="../assets/Gym.png"
          >
            <span style="position: absolute; top: 25px; left: 36px">Gym</span>
          </v-card>
        </v-container>
      </v-card>
    </v-container>

    <!-- REVIEWS -->
    <v-container class="reviews" fluid>
      <h1>OUR HAPPY CUSTOMERS</h1>
      <v-card elevation="0" color="white">
        <v-slide-group next-icon="" prev-icon="" center-active>
          <v-slide-group-item v-slot="{ toggle }">
            <div style="display: flex; justify-content: end">
              <v-icon @click="toggle">mdi-arrow-left</v-icon>
              <v-icon @click="toggle">mdi-arrow-right</v-icon>
            </div>
            <v-card
              class="review-card"
              color="white"
              width="400"
              elevation="0"
              v-for="n in 15"
              :key="n"
            >
              <div class="product-rating d-flex align-center">
                <v-rating
                  :model-value="rating"
                  active-color="#FFC633"
                  color="orange"
                  density="compact"
                  half-increments
                ></v-rating
                ><span>{{ rating }}/5</span>
              </div>
              <v-card-title
                ><span>Sarah M. </span
                ><v-icon size="small" color="green"
                  >mdi:mdi-checkbox-marked-circle</v-icon
                ></v-card-title
              >
              <v-card-text
                >"I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my
                expectations.”</v-card-text
              >
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-card>
    </v-container>
    <FooterBar />
  </v-app>
</template>

<script setup lang="ts">
import MultiIcon from "../assets/icons/MultiIcon.vue";
import ProductCard from "../components/ProductCard/ProductCard.vue";

import { useUserStore } from "../stores/app";

const rating = useUserStore().rating;
</script>

<style lang="scss" scoped>
.main-content {
  padding-bottom: 0;

  .card-number {
    font-family: "Satoshi-Bold", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 54px;
    text-align: left;
  }

  .card-text {
    font-family: "Satoshi-Light", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }

  h1 {
    font-family: "Integralcf-Bold", sans-serif;
    font-size: 64px;
    font-weight: 1000;
    line-height: 64px;
    text-align: left;
    width: 577px;
  }

  p {
    font-family: "Satoshi-Regular", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    width: 545px;
    font-weight: lighter;
    padding: 32px 0;
  }

  .v-btn {
    font-family: "Satoshi-Regular", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 21.6px;
    text-align: left;
    border-radius: 2rem;
    width: 210px;
    height: 52px;
  }

  .wrapper {
    position: relative;
    height: 663px;
    width: 720px;
    overflow: hidden;

    .bgImg {
      position: absolute;
      left: -100%;
    }
  }

  .big {
    position: absolute;
    top: 86px;
    right: 81px;
    z-index: 10;
  }

  .small {
    position: absolute;
    top: 297px;
    right: 634px;
    z-index: 10;
  }
}

.brands {
  height: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.new-arrivals {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Integralcf-Bold", sans-serif;
    font-size: 48px;
    font-weight: 1000;
    line-height: 57.6px;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 55px;
  }

  .v-btn {
    font-family: "Satoshi-Regular", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 21.6px;
    width: 218px;
    height: 52px;
    border-radius: 2rem;
    border: 1px 0px 0px 0px;
    opacity: 0px;

    margin-top: 36px;
    margin-bottom: 65px;
  }
}

.dress-style {
  height: 1000px;

  .v-card {
    color: black;
    border-radius: 40px 0px 0px 0px;
    background-color: #f0f0f0;

    h1 {
      font-family: "Integralcf-Bold", sans-serif;
      font-size: 48px;
      font-weight: 700;
      line-height: 57.6px;
      text-align: center;
      margin-top: 70px;
    }

    .v-container {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;

      .style-card {
        margin: 10px;
        border-radius: 2rem;

        span {
          font-family: "Satoshi-Regular", sans-serif;
          font-size: 36px;
          font-weight: 700;
        }
      }
    }
  }
}

.reviews {
  margin-bottom: 170px;
  padding: 0 100px;
  h1 {
    font-family: "Integralcf-Bold", sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 57.6px;
    text-align: left;
  }

  .review-card {
    margin-top: 40px;
    margin-right: 10px;
    padding: 30px 15px;
    border: 1px solid #f0f0f0;
    border-radius: 1rem;

    .v-card-text {
      padding-bottom: 0;
    }
  }
}
</style>
