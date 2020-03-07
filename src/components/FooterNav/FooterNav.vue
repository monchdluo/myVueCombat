<template>
  <div class="FooterBox">
    <div @click="goto('/home')" :class="{on:$route.path==='/home'}">
      <i class="iconfont icon-zhuye"></i>
      <span>首页</span>
    </div>
    <div @click="goto('/classify')" :class="{on:$route.path==='/classify'}">
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
    </div>

    <div @click="goto('/buy')" :class="{on:$route.path==='/buy'}">
      <i class="iconfont icon-chakanshu"></i>
      <span>值得买</span>
    </div>
    <div @click="goto('/car')" :class="{on:$route.path==='/car'}">
      <i class="iconfont icon-gouwuche1"></i>
      <span>购物车</span>
    </div>
    <div @click="goto('/personal')" :class="{on:$route.path==='/personal'}">
      <i class="iconfont icon-user"></i>
      <span>个人</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterNav',
  methods: {
    // 点击跳转对应路由
    goto(path) {
      if (this.$route.path !== path) {
        this.$router.replace(path)
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.FooterBox
  width 100%
  height 50px
  font-size 16px
  position fixed
  z-index 99
  bottom 0
  left 0
  display flex
  justify-content space-around
  div
    display flex
    flex-direction column
    width 40px
    height 40px
    text-align center
    &.on
      color red
    i
      font-size 18px
      margin 6px 0
    span
      font-size 10px
</style>