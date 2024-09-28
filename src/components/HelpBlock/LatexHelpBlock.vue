<template>
  {{ spreadsheetStore.data }}<hr>
  {{ spreadsheetStore.columns }}<hr>
  {{ spreadsheetStore.style }}<hr>
<!--  {{ tables }}<hr>-->
  <button @click="addRow">添加一行</button>
  <input type="file" @change="handleFileChange" accept=".csv" />
  <div><button @click="handleSave">保存文件</button></div>
</template>

<script setup>
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const spreadsheetStore = useSpreadsheetStore();
// let data = spreadsheetStore.data
// let columns = spreadsheetStore.columns;

const addRow = () => {
  const spreadsheet = spreadsheetStore.spreadsheetInstance;
  if (spreadsheet) {
    // spreadsheet.insertRow(1, 2);  // 使用jspreadsheet实例的方法
    spreadsheet.insertColumn(1, 2, false, { type: 'text', width: 100 });
    spreadsheetStore.columns = spreadsheet.options.columns;
  }
};
const handleFileChange = (event) => {
  const files = event.target.files;
  console.log(files);
}
const handleSave = () => {
  const customTable = {
    data: spreadsheetStore.data,
    columns: spreadsheetStore.columns,
    style: spreadsheetStore.style,
  }
  const jsonData = JSON.stringify(customTable, null, 2);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'person.json'); // 设置下载的文件名
  // 将a标签添加到文档中（这一步不是必需的，但有时候可以避免某些浏览器的兼容性问题）
  document.body.appendChild(link);
  // 模拟点击a标签
  link.click();
  // 清理：从文档中移除a标签，并释放Blob URL
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

</script>

<style scoped>

</style>