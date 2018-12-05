/*
包含N个用来直接更新状态数据的方法的对象
*/
import Vue from 'vue';
import {
  RECEIVE_RECOMMENDLIST,
  RECEIVE_SHOPLIST
} from "./mutations_types";


export default {
  [RECEIVE_SHOPLIST](state,{shopList}){
    state.shopList = shopList
  }
}
