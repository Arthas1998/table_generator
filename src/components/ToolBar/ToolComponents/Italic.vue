<template>
  <span class="navigation-container">
    <el-button @click="italicOrNormal" text>
      <SvgIcon name="Italic" class="tool-bar-icon" />
    </el-button>
  </span>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import jspreadsheet from "jspreadsheet-ce";
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const spreadsheetStore = useSpreadsheetStore();

const italicOrNormal = () => {
  const cells = spreadsheetStore.getRectangleCells(spreadsheetStore.selectCells)
  for (let i = 0, len = cells.length, cell = ''; i < len; i++) {
    cell = jspreadsheet.getColumnNameFromId(cells[i]);
    spreadsheetStore.spreadsheetInstance.setStyle(cell, 'font-style', 'italic');
  }
  spreadsheetStore.updateStore()
  console.log('font-style', 'italic')
}
</script>


<style scoped>

</style>