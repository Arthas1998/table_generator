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
<!--        <el-dropdown-item @click="openDialog('Paste table data', 'Paste table data', pasteData,-->
<!--        'Paste (Ctrl + V) below an existing table copied (Ctrl + C) from a spreadsheet (e.g. Microsoft Excel), a text document, a Markdown / HTML code, or even a website.'-->
<!--            )">Paste table data...</el-dropdown-item>-->
<!--        <el-dropdown-item @click="openDialog('Paste Latex code', 'Paste LaTeX table source', pasteLatex,-->
<!--        'Paste (Ctrl + V) below an existing LaTeX table code.\n'+'\n'+'Please, be aware that the support for loading tables from an existing LaTeX code is severely limited and may work erroneously or may not work at all.'-->
<!--            )">From Latex code...</el-dropdown-item>-->
        <el-dropdown-item @click="openDialog('Save table', 'Save table', saveTable,
        'If you want to keep the table for any future editing click the Download button below. The file with the table can be loaded back using the Load table option from the menu.'
            )" divided>Save table...</el-dropdown-item>
        <el-dropdown-item @click="openDialog('Load table', 'Load table...', loadTable, 'Load table from a previously saved .json file.')">Load table...</el-dropdown-item>
<!--        <el-dropdown-item @click="openDialog('Download as CSV', 'Download as CSV', downloadCSV, 'You can download your table as CSV format.')" divided>Download as CSV</el-dropdown-item>-->
        <el-dropdown-item @click="downloadCSV" divided>Download as CSV</el-dropdown-item>
        <el-dropdown-item @click="exampleTable" divided>Create an example table</el-dropdown-item>
      </el-dropdown-menu>

    </template>
  </el-dropdown>
  <!-- 动态弹窗 -->
  <el-dialog v-model="dialogVisible">
    <div>{{ dialogContent }}</div>
    <input v-if="dialogTitle === 'Import CSV file'" type="file" @change="handleFileChange" accept=".csv" id="importCsvInput" />
    <input v-if="dialogTitle === 'Save table'" type="text" v-model="fileName" placeholder="fileName" id="saveTableInput" />
    <input v-if="dialogTitle === 'Load table'" type="file" @change="handleJsonFile" accept=".json" id="loadTableInput" />
    <input v-if="dialogTitle === 'Download as CSV'" type="text" v-model="fileName" placeholder="fileName" id="downloadCsvInput" />
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
import Papa from 'papaparse';

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
  // 初始化空的数据和样式
  const newData = Array.from({ length: Rows.value }, () => Array(Columns.value).fill(''));
  const newColumns = Array.from({ length: Columns.value }, () => ({
    type: 'text',
    width: 100,  // 设置单元格宽度为100
  }));
  // const newStyles = {};

  const options = spreadsheetStore.setupOptions(newData, newColumns)

  if (spreadsheetStore.spreadsheetInstance) {
    spreadsheetStore.spreadsheetInstance.destroy(); // 销毁旧实例
    spreadsheetStore.spreadsheetInstance = jspreadsheet(spreadsheetStore.spreadsheetInstance.el, options);
    spreadsheetStore.updateStore()
    console.log('New table created');
  }
  dialogVisible.value = false; // 关闭弹窗
};

let csvFileContent = '';  // 用于存储文件的文本内容

const handleFileChange = (event) => {
  const file = event.target.files[0];  // 获取用户选择的文件
  if (file) {
    const reader = new FileReader();  // 创建FileReader对象
    reader.onload = (e) => {
      csvFileContent = e.target.result;  // 读取到的文件内容

      // 解析 CSV 文件
      Papa.parse(csvFileContent, {
        complete: (results) => {
          // 将解析后的数据存储
          csvFileContent = results.data;
        }
      });
    };
    reader.readAsText(file);  // 读取文件内容为文本
  }
};

const importCSV = () => {
  const columns = Array(csvFileContent[0].length).fill({ type: 'text', width: 100 });  // 自动生成列

  const options = spreadsheetStore.setupOptions(csvFileContent, columns);
  if (spreadsheetStore.spreadsheetInstance) {
    spreadsheetStore.spreadsheetInstance.destroy();
    spreadsheetStore.spreadsheetInstance = jspreadsheet(spreadsheetStore.spreadsheetInstance.el, options);
    spreadsheetStore.updateStore()
    console.log('CSV file imported');
  }
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

let fileName = '';
const saveTable = () => {
  const customTable = {
    data: spreadsheetStore.data,
    columns: spreadsheetStore.columns,
    style: spreadsheetStore.style,
  }
  const jsonData = JSON.stringify(customTable, null, 2);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  if (fileName === '') {
    fileName = 'customTable'
  }
  link.setAttribute('download', fileName + '.json'); // 设置下载的文件名
  // 将a标签添加到文档中（这一步不是必需的，但有时候可以避免某些浏览器的兼容性问题）
  document.body.appendChild(link);
  // 模拟点击a标签
  link.click();
  // 清理：从文档中移除a标签，并释放Blob URL
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
  console.log('Table saved');
  dialogVisible.value = false; // 关闭弹窗
};

let tableOptions = {}
const handleJsonFile = (event) => {
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.onload = function(e) {
    try {
      tableOptions = JSON.parse(e.target.result);
    } catch (error) {
      console.error('解析JSON时出错:', error);
    }
  };
  reader.readAsText(file);
};

const loadTable = () => {
  let options = spreadsheetStore.setupOptions(tableOptions.data, tableOptions.columns);
  options['style'] = tableOptions.style;
  spreadsheetStore.spreadsheetInstance.destroy();
  spreadsheetStore.spreadsheetInstance = jspreadsheet(spreadsheetStore.spreadsheetInstance.el, options)
  spreadsheetStore.updateStore();
  console.log('Table loaded');
  dialogVisible.value = false; // 关闭弹窗
};

const downloadCSV = () => {
  spreadsheetStore.spreadsheetInstance.download();
  console.log('Download CSV');
}

const exampleTable = () => {
  const data = [
      ['Mazda', '2001', '2000', '2006-01-01'],
      ['Pegeout', '2010', '5000', '2005-01-01'],
      ['Honda Fit', '2009', '3000', '2004-01-01'],
      ['Honda CRV', '2010', '6000', '2003-01-01'],
  ];
  const columns = [
        { type: 'text', width:'200' },
        { type: 'text', width:'100' },
        { type: 'text', width:'100' },
        { type: 'calendar', width:'100' },
  ];
  const options = spreadsheetStore.setupOptions(data, columns)
  spreadsheetStore.spreadsheetInstance.destroy();
  spreadsheetStore.spreadsheetInstance = jspreadsheet(spreadsheetStore.spreadsheetInstance.el, options)
  spreadsheetStore.updateStore();
  console.log('Generate example');
}

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
#importCsvInput {
  display: flex;
  margin-top: 15px;
}
#saveTableInput {
  display: flex;
  margin-top: 15px;
  height: 25px;
}
#loadTableInput {
  display: flex;
  margin-top: 15px;
}
</style>