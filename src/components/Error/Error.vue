<template>
  <div class="error">
    <div class="error-container">
      <h1 class="error-container-text">This is not a valid breed name</h1>
      <button
        aria-label="close-error"
        @click="closeError(error)"
        type="button"
        class="error-container-icon"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { store } from "@/store";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "ErrorComponent",
  data() {
    return {
      text: "",    };
  },
  computed: {
    ...mapGetters(["errorStats",]),
  },
  methods: {
    closeError() {
      store.commit("setError", false);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/variables.scss";
@import "../../styles/abstracts/mixins.scss";

.error {
  position: absolute;
  top: 50;
  left: 0;
  width: 100%;
  height: 100px;
  @include flex-row;
  @include z-index(fill-page);

  &-container {
    width: fit-content;
    height: auto;
    padding: 10px 20px;
    background-color: $col-error-1;
    border: 2px solid $col-error-2;
    @include border-radius(4px);
    @include row;
    align-items: center;

    &-icon {
      width: 20px;
      height: 100%;
      @include flex-row;
      margin-left: 20px;
      & i {
        font-size: 1.2rem;
        color: $col-white;
      }
    }

    &-text {
      color: $col-white;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      width: fit-content;
    }
  }
}
</style>
