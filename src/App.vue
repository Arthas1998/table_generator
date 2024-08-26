<template>
  <div class="common-layout">
    <el-container>
      <el-header>
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

.el-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
}

.el-main {
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
  overflow-y: auto;
}
</style>
