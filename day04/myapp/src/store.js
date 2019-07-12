import Vue from 'vue'
import Vuex from 'vuex'
import { CHANGE_LOGIN_STATE } from './mutation-types'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 需要管理的组件的状态
    loginState: '',
    list: [1, 2, 3, 4, 5, 6]
  },
  getters: { // 可以看做是 state 的计算属性,类似于组件中的 data 与 computed
    len (state) {
      return state.list.length
    }
  },
  mutations: { // 唯一改变状态的地方
    // changeLoginState (state, data) {
    //   // state.loginState = data
    //   state.loginState = data.result
    // },
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [CHANGE_LOGIN_STATE] (state, data) { // state代表的是初始化的数据，data代表改变的数据
      // state.loginState = data
      state.loginState = data.result
    }
  },
  actions: { // 异步操作

  }
})
