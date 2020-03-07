<template>
  <div class="homeBox">
    <header class="home_header">
      <span class="wyyx">网易严选</span>
      <span>
        <input type="text" placeholder="搜索商品,共24027款好物" class="inp">
      </span>
      <span>
        <p class="btn">登录</p>
      </span>
    </header>
    <nav class="home_nav">
      <a href="javascript:">推荐</a>
      <a href="javascript:">家居生活</a>
      <a href="javascript:">服饰鞋包</a>
      <a href="javascript:">美食酒水</a>
      <van-dropdown-menu class="dro">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>

    </nav>

    <div class="home_content">

    </div>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from 'vant'
export default {
  name: 'Home',
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]
    }
  },
  components: {
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem
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
    height 50px
    display flex
    justify-content space-around
    align-items center
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
    .tabs
      display inline-block
    .dro
      display inline-block
</style>