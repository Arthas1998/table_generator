// import { defineStore } from 'pinia';
// import { reactive, ref } from "vue";
//
// export const useSpreadsheetStore = defineStore('spreadsheet', {
//   state: () => ({
//     spreadsheetInstance: null
//   }),
//   actions: {
//     setSpreadsheet(instance) {
//       this.spreadsheetInstance = instance;
//     },
//     addRow() {
//       this.spreadsheetInstance.insertRow();
//     },
//     addColumn() {
//       this.spreadsheetInstance.insertColumn();
//     },
//     mergeCells(x1, y1, x2, y2) {
//       this.spreadsheetInstance.setMerge(x1, y1, x2, y2);
//     },
//     refresh() {
//       this.spreadsheetInstance.refresh();
//     }
//   }
// });

// export const useSpreadsheetStore = defineStore('spreadsheet', () => {
//   const spreadsheetInstance = reactive(null)
//   // function switchPage(index) {
//   //   activeName.value = index;
//   // }
//
//   return {
//     spreadsheetInstance
//   }
// })


// src/stores/spreadsheet.js
import { defineStore } from 'pinia';

export const useSpreadsheetStore = defineStore('spreadsheetstore', {
  state: () => ({
    data: [
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
    columns: [
        { type: 'text', width: 100 },
        { type: 'text', width: 100 },
        { type: 'text', width: 100 },
        { type: 'text', width: 100 },
    ],
    style: {
        // A1: 'border-top-color: black; border-left-color: black;',
        // A2: 'border-top-color: black; border-left-color: black;',
        // A3: 'border-top-color: black; border-left-color: black;',
        // B1: 'border-top-color: black; border-left-color: black;',
    },
    selectCells: [[1,1], [2,1]],
    spreadsheetInstance: null,
  }),
  actions: {
      updateSelect(instance, x1, y1, x2, y2, origin){
          this.selectCells = [[x1, y1], [x2, y2]];
      },
      updateStore() {
          this.data = this.spreadsheetInstance.getData();
          this.columns = this.spreadsheetInstance.options.columns;
          this.style = this.spreadsheetInstance.options.style;
      },
      setSpreadsheetInstance(instance) {  // 新增方法来存储jspreadsheet实例
        this.spreadsheetInstance = instance;
      },
  }
});
