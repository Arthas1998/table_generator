<template>

  <div><MenuBar /></div> <hr>
  <div><MarkdownToolBar /></div> <hr>
  <div class="custom_table"><CustomTables /></div> <hr>
  <div class="temporary"><MarkdownResultBlock /></div> <hr>
<!--  <div class="temporary"><MarkdownHelpBlock /></div> <hr>-->

</template>

<script setup>
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import MarkdownToolBar from "@/components/ToolBar/MarkdownToolBar.vue"
import CustomTables from "@/components/CustomTable.vue";
import MarkdownResultBlock from "@/components/ResultBlock/MarkdownResultBlock.vue";
import MarkdownHelpBlock from "@/components/HelpBlock/MarkdownHelpBlock.vue";
</script>

<style>
.custom_table{
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>