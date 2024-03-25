import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Homepage from "../pages/Homepage.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import ThePage from "../pages/ThePage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: ThePage},
  { name: "homepage", path: "/homepage", component: Homepage },
  { name: "product-detail", path: "/product-detail", component: ProductDetail }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
