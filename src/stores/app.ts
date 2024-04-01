import { ref } from "vue";
import { defineStore } from "pinia";

const collapse = ref(false);
const lists = ["Shop1", "Shop2", "Shop3", "Shop4"];
const icons = ["mdi-twitter", "mdi-facebook", "mdi-instagram", "mdi-github"];
const link1 = [
  {
    title: "Home",
    disabled: true,
    href: "/product-detail",
  },
  {
    title: "Shop",
    disabled: true,
    href: "/product-detail",
  },
  {
    title: "Men",
    disabled: true,
    href: "/product-detail",
  },
  {
    title: "T-shirts",
    disabled: false,
    href: "/product-detail",
  },
];
const link2 = [
  {
    title: "Home",
    disabled: true,
    href: "/category-page",
  },
  {
    title: "Casual",
    disabled: false,
    href: "/category-page",
  },
];
const link3 = [
  {
    title: "Home",
    disabled: true,
    href: "/your-cart",
  },
  {
    title: "Cart",
    disabled: false,
    href: "/your-cart",
  },
];
const tab = ref("Rating & Reviews");
const rating = ref(4.5);
const productList = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
const colors = [
  "#00C12B",
  "#F50606",
  "#F5DD06",
  "#F57906",
  "#06CAF5",
  "#063AF5",
  "#7D06F5",
  "#F506A4",
  "#FFFFFF",
  "#000000",
];
const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];
const styles = ["Casual", "Formal", "Party", "Gym"];
const src = "../../../public/image.png";

// Tạo store
export const useUserStore = defineStore({
  id: "useUserStore",
  state: () => ({
    collapse,
    lists,
    icons,
    link1,
    link2,
    link3,
    tab,
    rating,
    productList,
    colors,
    sizes,
    styles,
    src,
  }),
  actions: {},
});
