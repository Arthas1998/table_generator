<template>
  <span class="navigation-container">
    <el-button text>
      <SvgIcon name="AlignCenter" class="tool-bar-icon" />
    </el-button>
  </span>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import { useSpreadsheetStore } from '@/stores/spreadsheet';

const spreadsheetStore = useSpreadsheetStore();



</script>

<style scoped>

</style>