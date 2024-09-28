<template>
  <el-dropdown trigger="click">
    <el-button text>
      Column<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>

        <el-dropdown-item @click="insertLeftCol">
          <el-icon><Back /></el-icon>
          Insert to the left
        </el-dropdown-item>

        <el-dropdown-item @click="insertRightCol">
          <el-icon><Right /></el-icon>
          Insert to the right
        </el-dropdown-item>

        <el-dropdown-item @click="deleteCol" divided>
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
         Back,
         Right
} from '@element-plus/icons-vue'
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const spreadsheetStore = useSpreadsheetStore();

const insertLeftCol = () => {
  const colNum = spreadsheetStore.selectCells[0][0];
  spreadsheetStore.spreadsheetInstance.insertColumn(1, colNum, true, { type: 'text', width: 70 });
  spreadsheetStore.updateStore()
}

const insertRightCol = () => {
  const colNum = spreadsheetStore.selectCells[0][0];
  spreadsheetStore.spreadsheetInstance.insertColumn(1, colNum, false, { type: 'text', width: 70 });
  spreadsheetStore.updateStore()
}

const deleteColNum = (x, y) => {
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

const deleteCol = () => {
  const colNum = deleteColNum(
      spreadsheetStore.selectCells[0][0],
      spreadsheetStore.selectCells[1][0],
  );
  spreadsheetStore.spreadsheetInstance.deleteColumn(colNum[0], colNum[1]);
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