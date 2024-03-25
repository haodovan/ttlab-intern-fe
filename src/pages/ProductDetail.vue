<template>
  <HeaderBar />
  <v-app class="bg-white" height="500">
    <v-container fluid style="padding: 0 100px">
      <v-divider></v-divider>

      <v-breadcrumbs :items="links" style="padding: 23px 0">
        <template v-slot:divider>
          <v-icon icon="mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <!-- Product section -->
    <v-container flat class="products bg-white" fluid style="padding: 0 85px">
      <v-card flat class="product-wrapper bg-white">
        <div>
          <v-card flat class="small-pic" image="../assets/big-pic.png"></v-card>
          <v-card flat class="small-pic" image="../assets/small-pic2.png"></v-card>
          <v-card flat class="small-pic" image="../assets/small-pic3.png"></v-card>
        </div>
        <v-card flat class="big-pic" image="../assets/big-pic.png"></v-card>
      </v-card>
      <v-card flat class="order-wrapper bg-white">
        <h1>ONE LIFE GRAPHIC T<span>-</span>SHIRT</h1>
        <div class="product-rating d-flex align-center">
          <v-rating :model-value="rating" active-color="#FFC633" color="orange" density="compact"
            half-increments></v-rating><span>{{ rating }}/5</span>
        </div>
        <div class="product-price d-flex align-center"><span>$260</span> <span class="discount-price">$300</span>
          <v-chip>-40%</v-chip>
        </div>
        <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers
          superior comfort and style.</p>
        <v-divider></v-divider>
        <p>Select Colors</p>
        <v-chip-group filter class="product-color" mandatory="force">
          <v-chip color="white" style="background-color: #4F4631;"></v-chip>
          <v-chip color="white" style="background-color: #314F4A;"></v-chip>
          <v-chip color="white" style="background-color: #31344F;"></v-chip>
        </v-chip-group>

        <v-divider></v-divider>

        <p>Choose Size</p>
        <v-chip-group class="product-size" mandatory="force">
          <v-chip>Small</v-chip>
          <v-chip>Medium</v-chip>
          <v-chip>Large</v-chip>
          <v-chip>X-Large</v-chip>
        </v-chip-group>

        <v-divider></v-divider>

        <div class="buy-section d-flex align-center">
          <div class="product-buy d-flex align-center justify-space-between">
            <!-- <div class="d-flex align-center justify-space-between" style="width: 100%;"> -->
            <v-btn variant="plain" icon="mdi-minus"></v-btn>
            <span>1</span>
            <v-btn variant="plain" icon="mdi-plus"></v-btn>
            <!-- </div> -->
          </div>
          <v-btn class="submit-btn text-capitalize">Add to Cart</v-btn>
        </div>
      </v-card>
    </v-container>

    <!-- Tabs -->
    <v-container class="product-tabs bg-white" fluid style="padding: 0 100px">
      <v-tabs v-model="tab" grow>
        <v-tab v-for="item in ['Product Details', 'Rating & Reviews', 'FAQs']" :key="item" :value="item"
          class="product-tab text-capitalize bg-white" slider-color="#000000">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-container>
        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="Rating & Reviews">
              <p>All Reviews (451)</p>
              <v-icon>mdi-tune-vertical</v-icon>
              <v-card class="review-card" color="white" width="400" elevation="0" v-for="n in 15" :key="n">
                <div class="product-rating d-flex align-center">
                  <v-rating :model-value="rating" active-color="#FFC633" color="orange" density="compact"
                    half-increments></v-rating><span>{{ rating }}/5</span>
                </div>
                <v-card-title><span>Sarah M. </span><v-icon size="small"
                    color="green">mdi:mdi-checkbox-marked-circle</v-icon></v-card-title>
                <v-card-text>"I'm blown away by the quality and style of the clothes I received from Shop.co. From
                  casual
                  wear to elegant dresses, every piece I've bought has exceeded my expectations.”</v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-container>
    </v-container>
    <FooterBar />
  </v-app>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/app';

const links = useUserStore().links;
const rating = useUserStore().rating;
const tab = useUserStore().tab;
</script>

<style lang="scss" scoped>
.products {
  display: flex;

  .product-wrapper {
    display: flex;

    .small-pic {
      width: 152px;
      height: 167px;
      padding: 7px;
      border-radius: 0.5rem;
      background-color: white;
      margin: 14px;
    }

    .big-pic {
      width: 444px;
      height: 530px;
      margin: 14px;
      border-radius: 0.5rem;
      background-color: white;
    }
  }

  .order-wrapper {
    padding: 10px;
    max-width: 625px;

    h1 {
      font-family: 'Integralcf-Extra-Bold', sans-serif;
      font-size: 40px;
      line-height: 48px;
      text-align: left;

      span {
        font-family: 'Integralcf-Regular', sans-serif;
        font-weight: 1000;
      }
    }

    .product-rating {
      span {
        font-family: 'Satoshi-Regular', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 21.6px;
        text-align: left;
      }
    }

    .product-price {
      font-family: 'Satoshi-Medium', sans-serif;
      font-size: 32px;
      font-weight: 700;
      line-height: 43.2px;
      text-align: left;

      span {
        margin: 12px 6px;
      }

      .discount-price {
        text-decoration: line-through 2px;
        color: #0000004D;
      }

      .v-chip {
        background-color: #FF33331A;
        color: #FF3333;
      }
    }

    p {
      font-family: 'Satoshi-Light', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
      color: #00000099;

      margin: 8px 0 16px 0;
      padding-right: 50px;
    }

    .product-color {
      p {
        font-family: 'Satoshi-Light', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 21.6px;
        text-align: left;
        color: #00000099;
        margin: 16px 0 8px 0;
      }

      .v-chip {
        width: 37px;
        height: 37px;
        margin-right: 16px;
        margin-bottom: 24px;
      }
    }

    .product-size {
      p {
        font-family: 'Satoshi-Light', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 21.6px;
        text-align: left;
        color: #00000099;
        margin: 16px 0 8px 0;
      }

      .v-chip {
        height: 46px;
        padding: 23px 25px;
        margin-right: 12px;
        margin-bottom: 24px;
        border-radius: 62px;
        opacity: 0px;

        font-family: 'Satoshi-Light', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 21.6px;
        text-align: left;
      }

      .v-chip--selected {
        background-color: #000000;
        color: #FFFFFF;
      }
    }

    .buy-section {
      margin-top: 20px;

      .product-buy {
        background-color: #F0F0F0;
        color: #000000;

        font-family: 'Satoshi-Light', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 21.6px;
        text-align: left;
        width: 170px;
        height: 52px;
        border-radius: 62px;

        .v-btn {
          background-color: #F0F0F0;
          color: #000000;
        }

      }

      .submit-btn {
        margin-left: 20px;
        width: 400px;
        height: 52px;
        border-radius: 62px;

        font-family: 'Satoshi-Light', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 21.6px;
        text-align: left;

      }
    }
  }

  .product-tabs {
    .product-tab {
      .v-btn__content {
        font-family: 'Satoshi-Light', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;
      }
    }
  }
}
</style>