<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<template>
  <el-dropdown trigger="click">
    <el-button text>
      File<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>New table...</el-dropdown-item>

        <el-dropdown-item divided>Import CSV file</el-dropdown-item>
        <el-dropdown-item>Paste table data</el-dropdown-item>
        <el-dropdown-item>From Latex code</el-dropdown-item>

        <el-dropdown-item divided>Save table...</el-dropdown-item>
        <el-dropdown-item>Load table...</el-dropdown-item>

        <el-dropdown-item divided>Download as CSV</el-dropdown-item>

        <el-dropdown-item divided>Create an example table</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>