/*
 * @Author: xiaolu
 * @Date: 2022-03-25 15:21:55
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-04-06 15:53:29
 * @Description: main 入口文件
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import ECharts from "vue-echarts";
import { use } from "echarts/core";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import App from "./App.vue";
import router from "./router";

// Echarts
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, PieChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  BarChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
]);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Antd);
app.component("v-chart", ECharts);

app.mount("#app");
