/*
使用mockjs来mock数据/接口的模块
*/
import Mock from 'mockjs'
import category from './category.json'

//暴露接口：/goods
Mock.mock('/classify', {code: 0, data: category})


console.log('执行了mockServer')
