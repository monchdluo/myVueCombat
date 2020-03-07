// 路由懒加载方式引入
const Home = () => import('../pages/Home/Home.vue')
const Classify = () => import('../pages/Classify/Classify.vue')
const Buy = () => import('../pages/Buy/Buy.vue')
const Car = () => import('../pages/Car/Car.vue')
const Personal = () => import('../pages/Personal/Personal.vue')

// 向外暴露routes组件
export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/buy',
    component: Buy
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/personal',
    component: Personal
  },
  // 重定向
  {
    path: '/',
    redirect: '/home'
  }
]