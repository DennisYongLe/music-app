<template>
  <!-- 需要先判断sliders的长度，如果长度是0，那么不会显示轮播图 -->
  <SliderContent v-if="sliders.length" :sliders="sliders"> </SliderContent>
</template>
<script>
// esMudule方式1
import * as m from '@/service/recommend'
// esMudule方式2，可以对导出的模块任意取名
import SliderContent from '@/components/base/slider/SliderContent.vue'

export default {
  name: 'headerContent',
  data() {
    return {
      sliders: [],
    }
  },
  async created() {
    const result = await m.getRecommend()
    this.sliders = result.sliders
  },
  components: { SliderContent },
}
</script>
