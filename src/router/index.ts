import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";

const routes: RouteRecordRaw[] = [
  {
    path: "/voorbeeld",
    name: "voorbeeld",
    component: () => import("~/views/home/voorbeeld.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("~/views/home/index.vue"),
  },
  {
    path: "/movingnowhere",
    name: "movingnowhere",
    component: () => import("~/views/home/movingNowhere.vue"),
  },
];

const index = createRouter({
  history: createWebHistory(),
  routes,
});
index.beforeEach((to, from) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

index.afterEach((to, from) => {
  NProgress.done();
});

export default index;
