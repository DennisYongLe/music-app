import recommendContent from '@/components/views/RecommendContent.vue'
import searchContent from '@/components/views/SearchContent.vue'
import singerContent from '@/components/views/SingerContent.vue'
import TopListContent from '@/components/views/TopListContent.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// 请求与组件的映射
const routes = [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/recommend',
    component: recommendContent,
  },
  {
    path: '/search',
    component: searchContent,
  },
  {
    path: '/singer',
    component: singerContent,
  },
  {
    path: '/toplist',
    component: TopListContent,
  },
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})
export default router
