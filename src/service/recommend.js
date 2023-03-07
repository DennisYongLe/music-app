import { get } from './base'
// 轮播图以及推荐歌单的数据

export function getRecommend() {
  return get('/api/getRecommend')
}
