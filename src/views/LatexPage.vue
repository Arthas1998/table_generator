<template>

  <div><MenuBar /></div> <hr>
  <div><LatexToolBar /></div> <hr>
  <div class="temporary"><CustomTables /></div> <hr>
  <div class="temporary"><ResultBlock /></div> <hr>
  <div class="temporary"><LatexHelpBlock /></div> <hr>

</template>

<script setup>
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import LatexToolBar from "@/components/ToolBar/LatexToolBar.vue";
import CustomTables from "@/components/CustomTable.vue";
import ResultBlock from "@/components/ResultBlock.vue";
import LatexHelpBlock from "@/components/HelpBlock/LatexHelpBlock.vue";
</script>

<style>
.temporary{
  margin: 150px;
}

</style>