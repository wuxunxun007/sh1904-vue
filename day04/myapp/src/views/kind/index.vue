<template>
  <div class="container">
    <header class="header">分类头部</header>
    <div class="content">
      {{ count }}
      <button @click="add">加1</button>
      <Myinput
        label = "手机号"
        v-model="username"
        required
        clearable
        placeholder = "请输入您的手机号"
      />
      <Myinput
        label = "密码"
        v-model="password"
        placeholder = "请输入您的密码"
        clearable
        err="密码格式错误"
      />
    </div>
    <ul>
      <li v-for="(item, index) of kindlist" :key="index">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import Myinput from '@/components/Myinput'
import * as types from '@/mutation-types'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    Myinput
  },
  computed: {
    ...mapState({
      kindlist: state => state.kindlist
    })
  },
  data () {
    return {
      count: 0,
      username: '',
      password: ''
    }
  },
  methods: {
    add () {
      this.count += 1
    },
    ...mapActions({
      getKindListData: 'getKindListData' // 前者代表 在当前组件生成getKindListData自定义的函数，后者代表状态管理器中的actinos
    })
  },
  mounted () {
    // fetch('https://www.daxunxun.com/douban').then(res => res.json()).then(data => {
    //   console.log(data)
    //   this.$store.commit(types.CHANGE_KIND_LIST, {
    //     result: data
    //   })
    // })
    // this.$store.dispatch('getKindListData')
    this.getKindListData()
  }
}
</script>

<style lang="scss">

</style>
