<template>
  <loader v-if="loading"></loader>
  <product-listing v-else></product-listing>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import ProductListing from "./pages/product-listing/index.vue";
import { mapActions, mapGetters, useStore } from "vuex";
import Loader from "../src/components/Loader/Loader.vue";
import { store } from "@/store";

export default defineComponent({
  name: "App",
  components: {
    ProductListing,
    Loader,
  },
  computed: {
    ...mapGetters(["loading"]),
  },
  methods: {
    ...mapActions(["fetchAllBreedsImages"]),
  },
  created() {
    this.fetchAllBreedsImages();
  },
  // beforeRouteEnter(to, from, next) {
  //   const loading = JSON.parse(JSON.stringify(store.state)).breedsList.loading;
  //   if (loading) {
  //     return loading;
  //   }

  //   store.commit("setLoading", false);
  // },
});
</script>

<style lang="scss">
@import "/styles/style.scss";
</style>
