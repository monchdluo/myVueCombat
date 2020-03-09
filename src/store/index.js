// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入模块
import home from './modules/home'
// 声明使用Vuex
Vue.use(Vuex)
// 实例化Vuex对象，并暴露
export default new Vuex.Store({
  modules: {
    home
  }
})
