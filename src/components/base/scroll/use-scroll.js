// 复习生命周期钩子
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  ref,
} from 'vue'
export default function useScroll(wrapperRef, options) {
  const scroll = ref(null)
  onBeforeMount(() => {
    console.log(`use-scroll被用到的组件挂载开始前`)
  })
  onMounted(() => {
    console.log(`use-scroll被用到的组件开始挂载`)
    //在页面加载后再进行创建对象，避免在还没有加载完页面后，认为不需要滚动
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options,
    })
  })
  onBeforeUpdate(() => {
    console.log(`use-scroll被用到的组件更新之前`)
  })
  onUpdated(() => {
    console.log(`use-scroll被用到的组件开始更新`)
  })
  onBeforeUnmount(() => {
    console.log(`use-scroll被用到的组件开始销毁`)
  })
  onUnmounted(() => {
    scroll.value.destroy()
  })
  onErrorCaptured(() => {
    console.log(`use-scroll被用到的组件捕获到错误`)
  })
}
