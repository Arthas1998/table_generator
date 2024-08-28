<template>
  <el-menu mode="horizontal" :default-active="activeName" @select="selectedIndex" background-color=""
           text-color="" active-text-color="">
    <el-menu-item index="latex">LaTeX</el-menu-item>
    <el-menu-item index="markdown">Markdown</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";

const activeName = ref('latex')
const router = useRouter()

const selectedIndex = (index) => {
  activeName.value = index;
  router.push(`/${index}`);
  console.log("index:", index, "activeName:", activeName.value)
}
</script>

<style scoped>

</style>
