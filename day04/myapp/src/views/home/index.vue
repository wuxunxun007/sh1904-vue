<template>
  <div class="container">
    <header class="header">首页头部</header>
    <div class="content">
      <Prolist :prolist = "prolist"/>
    </div>
  </div>
</template>

<script>
import Prolist from '@/components/common/Prolist'

export default {
  data () {
    return {
      prolist: []
    }
  },
  components: {
    Prolist // Prolist: Prolist
  },
  mounted () {
    // 请求轮播图数据 --- 可以使用axios请求数据，得先安装axios
    fetch('https://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      console.log(data)
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

</style>
