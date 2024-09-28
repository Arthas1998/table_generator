<template>
  <span class="navigation-container">
    <el-button @click="alignLeft" text>
      <SvgIcon name="AlignLeft" class="tool-bar-icon" />
    </el-button>
  </span>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import { useSpreadsheetStore } from '@/stores/spreadsheet';
import jspreadsheet from "jspreadsheet-ce";

const spreadsheetStore = useSpreadsheetStore();

const alignLeft = () => {
  const cells = spreadsheetStore.getRectangleCells(spreadsheetStore.selectCells)
  for (let i = 0, len = cells.length, cell = ''; i < len; i++) {
    cell = jspreadsheet.getColumnNameFromId(cells[i]);
    spreadsheetStore.spreadsheetInstance.setStyle(cell, 'text-align', 'left');
  }
  spreadsheetStore.updateStore()
  console.log('text-align: left')
}

</script>

<style scoped>

</style>