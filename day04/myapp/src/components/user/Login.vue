<template>
  <div>
    欢迎您****
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('isLogin') === 'ok') {
      next()
    } else {
      next('/user/nologin')
    }
  }
}
</script>
