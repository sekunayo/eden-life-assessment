<template>
  <div class="productListing">
    <product-header></product-header>
    <product-hero></product-hero>
    <div class="productListing__card-container">
      <div class="productListing__card-container-inner">
        <div
          v-for="(eachImage, index) in imagesArray"
          :key="index + 1"
          class="productListing__card"
        >
          <img
            class="productListing__card-image"
            lazy="loaded"
            v-lazy="eachImage"
            alt="dog"
          />
        </div>
      </div>
    </div>
    <div class="productListing__pagination">
      <pagination
        v-model="page"
        :records="imagesArray.length"
        :per-page="100"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductHeader from "../../components/Header/Header.vue";
import ProductHero from "../../components/Hero/Hero.vue";
import { mapGetters } from "vuex";
import Pagination from "v-pagination-3";

export default defineComponent({
  name: "ProductListing",
  components: {
    ProductHeader,
    ProductHero,
    Pagination,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapGetters(["imagesArray", "loading", "breedNames"]),
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
  // display: none;
  // @include responsiveMin(desktop) {
  //   display: block;
  // }

  &__pagination {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: auto;
    // @include flex-row;
  }

  &__card {
    width: 100%;
    height: auto;

    &-image {
      width: 100%;
      height: 350px;
      background-color: #dddbdd;

      &[lazy="loaded"] {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
