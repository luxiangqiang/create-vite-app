/*
 * @Author: xiaolu
 * @Date: 2022-04-01 09:47:54
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-04-01 10:34:14
 * @Description: 柱状图配置项
 */

export function getDefaultBarOptions() {
  return {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
}
