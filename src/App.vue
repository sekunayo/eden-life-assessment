<template>
  <!-- <loader></loader> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import Loader from "../src/components/Loader/Loader.vue";

export default defineComponent({
  name: "App",
  // components: {
  // Loader,
  // },
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
