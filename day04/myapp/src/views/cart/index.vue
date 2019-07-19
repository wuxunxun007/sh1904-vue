<template>
  <div class="container">
    <header class="header">购物车头部</header>
    <div class="content" v-if = "cartlist.length > 0">
      <ul>
        <li v-for="(item, index) of cartlist" :key="item.id">
          <input type="checkbox" v-model="item.flag">
          <img :src="item.img" alt="" class="cartimg">
          <span>{{item.title}}</span>------
          <span>{{item.price}}</span>
          <button @click="item.num >= 2 ? item.num -= 1 : item.num = 1">-</button>
          {{ item.num }}
          <button @click="item.num += 1">+</button>
          <button @click="deleteItem(index)">删除</button>
        </li>
      </ul>
      <div>总数量：{{ totalNum }}</div>
      <div>总价：{{ totalPrice }}</div>
    </div>
    <div class="content" v-else>
      购物车空空如也
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      cartlist (state) {
        return state.cartlist
      }
    }),
    totalNum () {
      return this.$store.getters.totalNum
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  },
  methods: {
    deleteItem (index) {
      let arr = this.cartlist
      arr.splice(index, 1)
      this.$store.commit('changeCartList', {
        result: arr
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm)
      // const loginState = vm.$store.state.loginState
      const { $store: { state: { loginState } } } = vm
      if (loginState === 'ok') {
        next()
      } else {
        next('/login')
      }
    })
  },
  mounted () {
    // 加入购物车与购物车页面的业务逻辑没有关系
    // 由于使用导航守卫判断过用户已经登陆，所以无需再次判断
    // 因为获取购物车数据需要用户的标识，依据这个标识来获取数据
    let arr = [
      {
        id: 1,
        title: '页面布局经典案例视频',
        price: 100,
        desc: '讲解各种常见及有趣的网页特效案例，通过51个有趣的网页案例，全面的掌握常见网页开发中的各种布局及特效。',
        num: 1,
        img: 'http://www.codingke.com/files/course/2019/05-30/113404c6ac63611990.png'
      },
      {
        id: 2,
        title: 'HTML5移动端混合应用开发项目案例实战视频',
        price: 200,
        desc: '本主要结束HTML5移动端混合应用开发,其Canvas、video视频、swiper案例、混合开发结合MUI等。',
        num: 1,
        img: 'http://www.codingke.com/files/course/2018/11-21/1704480a5110823439.jpg'
      },
      {
        id: 3,
        title: 'HTML5面试题讲解',
        price: 300,
        desc: '本视频主要围绕面试题展开，分析面试中各种常见题型并提出方案，让同学在面试中能够脱颖而出，取得成功。',
        num: 1,
        img: 'http://www.codingke.com/files/course/2018/01-04/160518e6ad6b029361.jpg'
      },
      {
        id: 4,
        title: '千锋前端全栈HTML5零基础项目实战就业班',
        price: 400,
        desc: '内容包含PC及移动端开发，全栈开发必须要掌握的技能，是基础到实战，编程小白成为全栈大神的精品课程。精选时下最流行技术，包含Node.js、Vue.js、React.js、ReactNative、微信公众号、微信小程序等内容，良心打造，物超所值。',
        num: 1,
        img: 'https://10.url.cn/qqke_course_info/ajNVdqHZLLDxeb5AdY0HJYqsKZaU5pSI6pwFd4bgvv4iakMCY9BGV5RlstPicWQyRNWrVf2pWtxVk/'
      }
    ]
    arr.map(item => {
      item.flag = true
    })
    // +++ 如果有数据就不需要重新去取
    if (this.cartlist.length > 0) {
      return
    }
    // 将数据存放到状态管理器
    this.$store.commit('changeCartList', {
      result: arr
    })
  }
}
</script>

<style lang="scss">
.cartimg {
  width: 60px;
}
</style>
