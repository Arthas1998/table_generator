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
          this.style = this.spreadsheetInstance.options.style;
      },
      setSpreadsheetInstance(instance) {
        this.spreadsheetInstance = instance;
      },
      updateCellStyle(cellName, styleID, styleValue) {
        // 默认参数处理
        cellName = cellName || null;
        styleID = styleID || null;
        styleValue = styleValue || null;
        if (cellName === null) {
            return;
        }
        if (!this.style[cellName]) {
            this.style[cellName] = '';
        }
        let currentStyles = this.style[cellName];

        // 定义一个函数用于添加或更新样式
        function updateOrAddStyle(styles, id, value) {
            // 使用正则表达式查找已存在的样式
            const regex = new RegExp(`\\b${id}\\s*:\\s*[^;]+;?`, 'g');
            const existingStyle = styles.match(regex);

            // 如果找到现有样式，则替换它；否则，添加新样式
            if (existingStyle) {
                // 替换第一个匹配项（如果有多个相同ID的样式，这里只替换第一个）
                styles = styles.replace(regex, `${id}: ${value};`);
            } else {
                // 添加新样式，确保末尾有分号（如果之前没有样式的话）
                if (styles.length > 0 && !styles.endsWith(';')) {
                    styles += ';';
                }
                styles += `${id}: ${value};`;
            }
            return styles;
        }

        // 更新或添加样式
        this.style[cellName] = updateOrAddStyle(currentStyles, styleID, styleValue);
    }
  }
});
