<template>
  <div>
    <el-container>
      <el-header>
        <div>My Logo</div>
        <Navigation />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";



</script>

<style scoped>

</style>
