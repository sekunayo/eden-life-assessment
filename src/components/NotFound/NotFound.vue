<template>
  <div class="notFound__container">
    <div class="notFound__container-inner">
      <div class="notFound__container-icon">
        <not-found-icon></not-found-icon>
      </div>
      <p class="notFound__container-text">Oh,no! This page does not exist.</p>
      <div class="notFound__container-button-container">
        <button
          type="button"
          class="notFound__container-button"
          aria-label="go back"
          @click="goHome"
        >
          Go Back to home
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NotFoundIcon from "@/assets/icons/NotFoundIcon/NotFoundIcon.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { NotFoundIcon },
  name: "NotFound",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/variables.scss";
@import "../../styles/abstracts/mixins.scss";

.notFound {
  &__container {
    height: 100vh;
    width: 100%;
    @include flex-row;
    overflow-y: hidden;

    &-icon {
      margin-bottom: 15px;
      width: 50vh;
      width: 50vw;
    }

    &-text {
      font-size: 1.5rem;
      font-weight: 600;
      color: $col-black;
      margin-bottom: 30px;
      width: 100%;
      @include flex-row;
      text-align: center;
    }

    &-button {
      padding: 10px 40px;
      border: 1px solid $col-secondary-6;
      width: fit-content;
      height: auto;
      background-color: $col-secondary-6;
      text-transform: uppercase;
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      @include border-radius(20px);
      color: $col-white;

      &-container {
        width: 100%;
        height: 100%;
        @include flex-row;
      }
    }

    &-inner {
      @include column;
    }
  }
}
</style>
