import Vue from 'vue'
import Vuex from 'vuex'
// import { CHANGE_LOGIN_STATE } from './mutation-types'
import * as types from './mutation-types'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 需要管理的组件的状态
    loginState: '',
    list: [1, 2, 3, 4, 5, 6],
    kindlist: [],
    cartlist: []
  },
  getters: { // 可以看做是 state 的计算属性,类似于组件中的 data 与 computed
    len (state) {
      return state.cartlist.length
    },
    totalNum (state) {
      let totalNum = 0
      state.cartlist.map(item => {
        item.flag ? totalNum += item.num : totalNum += 0
      })
      return totalNum
    },
    totalPrice (state) {
      let totalPrice = 0
      state.cartlist.map(item => {
        item.flag ? totalPrice += item.num * item.price : totalPrice += 0
      })
      return totalPrice
    }
  },
  mutations: { // 唯一改变状态的地方
    // changeLoginState (state, data) {
    //   // state.loginState = data
    //   state.loginState = data.result
    // },
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [types.CHANGE_LOGIN_STATE] (state, data) { // state代表的是初始化的数据，data代表改变的数据
      // state.loginState = data
      state.loginState = data.result
    },
    [types.CHANGE_KIND_LIST] (state, data) {
      state.kindlist = data.result
    },
    changeCartList (state, data) {
      state.cartlist = data.result
    }
  },
  actions: { // 异步操作
    getKindListData (context) { // 可以理解为this.$store,但不是this.$store
      fetch('https://www.daxunxun.com/douban').then(res => res.json()).then(data => {
        console.log(data)
        context.commit(types.CHANGE_KIND_LIST, {
          result: data
        })
      })
    }
  }
})
