<template>
  <HeaderBar />
  <v-app class="bg-white">
    <CustomBreadcrumb :items="items" />
  </v-app>

  <FooterBar />
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/app";

const items = useUserStore().link2;
</script>
