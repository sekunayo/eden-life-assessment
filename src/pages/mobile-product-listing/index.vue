<template>
  <div class="mobileProductListing">
    <mobile-search-input></mobile-search-input>
    <div class="mobileProductListing__card-container">
      <div class="mobileProductListing__card-container-inner">
        <mobile-card></mobile-card>
        <mobile-card></mobile-card>
        <mobile-card></mobile-card>
        <mobile-card></mobile-card>
      </div>
    </div>
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
    MobileCard,
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/variables.scss";
@import "../../styles/abstracts/mixins.scss";

.mobileProductListing {
  min-height: 100vh;
  width: 100%;
  background-color: $col-white;
  padding: 20px 0px;

  &__card-container {
    display: grid;
    grid-template-columns: 16px 1fr 16px;
    margin-top: 30px;
    &-inner {
      grid-column: 2/3;
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      grid-gap: 20px;
    }
  }
}
</style>
