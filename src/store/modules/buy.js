// 引入mutation的type
import { RECEIVE_BUYSWIPER, RECEIVE_BUY } from '../mutation-type'
// 引入api
import { reqBuySwiper, reqBuy } from '../../api'

const state = {
  // 值得买轮播图
  buySwiper: [],
  // 值得买瀑布流
  buy: []
}
const mutations = {
  [RECEIVE_BUYSWIPER] (state, buySwiper) {
    state.buySwiper = buySwiper
  },

  [RECEIVE_BUY] (state, buy) {
    state.buy = buy
  }
}
const actions = {
  async getBuySwiper ({ commit }) {
    const result = await reqBuySwiper()
    const buySwiper = result
    commit(RECEIVE_BUYSWIPER, buySwiper)
  },

  async getBuy ({ commit }) {
    const result = await reqBuy()
    const buy = result
    commit(RECEIVE_BUY, buy)
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}