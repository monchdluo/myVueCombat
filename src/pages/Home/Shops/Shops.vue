<template>
  <div class="ShopListBox">
    <!-- 头部 -->
    <header class="header">
      <a href="#" class="home" @click="goto('/home')">
        <van-icon name="wap-home-o" />
      </a>
      <h1 class="title">网易严选</h1>
      <div class="right">
        <a href="#" class="searchBox">
          <van-icon name="search" size="30" />
        </a>
        <a href="#">
          <i class="iconfont icon-gouwuche gouwuche"></i>
        </a>
      </div>
    </header>
    <div class="list_content">
      <div class="list_swiper">
        <van-swipe class="my-swipe swppp" :autoplay="3000" indicator-color="white" :height="185">
          <van-swipe-item>
            <div>
              <img src="../images/swiper/swiper3.webp" alt="">
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div>
              <img src="../images/swiper/swiper2.webp" alt="">
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div>
              <img src="../images/swiper/swiper1.webp" alt="">
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div>
              <img src="../images/swiper/swiper4.webp" alt="">
            </div>
          </van-swipe-item>

        </van-swipe>
      </div>
      <div class="title">推荐关注</div>
      <div class="content_top">
        <div class="top_box">
          <img src="./img/01.png" alt="">
          <div class="top_right">
            <i>“</i>
            <p class="p1">在家坐享星级牛排大餐</p>
            <p>在家坐享星级牛排大餐，澳洲M3谷饲牛排</p>
            <p class="p3">￥199</p>
          </div>
        </div>

      </div>
      <div class="content_bottom">
        <div v-for="(list,index) in homeNav" :key="index">
          <div class="box" v-for="(nav,index) in list.subCateList" :key="index">
            <img :src="nav.wapBannerUrl" alt="">
            <p class="bp1">{{nav.frontDesc}}</p>
            <p class="bp2">￥59</p>
            <span class="hot">热品</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { Icon, Swipe, SwipeItem } from 'vant'
import { mapState } from 'vuex'
export default {
  name: 'ShopList',
  components: {
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  methods: {
    goto(path) {
      this.$router.replace(path)
    }
  },
  computed: {
    ...mapState({
      homeNav: state => state.home.homeNav
    })
  },
  async mounted() {
    await this.$store.dispatch('getHomeNav')
    console.log(this.homeNav)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.ShopListBox
  overflow hidden
  font-size 16px
  .header
    position fixed
    z-index 99
    box-sizing border-box
    width 100%
    height 44px
    background-color #fafafa
    display flex
    justify-content space-between
    padding 0 12px
    .home
      width 70.5px
      line-height 55px
      i
        font-size 22px
        color #000
    .title
      font-size 18px
      line-height 50px
      margin-right 46px
    .right
      position relative
      line-height 50px
      .searchBox
        position absolute
        top 6px
        left -50px
      .gouwuche
        font-size 22px
        color #000
  .list_content
    margin-top 44px
    .list_swiper
      border-bottom 10px solid #EEEEEE
      .my-swipe .van-swipe-item
        color #fff
        font-size 20px
        line-height 150px
        text-align center
        background-color #39a9ed
      .swppp
        height 185px
        img
          height 185px
          width 100%
    .title
      width 100%
      height 55px
      text-align center
      line-height 55px
    .content_top
      width 100%
      height 140px
      box-sizing border-box
      padding 0 10px 5px
      margin-bottom 15px
      .top_box
        margin-bottom 10px
        img
          width 140px
          height 140px
          background-color #B1C0C6
        .top_right
          float right
          width 205px
          height 138px
          line-height 25px
          border 1px solid #7F7F7F
          border-left 0
          padding-left 8px
          .p1
            font-size 12px
            color #7F7F7F
          .p3
            color red
    .content_bottom
      padding 0 10px
      .box:nth-child(odd)
        margin-right 10px
      .box
        width 172px
        height 280px
        float left
        img
          width 172px
          height 172px
        .bp1
          font-size 14px
          margin 5px 0
          width 100%
        .bp2
          color red
          margin-bottom 8px
          width 100%
        .hot
          border 1px solid red
          font-size 10px
          padding 2px
          border-radius 10px
          color red
</style>
