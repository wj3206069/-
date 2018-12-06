/*
包含n个用来间接更新状态数据的方法的对象
*/

import {
  RECEIVE_SHOPLIST,
  RECEIVE_SHOPREPLENISH,
  RECEIVE_TOPICLIST
} from './mutations_types'

import {
  reqGetShopList,
  reqGetShopReplenish,
  reqGetRecommendList
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

  //获取商家列表的异步action
  async getShopReplenish({commit}){
    const result = await reqGetShopReplenish()
    //1.发送异步的ajax请求
    if(result.code === 0){
      const shopReplenish = result.data
      commit(RECEIVE_SHOPREPLENISH,{shopReplenish})
    }
  },

  reqGetRecommendList({commit,state}){

  }

}
