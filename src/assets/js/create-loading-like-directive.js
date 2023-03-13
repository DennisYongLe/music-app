import { createApp } from 'vue'
import { addClass, removeClass } from '@/assets/js/dom'

const relativeCls = 'g-relative'
// comp 为 vue组件
export default function createLoadingLikeDirective(Comp) {
  return {
    mounted(el, binding) {
      const app = createApp(Comp)
      // 为什么要创建一个vue实例？
      // 1.设置title名称
      // 2.通过$el获取组件结构
      const instance = app.mount(document.createElement('div'))
      const name = Comp.name
      if (!el[name]) {
        el[name] = {}
      }
      // 将带有组件的vue实例存储在使用v-loading的dom对象上
      el[name].instance = instance
      const title = binding.arg
      if (typeof title !== 'undefined') {
        instance.setTitle(title)
      }
      // 添加LoadignContent组件内容
      if (binding.value) {
        append(el)
      }
    },
    updated(el, binding) {
      const title = binding.arg
      const name = Comp.name
      if (typeof title !== 'undefined') {
        el[name].instance.setTitle(title)
      }

      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    },
  }

  function append(el) {
    const name = Comp.name
    const style = getComputedStyle(el)
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
      addClass(el, relativeCls)
    }
    el.appendChild(el[name].instance.$el)
  }

  function remove(el) {
    const name = Comp.name
    removeClass(el, relativeCls)
    // instance为vue实例，$el为div.loading
    el.removeChild(el[name].instance.$el)
  }
}
