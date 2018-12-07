/*包含N个接口请求函数的模块...*/

import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = '/api'

//获取首页商品补充列表
export const reqGetHomeList = () => ajax('/shop')

//获取商品列表
export const reqGetShopList = () => ajax('/classify')

//获取推荐列表
export const reqGetRecommendList = () => ajax('/topic')

//获取lbt
export const reqGetHomeLbt = () => ajax('/lbt')

//获取网易推荐列表
export const reqGetManual = (required) => ajax(BASE+required)

//获取网易推荐列表
export const reqGetAuto = (required) => ajax(BASE+required)
