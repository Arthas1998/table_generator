<template>
    <el-menu mode="horizontal" :default-active="navStore.activeName" @select="selectedIndex" background-color=""
             text-color="" active-text-color="" :ellipsis="false">
      <el-menu-item index="latex">
        LaTeX
      </el-menu-item>
      <el-menu-item index="markdown">
        Markdown
      </el-menu-item>
    </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useNavStore } from "@/stores/NavRouter.js";
import SvgIcon from "@/components/SvgIcon.vue";

const navStore = useNavStore()
const router = useRouter()

const selectedIndex = (index) => {
  navStore.switchPage(index)
  router.push(`/${index}`);
  console.log("index:", index, "activeName:", navStore.activeName)
}
</script>

<style scoped>

</style>
