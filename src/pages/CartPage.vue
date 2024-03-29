<template>
  <v-app-bar>
    <HeaderBar />
  </v-app-bar>
  <CustomBreadcrumb class="pt-16" :items="links" />
  <v-app class="your-cart">
    <v-container class="main-sector" fluid>
      <h1>Your Cart</h1>
      <div class="main-content d-flex">
        <div class="cart-items">
          <div class="wrapper">
            <v-row v-for="i in 3" :key="i" class="item-details">
              <div class="product-image">
                <v-img src="../assets/image.png"></v-img>
              </div>
              <div class="product-details">
                <p class="product-name">Gradient Graphic T-shirt</p>
                <p class="product-size">Size: <span>Large</span></p>
                <p class="product-color">Color: <span>White</span></p>
                <p class="product-price">$145</p>
              </div>
              <div
                class="control-btn d-flex flex-column align-end justify-space-between"
              >
                <v-icon>mdi-trash-can</v-icon>

                <div class="buy-num d-flex align-center">
                  <v-btn variant="plain" icon="mdi-minus"></v-btn>
                  <span>1</span>
                  <v-btn variant="plain" icon="mdi-plus"></v-btn>
                </div>
              </div>
              <v-divider v-if="i !== 3"></v-divider>
            </v-row>
          </div>
        </div>
        <div class="order-summary">
          <div class="order-wrap">
            <h3>Order Summary</h3>
            <div class="pricing">
              <div>
                <span class="title">Subtotal</span>
                <span class="cost">$565</span>
              </div>
              <div>
                <span class="title">Discount (-20%)</span>
                <span class="cost minus">-$113</span>
              </div>
              <div>
                <span class="title">Delivery Fee</span>
                <span class="cost">$15</span>
              </div>
              <v-divider></v-divider>
              <div>
                <span class="total">Total</span>
                <span class="price">$467</span>
              </div>
            </div>
            <div class="promo-code d-flex align-center justify-space-between">
              <v-text-field
                class="input-code"
                hide-details
                variant="outlined"
                clearable
                center-affix
                placeholder="Add promo code"
              >
                <v-icon>mdi-tag-outline</v-icon>
              </v-text-field>
              <v-btn class="apply-btn">Apply</v-btn>
            </div>
            <v-btn class="to-checkout" append-icon="mdi-arrow-right"
              >Go to Checkout</v-btn
            >
          </div>
        </div>
      </div>
    </v-container>
  </v-app>
  <FooterBar />
</template>

<script lang="ts">
import { useUserStore } from "../stores/app";
import { ref } from "vue";

export default {
  setup() {
    const userStore = useUserStore();
    const { link3: links } = userStore;

    const selectedOption = ref(null);

    const selectOption = (option) => {
      selectedOption.value = option;
    };
    return {
      links,
      selectedOption,
      selectOption,
    };
  },
};
</script>

<style lang="scss" scoped>
.your-cart {
  background-color: #ffffff;
  color: #000000;
  .main-sector {
    padding: 0 100px;
    margin-bottom: 100px;
    h1 {
      font-family: "Integralcf-Bold", sans-serif;
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      text-align: left;
    }
    .main-content {
      margin-top: 24px;
      margin-bottom: 58px;
      .cart-items {
        padding: 0;
        .wrapper {
          width: fit-content;
          border: 1px solid #0000001a;
          border-radius: 20px;
          padding: 20px 24px 28px 24px;
          .item-details {
            .product-image {
              width: 124px;
              height: 124px;
            }
            .product-details {
              margin: 3px 75px 3px 16px;
              .product-name {
                font-family: "Satoshi-Bold", sans-serif;
                font-size: 20px;
                font-weight: 700;
                line-height: 27px;
                text-align: left;
                margin-bottom: 2px;
              }
              .product-size {
                font-family: "Satoshi-Regular", sans-serif;
                font-size: 14px;
                font-weight: 400;
                line-height: 18.9px;
                text-align: left;
                margin-bottom: 4px;
                span {
                  font-family: "Satoshi-Light", sans-serif;
                }
              }
              .product-color {
                font-family: "Satoshi-Regular", sans-serif;
                font-size: 14px;
                font-weight: 400;
                line-height: 18.9px;
                text-align: left;
                margin-bottom: 15px;
                span {
                  font-family: "Satoshi-Light", sans-serif;
                }
              }
              .product-price {
                font-family: "Satoshi-Bold", sans-serif;
                font-size: 24px;
                font-weight: 700;
                line-height: 32.4px;
                text-align: left;
              }
            }
            .control-btn {
              margin: 3px 0;
              width: 225px;
              height: 124px;
              .v-icon {
                color: #ff3333;
              }
              .buy-num {
                width: 126px;
                border-radius: 62px;
                background-color: #f0f0f0;
                color: #000000;
                padding: 12px 20px;
                span {
                  margin: 0.5px 20px;
                }
                .v-btn {
                  height: 20px;
                  width: 20px;
                }
              }
            }
            .v-divider {
              margin-top: 20px;
              margin-bottom: 24px;
            }
          }
        }
      }

      .order-summary {
        padding: 0;
        padding-left: 20px;
        .order-wrap {
          width: fit-content;
          border: 1px solid #0000001a;
          border-radius: 20px;
          padding: 20px 24px 33px 24px;

          h3 {
            font-family: "Satoshi-Bold", sans-serif;
            font-size: 24px;
            font-weight: 700;
            line-height: 32.4px;
            text-align: left;
            margin-bottom: 24px;
          }
          .pricing {
            width: 457px;
            margin-bottom: 24px;
            .v-divider {
              margin-bottom: 20px;
            }
            div {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
              .title {
                font-family: "Satoshi-Light", sans-serif;
                font-size: 20px;
                font-weight: 400;
                line-height: 27px;
                text-align: left;
              }
              .cost {
                font-family: "Satoshi-Bold", sans-serif;
                font-size: 20px;
                font-weight: 700;
                line-height: 27px;
                text-align: right;
              }
              .minus {
                color: #ff3333;
              }
              .total {
                font-family: "Satoshi-Light", sans-serif;
                font-size: 20px;
                font-weight: 400;
                line-height: 27px;
                text-align: left;
              }
              .price {
                font-family: "Satoshi-Bold", sans-serif;
                font-size: 24px;
                font-weight: 700;
                line-height: 32.4px;
                text-align: right;
              }
            }
          }
        }

        .promo-code {
          margin-bottom: 24px;
          .input-code {
            width: 326px;
            height: 48px;
            border-radius: 62px;
            margin-right: 12px;

            background-color: #ffffff;
            color: #00000066;

            text-transform: capitalize;
            font-family: "Satoshi-Light", sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 21.6px;
            text-align: left;
            .v-icon {
              padding: 12px 16px;
            }
          }
          .apply-btn {
            border-radius: 62px;
            padding: 13px 38px 35px 38px;
            font-family: "Satoshi-Regular", sans-serif;
            font-size: 16px;
            font-weight: 500;
            line-height: 21.6px;
            text-align: left;
          }
        }

        .to-checkout {
          padding: 19px 153px 41px 153px;
          border-radius: 62px;
          text-transform: capitalize;

          font-family: "Satoshi-Regular", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 21.6px;
          text-align: left;
        }
      }
    }
  }
}
</style>
