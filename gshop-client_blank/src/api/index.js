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
export const reqGetManual = () => ajax(BASE+'/topic/v1/find/recManual.json')

//获取网易推荐列表
export const reqGetAuto = () => ajax(BASE+'/topic/v1/find/recAuto.json?page=1&size=5&exceptIds=5507,5286,4746,4745,5213,5252,518,5446,5288,4037,4035,4210,5339,4635,4640,3583,3860,4040,3438,4648,4489,4364,4513,2747,3882,4168,3773')
