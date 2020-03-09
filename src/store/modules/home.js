// 引入mutation的type
import { RECEIVE_HOME } from '../mutation-type'
// 引入接口
import { reqHome } from '../../api'
const state = {
  // 首页数据
  home: []
}
const mutations = {
  [RECEIVE_HOME] (state, home) {
    state.home = home
  }
}
const actions = {
  async getHome ({ commit }) {
    // 调用接口发送异步
    const result = await reqHome()
    // 成功拿到数据
    const home = result
    console.log(result)


    commit(RECEIVE_HOME, home)
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