<template>
  <div class="container">
    <header class="header">首页头部</header>
    <div class="content">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) of bannerlist" :key = "index">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
      <Prolist :prolist = "prolist"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
import Prolist from '@/components/common/Prolist'

Vue.use(Swipe).use(SwipeItem)
export default {
  data () {
    return {
      bannerlist: [],
      prolist: []
    }
  },
  components: {
    Prolist // Prolist: Prolist
  },
  mounted () {
    // 请求轮播图数据 --- 可以使用axios请求数据，得先安装axios
    fetch('https://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      var arr = []
      data.map(item => { // 为了处理数据
        item = 'https://www.daxunxun.com' + item
        arr.push(item)
      })
      console.log(arr)
      this.bannerlist = arr
    })
    // 请求的是列表的数据
    fetch('https://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      console.log(data)
      this.prolist = data
    })
  }
}
</script>

<style lang="scss">
.van-swipe {
  height: 1.5rem;
  img {
    width: 100%;
  }
}
</style>
