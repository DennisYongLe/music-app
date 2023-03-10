import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
// 引入全局样式文件
import '@/assets/scss/index.scss'
import loadingDirective from '@/components/base/loading/directive'
import suggestDirective from '@/components/base/testDirective/suggest'
createApp(App)
  .use(store)
  .use(router)
  .use(lazyPlugin, {
    loading: require('@/assets/images/default.png'),
  })
  .directive('loading', loadingDirective)
  // 测试自定义指令
  .directive('suggest', suggestDirective)
  .mount('#app')
