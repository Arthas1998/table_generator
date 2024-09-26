<!--<template>-->
<!--  <div ref="spreadsheet"></div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref, onMounted } from 'vue';-->
<!--import { useSpreadsheetStore } from '../stores/spreadsheet';-->
<!--import jspreadsheet from 'jspreadsheet-ce';-->

<!--// 创建 ref 绑定到 DOM-->
<!--const spreadsheetRef = ref(null);-->
<!--const spreadsheetStore = useSpreadsheetStore();-->

<!--onMounted(() => {-->
<!--  // 初始化 Jspreadsheet-->
<!--  const spreadsheetInstance = jspreadsheet(spreadsheetRef.value, {-->
<!--    data: [['Apple', 1], ['Banana', 2]],-->
<!--    columns: [-->
<!--      { type: 'text', title: 'Item', width: 150 },-->
<!--      { type: 'numeric', title: 'Quantity', width: 80 }-->
<!--    ]-->
<!--  });-->

<!--  // 存储实例到 Pinia 中-->
<!--  spreadsheetStore.setSpreadsheet(spreadsheetInstance);-->
<!--});-->
<!--</script>-->

<!--<style>-->
<!--@import 'jspreadsheet-ce/dist/jspreadsheet.css';-->
<!--</style>-->
<template>
  <div>
    <div id="spreadsheet" ref="spreadsheet"></div>
  </div>
  {{ spreadsheet }}
</template>

<script>
import {onMounted, ref} from 'vue';
import jspreadsheet from 'jspreadsheet-ce';
import 'jspreadsheet-ce/dist/jspreadsheet.css';
import 'jsuites/dist/jsuites.css';
import {useSpreadsheetStore} from '@/stores/spreadsheet';

export default {
  name: 'App',
  setup() {
    const spreadsheet = ref(null);
    const spreadsheetStore = useSpreadsheetStore();

    onMounted(() => {
      const options = {
        data: spreadsheetStore.data, // 从 store 中获取数据
        columns: spreadsheetStore.columns,
        style: spreadsheetStore.style
      };
      // jspreadsheet(spreadsheet.value, options)
      if (spreadsheet.value) {
        jspreadsheet(spreadsheet.value, options)
      }
      // spreadsheetStore.spreadsheetInstance = spreadsheet.value;
      // return spreadsheet.value
    });

    return {
      spreadsheet,
      // table1
    };
  }
};
</script>

<style>
/* 自定义样式 */
</style>
