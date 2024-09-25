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
        ['', '', '', ''],
    ],
    // columns: [
    //     { type: 'text', title: 'A', width: 150 },
    //     { type: 'text', title: 'B', width: 150 },
    //     { type: 'text', title: 'C', width: 150 },
    //     { type: 'text', title: 'D', width: 150 },
    // ],
    columns: [
        { type: 'text', width: 150 },
        { type: 'text', width: 150 },
        { type: 'text', width: 150 },
        { type: 'text', width: 150 },
    ],
    spreadsheetInstance: null,
  }),
  actions: {
    // setSpreadsheetInstance(instance) { // 新增方法
    //   this.spreadsheetInstance = instance;
    // },
    // setData(newData) {
    //   this.data = newData;
    // },
    // setColumns(newColumns) {
    //   this.columns = newColumns;
    // },
    // resetSpreadsheet() {
    //   if (this.spreadsheetInstance) {
    //     // 清空表格数据
    //     this.spreadsheetInstance.clear();
    //
    //     // 使用store中的数据和列重新设置表格
    //     this.spreadsheetInstance.loadData(this.data);
    //     this.spreadsheetInstance.setColumns(this.columns);
    //   }
    // },
  }
});
