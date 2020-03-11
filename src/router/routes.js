// 路由懒加载方式引入
const Home = () => import('../pages/Home/Home.vue')
const Classify = () => import('../pages/Classify/Classify.vue')
const Buy = () => import('../pages/Buy/Buy.vue')
const Car = () => import('../pages/Car/Car.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Search = () => import('../pages/Search/Search.vue')
const ShopList = () => import('../pages/Home/ShopList/ShopList.vue')
const Shops = () => import('../pages/Home/Shops/Shops.vue')
const UsePhone = () => import('../pages/Personal/UsePhone')
const UseEmail = () => import('../pages/Personal/UseEmail')

import ClassList from '../components/ClassList/ClassList.vue'

// 向外暴露routes组件
export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      isShowFooter: true
    },
    children: [{
      path: '/classify?categoryid=:id',
      component: ClassList
    }]
  },
  {
    path: '/buy',
    component: Buy,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/car',
    component: Car,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/shoplist',
    component: ShopList
  },
  {
    path: '/shops',
    component: Shops
  },
  {
    path: '/usePhone',
    component: UsePhone
  },
  {
    path: '/useEmail',
    component: UseEmail
  },
  // 重定向
  {
    path: '/',
    redirect: '/home'
  }
]