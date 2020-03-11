// 引入mutation的type
import { RECEIVE_CLASSIFY, RECEIVE_CATELISTES } from '../mutation-type'
// 引入接口
import { reqClassify, reqCateLists } from '../../api'
const state = {
  // 分类左侧数据
  classify: [],
  // 分类右侧数据
  cateLists: []
}
const mutations = {
  // 分类左侧
  [RECEIVE_CLASSIFY] (state, classify) {
    state.classify = classify
  },
  // 分类右侧
  [RECEIVE_CATELISTES] (state, cateLists) {
    state.cateLists = cateLists
  }
}
const actions = {
  async getClassify ({ commit }) {
    const result = await reqClassify()
    const classify = result
    // console.log(classify)
    commit(RECEIVE_CLASSIFY, classify)
  },

  async getCateLists ({ commit }) {
    const result = await reqCateLists()
    const cateLists = result
    // console.log(cateLists)
    commit(RECEIVE_CATELISTES, cateLists)

  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}