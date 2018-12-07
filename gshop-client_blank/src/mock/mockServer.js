/*
使用mockjs来mock数据/接口的模块
*/
import Mock from 'mockjs'
import category from './category.json'
import topic from './topic.json'
import homeList from './msite'


//暴露接口：/classify
Mock.mock('/classify', {code: 0, data: category})


Mock.mock('/topic', {code: 0, data: topic})


Mock.mock('/shop', {code: 0, data: homeList})


Mock.mock('/lbt',{code:0,data:homeList.focusList})


console.log('执行了mockServer')
