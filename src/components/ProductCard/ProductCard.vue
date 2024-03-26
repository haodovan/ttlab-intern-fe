<template>
  <v-card-item class="product-wrapper">
    <div class="product-image">
      <v-img src="../../assets/image.png"></v-img>
    </div>
    <div class="product-name">T-SHIRT WITH TAPE DETAILS</div>
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
      <span>$260</span> <span class="discount-price">$300</span>
      <v-chip>-40%</v-chip>
    </div>
  </v-card-item>
</template>

<script>
import { computed } from "vue";
import { useUserStore } from "../../stores/app";

export default {
  setup() {
    const { rating } = useUserStore();

    const computedRating = computed(() => {
      if (typeof rating === "number" && !isNaN(rating) && rating % 1 !== 0) {
        return Math.floor(rating) + 1;
      } else {
        return rating;
      }
    });

    return {
      computedRating,
    };
  },
};
</script>

<style lang="scss" scoped>
.product-wrapper {
  padding: 0;
  background-color: #ffffff;
  color: #000000;

  .product-image {
    height: 298px;
    width: 295px;
  }
  .product-name {
    font-family: "Satoshi-Bold", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 27px;
    text-align: left;
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
}
</style>
