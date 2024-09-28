<template>
  <span class="navigation-container">
    <el-button @click="boldOrNormal" text>
      <SvgIcon name="Bold" class="tool-bar-icon" />
    </el-button>
  </span>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import jspreadsheet from "jspreadsheet-ce";
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const spreadsheetStore = useSpreadsheetStore();

const boldOrNormal = () => {
  const cells = spreadsheetStore.getRectangleCells(spreadsheetStore.selectCells)
  for (let i = 0, len = cells.length, cell = ''; i < len; i++) {
    cell = jspreadsheet.getColumnNameFromId(cells[i]);
    spreadsheetStore.spreadsheetInstance.setStyle(cell, 'font-weight', 'bold');
  }
  spreadsheetStore.updateStore()
  console.log('font-weight', 'bold')
}
</script>


<style scoped>

</style>