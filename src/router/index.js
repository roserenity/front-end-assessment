import { createRouter, createWebHistory } from "vue-router";
import HeaderView from "../views/HeaderView.vue";
import ProductView from "../views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "header",
      component: HeaderView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductView,
    }
  ],
});

export default router;
