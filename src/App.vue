<template>
  <div id="app">
    <router-view />
    <FooterNav v-show="$route.meta.isShowFooter" />
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
  },
  async mounted() {
    this.$store.dispatch('getHome')
    await this.$store.dispatch('getHomeNav')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
</style>