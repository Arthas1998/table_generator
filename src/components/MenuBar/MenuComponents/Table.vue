<script setup>
import {ArrowDown,
        Delete,
        Grid
} from '@element-plus/icons-vue'

</script>

<template>
  <el-dropdown trigger="click">
    <el-button text>
      Table<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>

        <el-dropdown-item>
          <el-icon><Grid /></el-icon>
          Set size
        </el-dropdown-item>

        <el-dropdown-item divided>
          <el-icon><Delete /></el-icon>
          Clear table
        </el-dropdown-item>

        <el-dropdown-item divided>
          Transpose table
        </el-dropdown-item>

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