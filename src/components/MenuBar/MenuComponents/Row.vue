<script setup>
import { ArrowDown,
  Delete,
  Top,
  Bottom
} from '@element-plus/icons-vue'

</script>

<template>
  <el-dropdown trigger="click">
    <el-button text>
      Row<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>

        <el-dropdown-item>
          <el-icon><Top /></el-icon>
          Insert above
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><Bottom /></el-icon>
          Insert below
        </el-dropdown-item>

        <el-dropdown-item divided>
          <el-icon><Delete /></el-icon>
          Remove
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