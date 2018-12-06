/*
使用mockjs来mock数据/接口的模块
*/
import Mock from 'mockjs'
import category from './category.json'
import topic from './topic.json'
import replenishShop from './test.json'

//暴露接口：/classify
Mock.mock('/classify', {code: 0, data: category})


Mock.mock('/topic', {code: 0, data: topic})




console.log('执行了mockServer')
