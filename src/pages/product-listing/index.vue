<template>
  <div class="productListing">
    <transition name="fade" mode="out-in">
      <error-component v-if="errorStats"></error-component>
    </transition>
    <product-header></product-header>
    <product-hero></product-hero>
    <div class="productListing__card-container">
      <div class="productListing__card-container-inner">
        <button
          type="button"
          aria-label="productListing-card"
          v-for="(eachImage, index) in imagesArray"
          :key="index + 1"
          class="productListing__card"
          @click="navigateToProductInfo(eachImage, breedNames)"
        >
          <img
            class="productListing__card-image"
            lazy="loaded"
            v-lazy="eachImage"
            alt="dog"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductHeader from "../../components/Header/Header.vue";
import ProductHero from "../../components/Hero/Hero.vue";
import { mapGetters } from "vuex";
import router from "@/router";
import ErrorComponent from "../../components/Error/Error.vue";

export default defineComponent({
  name: "ProductListing",
  components: {
    ProductHeader,
    ProductHero,
    ErrorComponent,
  },
  data() {
    return {
      breedName: "",
      image: "",
    };
  },
  computed: {
    ...mapGetters(["imagesArray", "errorStats", "loading", "breedNames"]),
  },
  methods: {
    navigateToProductInfo(eachImage, breedNames) {
      this.$emit("eachImage", eachImage);
      breedNames.map((element) => {
        if (eachImage.includes(element)) {
          localStorage.breedName = element;
          localStorage.image = eachImage;
          router.push(`/dog/${element}`);
        }
      });
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/variables.scss";
@import "../../styles/abstracts/mixins.scss";

.productListing {
  min-height: 100vh;
  width: 100%;
  background-color: $col-white;
  position: relative;
  @include column;

  &__pagination {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: auto;
  }

  &__card {
    width: 100%;
    height: auto;

    &-image {
      width: 100%;
      height: 350px;
      background-color: $col-grey-4;

      &[lazy="loaded"] {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1);
        transition: transform 1s ease-in-out;
        &:hover {
          transform: scale(0.95);
          filter: grayscale(80%);
        }
      }
    }
  }

  &__card-container {
    display: grid;
    grid-template-columns: 16px 1fr 16px;
    margin-top: 20px;

    &-inner {
      display: grid;
      grid-template-rows: repeat(auto-fit, auto);
      grid-gap: 24px;
      width: 100%;
      height: 100%;
      grid-column: 2/3;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));

      @include responsiveMin(desktop) {
        grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
      }
    }
  }

  &__search {
    width: 100%;
    position: absolute;
    bottom: -30px;
    left: 0;
    @include z-index(overlay);
    height: 60px;
    @include flex-row;

    @include responsive(phone) {
      height: 50px;
      bottom: -25px;
    }

    &-container {
      height: 100%;
      width: 60%;

      @include responsive(phone) {
        width: 80%;
      }
    }
  }
}
</style>
