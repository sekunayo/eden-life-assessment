<template>
  <div class="productListing">
    <product-header></product-header>
    <div class="productListing__hero">
      <div class="productListing__search">
        <div class="productListing__search-container">
          <search-input></search-input>
        </div>
      </div>
    </div>
    <div class="productListing__card-container">
      <div class="productListing__card-container-inner">
        <div
          v-for="(eachImage, index) in images"
          :key="index + 1"
          class="productListing__card"
        >
          <img class="productListing__card-image" :src="eachImage" alt="dog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "../../components/SearchInput/SearchInput.vue";
import ProductHeader from "../../components/Header/Header.vue";
import axios from "axios";

export default defineComponent({
  name: "ProductListing",
  components: {
    SearchInput,
    ProductHeader,
  },
  data(): any {
    return {
      images: null,
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
          const newArray = [].concat.apply([], array);
          this.images = newArray.slice(0, 100);
        });
      });
    },
    // getRandomImages : function () {

    // }
  },
  mounted() {
    this.getImages();
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
    margin-top: 100px;

    @include responsive(phone) {
      margin-top: 50px;
    }

    &-inner {
      display: grid;
      grid-template-rows: repeat(auto-fit, auto);
      grid-gap: 10px;
      width: 100%;
      height: 100%;
      grid-column: 2/3;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));

      @include responsiveMin(desktop) {
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      }
    }
  }

  &__search {
    width: 100%;
    position: absolute;
    bottom: -50px;
    left: 0;
    @include z-index(overlay);
    height: 100px;
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
    background-color: $col-secondary-5;
    height: calc(100vh - 100px);
    width: 100%;
    position: relative;
  }
}
</style>
