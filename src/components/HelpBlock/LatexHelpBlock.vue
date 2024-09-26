<template>
  {{ data }}<hr>
  {{ columns }}<hr>
<!--  {{ tables }}<hr>-->
  <button @click="addRow">添加一行</button>
</template>

<script setup>
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const spreadsheetStore = useSpreadsheetStore();
let data = spreadsheetStore.data
let columns = spreadsheetStore.columns;

const addRow = () => {
  const spreadsheet = spreadsheetStore.spreadsheetInstance;
  if (spreadsheet) {
    spreadsheet.insertRow();  // 使用jspreadsheet实例的方法
  }
};
</script>

<style scoped>

</style>