<template>
  <svg :class="'svg-icon' + className">
    <use :href="symbolId" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.name}`);
    return { symbolId };
  },
});
</script>

<style scoped>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor; /* 默认使用当前文本颜色 */
  width: 1em; /* 默认宽度 */
  height: 1em; /* 默认高度 */
}
</style>

