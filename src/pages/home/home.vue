<template>
  <h1>Hello From Home</h1>

  <form @submit.prevent="onSubmit">
    <div>
      <label for="name">Name</label>
      <input v-model="name" id="name" />
    </div>

    <div>
      <label for="email">Email</label>
      <input v-model="email" id="email" />
    </div>

    <div>
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
import { useHomePage } from "./model";

export default {
  name: "Home",
  setup() {
    const { name, email, onSubmit } = useHomePage();

    return {
      name,
      email,
      onSubmit,
    };
  },
};
</script>
