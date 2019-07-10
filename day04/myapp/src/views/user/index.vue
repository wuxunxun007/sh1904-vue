<template>
  <div class="container">
    <header class="header">个人中心头部</header>
    <div class="content">
      <!-- 根据路由显示已登录的组件还是未登录的组件 --- 嵌套路由 -->
      <router-view></router-view>
      <div>
        其余的共同的东西
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log(to.name)
    // if (to.name === 'user') {
    //   if (localStorage.getItem('isLogin') === 'ok') {
    //     next('/user/login')
    //   } else {
    //     next('/user/nologin')
    //   }
    // } else {
    //   next()
    // }
    next(vm => {
      if (to.name === 'user') {
        if (localStorage.getItem('isLogin') === 'ok') {
          vm.$router.replace('/user/login')
        } else {
          vm.$router.replace('/user/nologin')
        }
      } else {
        next()
      }
    })
  }
}
</script>

<style lang="scss">

</style>
