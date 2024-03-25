<template>
  <HeaderBar />
  <v-app class="bg-white">
    <CustomBreadcrumb :items="breadcrumbItems" />

    <!-- Product section -->
    <v-container flat class="products bg-white" fluid style="padding: 0 85px">
      <v-card flat class="product-wrapper bg-white">
        <div>
          <v-card flat class="small-pic" image="../assets/big-pic.png"></v-card>
          <v-card
            flat
            class="small-pic"
            image="../assets/small-pic2.png"
          ></v-card>
          <v-card
            flat
            class="small-pic"
            image="../assets/small-pic3.png"
          ></v-card>
        </div>
        <v-card flat class="big-pic" image="../assets/big-pic.png"></v-card>
      </v-card>
      <v-card flat class="order-wrapper bg-white">
        <h1>ONE LIFE GRAPHIC T<span>-</span>SHIRT</h1>
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
        <div class="product-price d-flex align-center">
          <span>$260</span> <span class="discount-price">$300</span>
          <v-chip>-40%</v-chip>
        </div>
        <p>
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <v-divider></v-divider>
        <p>Select Colors</p>
        <v-chip-group filter class="product-color" mandatory="force">
          <v-chip color="white" style="background-color: #4f4631"></v-chip>
          <v-chip color="white" style="background-color: #314f4a"></v-chip>
          <v-chip color="white" style="background-color: #31344f"></v-chip>
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
        <v-tab
          v-for="text in ['Product Details', 'Rating & Reviews', 'FAQs']"
          :key="text"
          :value="text"
          class="product-tab text-capitalize bg-white"
        >
          <span>{{ text }}</span>
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item
            value="Rating & Reviews"
            class="rating-reviews d-flex flex-column align-center justify-space-between"
          >
            <div class="title-filter d-flex align-center justify-space-between">
              <div class="title">
                <strong>All Reviews</strong>
                <span>(451)</span>
              </div>
              <div class="filter">
                <v-btn
                  icon="mdi-tune-vertical"
                  color="#F0F0F0"
                  height="48px"
                  width="48px"
                ></v-btn>
                <v-btn
                  class="text-capitalize"
                  color="#F0F0F0"
                  width="120"
                  append-icon="mdi-menu-down"
                  >Latest</v-btn
                >
                <v-btn style="text-transform: none" width="168"
                  >Write a Review</v-btn
                >
              </div>
            </div>
            <!-- Reviews -->
            <div class="d-flex flex-wrap">
              <v-card
                class="review-card"
                color="white"
                elevation="0"
                v-for="n in 6"
                :key="n"
              >
                <div class="product-rating d-flex align-center">
                  <v-rating
                    :model-value="rating"
                    active-color="#FFC633"
                    color="orange"
                    density="compact"
                    half-increments
                  ></v-rating>
                </div>
                <v-card-title class="d-flex align-center"
                  ><span>Samantha D.</span
                  ><v-icon size="small" color="green"
                    >mdi:mdi-checkbox-marked-circle</v-icon
                  ></v-card-title
                >
                <v-card-text
                  >"I absolutely love this t-shirt! The design is unique and the
                  fabric feels so comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's become my favorite
                  go-to shirt."</v-card-text
                >
                <v-card-text class="comment-date">
                  Posted on August 14, 2023</v-card-text
                >
              </v-card>
            </div>
            <v-btn class="load-more">Load More Reviews</v-btn>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-container>

    <!-- Other Products -->
    <v-container class="other-products" fluid style="padding: 0 100px">
      <h1>You might also like</h1>
      <v-row align="center" justify="center">
        <v-col v-for="i in 4" :key="i" cols="auto">
          <v-card :variant="i" class="mx-auto" max-width="345">
            <v-card-item style="padding: 0">
              <div>
                <div class="product-image">
                  <v-img
                    src="../assets/image.png"
                    height="298"
                    width="295"
                  ></v-img>
                </div>
                <div class="product-name">T-SHIRT WITH TAPE DETAILS</div>
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
                <div class="product-price d-flex align-center">
                  <span>$260</span> <span class="discount-price">$300</span>
                  <v-chip>-40%</v-chip>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <FooterBar />
  </v-app>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/app";

const breadcrumbItems = useUserStore().link1;
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
      font-family: "Integralcf-Extra-Bold", sans-serif;
      font-size: 40px;
      line-height: 48px;
      text-align: left;

      span {
        font-family: "Integralcf-Regular", sans-serif;
        font-weight: 1000;
      }
    }

    .product-rating {
      span {
        font-family: "Satoshi-Regular", sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 21.6px;
        text-align: left;
      }
    }

    .product-price {
      font-family: "Satoshi-Medium", sans-serif;
      font-size: 32px;
      font-weight: 700;
      line-height: 43.2px;
      text-align: left;

      span {
        margin: 12px 6px;
      }

      .discount-price {
        text-decoration: line-through 2px;
        color: #0000004d;
      }

      .v-chip {
        background-color: #ff33331a;
        color: #ff3333;
      }
    }

    p {
      font-family: "Satoshi-Light", sans-serif;
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
        font-family: "Satoshi-Light", sans-serif;
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
        font-family: "Satoshi-Light", sans-serif;
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

        font-family: "Satoshi-Light", sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 21.6px;
        text-align: left;
      }

      .v-chip--selected {
        background-color: #000000;
        color: #ffffff;
      }
    }

    .buy-section {
      margin-top: 20px;

      .product-buy {
        background-color: #f0f0f0;
        color: #000000;

        font-family: "Satoshi-Light", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 21.6px;
        text-align: left;
        width: 170px;
        height: 52px;
        border-radius: 62px;

        .v-btn {
          background-color: #f0f0f0;
          color: #000000;
        }
      }

      .submit-btn {
        margin-left: 20px;
        width: 400px;
        height: 52px;
        border-radius: 62px;

        font-family: "Satoshi-Light", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 21.6px;
        text-align: left;
      }
    }
  }
}

.product-tabs {
  .product-tab {
    span {
      font-family: "Satoshi-Medium", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 14px;
      text-align: center;
    }
  }

  .rating-reviews {
    .title-filter {
      width: 100%;
      margin-top: 8px;
      strong {
        font-family: "Satoshi-Bold", sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 32.4px;
        text-align: left;
      }

      span {
        font-family: "Satoshi-Light", sans-serif;
        font-size: 14px;
        line-height: 11px;
        text-align: left;
        margin-left: 8px;
      }

      .filter {
        .v-btn {
          margin-right: 10px;
          font-family: "Satoshi-Medium", sans-serif;
          font-size: 16px;
          font-weight: 500;
          text-align: left;
          height: 48px;
          border-radius: 2rem;
        }
      }
    }
    .review-card {
      margin-top: 20px;
      margin-right: 10px;
      padding: 30px 15px;
      border: 1px solid #0000001a;
      border-radius: 1rem;
      width: 610px;
      color: #00000099;

      .v-card-text {
        padding-bottom: 0;
      }
      .v-card-title {
        padding-left: 2px;
      }
      .v-card-text {
        padding-left: 2px;
        font-family: "Satoshi-Light", sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;
      }
      .comment-date {
        font-weight: 500;
      }
    }
    .load-more {
      background-color: #ffffff;
      color: #000000;
      border: 1px solid #0000001a;
      border-radius: 2rem;
      width: 230px;
      height: 52px;
      text-transform: capitalize;
      margin-top: 36.42px;
      margin-bottom: 48px;

      font-family: "Satoshi-Medium", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 21.6px;
      text-align: left;
    }
  }
}
.other-products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 82px;

  h1 {
    font-family: "Integralcf-Bold", sans-serif;
    font-size: 48px;
    font-weight: 1000;
    line-height: 57.6px;
    text-align: center;
    margin-bottom: 55px;
  }

  .product-name {
    font-family: "Satoshi-Bold", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 27px;
    text-align: left;
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

  .product-price {
    font-family: "Satoshi-Bold", sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 43.2px;
    text-align: left;

    span {
      margin: 12px 0px;
      padding-right: 10px;
    }

    .discount-price {
      text-decoration: line-through 2px;
      color: #0000004d;
    }

    .v-chip {
      background-color: #ff33331a;
      color: #ff3333;
      font-size: 10px;
      font-family: "Satoshi-Regular", sans-serif;
      font-weight: 500;
      line-height: 16.2px;
      text-align: left;
      max-width: 58px;
      max-height: 28px;
    }
  }
}
</style>
