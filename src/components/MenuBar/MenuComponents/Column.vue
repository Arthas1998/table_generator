<script setup>
import { ArrowDown,
         Delete,
         Back,
         Right
} from '@element-plus/icons-vue'

</script>

<template>
  <el-dropdown trigger="click">
    <el-button text>
      Column<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>

        <el-dropdown-item>
          <el-icon><Back /></el-icon>
          Insert to the left
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><Right /></el-icon>
          Insert to the left
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