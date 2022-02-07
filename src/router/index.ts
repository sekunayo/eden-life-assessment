import { createApp } from "vue";
import App from "./App.vue";
import Loader from "../components/Loader/Loader.vue";

import { createRouter,createWebHashHistory } from 'vue-router'
import ProductListing from '../pages/product-listing/index.vue';
import { store } from "@/store";

const routes = [
  {
    path: '/',
    name: 'dog',
    component: ProductListing
  },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
  

export default router
