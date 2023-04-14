<template>
  <div class="slider">
    <div class="slider__container">
      <template>
        <div class="carousel-container">
          <div class="carousel-content">
            <slot></slot>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Slider",
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
