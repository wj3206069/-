/*包含N个接口请求函数的模块...*/

import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = '/api'
const LOGIN = '/login'

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

//获取搜索推荐列表
export const reqGetHotList = () =>ajax(BASE+'/xhr/search/init.json')

//模糊搜索
export const reqGetSearch = (keywordPrefix) => ajax(BASE+'/xhr/search/searchAutoComplete.json',{keywordPrefix},'POST')

//搜索结果跳转
export const reqGetShop = (keyword) => ajax(BASE+`/xhr/search/search.json?keyword=${keyword}&sortType=0&descSorted=false&categoryId=0&matchType=0&floorPrice=-1&upperPrice=-1&size=40&itemId=0&stillSearch=false&searchWordSource=7&_stat_search=autoComplete`)

//用户登陆请求
export const reqLogin = ({name, pwd}) => ajax(LOGIN+'/login_pwd',{name,pwd},'POST')

//发送手机验证码
export const reqSendCode = (phone) => ajax(LOGIN+'/login_sms',{phone,code},'POST')

// [10、用户登出](#10用户登出)<br/>
export const reqLogout = () => ajax(LOGIN+'/logout')

// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE+'/login_pwd', {name, pwd, captcha}, 'POST')
