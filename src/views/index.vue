<!--
 * @Author: xiaolu
 * @Date: 2022-04-06 15:09:32
 * @LastEditors: xiaolu
 * @LastEditTime: 2022-04-11 10:24:19
 * @Description: 关系图演示
-->

<template>
  <header>
    <a-input-search
      v-model:value="query"
      placeholder="请输入关键词搜索"
      enter-button
      @search="onSearch"
      class="search-query"
    />
  </header>
  <div class="chart-content" ref="relationChart"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps } from "vue";
import G6 from "@antv/g6";
import { LoginAPI } from "@/axios/apis";

// props
const props = defineProps({
  type: String,
});

// data
let graph: any = null;
const data = {
  nodes: [{ id: "root", label: "跟节点", size: 50 }],
  edges: [{ source: "node0", target: "node1" }],
};
const relationChart = ref();
const query = ref<string>("");

// 生命周期
onMounted(() => {
  graph = new G6.Graph({
    container: relationChart.value,
    width: relationChart.value.clientWidth,
    height: relationChart.value.clientHeight,
    layout: {
      type: "force",
      preventOverlap: true,
      linkDistance: (d) => {
        return 200;
      },
      nodeStrength: (d) => {
        return -50;
      },
      edgeStrength: (d) => {
        return 0.7;
      },
    },
    modes: {
      default: ["zoom-canvas"],
    },
  });

  const nodes = data.nodes;
  graph.data({
    nodes,
    edges: data.edges.map(function (edge, i) {
      edge.id = "edge" + i;
      return Object.assign({}, edge);
    }),
  });
  graph.render();

  graph.on("node:dragstart", function (e) {
    graph.layout();
    refreshDragedNodePosition(e);
  });
  graph.on("node:drag", function (e) {
    refreshDragedNodePosition(e);
  });
  graph.on("node:dragend", function (e) {
    e.item.get("model").fx = null;
    e.item.get("model").fy = null;
  });

  if (typeof window !== "undefined")
    window.onresize = () => {
      if (!graph || graph.get("destroyed")) return;
      if (
        !relationChart.value ||
        !relationChart.value.scrollWidth ||
        !relationChart.value.scrollHeight
      )
        return;
      graph.changeSize(
        relationChart.value.scrollWidth,
        relationChart.value.scrollHeight
      );
    };

  function refreshDragedNodePosition(e) {
    const model = e.item.get("model");
    model.fx = e.x;
    model.fy = e.y;
  }
});

// methods
const onSearch = async (searchValue: string) => {
  console.log("use value", searchValue);
  console.log("use value", query.value);
  const result = await getRelationChartData(query.value);
  data.nodes = [];
  data.edges = [];
  if (result.node && result.node.length > 0) {
    data.nodes.push(
      ...result.node.map((el: any) => ({
        id: el.uuid,
        label: el.name,
        size: el.name === query.value ? 100 : 50,
      }))
    );
  }
  if (result.relationship && result.relationship.length > 0) {
    data.edges.push(
      ...result.relationship.map((el: any) => ({
        source: el.sourceId,
        target: el.targetId,
        label: el.name,
      }))
    );
  }
  const nodes = data.nodes;
  graph.data({
    nodes,
    edges: data.edges.map(function (edge, i) {
      edge.id = "edge" + i;
      return Object.assign({}, edge);
    }),
  });
  graph.render();
};

// 获取关系图数据
const getRelationChartData = async (query: string) => {
  const data = {
    domain: "Person",
    nodeName: query,
    matchType: "1",
  };
  const result = await LoginAPI.getRelationData(data);
  console.error(result);
  return result;
};
</script>

<style scoped>
.chart-content {
  width: 100%;
  height: 1000px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.search-query {
  width: 250px;
  margin-left: 15px;
}
</style>
