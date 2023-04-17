<template>
  <h1>Hello From Home</h1>
  <div>
    <div
      v-for="(item, index) in numbers"
      :ref="setRefs"
      :style="{ height: '50px', color: 'red', display: 'block' }"
    >
      <div v-if="visible[index]">
        {{ item.number }}
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { Slider } from "@/shared/ui/slider";
import VirtualList from "@/shared/ui/virtual-list.vue";
import { useHomePage } from "./model";

export default {
  name: "Home",
  components: { Slider, VirtualList },
  setup() {
    const { name, email, onSubmit } = useHomePage();
    const numbers = ref(
      Array.from({ length: 500 }).map((_, index) => ({ number: index }))
    );

    let refs = [];
    const visible = ref([true, true, true, true, true]);

    onMounted(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = refs.indexOf(entry.target);
            if (entry.isIntersecting) {
              visible.value[index] = entry.isIntersecting;
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );

      refs.forEach((ref) => observer.observe(ref));
    });

    const setRefs = (element) => {
      if (element) {
        refs.push(element);
      }
    };

    return {
      name,
      email,
      onSubmit,
      numbers,
      setRefs,
      visible,
    };
  },
};
</script>
