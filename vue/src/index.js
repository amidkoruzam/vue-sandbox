import { createApp } from "vue";
import App from "./app.vue";
import { router } from "./pages";

const app = createApp(App);

app.use(router).mount("#app");
