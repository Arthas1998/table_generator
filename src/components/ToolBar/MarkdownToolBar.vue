<template>
  <div class="tool-bar">
    <span class="text-align"><AlignLeft /><AlignCenter /><AlignRight /></span>
    <span class="text-align"><Bold /><Italic /></span>
  </div>
</template>

<script setup>
import AlignLeft from "@/components/ToolBar/ToolComponents/AlignLeft.vue";
import AlignCenter from "@/components/ToolBar/ToolComponents/AlignCenter.vue";
import AlignRight from "@/components/ToolBar/ToolComponents/AlignRight.vue";
import Bold from "@/components/ToolBar/ToolComponents/Bold.vue";
import Italic from "@/components/ToolBar/ToolComponents/Italic.vue";
</script>

<style scoped>
.tool-bar{
  display: flex;
}
.text-align{
  display: inline;
}
</style>