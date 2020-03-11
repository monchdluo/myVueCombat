// 写接口
// 引入axios
import ajax from './ajax'

// 首页
export const reqHome = () => ajax({
  method: 'GET',
  url: `/home`
})

// 首页Nav
export const reqHomeNav = () => ajax({
  method: 'GET',
  url: 'homeNav'
})

// 分类左
export const reqClassify = () => ajax({
  method: 'GET',
  url: `/classify`
})

// 分类右
export const reqCateLists = () => ajax({
  method: 'GET',
  url: `/cateLists`
})

// 值得买轮播图数据
export const reqBuySwiper = () => ajax({
  method: 'GET',
  url: '/buySwiper'
})

// 值得买瀑布流数据
export const reqBuy = () => ajax({
  method: 'GET',
  url: '/buy'
})