<template>
  <div>
    <div class="top_img">
      <img src="./images/00.webp" alt="">
    </div>
    <div class="right_content">
      <ul class="content_ul" v-if="rightList">

        <li class="content_ul_li" v-for="(data,index) in (rightList.categoryList ? rightList.categoryList : rightList.subCateList )" :key="index">
          <div class="content_li_div">
            <img :src="data.bannerUrl ? data.bannerUrl : data.wapBannerUrl" alt="">
            <div>{{data.name}}</div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
// 引入Vuex
import { mapState } from 'vuex'
export default {
  name: 'ClassList',
  computed: {
    ...mapState({
      cateLists: state => state.classify.cateLists
    }),
    rightList() {
      let index = 0
      const id = +this.$route.query.categoryid
      if (id) {
        index = this.cateLists.findIndex(item => item.id === id)
      }
      return this.cateLists[index]
    }
  },
  mounted() {
    this.$store.dispatch('getCateLists')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.top_img
  width 100%
  height 96px
  margin-bottom 15px
  img
    width 100%
    height 100%
.right_content
  width 100%
  .content_ul
    width 100%
    .content_ul_li
      font-size 12px
      text-align center
      display inline-block
      margin-right 14px
      .content_li_div
        width 72px
        height 108px
        display flex
        flex-direction column
        img
          width 72px
          height 72px
</style>
