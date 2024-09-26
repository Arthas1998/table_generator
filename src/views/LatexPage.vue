<template>

  <div><MenuBar /></div> <hr>
  <div><LatexToolBar /></div> <hr>
  <div class="custom_table"><CustomTables /></div> <hr>
  <div class="temporary"><ResultBlock /></div> <hr>
  <div class="temporary"><LatexHelpBlock /></div> <hr>

</template>

<script setup>
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import LatexToolBar from "@/components/ToolBar/LatexToolBar.vue";
import CustomTables from "@/components/CustomTable.vue";
import ResultBlock from "@/components/ResultBlock/LatexResultBlock.vue";
import LatexHelpBlock from "@/components/HelpBlock/LatexHelpBlock.vue";
</script>

<style>
.custom_table{
  width: 100%;
  height: 100%;
  overflow: auto;
}

.temporary{
  //margin: 150px;
}

</style>