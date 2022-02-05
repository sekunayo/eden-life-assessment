<template>
  <div class="desktopProductListing">
    <div class="desktopProductListing__header"></div>
    <div class="desktopProductListing__hero">
      <div class="desktopProductListing__search">
        <div class="desktopProductListing__search-container"></div>
      </div>
    </div>
    <div class="desktopProductListing__card-container">
      <div class="desktopProductListing__card-container-inner">
        <div class="desktopProductListing__card"></div>
        <div class="desktopProductListing__card"></div>
        <div class="desktopProductListing__card"></div>
        <div class="desktopProductListing__card"></div>
        <div class="desktopProductListing__card"></div>
        <div class="desktopProductListing__card"></div>
        <div class="desktopProductListing__card"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DesktopProductListing",
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/variables.scss";
@import "../../styles/abstracts/mixins.scss";

.desktopProductListing {
  min-height: 100vh;
  width: 100%;
  background-color: $col-white;
  display: none;
  @include responsiveMin(desktop) {
    display: block;
  }

  &__card {
    width: 100%;
    height: 500px;
    background-color: pink;
  }

  &__card-container {
    display: grid;
    grid-template-columns: 16px 1fr 16px;
    margin-top: 100px;

    &-inner {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      grid-template-rows: repeat(auto-fit, auto);
      grid-gap: 10px;
      width: 100%;
      height: 100%;
      grid-column: 2/3;
    }
  }

  &__header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: $col-white;
  }

  &__search {
    width: 100%;
    position: absolute;
    bottom: -50px;
    left: 0;
    @include z-index(overlay);
    height: 100px;
    @include flex-row;

    &-container {
      background-color: blue;
      height: 100%;
      width: 60%;
      height: 100%;
    }
  }

  &__hero {
    background-color: red;
    height: calc(100vh - 100px);
    width: 100%;
    position: relative;
  }
}
</style>
