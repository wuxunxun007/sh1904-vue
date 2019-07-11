import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer'
Vue.use(Router)
const router = new Router({
  mode: 'history', // 如果没有这句话，或者它的值为 hash, 为/#/home,如果设置为history, 为/home， 2的脚手架默认为hash模式
  base: process.env.BASE_URL,
  routes: [
    { // 路由的重定向
      path: '/',
      redirect: '/home'
    },
    // { // 路由的重定向
    //   path: '/user',
    //   redirect: '/user/nologin'
    // },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('@/views/register/index.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('@/views/login/index.vue')
      }
    },
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
      alias: '/ho', // 别名 --- 当你访问 /ho 时，其实和访问 /home是一致的
      // component: () => import('./views/home/index.vue') // 路由的懒加载
      components: {
        default: () => import('./views/home/index.vue'),
        footer: Footer // 为什么不用懒加载，因为多出需要调用，先引入再使用
      },
      meta: {
        keepAlive: true
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
      // 路由独享的守卫 --- 本来就是一个路由的配置文件，写什么业务逻辑
      // beforeEnter (to, from, next) {
      //   if (localStorage.getItem('isLogin') === 'ok') {
      //     next()
      //   } else {
      //     next('/login')
      //   }
      // }
    },
    {
      path: '/user', // 浏览器地址输入/home时
      name: 'user', // 路由的名字----命名路由
      // component: () => import('./views/user/index.vue')
      components: {
        default: () => import('./views/user/index.vue'),
        footer: Footer // 为什么不用懒加载，因为多出需要调用，先引入再使用
      },
      children: [
        {
          path: 'nologin', // /user/nologin
          component: () => import('@/components/user/NoLogin.vue')
        },
        {
          path: 'login', // /user/login
          component: () => import('@/components/user/Login.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      component: () => import('@/components/NotFoundComponent.vue')
    }
  ]
})

// 全局导航守卫 ----- 一般不推荐使用 --- 后台管理系统
// router.beforeEach((to, from, next) => {
//   // console.log('from', from)
//   console.log(to)
//   // next() // 必须执行，否则终端路由的跳转
//   // 所有的页面如果需要判断用户已经登陆
//   // if (localStorage.getItem('isLogin') === 'ok') { // 会有内存溢出，登陆也是路由
//   //   next()
//   // } else {
//   //   next('/login')
//   // }
//   if (to.name === 'login' || to.name === 'register') { // 防止内存溢出 --- 为了登陆必须得先注册
//     next()
//   } else {
//     if (localStorage.getItem('isLogin') === 'ok') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
export default router
