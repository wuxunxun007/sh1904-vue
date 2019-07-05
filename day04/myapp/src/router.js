import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home', // 浏览器地址输入/home时
      name: 'home', // 路由的名字----命名路由
      component: () => import('./views/home/index.vue')
    },
    {
      path: '/kind', // 浏览器地址输入/home时
      name: 'kind', // 路由的名字----命名路由
      component: () => import('./views/kind/index.vue')
    },
    {
      path: '/cart', // 浏览器地址输入/home时
      name: 'cart', // 路由的名字----命名路由
      component: () => import('./views/cart/index.vue')
    },
    {
      path: '/user', // 浏览器地址输入/home时
      name: 'user', // 路由的名字----命名路由
      component: () => import('./views/user/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
