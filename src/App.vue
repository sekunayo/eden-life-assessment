<template>
  <product-listing></product-listing>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductListing from "./pages/product-listing/index.vue";

export default defineComponent({
  name: "App",
  components: {
    ProductListing,
  },
});
</script>

<style lang="scss">
@import "/styles/style.scss";
</style>
