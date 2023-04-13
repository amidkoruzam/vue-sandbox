import { onMounted, ref } from "vue";
import { logger } from "@/shared/logger";
import { track } from "@/shared/analytics";

export const useHomePage = () => {
  onMounted(() => logger.info("Home page mounted"));
  onMounted(() => track("homepage_mounted", { page: "home" }));

  const name = ref("");
  const email = ref("");

  const onSubmit = () => {
    console.log("submit", { name: name.value, email: email.value });
  };

  return { name, email, onSubmit };
};
