<template>
  <div>
    <el-button @click="generateLatexTable">Generate</el-button>
    <textarea v-model="latexTable" rows="10" id="latex_result_block"></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSpreadsheetStore } from '@/stores/spreadsheet';
const spreadsheetStore = useSpreadsheetStore();
const latexTable = ref('');

const generateLatexTable = () => {
  const { data, columns, style } = spreadsheetStore;
  const merges = spreadsheetStore.spreadsheetInstance.getMerge() || {};

  // 开始构建 LaTeX 表格
  let latex = '\\begin{tabular}{' + 'c'.repeat(columns.length) + '}\n';

  // 添加数据行
  const usedCells = new Set(); // 用于跟踪已使用的单元格

  data.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const cellKey = String.fromCharCode(65 + cellIndex) + (rowIndex + 1); // A1, B1, C1...

      // 检查是否合并
      if (merges[cellKey]) {
        const [colSpan, rowSpan] = merges[cellKey];
        if (usedCells.has(cellKey)) return; // 如果该单元格已使用则跳过

        const cellStyle = style[cellKey] || 'text-align: center'; // 默认居中
        let formattedCell = cell;

        // 解析样式并转换为 LaTeX 格式
        if (cellStyle.includes('font-weight: bold')) {
          formattedCell = `\\textbf{${formattedCell}}`;
        }
        if (cellStyle.includes('font-style: italic')) {
          formattedCell = `\\textit{${formattedCell}}`;
        }
        if (cellStyle.includes('text-decoration: underline')) {
          formattedCell = `\\ul ${formattedCell}`;
        }

        // 获取对齐属性
        const alignment = cellStyle.includes('text-align: right') ? 'r' :
                          cellStyle.includes('text-align: left') ? 'l' : 'c';

        // 添加合并单元格
        latex += `\\multicolumn{${colSpan}}{${alignment}}{${formattedCell}}`;
        if (rowSpan > 1) {
          for (let i = 1; i < rowSpan; i++) {
            usedCells.add(String.fromCharCode(65 + cellIndex) + (rowIndex + i + 1)); // 标记合并的单元格
          }
        }
      } else if (!usedCells.has(cellKey)) {
        // 处理未合并的单元格
        const cellStyle = style[cellKey] || 'text-align: center'; // 默认居中
        let formattedCell = cell;

        // 解析样式并转换为 LaTeX 格式
        if (cellStyle.includes('font-weight: bold')) {
          formattedCell = `\\textbf{${formattedCell}}`;
        }
        if (cellStyle.includes('font-style: italic')) {
          formattedCell = `\\textit{${formattedCell}}`;
        }
        if (cellStyle.includes('text-decoration: underline')) {
          formattedCell = `\\ul{${formattedCell}}`;
        }

        // 获取对齐属性
        const alignment = cellStyle.includes('text-align: right') ? 'r' :
                          cellStyle.includes('text-align: left') ? 'l' : 'c';

        latex += `\\multicolumn{1}{${alignment}}{${formattedCell}}`;
      }

      if (cellIndex < row.length - 1 && !merges[cellKey]) {
        latex += '& ';
      }
    });
    latex += '\\\\ \n'; // 每行结束
  });

  latex += '\\end{tabular}'; // 结束表格
  latexTable.value = latex; // 更新 latexTable 的值
};

</script>

<style scoped>
#latex_result_block {
  width: 100%; /* 设置 textarea 占满宽度 */
}
</style>
