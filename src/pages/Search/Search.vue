<template>
  <div class="searchBox">
    <header class="search_header">
      <form action="/" class="search_form">
        <van-search class="search_in" v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
      </form>
    </header>
    <!-- 内容 -->
    <div class="search_content">
      <header class="hot">
        热门搜索
      </header>
      <nav class="content_nav">
        <a href="javascript:">省钱卡充9得45</a>
        <a href="javascript:">停课不停学</a>
        <a href="javascript:">口罩</a>
        <a href="javascript:">酒精湿巾</a>
        <a href="javascript:">手机壳</a>
        <a href="javascript:">酒精棉片</a>
        <a href="javascript:">无骨鸡爪</a>
        <a href="javascript:">咖啡</a>
        <a href="javascript:">四件套</a>
        <a href="javascript:">抽纸</a>
        <a href="javascript:">洗衣液</a>
        <a href="javascript:">收纳</a>
      </nav>
    </div>
  </div>
</template>
<script>
import { Search, Toast } from 'vant'
export default {
  name: 'Search',
  components: {
    [Search.name]: Search
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch(val) {
      Toast('搜索中...')
    },
    onCancel() {
      this.$router.back()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.searchBox
  width 100%
  height 100%
  font-size 16px
  background-color #EEEEEE
  .search_header
    width 100%
    height 44px
    box-sizing border-box
    padding 0 3px
    background-color #FFFFFF
    .search_form
      height 100%
      .van-search--show-action
        height 44px
        border-radius 5px
  .search_content
    padding 0 15px 10px
    background-color #FFFFFF
    .hot
      width 100%
      height 45px
      line-height 45px
      font-size 14px
      color #999
    .content_nav
      display flex
      flex-wrap wrap
      a
        border 1px solid black
        margin 0 16px 16px 0
        padding 5px
        font-size 12px
        font-weight 400
        color #333
      a:nth-child(-n+2)
        color #DD1A21
        border 1px solid #DD1A21
</style>