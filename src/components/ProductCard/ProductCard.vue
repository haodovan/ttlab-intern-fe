<template>
  <v-card-item class="product-wrapper">
    <div class="product-image">
      <v-img src="../../assets/image.png"></v-img>
    </div>
    <div class="product-name">T-shirt With Tape Details</div>
    <div class="product-rating d-flex align-center">
      <v-rating
        class="hidden-md-and-up"
        style="padding-bottom: 5px"
        :model-value="rating"
        active-color="#FFC633"
        color="orange"
        density="compact"
        emptyIcon=""
        readonly
        :length="computedRating"
        half-increments
        size="x-small"
      ></v-rating>
      <v-rating
        class="hidden-md-and-down"
        :model-value="rating"
        active-color="#FFC633"
        color="orange"
        density="compact"
        emptyIcon=""
        readonly
        :length="computedRating"
        half-increments
      ></v-rating>
      <span>{{ rating }}/5</span>
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

@media only screen and (max-width: 600px) and (min-width: 320px) {
  .product-wrapper {
    .product-image {
      width: 198px;
      height: 200.01px;
    }
    .product-name {
      margin-top: 10px;
      font-size: 16px;
      line-height: 21.6px;
    }
    .product-rating {
      height: 15px;
      margin: 4px 0;
      span {
        font-size: 12px;
        line-height: 16.2px;
      }
    }
    .product-price {
      span {
        font-size: 20px;
        line-height: 27px;
      }
      .discount-price {
        text-decoration: line-through 1px;
      }
      .v-chip {
        font-size: 10px;
        line-height: 13.5px;
      }
    }
  }
}
</style>
