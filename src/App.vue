<template>
  <div>
    <el-container>
      <el-header>
        <div class="navigation-container">
          <span class="logo">
            <SvgIcon name="Logo" class="title-and-logo" />
          </span>
          <span class="title">Table Generator</span>
          <span><Navigation /></span>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <span class="temporary">©wuweihang</span>
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
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
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
.temporary {

  text-align: center;
}
</style>
