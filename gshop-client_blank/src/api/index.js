/*包含N个接口请求函数的模块...*/

import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = ''

//获取商品列表
export const reqGetShopList = () => ajax(BASE+'/classify')


//获取推荐列表
export const reqGetRecommendList = () => ajax(BASE+'/search')
