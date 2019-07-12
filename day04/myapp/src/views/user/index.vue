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
  watch: {
    $route (newVal, oldVal) {
      const { $store: { state: { loginState } } } = this
      if (newVal.name === 'user') {
        if (loginState === 'ok') {
          this.$router.replace('/user/login')
        } else {
          this.$router.replace('/user/nologin')
        }
      }
    }
  },
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
      const { $store: { state: { loginState } } } = vm
      if (to.name === 'user') {
        if (loginState === 'ok') {
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
