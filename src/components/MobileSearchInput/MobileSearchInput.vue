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
  background-color: $col-grey-1;

  &::placeholder {
    color: $col-dark-grey;
    font-weight: 700;
  }

  &__form {
    width: 80%;
    height: 3rem;
    padding-left: 1.25rem;
  }
}
</style>
