import Vue from 'vue'
import Vuex from 'vuex'
//挂载Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //存放的键值对就是所要管理的状态
    skuState: false
  },
  getters: {

  },
  mutations: {
    setSkuStatue(state, value) {
      state.skuState = value;
    },
  },
  actions: {
    setSkuStatue({commit, state}, value) {
      commit('setSkuStatue',value)
    },
  },
  modules: {
  }
})
