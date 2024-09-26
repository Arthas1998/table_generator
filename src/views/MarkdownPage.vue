<template>

  <div><MenuBar /></div> <hr>
  <div><MarkdownToolBar /></div> <hr>
  <div class="temporary"><CustomTables /></div> <hr>
  <div class="temporary"><ResultBlock /></div> <hr>
  <div class="temporary"><MarkdownHelpBlock /></div> <hr>

</template>

<script setup>
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import MarkdownToolBar from "@/components/ToolBar/MarkdownToolBar.vue"
import CustomTables from "@/components/CustomTable.vue";
import ResultBlock from "@/components/ResultBlock/LatexResultBlock.vue";
import MarkdownHelpBlock from "@/components/HelpBlock/MarkdownHelpBlock.vue";
</script>

<style>
.temporary{
  margin: 150px;
}

</style>