<template>
  <div>
    <div id="spreadsheet" ref="spreadsheet"></div>
  </div>
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
      const options = spreadsheetStore.setupOptions()
      if (spreadsheet.value) {
        const instance = jspreadsheet(spreadsheet.value, options);
        spreadsheetStore.setSpreadsheetInstance(instance);  // 保存实例
        // document.addEventListener('mousedown', (event) => {
        //   const isClickInside = spreadsheet.value.contains(event.target);
        //
        //   if (!isClickInside) {
        //     event.preventDefault();
        //   }
        // });
      }
    });

    return {
      spreadsheet,
    };
  }
};
</script>

<style>
/* 自定义样式 */
</style>
