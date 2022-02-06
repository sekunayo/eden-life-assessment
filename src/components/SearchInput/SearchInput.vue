<template>
  <form class="searchInput__form">
    <input
      class="searchInput"
      v-model="searchValue"
      type="text"
      placeholder="Search"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchInput",
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

.searchInput {
  width: 100%;
  outline: 0px;
  height: 100%;
  border: 1px solid transparent;
  padding: 0px 30px;
  color: $col-black;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: normal;
  background-color: $col-grey-1;

  @include responsive(phone) {
    font-size: 0.85rem;
  }

  &::placeholder {
    color: $col-dark-grey;
    font-weight: 700;
  }

  &__form {
    width: 100%;
    height: 100%;
  }
}
</style>
