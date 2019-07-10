<template>
  <div>
    <!-- <button>登陆</button>
    <button>注册</button> -->
    <van-button type="primary">登陆</van-button>
    <router-link to ="/register" ><van-button type="primary">注册</van-button></router-link>
  </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button) // 类似于全局注册组件，无需在js中再次使用components注册组件
export default {

}
</script>
