<template>
  <product-listing></product-listing>
  <!-- <loader></loader> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductListing from "./pages/product-listing/index.vue";
import Loader from "./components/Loader/Loader.vue";

export default defineComponent({
  name: "App",
  components: {
    ProductListing,
    // Loader,
  },
});
</script>

<style lang="scss">
@import "/styles/style.scss";
</style>
