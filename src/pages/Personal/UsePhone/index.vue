<template>
  <div class="phone-wrap">
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
    <!-- <div class="phone-box">
      <form action="#">
        <div class="phone-number">
          <input type="number" placeholder="请输入手机号" class="number-txt" name="myphone" />

        </div>
        <div class="phone-password">
          <input type="text" placeholder="请输入手机验证码" class="password-txt" />
          <a href="#" class="vcode">获取验证码</a>
        </div>
        <div style="color: #DD1a21"></div>
        <div class="phone-problem">
          <span>遇到问题？</span>
          <a href="#">使用密码验证登录</a>
        </div>
        <button class="btn">登录</button>
        <div class="phone-agree">
          <input type="checkbox" name="agree" id="checkbox" />
          <label>
            <span>我同意</span>
            <a href="#">《服务条款》</a>
            <span>和</span>
            <a href="#">《网易隐私政策》</a>
          </label>
        </div>
      </form>
      <div class="phone-other">
        <span>其他登录方式</span>
        <i></i>
      </div>
    </div> -->
    <div class="phone_box">
      <van-form @submit="onSubmit" class="out">
        <van-field v-model="username" name="手机号" label="手机号" placeholder="手机号" :rules="[{ required: true, message: '请填写手机号' }]" />
        <van-field v-model="password" type="password" name="短信验证码" label="短信验证码" placeholder="短信验证码" :rules="[{ required: true, message: '请填短信验证码' }]" />
        <div class="getduanx">获取验证码</div>
        <span class="wenti">遇到问题？</span>
        <span class="yongdengl">使用密码验证登录</span>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <div class="phone-other" @click="goto('/useEmail')">
        <span>其他登录方式</span>
        <i></i>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, field, button, Icon } from 'vant'
export default {
  name: 'UsePhone',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    [Form.name]: Form,
    [field.name]: field,
    [button.name]: button,
    [Icon.name]: Icon
  },

  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    goto(path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.phone-wrap
  font-size 16px
  width 100%
  box-sizing border-box
  height 100%
  overflow hidden
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
  .phone_box
    .out
      position relative
      .van-field
        margin-bottom 20px
      .getduanx
        width 82px
        height 26px
        border 1px solid #666
        text-align center
        line-height 26px
        border-radius 5px
        font-size 14px
        position absolute
        right 10%
        bottom 50%
      .wenti
        font-size 14px
        color #666
        margin 0 15px
      .yongdengl
        font-size 14px
        margin 1px
        margin-left 130px
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
