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
          console.log(this.selectCells)
      },
      updateStore() {
          this.data = this.spreadsheetInstance.getData();
          this.columns = this.spreadsheetInstance.options.columns;
          this.style = this.spreadsheetInstance.options.style;
      },
      setSpreadsheetInstance(instance) {
        this.spreadsheetInstance = instance;
      },
  }
});
