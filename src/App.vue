<template>
  <mobile-product-listing></mobile-product-listing>
  <desktop-product-listing></desktop-product-listing>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MobileProductListing from "./pages/mobile-product-listing/index.vue";
import DesktopProductListing from "./pages/desktop-product-listing/index.vue";

export default defineComponent({
  name: "App",
  components: {
    DesktopProductListing,
    MobileProductListing,
  },
});
</script>

<style lang="scss">
@import "/styles/style.scss";
</style>
