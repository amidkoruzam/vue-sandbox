<template>
  <div>
    <slot :items="passed"></slot>
    <div :style="{ height: boxHeight, width: '100%' }" ref="divRef"></div>
  </div>
</template>

<script>
import { onMounted, ref, watchEffect, computed, nextTick } from "vue";

export default {
  name: "VirtualList",
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemHeight: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const reversed = computed(() => {
      return props.items.slice().reverse();
    });

    const passed = ref([]);
    const divRef = ref();

    const boxHeight = computed(
      () => reversed.value.length * props.itemHeight + "px"
    );

    return {
      passed,
      boxHeight,
      divRef,
    };
  },
};
</script>
