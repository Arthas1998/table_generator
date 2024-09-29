<template>
  <el-dropdown trigger="click">
    <el-button text>
      Cell<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="mergeCell">
          Merge cells
        </el-dropdown-item>
        <el-dropdown-item @click="removeMerge">
          Split cells
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useSpreadsheetStore } from '@/stores/spreadsheet';
import jspreadsheet from "jspreadsheet-ce";

const spreadsheetStore = useSpreadsheetStore();

const mergeSize = (x, y) => {
  let num = 0;
  if (x <= y) {
    num = y - x + 1;
  }
  else {
    num = x - y + 1
  }
  return num;
}

const mergeCell = () => {
  const colSize = mergeSize(
      spreadsheetStore.selectCells[0][0],
      spreadsheetStore.selectCells[1][0]
  );
  const rowSize = mergeSize(
      spreadsheetStore.selectCells[0][1],
      spreadsheetStore.selectCells[1][1]
  );
  const cell = jspreadsheet.getColumnNameFromId(spreadsheetStore.selectCells[0]);
  spreadsheetStore.spreadsheetInstance.setMerge(cell, colSize, rowSize);
  console.log('Merge cells')
}

const removeMerge = () => {
  const cell = jspreadsheet.getColumnNameFromId(spreadsheetStore.selectCells[0]);
  spreadsheetStore.spreadsheetInstance.removeMerge(cell);
  console.log('Split cells')
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