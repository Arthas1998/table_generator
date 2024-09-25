<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useSpreadsheetStore } from '@/stores/spreadsheet'

const spreadsheetStore = useSpreadsheetStore();

function new_table() {
  spreadsheetStore.resetSpreadsheet()
}


const handleCommand = (command) => {
  // if (command === 'new_table') {
  //   // new_table()
  // }
}

</script>

<template>
  <el-dropdown trigger="click">
    <el-button text>
      File<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="new_table">New table...</el-dropdown-item>

        <el-dropdown-item command="csv" divided>Import CSV file</el-dropdown-item>
        <el-dropdown-item command="paste">Paste table data</el-dropdown-item>
        <el-dropdown-item command="from_latex">From Latex code</el-dropdown-item>

        <el-dropdown-item command="save_table" divided>Save table...</el-dropdown-item>
        <el-dropdown-item command="load_table">Load table...</el-dropdown-item>

        <el-dropdown-item command="download" divided>Download as CSV</el-dropdown-item>

        <el-dropdown-item command="example" divided>Create an example table</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>