/*
 * @Author: xiaolu
 * @Date: 2022-04-01 10:32:13
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-04-01 10:33:28
 * @Description: 折线图默认配置项
 */

export function getDefaultLineOptions() {
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
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };
}
