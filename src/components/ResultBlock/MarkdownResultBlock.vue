<template>
  <div>
    <el-button @click="generateMarkdownTable">Generate</el-button>
    <textarea v-model="markdownTable" rows="10" id="markdown_result_block"></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSpreadsheetStore } from '@/stores/spreadsheet'; // 替换为实际路径

const spreadsheetStore = useSpreadsheetStore();
const markdownTable = ref('');

const generateMarkdownTable = () => {
  const { data, style } = spreadsheetStore;

  // 开始构建 Markdown 表格
  let markdown = '';

  // 添加分隔行
  const columnCount = data[0].length; // 获取列数
  markdown += '| ' + '-'.repeat(columnCount).split('').join(' | ') + ' |\n'; // 添加分隔行

  // 添加数据行
  data.forEach((row, rowIndex) => {
    const formattedRow = row.map((cell, cellIndex) => {
      const cellKey = String.fromCharCode(65 + cellIndex) + (rowIndex + 1); // A1, B1, C1...
      const cellStyle = style[cellKey] || 'text-align: center'; // 默认居中

      let formattedCell = cell;

      // 解析样式并转换为 Markdown 格式
      if (cellStyle.includes('font-weight: bold')) {
        formattedCell = `**${formattedCell}**`; // 加粗
      }
      if (cellStyle.includes('font-style: italic')) {
        formattedCell = `*${formattedCell}*`; // 斜体
      }

      return formattedCell;
    });

    markdown += '| ' + formattedRow.join(' | ') + ' |\n'; // 添加数据行
  });

  markdown += '| ' + '-'.repeat(columnCount).split('').join(' | ') + ' |\n'; // 再次添加分隔行

  markdownTable.value = markdown; // 更新 markdownTable 的值
};

</script>

<style scoped>
#markdown_result_block {
  width: 100%; /* 设置 textarea 占满宽度 */
}
</style>