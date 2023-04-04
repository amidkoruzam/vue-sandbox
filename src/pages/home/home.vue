<template>
  <h1>Hello From Home</h1>
</template>

<script>
import { useHomePage } from "./model";

export default {
  name: "Home",
  setup() {
    useHomePage();

    return {};
  },
};
</script>
