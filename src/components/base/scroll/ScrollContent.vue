<template>
  <!-- 滚动内容 -->
  <!-- 在尾部标记ref，表示它是一个ref对象 -->
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>
<script>
import useScroll from './use-scroll.js'
import { ref } from 'vue'
export default {
  name: 'scrollContent',
  props: {
    click: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const rootRef = ref(null)
    // 传入容器及参数
    useScroll(rootRef, props.click)
    return { rootRef }
  },
}
</script>
