<template>
  <header>
    <!-- <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="关系图演示1">
        <RelationChart></RelationChart>
      </a-tab-pane>
    </a-tabs> -->
    <HelloWorld></HelloWorld>
  </header>
  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import { useCounterStore } from "@/stores/counter";
import { ref, reactive } from "vue";

const activeKey = ref("1");
const counter = useCounterStore();
console.error(counter.counter);
</script>
