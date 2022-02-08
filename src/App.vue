<template>
  <loader v-if="loading"></loader>
  <router-view v-else></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import Loader from "../src/components/Loader/Loader.vue";

export default defineComponent({
  name: "App",
  components: {
    Loader,
  },
  data() {
    return {
      images: [],
    };
  },

  computed: {
    ...mapGetters(["loading", "imagesArray"]),
  },
  methods: {
    ...mapActions(["fetchAllBreedsImages"]),
  },
  created() {
    this.fetchAllBreedsImages();
  },
  mounted() {
    this.images = localStorage.images;
  },
});
</script>

<style lang="scss">
@import "/styles/style.scss";
</style>
