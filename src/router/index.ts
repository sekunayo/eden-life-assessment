import NotFound from "../components/NotFound/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";
import { store } from "@/store";

const ProductInfo = () => import("../pages/product-listing-info/index.vue");
const ProductListing = () => import("../pages/product-listing/index.vue");

const routes = [
  {
    path: "/",
    name: "dog",
    component: ProductListing,
  },
  {
    path: "/dog/:name",
    name: "dogInfo",
    component: ProductInfo,
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from, next) => {
  store.commit("setLoading", false);
});

export default router;
