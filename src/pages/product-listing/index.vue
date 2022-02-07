<template>
  <div class="productListing">
    <product-header></product-header>
    <product-hero></product-hero>
    <div class="productListing__card-container">
      <div class="productListing__card-container-inner">
        <div
          v-for="(eachImage, index) in images"
          :key="index + 1"
          class="productListing__card"
        >
          <div class="shimmer__card" v-if="loading">
            <div class="shimmer"></div>
          </div>
          <img class="productListing__card-image" :src="eachImage" alt="dog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductHeader from "../../components/Header/Header.vue";
import ProductHero from "../../components/Hero/Hero.vue";
import axios from "axios";

export default defineComponent({
  name: "ProductListing",
  components: {
    ProductHeader,
    ProductHero,
  },
  data(): any {
    return {
      images: null,
      loading: true,
    };
  },
  methods: {
    getImages: function () {
      axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
        const array = Object.keys(response.data.message);
        const newArray = array.slice(0, 100);
        const endpoints = newArray.map((element) => {
          return axios.get(`https://dog.ceo/api/breed/${element}/images`);
        });
        Promise.all(endpoints).then((response: any) => {
          const array = response.map((element: any) => {
            return element.data.message;
          });
          this.images = [].concat.apply([], array);
          this.loading = false;
        });
      });
    },
  },
  mounted() {
    // this.getImages();
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/variables.scss";
@import "../../styles/abstracts/mixins.scss";

.shimmer {
  &__card {
    max-width: 100%;
    position: relative;
    height: 300px;
    background-color: #dddbdd;
  }
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -100%;
    bottom: 0;
    left: -100%;
    background-image: linear-gradient(
      to right,
      rgba(white, 0) 33.3%,
      rgba(white, 0.8),
      rgba(white, 0) 66.6%
    );
    animation: shimmer 1s infinite linear;
  }
}

@keyframes shimmer {
  from {
    transform: translateX(-33.3%);
  }
  to {
    transform: translateX(33.3%);
  }
}

.productListing {
  min-height: 100vh;
  width: 100%;
  background-color: $col-white;
  // display: none;
  // @include responsiveMin(desktop) {
  //   display: block;
  // }

  &__card {
    width: 100%;
    height: auto;

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
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

  &__hero {
    // background-color: $col-secondary-5;
    height: calc(100vh - 100px);
    width: 100%;
    position: relative;

    & img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
