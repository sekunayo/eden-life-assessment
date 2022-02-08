<template>
  <header class="header">
    <div class="header-icon">
      <h1 class="header-icon-text">Puppyes</h1>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductHeader",
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/variables.scss";
@import "../../styles/abstracts/mixins.scss";

.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 5px 0px;
  background-color: $col-white;

  @include responsiveMin(desktop) {
    height: 3.33333rem;
    padding: 0px;
  }

  &-icon {
    @include row;
    align-items: center;
    padding-left: 40px;
    height: 100%;
    width: 100%;

    &-text {
      color: $col-secondary-6;
      font-size: 2rem;
      font-style: normal;
      font-weight: 900;
      @include responsive(phone) {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
