// 拦截器
// 引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'
// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 解构，获取method和data对象
  const { method, data } = config
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    // 把data对象转换成urlEncoding形式
    config.data = qs.stringify(data)
  }

  return config
})
// 添加响应拦截器
axios.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  alert(error)
  // 中断错误信息
  return new Promise(() => { })
})
// 向外暴露
export default axios