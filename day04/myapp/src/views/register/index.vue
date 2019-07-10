<template>
  <div class="container">
    <van-nav-bar
      title="注册"
      right-text="登录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="手机号"
          :right-icon="usernameIcon"
          placeholder="请输入手机号"
          :error-message="usernameState"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          clearable
          placeholder="请输入密码"
          :right-icon="passwordIcon"
          :error-message="passwordState"
          required
        />
        <van-field
          v-model="sms"
          center
          required
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <van-button slot="button" @click="sendCode" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <van-button type="primary" size="normal" @click="register" :block="true">注册</van-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Field, Cell, CellGroup, Button } from 'vant'

Vue.use(NavBar)
Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)
export default {
  data () {
    return {
      username: '18717771641',
      password: '123456',
      sms: '',
      code: 'a'
    }
  },
  computed: {
    usernameState () {
      if (this.username === '') {
        return ''
      } else if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
    usernameIcon () {
      if (this.username === '') {
        return ''
      } else if ((/^1[3456789]\d{9}$/.test(this.username))) {
        return 'checked'
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else if (this.password.length < 5) {
        return '密码格式错误'
      } else {
        return ''
      }
    },
    passwordIcon () {
      if (this.password === '') {
        return ''
      } else if (this.password.length >= 5) {
        return 'checked'
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      this.$router.push('/login')
    },
    sendCode () {
      fetch('https://www.daxunxun.com/users/sendCode?tel=' + this.username)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.code = data.code
        })
    },
    register () {
      if (this.sms !== this.code) {
        console.log('验证码错误')
        return
      }
      if(this.usernameIcon !== 'checked') {
        console.log('手机号格式错误')
        return
      }
      if(this.passwordIcon !== 'checked') {
        console.log('密码格式错误')
        return
      }
      // 提交数据到服务器
    }
  }
}
</script>

<style lang="scss">

</style>
