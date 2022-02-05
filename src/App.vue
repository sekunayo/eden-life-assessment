<template>
  <mobile-product-listing></mobile-product-listing>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MobileProductListing from "./pages/mobile-product-listing/index.vue";

export default defineComponent({
  name: "App",
  components: {
    MobileProductListing,
  },
});
</script>

<style lang="scss">
@import "/styles/style.scss";
</style>
