<template>
  <div class="box">
    <div class="container">
      <header class="header">详情头部</header>
      <div class="content">
        {{ title }}
        <Rating :rating="(rating / 2).toFixed(1)"/>
      </div>
    </div>
    <footer class="footer">详情底部</footer>
  </div>
</template>

<script>
import Rating from '@/components/common/Rating'
export default {
  data () {
    return {
      title: '',
      rating: ''
    }
  },
  components: {
    Rating
  },
  mounted () {
    // console.log(this.$route) // 打印当前路由的信息
    // const id = this.$route.params.id
    // const { id } = this.$route.params
    // const { params: { id } } = this.$route // 解构中的解构
    const { $route: { params: { id } } } = this
    console.log(id)
    fetch('https://www.daxunxun.com/detail?id=' + id).then(res => res.json()).then(data => {
      console.log(data[0])
      this.title = data[0].title
      this.rating = data[0].rating.average
    })
  }
}
</script>

<style lang="scss">

</style>
