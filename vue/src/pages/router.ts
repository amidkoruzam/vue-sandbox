import { createRouter, createWebHistory } from "vue-router";
import { HomeRoute } from "./home";
import { paths } from "./paths";

const routes = [{ path: paths.home(), component: HomeRoute }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
