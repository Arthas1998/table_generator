<template>
  <span class="navigation-container">
    <el-button @click="underlineOrNormal" text>
      <SvgIcon name="Underline" class="tool-bar-icon" />
    </el-button>
  </span>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import jspreadsheet from "jspreadsheet-ce";
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const spreadsheetStore = useSpreadsheetStore();

const underlineOrNormal = () => {
  const cells = spreadsheetStore.getRectangleCells(spreadsheetStore.selectCells)
  for (let i = 0, len = cells.length, cell = ''; i < len; i++) {
    cell = jspreadsheet.getColumnNameFromId(cells[i]);
    spreadsheetStore.spreadsheetInstance.setStyle(cell, 'text-decoration', 'underline');
  }
  spreadsheetStore.updateStore()
  console.log('text-decoration', 'underline')
}
</script>


<style scoped>

</style>