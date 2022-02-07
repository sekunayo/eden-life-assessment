import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App);
app.use(store).use(router).use(VueLazyLoad, {
    lazyComponent : true
  }).mount("#app");


  