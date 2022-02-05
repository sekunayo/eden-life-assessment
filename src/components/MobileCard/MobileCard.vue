<template>
  <div class="mobileCard">
    <div class="mobileCard__image"></div>
    <div class="mobileCard__text">
      <h1 class="mobileCard__text-title">Frankie</h1>
      <p class="mobileCard__text-description">I am four years old</p>
      <div class="mobileCard__text-footer">
        <p class="mobileCard__text-price"><span>$</span> 45</p>
        <button type="button" class="mobileCard__text-like"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MobileCard",
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/mixins";
@import "../../styles/abstracts/variables";

.mobileCard {
  height: auto;
  display: grid;
  grid-template-rows: 200px auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &__image {
    height: 100%;
    border: 1px solid transparent;
    border-radius: 10px 10px 0px 0px;
    background-color: $col-secondary-5;
  }

  &__text {
    height: auto;
    padding: 20px;
    background-color: $col-white;
    @include grid-row(3, auto);
    grid-row-gap: 5px;
    border: 1px solid transparent;
    border-radius: 0px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    &-footer {
      @include row;
      align-items: center;
    }

    &-price {
      color: $col-dark;
      font-size: 1.25rem;
      font-weight: 700;
      font-style: normal;
      @include row;
      align-items: center;
      & span {
        font-size: 0.95rem;
        margin-right: 5px;
      }
    }

    &-description {
      color: $col-dark-grey;
      font-weight: 600;
      font-style: normal;
      font-size: 1rem;
    }

    &-title {
      color: $col-dark;
      font-size: 1.5rem;
      font-weight: 800;
      font-style: normal;
    }
  }
}
</style>
