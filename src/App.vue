<template>
  <div>
    <el-container>
      <el-header>
        <div class="navigation-container">
          <span class="logo">
            <SvgIcon name="Logo" class="title-and-logo" />
          </span>
          <span class="title">Table Generator</span>
          <Navigation />
        </div>
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
import SvgIcon from "@/components/SvgIcon.vue";
</script>

<style scoped>
.logo{
  display: inline;
  font-size: 24px;
}
.title{
  display: inline;
  font-size: 24px;
  color: #1c93ce;
}
.navigation-container {
  display: flex;
  align-items: center;
}
</style>
