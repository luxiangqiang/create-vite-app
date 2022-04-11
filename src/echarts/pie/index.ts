/*
 * @Author: xiaolu
 * @Date: 2022-04-01 09:47:32
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-04-01 10:34:49
 * @Description: 饼图默认配置项
 */

export function getDefaultPieOptions(data: any) {
  return {
    title: {
      text: "Traffic Sources",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
    },
    series: [
      {
        name: "111",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
}
