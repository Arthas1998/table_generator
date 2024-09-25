<script setup>
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const store = useSpreadsheetStore();
let data = store.data
let columns = store.columns;
let tables = store.spreadsheetInstance

</script>

<template>

  {{ data }}<hr>
  {{ columns }}<hr>
  {{ tables }}<hr>
</template>

<style scoped>

</style>