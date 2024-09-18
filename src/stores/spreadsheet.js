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

export const useSpreadsheetStore = defineStore('spreadsheet', {
  state: () => ({
    data: [
      ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
      ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777']
    ],
    columns: [
      { type: 'text', title: 'Car', width: '120px' },
      { type: 'dropdown', title: 'Make', width: '250px', source: ['Alfa Romeo', 'Audi', 'Bmw'] },
      { type: 'calendar', title: 'Available', width: '250px' },
      { type: 'image', title: 'Photo', width: '120px' },
      { type: 'checkbox', title: 'Stock', width: '80px' },
      { type: 'numeric', title: 'Price', width: '100px', mask: '$ #.##,00', decimal: ',' },
      { type: 'color', title: 'Color', width: '100px', render: 'square' }
    ]
  }),
  actions: {
    setData(newData) {
      this.data = newData;
    },
    setColumns(newColumns) {
      this.columns = newColumns;
    }
  }
});
