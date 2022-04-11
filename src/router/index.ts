/*
 * @Author: xiaolu
 * @Date: 2022-03-25 15:21:55
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-04-11 10:49:27
 * @Description: router 路由配置
 */

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/HelloWorld.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
