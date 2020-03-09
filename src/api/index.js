// 写接口
// 引入axios
import ajax from './ajax'

export const reqHome = () => ajax({
  method: 'GET',
  url: `/home`
})