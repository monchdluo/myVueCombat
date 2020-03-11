// 引入mutation的type
import { RECEIVE_HOME, RECEIVE_HOMENAV } from '../mutation-type'
// 引入接口
import { reqHome, reqHomeNav } from '../../api'
const state = {
  // 首页数据
  home: [],
  // 首页Nav数据
  homeNav: []
}
const mutations = {
  [RECEIVE_HOME] (state, home) {
    state.home = home
  },
  [RECEIVE_HOMENAV] (state, homeNav) {
    state.homeNav = homeNav
  }
}
const actions = {
  async getHome ({ commit }) {
    // 调用接口发送异步
    const result = await reqHome()
    // 成功拿到数据
    const home = result
    // console.log(result)
    commit(RECEIVE_HOME, home)
  },

  async getHomeNav ({ commit }) {
    // 调用接口发送异步请求
    const result = await reqHomeNav()
    // 成功
    const homeNav = result
    commit(RECEIVE_HOMENAV, homeNav)
  }
}
const getters = {}
// 暴露
export default {
  state,
  mutations,
  actions,
  getters
}