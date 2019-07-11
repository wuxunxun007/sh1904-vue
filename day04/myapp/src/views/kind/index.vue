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
  </div>
</template>

<script>
import Myinput from '@/components/Myinput'
export default {
  components: {
    Myinput
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
    }
  }
}
</script>

<style lang="scss">

</style>
