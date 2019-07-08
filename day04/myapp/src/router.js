import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // path: '/detail',
      path: '/detail/:id', // :代表此处的值为参数，id为参数的名字
      name: 'detail', // 如果需要动态传参，那么就需要使用到命名路由
      components: {
        default: () => import('./views/detail/index.vue')
      }
    },
    {
      path: '/home', // 浏览器地址输入/home时
      name: 'home', // 路由的名字----命名路由
      // component: () => import('./views/home/index.vue') // 路由的懒加载
      components: {
        default: () => import('./views/home/index.vue'),
        footer: Footer // 为什么不用懒加载，因为多出需要调用，先引入再使用
      }
    },
    {
      path: '/kind', // 浏览器地址输入/home时
      name: 'kind', // 路由的名字----命名路由
      // component: () => import('./views/kind/index.vue')
      components: {
        default: () => import('./views/kind/index.vue')
        // footer: Footer // 如果页面不需要底部，可以直接不写 ---- 命名视图
      }
    },
    {
      path: '/cart', // 浏览器地址输入/home时
      name: 'cart', // 路由的名字----命名路由
      // component: () => import('./views/cart/index.vue')
      components: {
        default: () => import('./views/cart/index.vue'),
        footer: Footer // 为什么不用懒加载，因为多出需要调用，先引入再使用
      }
    },
    {
      path: '/user', // 浏览器地址输入/home时
      name: 'user', // 路由的名字----命名路由
      // component: () => import('./views/user/index.vue')
      components: {
        default: () => import('./views/user/index.vue'),
        footer: Footer // 为什么不用懒加载，因为多出需要调用，先引入再使用
      }
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
