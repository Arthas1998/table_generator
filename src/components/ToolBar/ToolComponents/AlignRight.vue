<template>
  <span class="navigation-container">
    <el-button @click="alignRight" text>
      <SvgIcon name="AlignRight" class="tool-bar-icon" />
    </el-button>
  </span>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import { useSpreadsheetStore } from '@/stores/spreadsheet';
import jspreadsheet from "jspreadsheet-ce";

const spreadsheetStore = useSpreadsheetStore();

const alignRight = () => {
  const cells = spreadsheetStore.getRectangleCells(spreadsheetStore.selectCells)
  for (let i = 0, len = cells.length, cell = ''; i < len; i++) {
    cell = jspreadsheet.getColumnNameFromId(cells[i]);
    spreadsheetStore.spreadsheetInstance.setStyle(cell, 'text-align', 'right');
  }
  spreadsheetStore.updateStore()
  console.log('text-align: right')
}
</script>


<style scoped>

</style>