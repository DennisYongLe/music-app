<template>
  <!-- <Suspense> -->
  <!--  使用v-if控制子组件渲染的时机 -->
  <span v-if="singers.length != 0">
    <indexList :data="singers"></indexList>
  </span>
  <!-- </Suspense> -->
  <!-- {{ singers }} -->
</template>
<script>
import { getSingerList } from '@/service/singer'
import indexList from '@/components/base/indexList/IndexList'
// import { reactive } from 'vue'
export default {
  name: 'singerContent',
  components: {
    indexList,
  },
  async created() {
    const result = await getSingerList()
    this.singers = result.singers
  },
  data() {
    return {
      singers: [],
    }
  },
  // async setup() {
  //   let singers = await getSingerList()
  //   return { singers }
  // },
}
</script>
<style lang="scss" scoped>
.singer {
  // 滚动要求长度固定，所以用fixed
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
