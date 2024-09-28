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
        // A1: 'border-top-color: black; border-left-color: black; text-align: left',
        // A2: 'border-top-color: black; border-left-color: black;',
        // A3: 'border-top-color: black; border-left-color: black;',
        // B1: 'border-top-color: black; border-left-color: black;',
    },
    selectCells: [[0, 0], [2, 1]],
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
          this.style = this.spreadsheetInstance.getStyle();
      },
      setSpreadsheetInstance(instance) {
        this.spreadsheetInstance = instance;
      },

      setupOptions(data = this.data, columns = this.columns) {
          return {
              data: data,
              columns: columns,
              onselection: this.updateSelect,
          }
      },

      getRectangleCells(selectCells) {
          // 确保输入有效
          if (!Array.isArray(selectCells) || selectCells.length !== 2 ||
              !Array.isArray(selectCells[0]) || selectCells[0].length !== 2 ||
              !Array.isArray(selectCells[1]) || selectCells[1].length !== 2) {
            throw new Error('Invalid input: selectCells must be an array of two arrays, each containing two elements.');
          }

          const [topLeft, bottomRight] = selectCells;
          const [startX, startY] = topLeft;
          const [endX, endY] = bottomRight;

          // 确保选区是有效的，即左上角坐标在右下角坐标的左上角
          if (startX > endX || startY > endY) {
            throw new Error('Invalid selection: Top-left coordinates must be before bottom-right coordinates.');
          }

          // 创建并填充包含所有单元格坐标的数组
          let cells = [];
          for (let x = startX; x <= endX; x++) {
            for (let y = startY; y <= endY; y++) {
              cells.push([x, y]);
            }
          }

          return cells;
      }
  }
});
