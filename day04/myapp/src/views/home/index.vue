<template>
  <div class="container">
    <header class="header">首页头部</header>
    <div class="content" id="content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) of bannerlist" :key = "index">
            <img :src="item" alt="">
          </van-swipe-item>
        </van-swipe>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <Prolist :prolist = "prolist"/>
        </van-list>
      </van-pull-refresh>
      <Backtop :show="flag"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, List, PullRefresh } from 'vant'
import Prolist from '@/components/common/Prolist'
import Backtop from '@/components/Backtop'

Vue.use(Swipe).use(SwipeItem)
Vue.use(List)
Vue.use(PullRefresh)
export default {
  data () {
    return {
      bannerlist: [],
      prolist: [],
      loading: false, // 当组件滚动到底部时，会触发load事件并将loading设置成true
      finished: false, // 当没有数据时，此值为true
      pageNum: 1, // 页码
      isLoading: false,
      flag: false
    }
  },
  methods: {
    onRefresh () {
      this.isLoading = true
      fetch('https://www.daxunxun.com/douban').then(res => res.json()).then(data => {
        this.isLoading = false // 下拉刷新结束
        this.prolist = data // 重置列表的数据
        this.pageNum = 1 // 重置页码 --- 下拉刷新相当于第一页数据
        this.finished = false // 表示可以继续上拉加载下一页的数据
      })
    },
    onLoad () {
      console.log('可以加载数据了')
      this.loading = true // 开始加载数据
      fetch('https://www.daxunxun.com/douban?count=20&start=' + this.pageNum * 20)
        .then(res => res.json()).then(data => {
          this.loading = false // 数据加载完毕
          this.pageNum++
          if (data.length === 0) {
            console.log('没有数据了')
            this.finished = true // 没有数据了
          } else {
            // 有数据就要涉及到数字的合并   concat
            this.prolist = [...this.prolist, ...data]
          }
        })
    },
    scrollFn () {
      console.log(event.target.scrollTop)
      if (event.target.scrollTop > 150) {
        this.flag = true
      } else {
        this.flag = false
      }
    }
  },
  components: {
    Prolist, // Prolist: Prolist
    Backtop
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
    // 找到DOM节点
    const content = document.querySelector('#content')
    // 开启监听滚动条的滚动事件
    content.addEventListener('scroll', this.scrollFn)
  },
  beforeRouteLeave (from, to, next) { // 在离开这个路由之前 --- 导航守卫
    const content = document.querySelector('#content')
    content.removeEventListener('scroll', this.scrollFn)
    let position = content.scrollTop
    localStorage.setItem('position', position)
    next() // 继续执行后续的业务逻辑
  },
  watch: {
    $route (newVal, oldVal) {
      if (newVal.name === 'home') {
        const content = document.querySelector('#content')
        content.scrollTop = localStorage.getItem('position')
      }
    }
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
.backTop {
  position: fixed;
  bottom: 0.6rem;
  right: 15px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
}
</style>
