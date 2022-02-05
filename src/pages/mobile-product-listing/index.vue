<template>
  <div class="mobileProductListing">
    <mobile-search-input></mobile-search-input>
    <mobile-card></mobile-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MobileSearchInput from "../../components/MobileSearchInput/MobileSearchInput.vue";
import MobileCard from "../../components/MobileCard/MobileCard.vue";


export default defineComponent({
  name: "MobileProductListing",
  components: {
    MobileSearchInput,
    MobileCard
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/variables.scss";
@import "../../styles/abstracts/mixins.scss";

.mobileProductListing {
  min-height: 100vh;
  width: 100%;
  background-color: $col-secondary-3;
  padding-top: 20px;
}
</style>
