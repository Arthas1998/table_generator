<script setup>
import {ArrowDown,
        RefreshRight,
        RefreshLeft
} from '@element-plus/icons-vue'

</script>

<template>
  <el-dropdown trigger="click">
    <el-button text>
      Edit<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>

        <el-dropdown-item>
          <el-icon><RefreshLeft /></el-icon>
          Undo
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><RefreshRight /></el-icon>
          Repeat
        </el-dropdown-item>

        <el-dropdown-item divided>
          <el-checkbox v-model="autosave" label="Autosave table locally" size="large"/>
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