<template>
  <Sidebar />
  <div class="main">
    <div class="navbar d-flex align-center justify-space-between">
      <h1>Danh sách sản phẩm</h1>
      <div>
        <v-icon>mdi-bell-outline</v-icon>
        <v-avatar
          image="https://randomuser.me/api/portraits/men/85.jpg"
        ></v-avatar>
      </div>
    </div>
    <DataTable :products="products" />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { useUserStore } from "../../stores/app";
import { defineComponent, onBeforeMount, ref } from "vue";

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const products = ref([]);

    onBeforeMount(async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/products");
        userStore.setProducts(data);
        products.value = userStore.products;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    });

    return { userStore, products };
  },
});
</script>

<style lang="scss" scoped>
.main {
  padding: 8px 24px 0 26px;
  .navbar {
    h1 {
      font-family: Public Sans, sans-serif;
      font-size: 24px;
      font-weight: 600;
      line-height: 22px;
      text-align: left;
    }
    div .v-icon {
      margin-right: 24px;
    }
  }
}
</style>
