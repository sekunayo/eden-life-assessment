<template>
  <div class="hero">
    <img src="../../assets/images/dogs-1.jpg" alt="hero" />
    <div class="hero__description">
      <div class="hero__description-container">
        <h1 class="hero__description-title">Puppyes</h1>
        <p class="hero__description-subtitle">
          Best place to find different breeds of dogs
        </p>
        <div class="hero__search-container">
          <form @submit.prevent="onSumbit" class="searchInput__form">
            <div class="searchInput__form-icon">
              <button
                aria-label="search"
                type="submit"
                @click="onSubmit"
                class="searchInput__form-icon-button"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
            <input
              class="searchInput"
              id="search"
              :name="searchValue"
              v-model="searchValue"
              type="text"
              placeholder="Search"
              ref="onFocused"
            />
          </form>
          <div v-if="searchValue" class="hero__search-container-results">
            <transition name="slide-fade">
              <ul class="hero__search-container-results-lists">
                <li
                  @click="onClick(string)"
                  v-for="(string, index) in searchArray"
                  :key="index"
                >
                  {{ string }}
                </li>
              </ul>
            </transition>
          </div>
        </div>
        <p class="hero__description-caption">
          <span class="hero__description-caption-title">Examples</span> : German
          Shepherd, Bulldog, Poodle, Pomeranian
        </p>
      </div>
    </div>
    <div class="hero__overlay"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "ProductHero",
  created: function () {
    window.addEventListener("keyup", () => {
      this.search(this.searchValue);
    });
    this.fetchBreedsList();
    this.search(this.searchValue);
  },
  data() {
    return {
      onFocused: ref(),
      searchValue: "",
    };
  },
  computed: {
    ...mapGetters(["allBreedsList", "searchArray"]),
  },
  methods: {
    ...mapActions(["fetchBreedsList", "search", "fetchBreedsListByBreed"]),
    onSubmit() {
      this.fetchBreedsListByBreed(this.searchValue.toLowerCase());
      this.searchValue = "";
    },
    onClick(value) {
      this.fetchBreedsListByBreed(value.toLowerCase());
      this.searchValue = "";
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/variables.scss";
@import "../../styles/abstracts/mixins.scss";

.hero {
  height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);

  @include responsive(phone) {
    height: calc(80vh - 100px);
  }

  &__overlay {
    background-color: rgba($color: #000000, $alpha: 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    @include z-index(overlay);
  }

  &__description {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    @include z-index(underlay);
    @include flex-row;

    &-title {
      font-weight: 700;
      font-size: 2.875rem;
      color: $col-white;
    }

    &-subtitle {
      font-weight: 400;
      font-size: 1.125rem;
      color: $col-white;
    }

    &-caption {
      font-weight: 400;
      font-size: 0.9375rem;
      color: $col-white;

      &-title {
        font-weight: 600;
      }
    }

    &-container {
      width: 70%;
      @include grid-row(3, auto);
      grid-row-gap: 15px;
    }
  }

  & img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__search {
    &-container {
      height: 54px;
      width: 100%;
      position: relative;

      &-results {
        width: 100%;
        background-color: $col-grey-3;
        height: auto;
        padding: 20px;
        @include border-radius(4px);
        position: absolute;
        top: 100%;
        left: 0;
        @include z-index(dropdown-menu);
        margin-top: 20px;

        &-lists {
          @include grid-row(auto-fit, auto);
          grid-row-gap: 10px;

          & li:hover {
            color: $col-secondary-6;
            cursor: pointer;
          }
        }
      }
    }
  }
}

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
    background-color: $col-grey-3;
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
