<template>
  <el-menu mode="horizontal" :default-active="activeName" @select="selectedIndex" background-color=""
           text-color="" active-text-color="">
    <el-menu-item index="latex">LaTeX</el-menu-item>
    <el-menu-item index="markdown">Markdown</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useNavRouteStore } from "@/stores/web.js";

const activeName = ref('latex')
const navRouteStore = useNavRouteStore()

const selectedIndex = (index, indexPath) => {
  navRouteStore.switchPage(indexPath[0])
  console.log("index", index, "indexPath", indexPath)
}
</script>

<style scoped>

</style>
