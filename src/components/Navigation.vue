<template>
  <el-menu mode="horizontal" :default-active="activeName" @select="selectedIndex" background-color=""
           text-color="" active-text-color="">
    <el-menu-item index="latex">LaTeX</el-menu-item>
    <el-menu-item index="markdown">Markdown</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('latex')

const selectedIndex = (index, indexPath) => {
  console.log(index, indexPath)
}
</script>

<style scoped>
.demo-tabs {
  flex: 1;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
