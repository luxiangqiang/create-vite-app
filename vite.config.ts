/*
 * @Author: xiaolu
 * @Date: 2022-03-25 15:21:55
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-04-06 17:43:36
 * @Description:
 */
import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import type { UserConfig } from "vite";

// 服务器地址
const SERVER_URL = "http://192.168.8.111:8080";

const config: UserConfig = {
  build: {
    target: "esnext",
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // 开启服务器代理，可以解决开发时的跨域问题
    proxy: {
      "/api/v1": {
        target: SERVER_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/api\/v1/, ""),
      },
    },
  },
};

export default config;
