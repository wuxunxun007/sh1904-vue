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

}
</script>

<style lang="scss">

</style>
