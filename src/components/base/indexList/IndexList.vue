<template>
  <ul ref="groupRef">
    <li v-for="group in datas" :key="group.title" class="group">
      <h2>{{ group.title }}</h2>
      <ul>
        <li
          v-for="item in group.list"
          :key="item.id"
          class="item"
          @click="onItemClick(item)"
        >
          <img class="avatar" v-lazy="item.pic" />
          <span class="name">{{ item.name }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
import { reactive } from 'vue'

export default {
  name: 'indexList',
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
  },
  setup(props) {
    const datas = reactive(props.data)
    console.log(props.data)
    return { datas }
  },
}
</script>
