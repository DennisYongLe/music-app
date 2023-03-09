<template>
  <div class="recommend">
    <ScrollContent class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <!-- 需要先判断sliders的长度，如果长度是0，那么不会显示轮播图 -->
          <div class="slider-content">
            <SliderContent v-if="sliders.length" :sliders="sliders">
            </SliderContent>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
          <!-- 展示热门歌单推荐的子歌单 -->
          <ul>
            <li v-for="item in albums" :key="item.id" class="item">
              <div class="icon">
                <img width="60" height="60" :src="item.pic" />
              </div>
              <div class="text">
                <div class="name">{{ item.username }}</div>
                <div class="title">{{ item.title }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ScrollContent>
  </div>
</template>
<script>
// esMudule方式1
import * as m from '@/service/recommend'
// esMudule方式2，可以对导出的模块任意取名
import SliderContent from '@/components/base/slider/SliderContent.vue'
import ScrollContent from '../base/scroll/ScrollContent.vue'

export default {
  name: 'headerContent',
  data() {
    return {
      sliders: [],
      albums: [],
      selectedAlbum: null,
    }
  },
  async created() {
    const result = await m.getRecommend()
    this.sliders = result.sliders
    this.albums = result.albums
  },
  computed: {
    loading() {
      console.log(this.albums)
      return this.albums.length === 0
    },
  },
  components: { SliderContent, ScrollContent },
  methods: {},
}
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: hidden;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
      .slider-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
        }
        .name {
          margin-bottom: 10px;
          color: $color-text;
        }
        .title {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
