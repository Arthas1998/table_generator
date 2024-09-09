<template>
  <div v-if="isTableReady" ref="spreadsheet"></div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useSpreadsheetStore } from '../stores/spreadsheet';
import jspreadsheet from 'jspreadsheet-ce';

// 创建 ref 绑定到 DOM
const spreadsheetRef = ref(null);
const spreadsheetStore = useSpreadsheetStore();
const isTableReady = ref(false);

onMounted(async () => {
  // 确保 DOM 元素已经完全渲染
  await nextTick();

  // 等待 Element Plus 布局完成后设置表格就绪
  isTableReady.value = true;

  await nextTick(); // 等待 v-if 渲染

  if (spreadsheetRef.value) {
    // 初始化 Jspreadsheet
    const spreadsheetInstance = jspreadsheet(spreadsheetRef.value, {
      data: spreadsheetStore.getInitialData,
      columns: Array(4).fill({ type: 'text', width: 150 })
    });

    // 存储实例到 Pinia 中
    spreadsheetStore.setSpreadsheet(spreadsheetInstance);
  } else {
    console.error('DOM element for spreadsheet is not available');
  }
});
</script>

<style>
@import 'jspreadsheet-ce/dist/jspreadsheet.css';
</style>
