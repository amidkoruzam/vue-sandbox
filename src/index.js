import { createApp } from "vue";
import App from "./app.vue";
import { router } from "./pages";
import { logger } from "./shared/logger";

const app = createApp(App);

app.config.errorHandler = (err) => {
  logger.error(err);
};

app.use(router).mount("#app");
