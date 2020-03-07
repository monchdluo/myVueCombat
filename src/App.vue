<template>
  <div id="app">
    <router-view />
    <FooterNav />
  </div>
</template>
<script>
// 引入FooterNav组件
import FooterNav from './components/FooterNav/FooterNav'
export default {
  name: 'App',
  // 注册组件
  components: {
    FooterNav
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 93%
</style>