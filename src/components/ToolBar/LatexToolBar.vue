<template>
  <div class="tool-bar">
    <AlignLeft /><AlignCenter /><AlignRight />
    <Bold /><Italic /><Underline />
    <AddAllBorders /><RemoveAllBorders />
    <MergeCells /><SplitCells />
  </div>
</template>

<script setup>
import AlignLeft from "@/components/ToolBar/ToolComponents/AlignLeft.vue";
import AlignCenter from "@/components/ToolBar/ToolComponents/AlignCenter.vue";
import AlignRight from "@/components/ToolBar/ToolComponents/AlignRight.vue";
import Bold from "@/components/ToolBar/ToolComponents/Bold.vue";
import Italic from "@/components/ToolBar/ToolComponents/Italic.vue";
import Underline from "@/components/ToolBar/ToolComponents/Underline.vue";
import AddAllBorders from "@/components/ToolBar/ToolComponents/AddAllBorders.vue";
import RemoveAllBorders from "@/components/ToolBar/ToolComponents/RemoveAllBorders.vue";
import MergeCells from "@/components/ToolBar/ToolComponents/MergeCells.vue";
import SplitCells from "@/components/ToolBar/ToolComponents/SplitCells.vue";
</script>

<style scoped>
.tool-bar{
  display: flex;
}
</style>