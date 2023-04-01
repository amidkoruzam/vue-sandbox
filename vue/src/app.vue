<template>
  <h1 class="title">Hello World</h1>
</template>

<script>
export default {};
</script>

<style scoped lang="postcss">
.title {
  color: red;

  &::after {
    content: "!";
  }
}
</style>
