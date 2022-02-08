<template>
  <div class="productInfo">
    <product-header></product-header>
    <div class="productInfo__main">
      <div class="productInfo__main-container">
        <div class="productInfo__description">
          <div class="productInfo__description-container">
            <div class="productInfo__description-info">
              <div class="productInfo__description-info-image">
                <img
                  class="productInfo__description-info-image-inner"
                  lazy="loaded"
                  v-lazy="image"
                  alt="productInfo"
                />
              </div>
              <div class="productInfo__description-info-text-container">
                <div class="productInfo__description-info-text">
                  <h1 class="productInfo__description-info-text-heading">
                    {{ breedName }}
                  </h1>
                  <p class="productInfo__description-info-text-description">
                    Neque porro quisquam est, qui dolore ipsum quia dolor sit
                    amet, consectetur adipisci velit, sed quia non&nbsp;incidunt
                    lores ta porro ame. numquam eius modi tempora incidunt lores
                    ta porro ame.
                  </p>
                  <p class="productInfo__description-info-text-categories">
                    Sub-breeds : <span></span>
                  </p>
                  <button
                    class="productInfo__button"
                    type="button"
                    aria-label="back to home"
                    @click="goBack"
                  >
                    Back to home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { store } from "@/store";
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import ProductHeader from "../../components/Header/Header.vue";

export default defineComponent({
  name: "ProductInfo",
  components: {
    ProductHeader,
  },
  data() {
    return {
      breedName: "",
      image: "",
      eachImage: "",
      index: "",
    };
  },
  methods: {
    ...mapActions(["fetchAllBreedsImages"]),
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    if (localStorage.breedName && localStorage.image) {
      this.breedName = localStorage.breedName;
      this.image = localStorage.image;
    }
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/variables.scss";
@import "../../styles/abstracts/mixins.scss";

.productInfo {
  height: 100vh;
  width: 100%;
  background-color: $col-grey-2;

  &__button {
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
  }

  &__description {
    width: 100%;
    height: 100%;
    @include flex-row;

    &-info {
      @include grid-column(2, 1fr);
      grid-column-gap: 30px;
      width: 100%;
      height: 100%;

      @include responsive(phone) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, auto);
      }

      &-text {
        @include column;
        @include responsiveMin(desktop) {
          margin-bottom: 30px;
        }

        &-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        &-categories {
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          color: $col-black;
          margin-bottom: 15px;
          & span {
            color: $col-secondary-6;
            font-weight: 700;
          }
        }

        &-heading {
          color: $col-black;
          font-size: 1.875rem;
          font-style: normal;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: capitalize;

          @include responsive(phone) {
            margin-top: 50px;
          }
        }

        &-description {
          font-style: normal;
          font-weight: 300;
          font-size: 1rem;
          color: $col-black;
          margin-bottom: 15px;
        }
      }

      &-image {
        width: 100%;
        height: 450px;

        &-inner {
          width: 100%;
          height: 100%;
          background-color: $col-grey-4;

          &[lazy="loaded"] {
            max-width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    &-container {
      width: 75%;
      height: auto;
    }
  }

  &__main {
    width: 100%;
    height: calc(100vh - 55px);
    @include flex-row;

    &-container {
      padding: 20px 0px;
      height: auto;
      background-color: $col-white;
      width: 80%;
    }
  }
}
</style>
