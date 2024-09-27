<template>
  <div>
    <el-button @click="convertToLatex">Generate</el-button>
    <textarea v-model="latexCode" rows="10" id="result_block"></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const latexCode = ref('');
const spreadsheetStore = useSpreadsheetStore();

// 解析单元格的样式信息并转换为对应的 LaTeX 代码
const parseStyleToLatex = (style) => {
  let latexStyle = "";

  // 处理文字对齐
  if (style.includes('text-align: left')) {
    latexStyle += "\\raggedright ";
  } else if (style.includes('text-align: center')) {
    latexStyle += "\\centering ";
  } else if (style.includes('text-align: right')) {
    latexStyle += "\\raggedleft ";
  }

  // 处理文字加粗
  if (style.includes('font-weight: bold')) {
    latexStyle += "\\textbf{";
  }

  // 处理文字斜体
  if (style.includes('font-style: italic')) {
    latexStyle += "\\textit{";
  }

  // 处理文字下划线
  if (style.includes('text-decoration: underline')) {
    latexStyle += "\\underline{";
  }

  // 处理背景颜色
  const bgColorMatch = style.match(/background-color: (\w+);/);
  if (bgColorMatch) {
    const bgColor = bgColorMatch[1];
    latexStyle += `\\cellcolor{${bgColor}} `;
  }

  // 处理文字颜色
  const colorMatch = style.match(/color: (\w+);/);
  if (colorMatch) {
    const textColor = colorMatch[1];
    latexStyle += `\\textcolor{${textColor}}{`;
  }

  return latexStyle;
};

const closeStyleTags = (style) => {
  let closingTags = "";

  // 如果包含加粗、斜体、下划线、文字颜色，则关闭这些 LaTeX 命令
  if (style.includes('font-weight: bold')) {
    closingTags += "}";
  }
  if (style.includes('font-style: italic')) {
    closingTags += "}";
  }
  if (style.includes('text-decoration: underline')) {
    closingTags += "}";
  }
  if (style.includes('color:')) {
    closingTags += "}";
  }

  return closingTags;
};

// 解析单元格的边框信息
const parseBorderStyleToLatex = (style) => {
  let borderCommands = "";

  if (style.includes('border-top-color: black')) {
    borderCommands += "\\cline{1-1} "; // 处理顶部边框
  }
  if (style.includes('border-right-color: black')) {
    // 默认 LaTeX 表格中，右边框一般不额外设置
  }
  if (style.includes('border-bottom-color: black')) {
    borderCommands += "\\cline{1-1} "; // 处理底部边框
  }
  if (style.includes('border-left-color: black')) {
    // 默认 LaTeX 表格中，左边框一般不额外设置
  }

  return borderCommands;
};

const convertToLatex = () => {
  const data = spreadsheetStore.data;
  const columns = spreadsheetStore.columns;
  const styles = spreadsheetStore.style;

  // 设置 LaTeX 表格列对齐方式
  let latex = "\\begin{tabular}{";
  latex += columns.map(col => col.align === 'left' ? 'l' : col.align === 'right' ? 'r' : 'c').join('') + "}\n";

  // 添加列头并处理加粗
  latex += columns.map(col => `\\textbf{${col.title || ''}}`).join(' & ') + " \\\\\n";
  latex += "\\hline\n";

  // 添加数据行并处理每个单元格的样式和边框
  data.forEach((row, rowIndex) => {
    latex += row.map((cell, colIndex) => {
      const cellKey = String.fromCharCode(65 + colIndex) + (rowIndex + 1); // 生成 A1, B2 格式的 key
      const cellStyle = styles[cellKey] || "";
      const latexStyle = parseStyleToLatex(cellStyle);
      const borderCommands = parseBorderStyleToLatex(cellStyle);
      const closingTags = closeStyleTags(cellStyle);

      return `${borderCommands}${latexStyle}${cell}${closingTags}`;
    }).join(' & ') + " \\\\\n";
  });

  latex += "\\end{tabular}";

  latexCode.value = latex;
};

</script>

<style scoped>
#result_block {
  width: 100%; /* 设置 textarea 占满宽度 */
}
</style>
