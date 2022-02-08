import NotFound from "../components/NotFound/NotFound.vue";
import { createRouter,createWebHistory } from 'vue-router'

const ProductInfo = () => import('../pages/product-listing-info/index.vue')
const ProductListing = () => import('../pages/product-listing/index.vue')


const routes = [
  {
    path: '/',
    name: 'dog',
    component: ProductListing
  },
  {
    path: '/dog/:name',
    name: 'dogInfo',
    component: ProductInfo
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound, 
  },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
  

export default router
