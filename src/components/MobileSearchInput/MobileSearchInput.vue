<template>
  <form class="mobileSearchInput__form">
    <input
      class="mobileSearchInput"
      v-model="searchValue"
      type="text"
      placeholder="Search"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MobileSearchInput",
  data() {
    return {
      searchValue: "",
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/mixins";
@import "../../styles/abstracts/variables";

.mobileSearchInput {
  width: 100%;
  outline: 0px;
  @include border-radius(20px);
  height: 100%;
  border: 1px solid transparent;
  padding: 10px;
  color: $col-black;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: normal;

  &::placeholder {
    color: $col-dark-grey;
  }

  &__form {
    width: 17rem;
    height: 3rem;
    padding-left: 1.25rem;
  }
}
</style>
