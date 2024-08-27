<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <div class="logo">My Logo</div>
        <Navigation />
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name:'App',
  components:{
    Navigation,
  }
};
</script>

<style scoped>
.common-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  //background-color: #f5f5f5;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
}
</style>

