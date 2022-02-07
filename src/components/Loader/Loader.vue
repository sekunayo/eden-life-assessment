<template>
  <div class="loader__container">
    <div class="loader__container-inner">
      <div class="blobs">
        <div class="blob-center"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
});
</script>

<style lang="scss" scoped>
@import "../../styles/abstracts/variables.scss";
@import "../../styles/abstracts/mixins.scss";

.blobs {
  filter: url(#goo);
  width: 18.75rem;
  height: 18.75rem;
  position: relative;
  overflow: hidden;
  border-radius: 70px;
  transform-style: preserve-3d;

  @include responsiveMin(desktop) {
    width: 50rem;
    height: 50rem;
  }

  .blob-center {
    transform-style: preserve-3d;
    position: absolute;
    background-color: $col-secondary-6;
    top: 50%;
    left: 50%;
    width: 1.875rem;
    height: 1.875rem;
    transform-origin: left top;
    transform: scale(0.9) translate(-50%, -50%);
    animation: blob-grow linear 3.4s infinite;
    border-radius: 50%;
    box-shadow: 0 -10px 40px -5px $col-secondary-6;

    @include responsiveMin(desktop) {
      width: 12rem;
      height: 12rem;
    }
  }
}

// Blob item
.blob {
  position: absolute;
  background-color: $col-secondary-6;
  top: 50%;
  left: 50%;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  animation: blobs ease-out 3.4s infinite;
  transform: scale(0.9) translate(-50%, -50%);
  transform-origin: center top;
  opacity: 0;

  @include responsiveMin(desktop) {
    width: 12rem;
    height: 12rem;
  }

  @for $i from 1 to 6 {
    &:nth-child(#{$i}) {
      animation-delay: $i * 0.2 + s;
    }
  }
}

$left: calc(-330px - 50%);
$right: calc(330px - 50%);

@keyframes blobs {
  0% {
    opacity: 0;
    transform: scale(0) translate($left, -50%);
  }
  1% {
    opacity: 1;
  }
  35%,
  65% {
    opacity: 1;
    transform: scale(0.9) translate(-50%, -50%);
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(0) translate($right, -50%);
  }
}

@keyframes blob-grow {
  0%,
  39% {
    transform: scale(0) translate(-50%, -50%);
  }
  40%,
  42% {
    transform: scale(1, 0.9) translate(-50%, -50%);
  }
  43%,
  44% {
    transform: scale(1.2, 1.1) translate(-50%, -50%);
  }
  45%,
  46% {
    transform: scale(1.3, 1.2) translate(-50%, -50%);
  }
  47%,
  48% {
    transform: scale(1.4, 1.3) translate(-50%, -50%);
  }
  52% {
    transform: scale(1.5, 1.4) translate(-50%, -50%);
  }
  54% {
    transform: scale(1.7, 1.6) translate(-50%, -50%);
  }
  58% {
    transform: scale(1.8, 1.7) translate(-50%, -50%);
  }
  68%,
  70% {
    transform: scale(1.7, 1.5) translate(-50%, -50%);
  }
  78% {
    transform: scale(1.6, 1.4) translate(-50%, -50%);
  }
  80%,
  81% {
    transform: scale(1.5, 1.4) translate(-50%, -50%);
  }
  82%,
  83% {
    transform: scale(1.4, 1.3) translate(-50%, -50%);
  }
  84%,
  85% {
    transform: scale(1.3, 1.2) translate(-50%, -50%);
  }
  86%,
  87% {
    transform: scale(1.2, 1.1) translate(-50%, -50%);
  }
  90%,
  91% {
    transform: scale(1, 0.9) translate(-50%, -50%);
  }
  92%,
  100% {
    transform: scale(0) translate(-50%, -50%);
  }
}

.loader {
  &__container {
    height: 100vh;
    width: 100%;
    @include flex-row;
    overflow-y: hidden;

    &-inner {
      @include column;
    }
  }
}
</style>
