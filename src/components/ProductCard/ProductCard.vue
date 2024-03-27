<template>
  <v-card-item class="product-wrapper">
    <div class="product-image">
      <v-img :src="src"></v-img>
    </div>
    <div class="product-name">T-shirt With Tape Details</div>
    <div class="product-rating d-flex align-center">
      <v-rating
        :model-value="rating"
        active-color="#FFC633"
        color="orange"
        density="compact"
        emptyIcon=""
        readonly
        :length="computedRating"
        half-increments
      ></v-rating
      ><span>{{ rating }}/5</span>
    </div>
    <div class="product-price d-flex align-center">
      <span>$260</span>
      <span class="discount-price">$300</span>
      <v-chip>-40%</v-chip>
    </div>
  </v-card-item>
</template>

<script>
import { computed } from "vue";
import { useUserStore } from "../../stores/app";

export default {
  setup() {
    const userStore = useUserStore();
    const { rating, src } = userStore;

    const computedRating = computed(() => {
      if (typeof rating === "number" && !isNaN(rating) && rating % 1 !== 0) {
        return Math.floor(rating) + 1;
      } else {
        return rating;
      }
    });

    return {
      computedRating,
      rating,
      src,
    };
  },
};
</script>

<style lang="scss" scoped>
.product-wrapper {
  padding: 0;
  background-color: #ffffff;
  color: #000000;
  width: fit-content;

  .product-image {
    height: 298px;
    width: 295px;
  }
  .product-name {
    margin-top: 16px;
    text-transform: capitalize;

    font-family: "Satoshi-Bold", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    text-align: left;
  }
  .product-rating {
    height: 19px;
    margin: 8px 0;
    span {
      font-family: "Satoshi-Regular", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 18.9px;
      text-align: left;
    }
  }
  .product-price {
    span {
      font-family: "Satoshi-Medium", sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 32.4px;
      text-align: left;
      padding-right: 10px;
    }

    .discount-price {
      text-decoration: line-through 2px;
      color: #0000004d;
    }

    .v-chip {
      background-color: #ff33331a;
      color: #ff3333;
      font-family: "Satoshi-Medium", sans-serif;
      font-size: 12px;
      font-weight: 500;
      line-height: 16.2px;
      text-align: left;
      height: 28px;
    }
  }
}
</style>
