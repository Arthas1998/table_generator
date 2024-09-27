<template>
  <el-dropdown trigger="click">
    <el-button text>
      Table<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>

        <el-dropdown-item @click="setSize">
          <el-icon><Grid /></el-icon>
          Set size
        </el-dropdown-item>

        <el-dropdown-item @click="cleanTable" divided>
          <el-icon><Delete /></el-icon>
          Clear table
        </el-dropdown-item>

        <el-dropdown-item @click="transposeTable" divided>
          Transpose table
        </el-dropdown-item>

      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import {ArrowDown,
        Delete,
        Grid
} from '@element-plus/icons-vue'
import { useSpreadsheetStore } from "@/stores/spreadsheet.js";
import jspreadsheet from "jspreadsheet-ce";
import column from "@/components/MenuBar/MenuComponents/Column.vue";

const spreadsheetStore = useSpreadsheetStore();

//TODO: Complete the set size function
const setSize = () => {}

const cleanTable = () => {
  const columnData = Array(spreadsheetStore.data.length).fill('')
  for (let i = 0; i < spreadsheetStore.columns.length; i++) {
    spreadsheetStore.spreadsheetInstance.setColumnData(i, columnData);
  }
  spreadsheetStore.updateStore();
  console.log('Clear table');
};

const transposeTable = () => {
    const currentData = spreadsheetStore.spreadsheetInstance.getData();
    const stringData = currentData.map(row => row.map(cell => String(cell)));
    const transposedData = stringData[0].map((_, colIndex) => stringData.map(row => row[colIndex]));
    const newColumns = Array(transposedData[0].length).fill({ type: 'text', width: 100 });
    const newStyle = {};

    spreadsheetStore.spreadsheetInstance.destroy();
    spreadsheetStore.spreadsheetInstance = jspreadsheet(spreadsheetStore.spreadsheetInstance.el, {
      data: transposedData,
      columns: newColumns,
      style: newStyle,
      onselection: spreadsheetStore.updateSelect,
    })
    spreadsheetStore.updateStore();
    console.log('Transpose table');
};

</script>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>