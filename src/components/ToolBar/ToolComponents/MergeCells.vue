<template>
  <span class="navigation-container">
    <el-button @click="mergeCell" text>
      <SvgIcon name="MergeCells" class="tool-bar-icon" />
    </el-button>
  </span>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
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

</script>


<style scoped>

</style>