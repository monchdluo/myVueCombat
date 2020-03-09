// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入router路由器
import router from './router'
// 引入store
import store from './store'
// 引入适配
import '../tools/rem'
// 设置浏览器控制台是否提示信息
Vue.config.productionTip = false
// 创建Vue实例对象
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />',
  // 注册路由器
  router,
  // 注册仓库
  store
})