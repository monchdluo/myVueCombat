<template>
  <div class="homeBox">
    <header class="home_header">
      <span class="wyyx">网易严选</span>
      <span>
        <input type="text" placeholder="搜索商品,共24026款好物" class="inp">
      </span>
      <span>
        <p class="btn">登录</p>
      </span>
    </header>
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
      <!-- 网易品牌 -->
      <div class="home_brand">
        <span>
          <van-icon name="smile-o" color="red" size="16" />
          <span>网易自营品牌</span>
        </span>
        <span>
          <van-icon name="certificate" color="red" size="16" />
          <span>30天无忧退货</span>
        </span>
        <span>
          <van-icon name="after-sale" color="red" size="16" />
          <span>48小时快速退款</span>
        </span>

      </div>
      <!-- 商品列表 -->
      <div class="home_shopList">
        <div class="shopList_item">
          <a href="javascript:">
            <div class="shopList_img">
              <img src="./images/list/01.png" alt="">
            </div>
            <span>新品首发</span>
          </a>
        </div>
        <div class="shopList_item">
          <a href="javascript:">
            <div class="shopList_img">
              <img src="./images/list/02.png" alt="">
            </div>
            <span>居家生活</span>
          </a>
        </div>
        <div class="shopList_item">
          <a href="javascript:">
            <div class="shopList_img">
              <img src="./images/list/03.png" alt="">
            </div>
            <span>服饰鞋包</span>
          </a>
        </div>
        <div class="shopList_item">
          <a href="javascript:">
            <div class="shopList_img">
              <img src="./images/list/04.png" alt="">
            </div>
            <span>美食酒水</span>
          </a>
        </div>
        <div class="shopList_item">
          <a href="javascript:">
            <div class="shopList_img">
              <img src="./images/list/05.png" alt="">
            </div>
            <span>个护清洁</span>
          </a>
        </div>
        <div class="shopList_item">
          <a href="javascript:">
            <div class="shopList_img">
              <img src="./images/list/06.png" alt="">
            </div>
            <span>母婴亲子</span>
          </a>
        </div>
        <div class="shopList_item">
          <a href="javascript:">
            <div class="shopList_img">
              <img src="./images/list/07.png" alt="">
            </div>
            <span>运动旅行</span>
          </a>
        </div>
        <div class="shopList_item">
          <a href="javascript:">
            <div class="shopList_img">
              <img src="./images/list/08.png" alt="">
            </div>
            <span>数码家电</span>
          </a>
        </div>
        <div class="shopList_item">
          <a href="javascript:">
            <div class="shopList_img">
              <img src="./images/list/09.png" alt="">
            </div>
            <span>全球特色</span>
          </a>
        </div>
        <div class="shopList_item">
          <a href="javascript:">
            <div class="shopList_img">
              <img src="./images/list/10.png" alt="">
            </div>
            <span>好货抄底</span>
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
          </div>
          <div class="box_content">

          </div>
        </div>
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
export default {
  name: 'Home',
  data() {
    return {
      active: 0,
      ellipsis: false,
      time: 30 * 60 * 60 * 1000
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
    height 40px
    display flex
    justify-content space-around
    align-items center
    margin-top 8px
    .wyyx
      font-size 18px
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
    position relative
    width 100%
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
      img
        width 100%
        height 100%
    .home_brand
      width 100%
      height 36px
      display flex
      justify-content space-around
      span
        line-height 36px
        font-size 10px
        vertical-align middle
        i
          vertical-align middle
          margin-right 2px
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
      .hot_box
        width 100%
        padding 0 10px
        box-sizing border-box
        border-bottom 10px solid #EEEEEE
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
          height 100%
          box-sizing border-box
          padding 0 5px 0 10px
</style>
