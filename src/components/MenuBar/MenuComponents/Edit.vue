<template>
  <el-dropdown trigger="click">
    <el-button text>
      Edit<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>

        <el-dropdown-item @click="undo">
          <el-icon><RefreshLeft /></el-icon>
          Undo
        </el-dropdown-item>

        <el-dropdown-item @click="repeat">
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

<script setup>
import {ArrowDown,
        RefreshRight,
        RefreshLeft
} from '@element-plus/icons-vue'
import { useSpreadsheetStore } from "@/stores/spreadsheet.js";

const spreadsheetStore = useSpreadsheetStore();

const undo = () => {
  spreadsheetStore.spreadsheetInstance.undo();
}

const repeat = () => {
  spreadsheetStore.spreadsheetInstance.redo();
}

</script>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>