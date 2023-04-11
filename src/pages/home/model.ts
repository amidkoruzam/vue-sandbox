import { onMounted } from "vue";
import { logger } from "@/shared/logger";
import { track } from "@/shared/analytics";

export const useHomePage = () => {
  onMounted(() => logger.info("Home page mounted"));
  onMounted(() => track("homepage_mounted", { page: "home" }));
};
