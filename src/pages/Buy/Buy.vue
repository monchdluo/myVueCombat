<template>
  <div class="main">
    <!-- 头部 -->
    <header class="header">
      <a href="#" class="home" @click="goto('/home')">
        <van-icon name="wap-home-o" />
      </a>
      <h1 class="title">值得买</h1>
      <div class="right">
        <a href="#" class="searchBox">
          <van-icon name="search" size="30" />
        </a>
        <a href="#">
          <i class="iconfont icon-gouwuche gouwuche"></i>
        </a>
      </div>
    </header>

    <!-- nav -->
    <div class="nav">
      <div class="nav-top">
        <img src="./imgs/login.png" class="login" />
        <h2 class="nav-title">严选好物 用心生活</h2>
      </div>
      <div class="nav-bottom" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <div class="nav-bottom-con" id="container">
          <div class="nav-item" v-for="(bs,index) in buySwiper" :key="index">
            <div class="nav-item-con">
              <a href="javascript:;" class="item">
                <img :src="bs.picUrl" />
                <div class>
                  <div class="item-title">{{bs.mainTitle}}</div>
                  <div class="nav-text">{{bs.viceTitle}}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-bar">
        <span v-for="index in [0, 1, 2, 3, 4]" :key="index" :class="{ active: active == index }"></span>
      </div>
    </div>

    <!-- 瀑布流 -->
    <div class="waterfall">
      <div class="flow-left">
        <div class="fall-con">
          <img src="https://yanxuan.nosdn.127.net/87f3077c32a6946ae644f6a6a8205fc1.png?imageView&thumbnail=345y191.66666666666669&quality=95" />
        </div>
        <div class="fall-con">
          <img src="https://yanxuan.nosdn.127.net/5b2e1993394e8aefe43f554a2a23a1b7.jpg?imageView&thumbnail=345y345&quality=95" />
          <div class="fall-title">3月必买好物，一起来拥抱春天吧</div>
          <div class="fall-bottom">
            <div class="fall-bottom-left">
              <img src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48" class="touxiang" />
              <span class="fall-text">选妹</span>
            </div>
            <div class="fall-bottom-right">
              <img src="./imgs/eyes.png" class="eyes" />
              <span class="fall-text">119k</span>
            </div>
          </div>
        </div>
        <div class="fall-con">
          <img src="https://yanxuan.nosdn.127.net/9ddeeb47160b4af2da78d889f64571dc.jpg?imageView&thumbnail=345y345&quality=95" />
          <div class="fall-title">带加热功能的饭盒，在公司也能吃上自家饭</div>
          <div class="fall-bottom">
            <div class="fall-bottom-left">
              <img src="http://yanxuan.nosdn.127.net/3ba7a99d5b4e18db22696f5293b5daed.jpg?imageView&quality=65&thumbnail=48y48" class="touxiang" />
              <span class="fall-text">网易有道：莉莉</span>
            </div>
            <div class="fall-bottom-right">
              <img src="./imgs/eyes.png" class="eyes" />
              <span class="fall-text">43k</span>
            </div>
          </div>
        </div>
        <div class="fall-con">
          <img src="https://yanxuan.nosdn.127.net/fde4127ee9b91a4ddab278cc032ed97b.jpg?imageView&thumbnail=345y191.66666666666669&quality=95" />
          <div class="fall-title">3月8日，致敬平凡又英勇的自己</div>
          <div class="fall-bottom">
            <div class="fall-bottom-left">
              <img src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48" class="touxiang" />
              <span class="fall-text">选妹</span>
            </div>
            <div class="fall-bottom-right">
              <img src="./imgs/eyes.png" class="eyes" />
              <span class="fall-text">58k</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flow-right">
        <div class="fall-con">
          <img src="https://yanxuan.nosdn.127.net/805d9c90bff5401197160c64765a9cf5.jpg?imageView&thumbnail=345y345&quality=95" />
          <div class="fall-title">
            如期而至的不止春天，还有严选这杯明前头采茶~
          </div>
          <div class="fall-bottom">
            <div class="fall-bottom-left">
              <img src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48" class="touxiang" />
              <span class="fall-text">选妹</span>
            </div>
            <div class="fall-bottom-right">
              <img src="./imgs/eyes.png" class="eyes" />
              <span class="fall-text">59k</span>
            </div>
          </div>
        </div>
        <div class="fall-con">
          <img src="https://yanxuan.nosdn.127.net/935bc1902c88eda09aae5d66ff364560.jpg?imageView&thumbnail=345y191.66666666666669&quality=95" />
          <div class="fall-title">
            严选明星日 负离子速干吹风机
          </div>
          <div class="fall-bottom">
            <div class="fall-bottom-left">
              <img src="http://yanxuan.nosdn.127.net/9a6bad0f5c8ccf03c7647cc6f6d5ce43.png?imageView&quality=65&thumbnail=48y48" class="touxiang" />
              <span class="fall-text">明星商品</span>
            </div>
            <div class="fall-bottom-right">
              <img src="./imgs/eyes.png" class="eyes" />
              <span class="fall-text">1563</span>
            </div>
          </div>
        </div>
        <div class="fall-con">
          <img src="https://yanxuan.nosdn.127.net/b1cda4e6e4b3d22c97c0390ef3ffa360.jpg?imageView&thumbnail=345y191.66666666666669&quality=95" />
          <div class="fall-title">
            宅家必囤刚需品大赏
          </div>
          <div class="fall-bottom">
            <div class="fall-bottom-left">
              <img src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48" class="touxiang" />
              <span class="fall-text">选妹</span>
            </div>
            <div class="fall-bottom-right">
              <img src="./imgs/eyes.png" class="eyes" />
              <span class="fall-text">193k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from 'vant'
import { mapState } from 'vuex'
export default {
  name: 'Buy',
  data() {
    return {
      active: 0,
      translateX: 0,
      evelX: 0,
      startX: 0,
      endX: 0,
      disX: 0
    }
  },
  components: {
    [Icon.name]: Icon
  },
  async mounted() {
    await this.$store.dispatch('getBuySwiper')
    await this.$store.dispatch('getBuy')
    console.log(this.buy)
  },
  computed: {
    ...mapState({
      buySwiper: state => state.buy.buySwiper,
      buy: state => state.buy.buy
    })
  },
  methods: {
    goto(path) {
      this.$router.replace(path)
    },
    touchStart(event) {
      document.getElementById('container').style.transition = null
      this.startX = event.targetTouches[0].clientX
      this.evelX = this.translateX
    },
    touchMove(event) {
      this.endX = event.targetTouches[0].clientX
      this.disX = this.startX - this.endX
      this.translateX = this.evelX + this.disX
      document.getElementById('container').style.transform =
        'translateX(' + -this.translateX + 'px)'
    },
    touchEnd(event) {
      document.getElementById('container').style.transition = 'all .5s'
      if (this.translateX < 0) {
        this.active = 0
        this.translateX = 0
        document.getElementById('container').style.transform = 'translateX(0)'
      } else if (this.translateX > 88.75 * 4) {
        this.active = 4
        this.translateX = 88.75 * 4
        document.getElementById('container').style.transform =
          'translateX(' + -88.75 * 4 + 'px)'
      } else if (this.translateX > 88.75 * 3) {
        this.active = 3
        this.translateX = 88.75 * 3
        document.getElementById('container').style.transform =
          'translateX(' + -this.translateX + 'px)'
      } else if (this.translateX > 88.75 * 2) {
        this.active = 2
        this.translateX = 88.75 * 2
        document.getElementById('container').style.transform =
          'translateX(' + -this.translateX + 'px)'
      } else if (this.translateX > 88.75) {
        this.active = 1
        this.translateX = 88.75
        document.getElementById('container').style.transform =
          'translateX(' + -this.translateX + 'px)'
      } else {
        this.active = 0
        this.translateX = 0
        document.getElementById('container').style.transform = 'translateX(0)'
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.main
  background-color #eee
  .header
    box-sizing border-box
    width 100%
    height 50px
    background-color #fafafa
    display flex
    justify-content space-between
    padding 0 12px
    .home
      width 70.5px
      i
        font-size 22px
        color #000
    .title
      font-size 18px
      line-height 50px
      margin-right 46px
    .right
      position relative
      .searchBox
        position absolute
        top 6px
        left -50px
      .gouwuche
        font-size 22px
        color #000
  .nav
    background-image url('./imgs/nav-bg.png')
    background-repeat no-repeat
    background-size 374px 270px
    width 100%
    height 342.5px
    position relative
    .nav-top
      box-sizing border-box
      width 100%
      height 72.5px
      padding 30px 0 0 6px
      .login
        width 65px
        height 34.33px
      .nav-title
        display inline-block
        vertical-align middle
        width 124.5px
        height 22px
        font-size 15px
        color #fff
        margin-left 2px
    .nav-bottom
      width 355px
      height 270px
      background-color #fff
      margin-left 10px
      border-radius 8px
      text-align center
      overflow hidden
      // position relative
      img
        width 60px
        height 60px
      .nav-bottom-con
        // position absolute
        width 370px * 2
        overflow hidden
        display flex
        flex-wrap wrap
        .nav-item
          float left
          width 88.75px
          height 133px
          .nav-item-con
            width 90px
            height 117px
            padding 18px 3px 3px
            box-sizing border-box
            .item
              display flex
              flex-direction column
              align-items center
              justify-content center
              margin-bottom 22px
              img
                margin-bottom 8px
              .item-title
                font-size 14px
                font-weight bold
                color #000
                margin-bottom 6px
              .nav-text
                font-size 0.27rem
                color #aaaaaa
    .nav-bar
      height 16.8px
      position absolute
      left 50%
      transform translateX(-50%)
      bottom 30px
      span
        display inline-block
        width 19.6px
        height 2px
        background-color #ddd
      .active
        background-color red
  .waterfall
    width 355px
    overflow hidden
    margin 15px 10.1px 0
    display flex
    justify-content space-between
    .flow-left, .flow-right
      width 172.5px
      .fall-con
        border-radius 8px
        background-color #fff
        overflow hidden
        margin-bottom 10px
        img
          width 172.5px
        .fall-title
          font-size 15px
          color #333
          line-height 22px
          font-family 'PingFangSC-Regular'
          padding 8px
        .fall-bottom
          display flex
          justify-content space-between
          padding 8.8px 8px 12px
          .fall-text
            color #7f7f7f
            font-size 12px
          .fall-bottom-left
            display flex
            align-items center
            .touxiang
              width 24px
              height 24px
              border-radius 50%
              margin-right 4px
          .fall-bottom-right
            display flex
            align-items center
            .eyes
              width 16px
</style>
