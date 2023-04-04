import { onMounted } from "vue";
import { logger } from "@/shared/logger";

export const useHomePage = () => {
  onMounted(() => logger.info("Home page mounted"));
};
