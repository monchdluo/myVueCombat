<template>
  <div class="email-wrap">
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
        <span class="car">
          <van-icon name="shopping-cart-o" size='20' />
        </span>
      </div>
    </header>
    <div class="content-top">
      <img src="../img/center.png" alt class="img" />
    </div>
    <div class="email-box">
      <form action="#">
        <div class="email-number">
          <input type="text" placeholder="邮箱账号" class="number-txt" name="myEmail" />
        </div>
        <div class="email-password">
          <input type="password" placeholder="密码" class="password-txt" />
        </div>
        <div style="color: #DD1a21"></div>
        <div class="email-problem">
          <a href="#" class="register">注册账号</a>
          <a href="#" class="forget">忘记密码</a>
        </div>
        <button class="btn">登录</button>
      </form>
      <div class="phone-other" @click="goto('/usePhone')">
        <span>其他登录方式</span>
        <i></i>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from 'vant'
export default {
  name: 'UseEmail',
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
.email-wrap
  width 100%
  box-sizing border-box
  overflow hidden
  font-size 16px
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
      margin-top 10px
      i
        font-size 22px
        color #000
    .title
      font-size 18px
      line-height 50px
      margin-right 46px
    .right
      position relative
      .car
        display inline-block
        margin-top 10px
      .searchBox
        position absolute
        top 6px
        left -50px
      .gouwuche
        font-size 22px
        color #000
        margin-top 10px
  .content-top
    width 100%
    height 50px
    margin 35px 0
    box-sizing border-box
    display flex
    justify-content center
    align-items center
    .img
      width 140px
  .email-box
    width 100%
    box-sizing border-box
    padding 0 25px
    form
      width 100%
      height 100%
      padding-top 50px
      box-sizing border-box
      margin-bottom 20px
      .email-number, .email-password
        width 100%
        height 50px
        line-height 50px
        border-bottom 1px solid #f4f4f4
        .number-txt, .password-txt
          width 90%
          height 25px
          outline-color transparent
      .email-problem
        height 50px
        display flex
        justify-content space-between
        a
          color #7f7f7f
          line-height 50px
      .btn
        width 100%
        height 50px
        background-color #DD1a21
        margin-bottom 10px
        padding 0
        border 0px solid transparent
        outline none
        color rgba(255, 255, 255, 0.5)
      .phone-agree
        #checkbox
          width 20px
          height 20px
          color #7f7f7f
          outline none
          font-size 15px
          background-color #fff
          font-weight lighter
          vertical-align middle
        a
          color #7e8c8d
    .phone-other
      width 100%
      text-align center
      i
        width 14px
        height 14px
        display inline-block
        background url('./img/right.webp') no-repeat 0 0 / 100%
        vertical-align bottom
</style>
