
<template>
  <span>Result</span>
  <button @click="exportTableToLatex">General</button>
</template>
<script setup>
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const store = useSpreadsheetStore();

// 生成 LaTeX 表格代码
function generateLatexTable(data, columns, showGrid) {
  let latex = '\\begin{table}[h!]\n\\centering\n\\begin{tabular}{';

  columns.forEach(() => {
    latex += showGrid ? '|c' : 'c';
  });
  latex += showGrid ? '|}\n\\hline\n' : '}\n';

  const headers = columns.map(col => col.title).join(' & ');
  latex += headers + ' \\\\ ' + (showGrid ? '\\hline\n' : '\n');

  data.forEach(row => {
    latex += row.join(' & ') + ' \\\\ ' + (showGrid ? '\\hline\n' : '\n');
  });

  latex += '\\end{tabular}\n\\caption{Generated Table}\n\\end{table}';

  return latex;
}

// 判断表格线是否显示
function isGridVisible() {
  const cell = document.querySelector('#spreadsheet .jexcel_content td');
  return getComputedStyle(cell).border !== 'none';
}

// 导出表格为 LaTeX 代码
function exportTableToLatex() {
  const data = store.spreadsheetInstance;
  const columns = store.columns;
  const showGrid = isGridVisible();

  const latexCode = generateLatexTable(data, columns, showGrid);
  console.log(latexCode); // 输出 LaTeX 代码到控制台
}

</script>

<style scoped>
#spreadsheet .jexcel_content td {
  border: 1px solid black; /* 设置或移除表格线 */
}
</style>