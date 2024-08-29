<script setup>
import File from "@/components/MenuBar/MenuComponents/File.vue";
import Edit from "@/components/MenuBar/MenuComponents/Edit.vue";
import Table from "@/components/MenuBar/MenuComponents/Table.vue";
import Column from "@/components/MenuBar/MenuComponents/Column.vue";
import Row from "@/components/MenuBar/MenuComponents/Row.vue";
import Cell from "@/components/MenuBar/MenuComponents/Cell.vue";
import Help from "@/components/MenuBar/MenuComponents/Help.vue";
</script>

<template>
  <div>
    <File />
    <Edit />
    <Table />
    <Column />
    <Row />
    <Cell />
    <Help />
  </div>
</template>

<style scoped>
.svg-bold{
  font-size: 30px;
  color: #000;
}
</style>