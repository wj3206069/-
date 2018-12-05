/*
包含n个用来间接更新状态数据的方法的对象
*/

import {
  RECEIVE_SHOPLIST,
  RECEIVE_RECOMMENDLIST
} from './mutations_types'

import {
  reqGetShopList,
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


  reqGetRecommendList({commit,state}){

  }

}
