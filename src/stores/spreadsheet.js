
import { defineStore } from 'pinia';

export const useSpreadsheetStore = defineStore('spreadsheet', {
  state: () => ({
    spreadsheetInstance: null,
    initialData: Array(4).fill(Array(4).fill('')) // 4行4列的空表格
  }),
  actions: {
    setSpreadsheet(instance) {
      this.spreadsheetInstance = instance;
    },
    addRow() {
      this.spreadsheetInstance.insertRow();
    },
    addColumn() {
      this.spreadsheetInstance.insertColumn();
    },
    mergeCells(x1, y1, x2, y2) {
      this.spreadsheetInstance.setMerge(x1, y1, x2, y2);
    },
    refresh() {
      this.spreadsheetInstance.refresh();
    }
  },
  getters: {
    getInitialData: (state) => state.initialData
  }
});
