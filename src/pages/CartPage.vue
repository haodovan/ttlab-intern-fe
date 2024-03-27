<template>
  <HeaderBar />
  <CustomBreadcrumb :items="links" />
  <v-app class="your-cart"></v-app>
  <FooterBar />
</template>

<script lang="ts">
import { useUserStore } from "../stores/app";

export default {
  setup() {
    const userStore = useUserStore();
    const { link3: links } = userStore;
    return {
      links,
    };
  },
};
</script>

<style lang="scss" scoped>
.your-cart {
  background-color: #ffffff;
}
</style>
