<template>
  <span class="navigation-container">
    <el-button @click="removeMerge" text>
      <SvgIcon name="SplitCells" class="tool-bar-icon" />
    </el-button>
  </span>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import { useSpreadsheetStore } from '@/stores/spreadsheet';
import jspreadsheet from "jspreadsheet-ce";

const spreadsheetStore = useSpreadsheetStore();

const removeMerge = () => {
  const cell = jspreadsheet.getColumnNameFromId(spreadsheetStore.selectCells[0]);
  spreadsheetStore.spreadsheetInstance.removeMerge(cell);
  console.log('Split cells')
}
</script>

<style scoped>

</style>