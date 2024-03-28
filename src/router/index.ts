import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Homepage from "../pages/Homepage.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import CategoryPage from "../pages/CategoryPage.vue";
import CartPage from "../pages/CartPage.vue";
import LoginPage from "../pages/admin/LoginPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/login" },
  { name: "homepage", path: "/homepage", component: Homepage },
  { name: "product-detail", path: "/product-detail", component: ProductDetail },
  { name: "category-page", path: "/category-page", component: CategoryPage },
  { name: "your-cart", path: "/your-cart", component: CartPage },
  { name: "login", path: "/login", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
