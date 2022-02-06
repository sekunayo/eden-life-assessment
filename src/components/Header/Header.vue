<template>
  <header class="header">
    <div class="header-icon">
      <i class="fas fa-dog"></i>
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
  height: 70px;
  background-color: $col-white;

  @include responsiveMin(desktop) {
    height: 100px;
  }

  &-icon {
    @include row;
    align-items: center;
    padding-left: 40px;
    height: 100%;
    width: 100%;

    @include responsiveMin(desktop) {
      padding-left: 20px;
    }
    
    & i {
      font-size: 3rem;
      color: $col-secondary-6;

      @include responsiveMin(desktop) {
        font-size: 4rem;
      }
    }
  }
}
</style>
