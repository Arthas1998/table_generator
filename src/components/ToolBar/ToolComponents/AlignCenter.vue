<template>
  <span class="navigation-container">
    <el-button @click="alignCenter" text>
      <SvgIcon name="AlignCenter" class="tool-bar-icon" />
    </el-button>
  </span>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import jspreadsheet from "jspreadsheet-ce";
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const spreadsheetStore = useSpreadsheetStore();

const alignCenter = () => {
  const cells = spreadsheetStore.getRectangleCells(spreadsheetStore.selectCells)
  for (let i = 0, len = cells.length, cell = ''; i < len; i++) {
    cell = jspreadsheet.getColumnNameFromId(cells[i]);
    spreadsheetStore.spreadsheetInstance.setStyle(cell, 'text-align', 'center');
  }
  spreadsheetStore.updateStore()
  console.log('text-align: center')
}

</script>

<style scoped>

</style>