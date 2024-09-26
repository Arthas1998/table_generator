<template>
  <el-dropdown trigger="click">
    <el-button text>
      File<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="openDialog('Create new table', 'Create new table', createTable,
            'Enter table size. Please, remember that the current table contents will be lost.'
            )">New table...</el-dropdown-item>
        <el-dropdown-item @click="openDialog('Import CSV file', 'Import data from CSV file', importCSV,
            'You can import table data by uploading file in CSV format (Comma Separated Value). Most spreadsheet software, both desktop and online, allows to save tabular data in CSV format — it is usually available in the File menu under the name Save As... or Export.')"
            divided>Import CSV file...</el-dropdown-item>
        <el-dropdown-item @click="openDialog('Paste table data', 'Paste table data', pasteData,
        'Paste (Ctrl + V) below an existing table copied (Ctrl + C) from a spreadsheet (e.g. Microsoft Excel), a text document, a Markdown / HTML code, or even a website.'
            )">Paste table data...</el-dropdown-item>
        <el-dropdown-item @click="openDialog('Paste Latex code', 'Paste LaTeX table source', pasteLatex,
        'Paste (Ctrl + V) below an existing LaTeX table code.\n'+'\n'+'Please, be aware that the support for loading tables from an existing LaTeX code is severely limited and may work erroneously or may not work at all.'
            )">From Latex code...</el-dropdown-item>
        <el-dropdown-item @click="openDialog('Save table', 'Save table', saveTable,
        'If you want to keep the table for any future editing click the Download button below. The file with the table can be loaded back using the Load table option from the menu.'
            )" divided>Save table...</el-dropdown-item>
        <el-dropdown-item @click="openDialog('Load table', 'Load table...', loadTable,)">Load table...</el-dropdown-item>
        <el-dropdown-item @click="handleCommand('download')" divided>Download as CSV</el-dropdown-item>
        <el-dropdown-item @click="handleCommand('example')" divided>Create an example table</el-dropdown-item>
      </el-dropdown-menu>

    </template>
  </el-dropdown>
  <!-- 动态弹窗 -->
  <el-dialog v-model="dialogVisible">
    <span>{{ dialogContent }}</span>
    <p>{{ dialogContentText }}</p>

    <el-space direction="vertical" v-if="dialogTitle === 'Create new table'" class="input-section">
      <el-space>
        <label @click="rowsInput" class="input-label">Rows:</label>
        <el-input-number v-model="Rows" controls-position="right" ref="inputRows"/>
        <p>{{ 'Valid range: 1-500' }}</p>
      </el-space>
      <el-space>
        <label @click="columnsInput" class="input-label">Columns:</label>
        <el-input-number v-model="Columns" controls-position="right"  ref="inputColumns"/>
        <p>{{ 'Valid range: 1-20' }}</p>
      </el-space>
    </el-space>

    <template #footer>
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogAction">{{ dialogButtonText }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { ArrowDown, ArrowUp, Minus, Plus } from '@element-plus/icons-vue'
import { useSpreadsheetStore } from '@/stores/spreadsheet'
import jspreadsheet from "jspreadsheet-ce";

const spreadsheetStore = useSpreadsheetStore();
// 控制弹窗可见性和动态内容
const dialogVisible = ref(false);
const dialogTitle = ref('');
const dialogContent = ref('');
const dialogContentText = ref('');
const dialogButtonText = ref('Confirm');
let dialogAction = () => {};
const inputRows = ref(null);
const inputColumns = ref(null);
const Rows = ref(1)
const Columns = ref(1)

const rowsInput = () => {
  inputRows.value.$el.querySelector('input').focus(); // 选中输入框
};
const columnsInput = () => {
  inputColumns.value.$el.querySelector('input').focus(); // 选中输入框
};
// 打开弹窗并动态设置标题、内容和行为
const openDialog = (title, content, action, text) => {
  dialogTitle.value = title;
  dialogContent.value = content;
  dialogContentText.value = text;
  dialogButtonText.value = title.split(' ')[0].toLowerCase();
  dialogAction = action;
  dialogVisible.value = true;
};

const createTable = () => {
  console.log('New table created');
  // 初始化空的数据和样式
  const newData = Array.from({ length: Rows.value }, () => Array(Columns.value).fill(''));
  const newColumns = Array.from({ length: Columns.value }, () => ({
    type: 'text',
    width: 100,  // 设置单元格宽度为100
  }));
  const newStyles = {};

  // 更新Pinia仓库中的data, columns, 和 style
  spreadsheetStore.data = newData;
  spreadsheetStore.columns = newColumns;
  spreadsheetStore.style = newStyles;

  if (spreadsheetStore.spreadsheetInstance) {
    spreadsheetStore.spreadsheetInstance.destroy(); // 销毁旧实例
    spreadsheetStore.spreadsheetInstance = jspreadsheet(spreadsheetStore.spreadsheetInstance.el, {
      data: newData,
      columns: newColumns,
      style: newStyles
    });
  }
  dialogVisible.value = false; // 关闭弹窗
};

const importCSV = () => {
  console.log('CSV file imported');
  dialogVisible.value = false; // 关闭弹窗
};

const pasteData = () => {
  console.log('Table data pasted');
  dialogVisible.value = false; // 关闭弹窗
};

const pasteLatex = () => {
  console.log('Latex code pasted');
  dialogVisible.value = false; // 关闭弹窗
};

const saveTable = () => {
  console.log('Table saved');
  dialogVisible.value = false; // 关闭弹窗
};

const loadTable = () => {
  console.log('Table loaded');
  dialogVisible.value = false; // 关闭弹窗
};

const handleCommand = (command) => {
  if (command === 'download') {
    console.log('Download CSV');
  } else if (command === 'example') {
    console.log('Create an example table');
  }
};
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.input-section {
  display: flex;
  flex-direction: column; /* 纵向排列 */
  align-items: center; /* 水平居中 */
}
.input-label {
  margin-right: 8px; /* 给标签添加一些右边距 */
  cursor: pointer; /* 鼠标悬停时显示为手型 */
}
</style>