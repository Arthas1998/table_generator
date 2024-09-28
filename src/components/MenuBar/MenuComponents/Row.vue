<template>
  <el-dropdown trigger="click">
    <el-button text>
      Row<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>

        <el-dropdown-item @click="insertAboveRow">
          <el-icon><Top /></el-icon>
          Insert above
        </el-dropdown-item>

        <el-dropdown-item @click="insertBelowRow">
          <el-icon><Bottom /></el-icon>
          Insert below
        </el-dropdown-item>

        <el-dropdown-item @click="deleteRow" divided>
          <el-icon><Delete /></el-icon>
          Remove
        </el-dropdown-item>

      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ArrowDown,
  Delete,
  Top,
  Bottom
} from '@element-plus/icons-vue'
import { useSpreadsheetStore } from "@/stores/spreadsheet.js";

const spreadsheetStore = useSpreadsheetStore();

const insertAboveRow = () => {
  const rowNum = spreadsheetStore.selectCells[0][1];
  spreadsheetStore.spreadsheetInstance.insertRow(1, rowNum, true);
  spreadsheetStore.updateStore()
}

const insertBelowRow = () => {
  const rowNum = spreadsheetStore.selectCells[0][1];
  spreadsheetStore.spreadsheetInstance.insertRow(1, rowNum, false);
  spreadsheetStore.updateStore()
}

const deleteRowNum = (x, y) => {
  let serialNum = 0;
  let num = 0;
  if (x <= y) {
    serialNum = x;
    num = y - x + 1;
  }
  else {
    serialNum = y;
    num = x - y + 1
  }
  return [serialNum, num];
}

const deleteRow = () => {
  const rowNum = deleteRowNum(
      spreadsheetStore.selectCells[0][1],
      spreadsheetStore.selectCells[1][1],
  );
  spreadsheetStore.spreadsheetInstance.deleteRow(rowNum[0], rowNum[1]);
  spreadsheetStore.updateStore()
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