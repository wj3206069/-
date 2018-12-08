/*
包含n个用来间接更新状态数据的方法的对象
*/

import {
  RECEIVE_SHOPLIST,
  RECEIVE_HOMELIST,
  RECEIVE_TOPICLIST,
  RECEIVE_HOMELBT,
  RECEIVE_REFERRER,
  RECEIVE_DISCOVER
} from './mutations_types'

import {
  reqGetShopList,
  reqGetHomeList,
  reqGetRecommendList,
  reqGetHomeLbt,
  reqGetAuto,
  reqGetManual
} from "../api";

export default {
  //获取商家列表的异步action
   async getShopList({commit}){
      const result = await reqGetShopList()
      //1.发送异步的ajax请求
     if(result.code === 0){
        const shopList = result.data
       commit(RECEIVE_SHOPLIST,{shopList})
     }
    },

  //获取商品推荐信息异步action
  async getRecommendList({commit}){
    const result = await reqGetRecommendList()
    //1.发送异步的ajax请求
    if(result.code === 0){
      const topicList = result.data
      commit(RECEIVE_TOPICLIST,{topicList})
    }
  },

  //获取首页数据action
  async getHomeList({commit}){
    const result = await reqGetHomeList()
    //1.发送异步的ajax请求
    if(result.code === 0){
      const homeList = result.data
      commit(RECEIVE_HOMELIST,{homeList})
    }
  },

  //获取首页lbt的数据
  async getHomeLbt({commit}, cb){
   const result = await reqGetHomeLbt()
    //1.发送异步的ajax请求
    if(result.code === 0){
      const homeLbt = result.data
      commit(RECEIVE_HOMELBT,{homeLbt})
     cb && cb()
   }
   },

  //获取推荐列表
   async getAuto({commit}){
       const result = await reqGetAuto()
      if(result.code==='200'){
        const recommendList = result.data
        commit(RECEIVE_REFERRER,{recommendList})
      }
    },

  //获取推荐列表
  async getManual({commit}){
    const result = await reqGetManual()
    if(result.code==='200'){
      const discoverList = result.data
      commit(RECEIVE_DISCOVER,{discoverList})
    }
  }
}
