<template>
  <v-container fluid style="padding: 0 100px">
    <v-divider></v-divider>

    <v-breadcrumbs :items="items" style="padding: 23px 0">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { BreadcrumbItem } from "./breadcrumbsInterface.ts";

// console.log(items);

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<BreadcrumbItem[]>,
      required: true,
    },
  },
});
</script>
