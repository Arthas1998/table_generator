<template>
  {{ spreadsheetStore.data }}<hr>
  {{ spreadsheetStore.columns }}<hr>
<!--  {{ tables }}<hr>-->
  <button @click="addRow">添加一行</button>
  <input type="file" @change="handleFileChange" accept=".csv" />
</template>

<script setup>
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const spreadsheetStore = useSpreadsheetStore();
// let data = spreadsheetStore.data
// let columns = spreadsheetStore.columns;

const addRow = () => {
  const spreadsheet = spreadsheetStore.spreadsheetInstance;
  if (spreadsheet) {
    spreadsheet.insertRow();  // 使用jspreadsheet实例的方法
  }
};
const handleFileChange = (event) => {
  const files = event.target.files;
  console.log(files);
}
</script>

<style scoped>

</style>