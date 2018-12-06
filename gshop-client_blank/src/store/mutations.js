/*
包含N个用来直接更新状态数据的方法的对象
*/
import Vue from 'vue';
import {
  RECEIVE_SHOPLIST,
  RECEIVE_SHOPREPLENISH,
  RECEIVE_TOPICLIST
} from "./mutations_types";


export default {
  [RECEIVE_SHOPLIST](state,{shopList}){
    state.shopList = shopList
  },

  [RECEIVE_SHOPREPLENISH](state,{shopReplenish}){
    state.shopReplenish = shopReplenish
  },

  [RECEIVE_TOPICLIST](state,{topicList}){
    state.topicList = topicList
  }
}
