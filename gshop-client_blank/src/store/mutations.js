/*
包含N个用来直接更新状态数据的方法的对象
*/
import Vue from 'vue';
import {
  RECEIVE_SHOPLIST,
  RECEIVE_HOMELIST,
  RECEIVE_TOPICLIST,
  RECEIVE_HOMELBT,
  RECEIVE_DISCOVER,
  RECEIVE_REFERRER,
  RECEIVE_HOTLIST,
  RECEIVE_RESULT,
  RECEIVE_REMOVE,
  RECEIVE_SHOP,
  RESET_USER
} from "./mutations_types";


export default {
  [RECEIVE_SHOPLIST](state,{shopList}){
    state.shopList = shopList
  },

  [RECEIVE_TOPICLIST](state,{topicList}){
    state.topicList = topicList
  },

  [RECEIVE_HOMELIST](state,{homeList}){
    state.homeList = homeList
  },

  [RECEIVE_HOMELBT](state,{homeLbt}){
    state.homeLbt = homeLbt
  },

  [RECEIVE_DISCOVER](state,{discoverList}){
    state.discoverList = discoverList
  },

  [RECEIVE_REFERRER](state,{recommendList}){
    state.discoverList = recommendList.result
  },

  [RECEIVE_HOTLIST](state,{hotList}){
    state.hotList = hotList
  },

  [RECEIVE_RESULT](state,{searchResult}){
    state.searchResult = searchResult
  },

  [RECEIVE_REMOVE](state){
    state.searchResult = []
  },

  [RECEIVE_SHOP](state,{searchShop}){
    state.searchShop = searchShop
  },

  [RESET_USER] (state) {
    state.user = {}
  },
}
