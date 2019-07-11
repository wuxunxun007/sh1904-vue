import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 需要管理的组件的状态
    loginState: ''
  },
  mutations: { // 唯一改变状态的地方
    changeLoginState (state, data) { // state代表的是初始化的数据，data代表改变的数据
      state.loginState = data
    }
  },
  actions: { // 异步操作

  }
})
