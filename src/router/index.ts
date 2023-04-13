import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import viewsOptions from "./viewsOption";

const routes: RouteRecordRaw[] = [
   { path: "/login", name: "login", component: () => import("@views/common/login.vue") },
   ...viewsOptions,
   {
      path: "/",
      redirect: { name: "home" },
   },
   {
      path: "/404",
      component: () => import("@views/common/404.vue"),
   },
   {
      path: "/:pathMatch(.*)",
      redirect: "/404",
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
   const store = localStorage.getItem("store");
   const { token } = store ? JSON.parse(store) : { token: null };

   if (to.name !== "login" && !Boolean(token)) {
      next({ name: "login" });
   } else {
      next();
   }
});

export default router;
