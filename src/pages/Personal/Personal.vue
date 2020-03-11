<template>
  <div class="personalBox">
    <div class="personal_content">
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

      <!-- 内容 -->
      <div class="content">
        <div class="content_top">
          <img src="./img/01.png" alt="">
        </div>
        <div class="btn1" @click="goto('/usePhone')">
          <van-icon name="phone-o" size="20" class="sj" />
          <span>手机号快捷登录</span>
        </div>
        <div class="btn2" @click="goto('/useEmail')">
          <van-icon name="envelop-o" size="20" class="yx" />
          <span>邮箱账号登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from 'vant'

export default {
  name: 'Personal',
  components: {
    [Icon.name]: Icon
  },
  methods: {
    goto(path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.personalBox
  background-color #F2F5F4
  width 100%
  height 100%
  .personal_content
    .header
      box-sizing border-box
      width 100%
      height 44px
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
          background-color #FAFAFA
        .gouwuche
          font-size 22px
          color #000
    .content
      .content_top
        width 100%
        height 240px
        text-align center
        line-height 240px
        img
          width 134px
          height 45px
      .btn1
        width 90%
        height 47px
        background-color #DD1A21
        color #fff
        font-size 14px
        text-align center
        line-height 47px
        margin 0 0 5% 5%
        .sj
          position relative
          top 5px
          margin-right 5px
      .btn2
        width 90%
        height 47px
        color #DD1A21
        font-size 14px
        border 1px solid #DD1A21
        text-align center
        line-height 47px
        margin 0 0 5% 5%
        .yx
          position relative
          top 5px
          margin-right 5px
</style>
