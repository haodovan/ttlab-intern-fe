<template>
  <HeaderBar />
  <v-app class="bg-white">
    <CustomBreadcrumb :items="items" />
    <!-- main section -->
    <v-container class="main-sector d-flex align-start justify-start" fluid>
      <div class="filter-bar">
        <div class="title-filter d-flex align-center justify-space-between">
          <span class="title">Filters</span>
          <v-icon>mdi-tune-vertical</v-icon>
        </div>
        <v-divider></v-divider>
        <div class="product-type-wrapper">
          <v-expansion-panels class="product-type">
            <v-expansion-panel
              class="product"
              v-for="product in productList"
              :key="product"
              elevation="0"
            >
              <v-expansion-panel-title
                expand-icon="mdi-chevron-right"
                collapse-icon="mdi-chevron-up"
                >{{ product }}</v-expansion-panel-title
              >
            </v-expansion-panel></v-expansion-panels
          >
        </div>
        <v-divider></v-divider>
        <div class="price-option">
          <v-expansion-panels>
            <v-expansion-panel class="bg-white" elevation="0">
              <v-expansion-panel-title
                expand-icon="mdi-chevron-right"
                collapse-icon="mdi-chevron-up"
              >
                <span>Price</span>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-range-slider
                  class="slider-price"
                  color="#000000"
                  min="0"
                  max="250"
                  step="10"
                  v-model="value"
                  hide-details
                  strict
                  show-ticks="always"
                  :ticks="formattedValue"
                ></v-range-slider>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <v-divider></v-divider>
        <v-expansion-panels class="products-color">
          <v-expansion-panel class="bg-white" elevation="0">
            <v-expansion-panel-title
              expand-icon="mdi-chevron-right"
              collapse-icon="mdi-chevron-up"
            >
              <span>Color</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="color-wrapper">
                <v-chip-group
                  filter
                  class="product-color d-flex justify-space-between"
                  mandatory="force"
                  multiple
                  column
                >
                  <v-chip
                    v-for="color in colors"
                    :key="color"
                    :color="`${color}` === '#FFFFFF' ? '#000000' : '#FFFFFF'"
                    :style="{ backgroundColor: `${color}` }"
                  ></v-chip>
                </v-chip-group>
              </div>
            </v-expansion-panel-text> </v-expansion-panel
        ></v-expansion-panels>
        <v-divider></v-divider>
        <v-expansion-panels class="products-size">
          <v-expansion-panel class="bg-white" elevation="0">
            <v-expansion-panel-title
              expand-icon="mdi-chevron-right"
              collapse-icon="mdi-chevron-up"
            >
              <span>Size</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="size-wrapper">
                <v-chip-group
                  class="product-size d-flex justify-space-between"
                  mandatory="force"
                  multiple
                  column
                >
                  <v-chip v-for="size in sizes" :key="size" color="white">
                    <p>{{ size }}</p>
                  </v-chip>
                </v-chip-group>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel></v-expansion-panels
        >
        <v-divider></v-divider>
        <v-expansion-panels class="products-style">
          <v-expansion-panel class="bg-white" elevation="0">
            <v-expansion-panel-title
              expand-icon="mdi-chevron-right"
              collapse-icon="mdi-chevron-up"
              class="style-title"
            >
              <span>Dress Style</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="style-lists">
                <v-expansion-panels class="style-wrapper">
                  <v-expansion-panel
                    class="product-style"
                    v-for="style in styles"
                    :key="style"
                    elevation="0"
                  >
                    <v-expansion-panel-title
                      expand-icon="mdi-chevron-right"
                      collapse-icon="mdi-chevron-up"
                      >{{ style }}
                    </v-expansion-panel-title>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel></v-expansion-panels
        >
        <v-btn class="confirm-btn">Apply Filter</v-btn>
      </div>
      <div class="product-grid">
        <div class="title-sort d-flex align-center justify-space-between">
          <span class="title">Casual</span>
          <div class="status-sort">
            <v-menu>
              <template v-slot:activator="{ props }">
                <div class="d-flex flex-row align-center justify-space-around">
                  <span class="status">Showing 1-10 of 100 Products</span>
                  <span class="sort">Sort By: </span>
                  <v-btn flat v-bind="props" color="white"
                    ><span class="option">{{ selectedOption }}</span
                    ><v-icon>mdi-chevron-down</v-icon></v-btn
                  >
                </div>
              </template>
              <v-list class="bg-white">
                <v-list-item
                  v-for="option in ['Most Popular', 'Latest', 'Newest']"
                  :key="option"
                  @click="selectOption(option)"
                >
                  <v-list-item-title>{{ option }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div class="main-products"></div>
        <v-divider></v-divider>
        <div class="pag"></div>
      </div>
    </v-container>
  </v-app>

  <FooterBar />
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/app";
import { computed, ref } from "vue";

const items = useUserStore().link2;
const { productList, colors, sizes, styles } = useUserStore();

const value = ref([50, 200]);
const formattedValue = computed(() => {
  const obj = {};
  value.value.forEach((val) => {
    obj[val] = `$${val}`;
  });
  return obj;
});

const selectedOption = ref("Most Popular");

const selectOption = (option) => {
  console.log(option);

  selectedOption.value = option;
};
</script>

<style lang="scss" scoped>
.main-sector {
  padding: 0 100px;
  margin-bottom: 100px;

  .filter-bar {
    width: 295px;
    border: 1px solid #0000001a;
    border-radius: 1.5rem;
    padding: 20px 24px;

    .title-filter {
      .title {
        font-family: "Satoshi-Bold", sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 27px;
        text-align: left;
      }
      .v-icon {
        width: 24px;
        height: 24px;
        color: #00000066;
      }
    }
    .v-divider {
      margin: 24px 0;
    }
    .product-type-wrapper {
      .product-type {
        .product {
          background-color: white;
          color: #000000;
          .v-expansion-panel-title {
            padding: 0;
            font-family: "Satoshi-Light", sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 21.6px;
            text-align: left;
          }
        }
      }
    }
    .price-option {
      .v-expansion-panels {
        .v-expansion-panel {
          .v-expansion-panel-title {
            padding: 0;
            font-family: "Satoshi-Bold", sans-serif;
            font-size: 20px;
            font-weight: 500;
            line-height: 27px;
            text-align: left;
          }
          .v-expansion-panel-text {
            margin-bottom: 19px;
            .slider-price {
              font-family: "Satoshi-Bold", sans-serif;
              font-size: 14px;
              font-weight: 500;
              line-height: 18.9px;
              text-align: left;
            }
          }
        }
      }
    }
    .products-color {
      .v-expansion-panel {
        .v-expansion-panel-title {
          padding: 0;
          font-family: "Satoshi-Bold", sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 27px;
          text-align: left;
        }
        .v-expansion-panel-text {
          .color-wrapper {
            .product-color {
              padding: 0;
              .v-chip {
                width: 37px;
                height: 37px;
              }
            }
          }
        }
      }
    }
    .products-size {
      .v-expansion-panel {
        .v-expansion-panel-title {
          padding: 0;
          font-family: "Satoshi-Bold", sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 27px;
          text-align: left;
        }
        .v-expansion-panel-text {
          .size-wrapper {
            .product-size {
              padding: 0;
              p {
                font-family: "Satoshi-Light", sans-serif;
                font-size: 14px;
                font-weight: 400;
                line-height: 18.9px;
                text-align: left;
                color: #00000099;
              }
              .v-chip {
                height: 39px;
                padding: 10px 20px;
                margin-bottom: 8px;
              }

              .v-chip--selected {
                background-color: #000000;
                p {
                  color: #ffffff;
                }
              }
            }
          }
        }
      }
    }
    .products-style {
      .v-expansion-panel {
        .style-title {
          padding: 0;
          font-family: "Satoshi-Bold", sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 27px;
          text-align: left;
        }
        .v-expansion-panel-text {
          .style-lists {
            .style-wrapper {
              .product-style {
                background-color: white;
                color: #000000;
                .v-expansion-panel-title {
                  padding: 0;
                  font-family: "Satoshi-Light", sans-serif;
                  font-size: 16px;
                  font-weight: 400;
                  line-height: 21.6px;
                  text-align: left;
                }
              }
            }
          }
        }
      }
    }
    .confirm-btn {
      margin-top: 24px;
      height: 48px;
      width: 100%;
      border-radius: 1.5rem;
      font-family: "Satoshi-Light", sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 18.9px;
      text-align: left;
    }
  }
  .product-grid {
    margin-left: 20px;
    width: 1000px;
    .title-sort {
      .title {
        font-family: "Satoshi-Bold", sans-serif;
        font-size: 32px;
        font-weight: 700;
        line-height: 43.2px;
        text-align: left;
      }
      .status-sort {
        .status {
          font-family: "Satoshi-Light", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 21.6px;
          text-align: left;
          margin-right: 12px;
        }
        .sort {
          font-family: "Satoshi-Light", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 21.6px;
          text-align: left;
        }
      }
      .v-btn {
        padding: 2px;
        text-transform: capitalize;
        .option {
          font-family: "Satoshi-Medium", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 21.6px;
          text-align: left;
          letter-spacing: normal;
        }
        .v-icon {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>
