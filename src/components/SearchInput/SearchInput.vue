<template>
  <form class="searchInput__form">
    <div class="searchInput__form-icon">
      <button
        aria-label="search"
        type="button"
        class="searchInput__form-icon-button"
      >
        <i class="fas fa-search"></i>
      </button>
    </div>

    <input
      class="searchInput"
      v-model="searchValue"
      @:focus="focusElement"
      @:blur="unFocusElement"
      @:keyup="search"
      type="text"
      placeholder="Search"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchInput",
  props: {
    focused: Boolean,
  },
  data() {
    return {
      searchValue: "",
      array: ["aaaa", "bbb", "fff"],
      inputFocus: true,
    };
  },
  created() {
    this.inputFocus = this.focused;
  },
  methods: {
    search: function () {
      const newSearchValue = this.searchValue.toLowerCase();

      const filteredCharacters = this.array.filter((letter) => {
        return letter.toLowerCase().includes(newSearchValue);
      });
      this.array = filteredCharacters;
    },
    focusElement: function () {
      this.inputFocus = true;
    },
    unFocusElement: function () {
      this.inputFocus = false;
    },
  },
  watch: {
    default() {
      this.inputFocus = this.focused;
    },
  },
  mounted() {
    console.log(this.inputFocus);
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
  padding-left: 10px;
  color: $col-dark;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: normal;
  background-color: transparent;

  @include responsive(phone) {
    font-size: 0.85rem;
  }

  &::placeholder {
    color: $col-dark-grey;
  }

  &__form {
    width: 100%;
    height: 100%;
    @include row;
    background-color: #f5f5f5;
    border: 1px solid transparent;
    @include border-radius(4px);
    padding: 0px 14px;

    &-icon {
      width: auto;
      height: 100%;
      @include flex-row;

      & i {
        color: $col-dark-grey;
        font-size: 1.2rem;

        &:hover {
          color: $col-dark;
        }
      }
    }
  }
}
</style>
