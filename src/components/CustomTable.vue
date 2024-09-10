<template>
  <div ref="spreadsheet"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSpreadsheetStore } from '../stores/spreadsheet';
import jspreadsheet from 'jspreadsheet-ce';

// 创建 ref 绑定到 DOM
const spreadsheetRef = ref(null);
const spreadsheetStore = useSpreadsheetStore();

onMounted(() => {
  // 初始化 Jspreadsheet
  const spreadsheetInstance = jspreadsheet(spreadsheetRef.value, {
    data: [['Apple', 1], ['Banana', 2]],
    columns: [
      { type: 'text', title: 'Item', width: 150 },
      { type: 'numeric', title: 'Quantity', width: 80 }
    ]
  });

  // 存储实例到 Pinia 中
  spreadsheetStore.setSpreadsheet(spreadsheetInstance);
});
</script>

<style>
@import 'jspreadsheet-ce/dist/jspreadsheet.css';
</style>
