<template>
  <div class="homeBox">
    <!-- home头部 -->
    <header class="home_header">
      <span class="wyyx">网易严选</span>
      <span>
        <van-icon name="search" class="search_icon" />
        <input type="text" placeholder="搜索商品,共24026款好物" class="inp">
      </span>
      <span>
        <p class="btn">登录</p>
      </span>
    </header>
    <!-- home导航栏 -->
    <nav class="home_nav">
      <div class="inner-nav">
        <van-tabs v-model="active">
          <van-tab title="推荐"></van-tab>
          <van-tab title="居家生活"></van-tab>
          <van-tab title="服饰鞋包"></van-tab>
          <van-tab title="美食酒水"></van-tab>
          <van-tab title="个护清洁"></van-tab>
          <van-tab title="母婴亲子"></van-tab>
          <van-tab title="运动旅行"></van-tab>
          <van-tab title="数码家电"></van-tab>
          <van-tab title="全球特色"></van-tab>
        </van-tabs>
      </div>
      <span class="down">
        <van-icon name="arrow-down" size="20" color="#aaa" />
      </span>
    </nav>
    <div class="home_content">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="185">
        <van-swipe-item><img src="./images/swiper/swiper1.webp" alt=""></van-swipe-item>
        <van-swipe-item><img src="./images/swiper/swiper2.webp" alt=""></van-swipe-item>
        <van-swipe-item><img src="./images/swiper/swiper3.webp" alt=""></van-swipe-item>
        <van-swipe-item><img src="./images/swiper/swiper4.webp" alt=""></van-swipe-item>
        <van-swipe-item><img src="./images/swiper/swiper5.webp" alt=""></van-swipe-item>
        <van-swipe-item><img src="./images/swiper/swiper6.webp" alt=""></van-swipe-item>
      </van-swipe>
      <!-- 网易品牌    -->
      <div class="home_brand">
        <span v-for="(policy,index) in home.policyDescList" :key="index">
          <img :src="policy.icon" alt="">
          <span>{{policy.desc}}</span>
        </span>
      </div>
      <!-- 商品列表 -->
      <div class="home_shopList">
        <div class="shopList_item" v-for="(kingKong,index) in home.kingKongModule.kingKongList" :key="index">
          <a href="javascript:">
            <div class="shopList_img">
              <img :src="kingKong.picUrl" alt="">
            </div>
            <span>{{kingKong.text}}</span>
          </a>
        </div>
      </div>
      <!-- 商品柜台 -->
      <div class="home_counter">
        <div class="counter_top">
          <img src="./images/gt/01.png" alt="">
        </div>
        <div class="counter_content">
          <div class="content_box">
            <span class="content_top">
              <img src="./images/gt/02.png" alt="">
            </span>
            <span class="content_top">
              <img src="./images/gt/03.png" alt="">
            </span>
            <span class="content_in">
              <p>48H限时购</p>
              <span>女王专属7折起</span>
              <img src="./images/gt/07.png" alt="">
            </span>
            <span class="content_in">
              <p>女神专属爆款</p>
              <span>美妆29.9元起</span>
              <img src="./images/gt/08.png" alt="">
            </span>
            <span class="content_in">
              <p>3月春茶上市</p>
              <span>特价384元/罐</span>
              <img src="./images/gt/09.png" alt="">
            </span>
          </div>
        </div>
      </div>
      <!-- 新人专享礼 -->
      <div class="home_person">
        <div class="person_top">
          <span class="top_span"></span>
          <span>新人专享礼</span>
          <span class="top_span"></span>
        </div>
        <div class="person_content">
          <div class="left">
            <p>新人专享礼包</p>
            <img src="./images/gt/10.png" alt="">
          </div>
          <div class="right">
            <div class="right_top">
              <div class="top_div">
                <div>福利社</div>
                <div class="top_in_div">今日特价</div>
                <img src="./images/gt/11.webp" alt="">
              </div>
            </div>
            <div class="right_botton">
              <div class="botton_div">
                <div>新人拼团</div>
                <div class="botton_in_div">1元起包邮</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- 类目热销榜 -->
      <div class="home_hot">
        <div class="hot_box">
          <div class="box_top">类目热销榜</div>
          <div class="box_content">
            <div class="box_content_top">
              <div class="top_left">
                <span>热销榜</span>
                <img src="./images/hot/01.png" alt="">
              </div>
              <div class="top_right">
                <span>好评榜</span>
                <img src="./images/hot/02.png" alt="">
              </div>
            </div>
            <div class="box_content_botton">
              <div class="botton_item">
                <p>居家生活榜</p>
                <img src="./images/hot/03.png" alt="">
              </div>
              <div class="botton_item">
                <p>美食酒水榜</p>
                <img src="./images/hot/04.png" alt="">
              </div>
              <div class="botton_item">
                <p>个护清洁榜</p>
                <img src="./images/hot/05.png" alt="">
              </div>
              <div class="botton_item">
                <p>服饰鞋包榜</p>
                <img src="./images/hot/06.png" alt="">
              </div>
              <div class="botton_item">
                <p>数码家电榜</p>
                <img src="./images/hot/07.png" alt="">
              </div>
              <div class="botton_item">
                <p>全球特色榜</p>
                <img src="./images/hot/08.png" alt="">
              </div>
              <div class="botton_item">
                <p>母婴亲子榜</p>
                <img src="./images/hot/09.png" alt="">
              </div>
              <div class="botton_item">
                <p>运动旅行榜</p>
                <img src="./images/hot/10.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 限时购 -->
      <div class="home_time">
        <div class="time_box">
          <div class="box_top">
            <span>限时购</span>
            <van-count-down :time="time">
              <template v-slot="timeData">
                <span class="item">{{ timeData.hours }}</span>:
                <span class="item">{{ timeData.minutes }}</span>:
                <span class="item">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
            <span class="gengduo">更多 ></span>
          </div>
          <div class="box_content">
            <div class="box_content_item">
              <img src="./images/time/01.webp" alt="">
              <div>
                <span class="red_span">￥29.9</span>
                <span class="hui_span">￥30</span>
              </div>
            </div>
            <div class="box_content_item">
              <img src="./images/time/01.webp" alt="">
              <div>
                <span class="red_span">￥29.9</span>
                <span class="hui_span">￥30</span>
              </div>
            </div>
            <div class="box_content_item">
              <img src="./images/time/01.webp" alt="">
              <div>
                <span class="red_span">￥29.9</span>
                <span class="hui_span">￥30</span>
              </div>
            </div>
            <div class="box_content_item">
              <img src="./images/time/01.webp" alt="">
              <div>
                <span class="red_span">￥29.9</span>
                <span class="hui_span">￥30</span>
              </div>
            </div>
            <div class="box_content_item">
              <img src="./images/time/01.webp" alt="">
              <div>
                <span class="red_span">￥29.9</span>
                <span class="hui_span">￥30</span>
              </div>
            </div>
            <div class="box_content_item">
              <img src="./images/time/01.webp" alt="">
              <div>
                <span class="red_span">￥29.9</span>
                <span class="hui_span">￥30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 新品首发 -->
      <div class="home_new">
        <div class="new_box">
          <div class="box_top">
            <span>新品首发</span>
            <span class="gengduo">更多 ></span>
          </div>
          <div class="box_content">
            <div class="box_content_item">
              <img src="./images/time/02.webp" alt="">
              <div>
                <div class="item_div">复工装备随身防护 日本空气净化除菌卡</div>
                <span class="red_span">￥79</span>
                <span class="red_span2">满99减10</span>
              </div>
            </div>
            <div class="box_content_item">
              <img src="./images/time/02.webp" alt="">
              <div>
                <div class="item_div">复工装备随身防护 日本空气净化除菌卡</div>
                <span class="red_span">￥79</span>
                <span class="red_span2">满99减10</span>
              </div>
            </div>
            <div class="box_content_item">
              <img src="./images/time/02.webp" alt="">
              <div>
                <div class="item_div">复工装备随身防护 日本空气净化除菌卡</div>
                <span class="red_span">￥79</span>
                <span class="red_span2">满99减10</span>
              </div>
            </div>
            <div class="box_content_item">
              <img src="./images/time/02.webp" alt="">
              <div>
                <div class="item_div">复工装备随身防护 日本空气净化除菌卡</div>
                <span class="red_span">￥79</span>
                <span class="red_span2">满99减10</span>
              </div>
            </div>
            <div class="box_content_item">
              <img src="./images/time/02.webp" alt="">
              <div>
                <div class="item_div">复工装备随身防护 日本空气净化除菌卡</div>
                <span class="red_span">￥79</span>
                <span class="red_span2">满99减10</span>
              </div>
            </div>
            <div class="box_content_item">
              <img src="./images/time/02.webp" alt="">
              <div>
                <div class="item_div">复工装备随身防护 日本空气净化除菌卡</div>
                <span class="red_span">￥79</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 断货补单王 -->
      <div class="home_goods">
        <div class="goods_item">
          <div class="goods_item_content">
            <div class="item_div_one">断货补单王</div>
            <div class="item_div_two">补仓疯抢中</div>
            <img src="./images/time/03.png" alt="">
            <img src="./images/time/03.png" alt="">
          </div>
        </div>
        <div class="goods_item">
          <div class="goods_item_content">
            <div class="item_div_one">断货补单王</div>
            <div class="item_div_two">补仓疯抢中</div>
            <img src="./images/time/03.png" alt="">
            <img src="./images/time/03.png" alt="">
          </div>
        </div>
        <div class="goods_item">
          <div class="goods_item_content">
            <div class="item_div_one">断货补单王</div>
            <div class="item_div_two">补仓疯抢中</div>
            <img src="./images/time/03.png" alt="">
            <img src="./images/time/03.png" alt="">
          </div>
        </div>
        <div class="goods_item">
          <div class="goods_item_content">
            <div class="item_div_one">断货补单王</div>
            <div class="item_div_two">补仓疯抢中</div>
            <img src="./images/time/03.png" alt="">
            <img src="./images/time/03.png" alt="">
          </div>
        </div>
      </div>
      <!-- home底部 -->
      <div class="home_footer">
        <div class="footer_top">
          <span class="footer_div_span a">下载APP</span>
          <span class="footer_div_span">电脑版</span>
        </div>
        <p>
          <span>网易公司版权所有 © 1997-2020</span>
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
// 引入Swiper
// import Swiper from 'swiper'
// 引入Swiper的样式
import 'swiper/css/swiper.css'
import { Icon, Tab, Tabs, Swipe, SwipeItem, CountDown } from 'vant'
// 引入Vuex
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      active: 0,
      ellipsis: false,
      time: 3 * 60 * 60 * 1000
    }
  },
  components: {
    // [DropdownMenu.name]: DropdownMenu,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [CountDown.name]: CountDown
  },
  // 计算属性
  computed: {
    ...mapState({
      home: state => state.home.home
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.homeBox
  width 100%
  height 100%
  font-size 16px
  display flex
  flex-direction column
  .home_header
    width 100%
    height 44px
    display flex
    justify-content space-around
    align-items center
    position fixed
    background-color #fff
    z-index 99
    .wyyx
      font-size 18px
    .search_icon
      margin-left 2px
      position absolute
      top 14px
    .inp
      background-color #EDEDED
      width 220px
      height 30px
      border-radius 4px
      text-align center
    .btn
      border 1px solid red
      padding 4px
      font-size 12px
      border-radius 4px
      color red
  .home_nav
    position fixed
    top 43px
    width 100%
    background-color #fff
    z-index 99
    .inner-nav
      width 80%
      .van-tabs__line
        bottom 2px
      .van-tabs__wrap
        height 30px
      .van-tabs__nav--line
        padding 0
        .van-ellipsis
          // height 86px
          margin-top -6px
          margin-right 14px
          margin-bottom -10px
          font-size 14px
        .van-ellipsis:first-child
          margin-right -2px
          text-align center
    .down
      position absolute
      right 20px
      top 5px
  .home_content
    width 100%
    .my-swipe .van-swipe-item
      color #fff
      font-size 20px
      line-height 150px
      text-align center
      background-color #39a9ed
      margin-top 72px
      img
        width 100%
        height 100%
    .home_brand
      width 100%
      height 36px
      display flex
      justify-content space-around
      img
        display inline-block
        width 20px
        height 20px
        vertical-align middle
      span
        line-height 36px
        font-size 10px
        vertical-align middle
    .home_shopList
      width 100%
      height 170px
      display flex
      justify-content space-around
      align-items center
      flex-wrap wrap
      text-align center
      .shopList_item
        margin 0 5px
        width 55px
        height 78px
        .shopList_img
          width 55px
          height 55px
          img
            width 100%
        span
          font-size 12px
    .home_counter
      width 100%
      height 347px
      padding-bottom 8px
      background-color #EEEEEE
      .counter_top
        width 100%
        height 120px
        img
          width 100%
      .counter_content
        width 100%
        height 227px
        background-color #CC3256
        overflow hidden
        margin-top -2px
        .content_box
          display flex
          flex-wrap wrap
          justify-content space-around
          width 96%
          margin 8px auto 8px
          .content_top
            width 49%
            height 93px
            display inline-block
            margin-top 5px
            img
              width 100%
          .content_in
            width 32%
            height 110px
            display inline-block
            background url('./images/gt/04.png')
            margin-top 5px
            border-radius 15px
            color #AB0933
            text-align center
            img
              width 70px
              height 70px
            p
              font-size 14px
              font-weight 700
              margin 5px 0
            span
              font-size 10px
              font-weight 300
    .home_person
      width 100%
      padding-top -15px
      .person_top
        width 100%
        height 45px
        text-align center
        line-height 45px
        .top_span
          width 12px
          height 2px
          display inline-block
          margin 0 10px 5px
          background-color #999999
      .person_content
        width 100%
        padding-bottom 15px
        border-bottom 10px solid #EEEEEE
        .left
          width 46%
          height 217px
          background-color #F9E9CF
          margin-right 2px
          margin-left 12px
          float left
          text-align center
          p
            margin 15px 0 0 15px
            text-align left
          img
            width 129px
            height 129px
            margin 10px 10px
        .right
          width 46%
          height 217px
          display inline-block
          margin-left 2px
          margin-right 12px
          .right_top
            width 100%
            height 49%
            background-color #FBE2D3
            margin-bottom 2px
            overflow hidden
            position relative
            .top_div
              margin 15px 0 0 15px
              img
                width 100px
                height 100px
                position absolute
                right 2px
                top 2px
              div
                display block
              .top_in_div
                font-size 10px
                color #aaa
                margin-top 5px
          .right_botton
            width 100%
            height 50%
            overflow hidden
            background-color #FFECC2
            .botton_div
              margin 15px 0 0 15px
              .botton_in_div
                width 60px
                height 16px
                font-size 10px
                background-color #CBB693
                text-align center
                line-height 15px
                color #fff
                margin-top 5px
                border-radius 4px
    .home_hot
      width 100%
      height 355px
      border-bottom 10px solid #EEEEEE
      .hot_box
        width 100%
        padding 0 10px
        box-sizing border-box
        .box_top
          height 50px
          line-height 50px
        .box_content
          width 100%
          height 305px
          .box_content_top
            width 100%
            .top_left
              width 49%
              height 100px
              background-color #F9F3E4
              margin 0 5px 5px 0
              float left
              line-height 100px
              span
                margin-left 12px
                padding-bottom 6px
                border-bottom 2px solid black
              img
                width 100px
                height 100px
                float right
                display inline
            .top_right
              width 49%
              height 100px
              background-color #EBEFF6
              margin 0 0 5px 0
              float left
              line-height 100px
              span
                margin-left 12px
                padding-bottom 6px
                border-bottom 2px solid black
              img
                width 100px
                height 100px
                float right
                display inline
          .box_content_botton
            width 100%
            .botton_item
              width 24%
              height 90px
              margin 0 4px 5px 0
              float left
              background-color #F5F5F5
              text-align center
              p
                font-size 12px
                margin-top 5px
              img
                width 60px
                height 60px
                margin-top 5px
            .botton_item:nth-child(4)
              margin 0 0 5px 0
            .botton_item:nth-child(8)
              margin 0 0 5px 0
    .home_time
      width 100%
      height 350px
      border-bottom 10px solid #EEEEEE
      .time_box
        width 100%
        height 100%
        .box_top
          width 100%
          height 50px
          box-sizing border-box
          padding 0 10px 0 10px
          line-height 50px
          span
            margin-right 10px
          .gengduo
            float right
            font-size 14px
          .van-count-down
            display inline-block
          .item
            display inline-block
            width 22px
            margin-right 5px
            color #fff
            font-size 10px
            text-align center
            background-color #333333
            border-radius 3px
        .box_content
          width 100%
          height 86%
          box-sizing border-box
          padding 0 5px 0 10px
          .box_content_item
            width 32%
            height 150px
            font-size 12px
            float left
            margin-left 4px
            img
              width 108px
              height 108px
              background-color #F5F5F5
              margin-bottom 10px
            .red_span
              color red
              margin-right 5px
              margin-left 5px
            .hui_span
              color #7F7F7F
    .home_new
      width 100%
      height 460px
      border-bottom 10px solid #EEEEEE
      .new_box
        width 100%
        height 100%
        .box_top
          width 100%
          height 50px
          box-sizing border-box
          padding 0 10px 0 10px
          line-height 50px
          span
            margin-right 10px
          .gengduo
            float right
            font-size 14px
        .box_content
          width 100%
          height 90%
          box-sizing border-box
          padding 0 5px 0 10px
          .box_content_item
            width 32%
            height 196px
            font-size 12px
            float left
            margin-left 4px
            margin-bottom 10px
            img
              width 108px
              height 108px
              background-color #F5F5F5
              margin-bottom 8px
            .item_div
              width 90%
              height 34px
              line-height 1.5
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
              overflow hidden
            .red_span
              color red
              display block
              font-size 16px
              margin 5px 0
            .red_span2
              display inline-block
              border 1px solid red
              border-radius 8px
              font-size 8px
              padding 2px
              color red
    .home_goods
      width 100%
      height 288px
      box-sizing border-box
      padding 6px 10px 15px
      border-bottom 10px solid #EEEEEE
      .goods_item
        width 49%
        height 132px
        background-color #F6F6F6
        overflow hidden
        float left
        margin 0 3px 2px 0
        .goods_item_content
          margin 10px 0 0 10px
          .item_div_one
            padding 5px 0
          .item_div_two
            font-size 10px
            color #7F7F7F
          img
            width 48%
            height 48%
            margin-right 2px
    .home_footer
      width 100%
      height 134px
      background-color #414141
      text-align center
      padding 24px 0 14px
      .footer_top
        text-align center
        margin-bottom 26px
        .footer_div_span
          display inline-block
          width 86px
          height 30px
          border 1px solid #999
          border-radius 5px
          text-align center
          line-height 30px
          font-size 10px
          color #fff
        .a
          margin-right 30px
      p
        color #999
        font-size 10px
        span
          display block
          margin 5px
</style>
