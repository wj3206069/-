/*
能发送ajax请求的函数
包装axios
返回值是promise对象
*/
/*
import axios from 'axios'

export default function ajax(url,data={},method='GET') {

  return new Promise((resolve,reject) => {
    let promise
    if(method==='GET') {
      //return axios.get(url, {params: data})
      // 拼query请求参数串
      let queryStr = ''
      Object.keys(data).forEach(key => {
        const value = data[key]
        queryStr += `${key}=${value}&`
      })
      // let queryStr = Object.keys(data).reduce((pre, key) => pre + `${key}=${data[key]}&`, '')

      if(queryStr!=='') { // username=tom&password=123&
        queryStr = queryStr.substring(0, queryStr.length-1) // username=tom&password=123
        url += '?' + queryStr  // /login/?username=tom&password=123
      }
      promise = axios.get(url) // url?username=tom&password=123
      // return axios.get(url, {params: data}) // url?username=tom&password=123
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
*/

import axios from "axios";
import qs from 'qs';


const instance = axios.create({})
console.log('----', axios, instance)
const CancelToken = axios.CancelToken
let cancel

let req_count = 0
let cancel_count = 0
let cancel_req_count = 0
let success_count = 0

function cancelRequest() {
  // 第一次执行videoService.cancelRequest()时还未发送getVideoList请求，会报错，添加如下判断
  if (typeof cancel === 'function') {
    console.log('....取消请求...', ++cancel_count)
    // 取消请求
    cancel()
    // 取消的函数对象已无用, 让它成为垃圾对象
    cancel = null
  }
}

export default function ajax(url, data = {}, method = "GET") {
  const {onlyOne} = data;
  const options = {};
  if (onlyOne) {
    delete data.onlyOne

    // 取消之前的请求
    cancelRequest()
    console.log('----发送请求 ', ++req_count)
    options.cancelToken = new CancelToken(function executor(c) {
      // 保存当前请求对应的取消函数
      cancel = c
    })
  }
  return new Promise((resolve, reject) => {
    let promise;

    if (method == "GET") {
      options.params = data
      promise = instance.get(url, options);
    } else {
      console.log(qs.stringify(data));
      promise = instance.post(url, qs.stringify(data), options)
    }
    promise.then((response) => {
      console.log('++++处理响应数据', ++success_count)
      /*if(onlyOne) {
        cancel = null
      }*/
      resolve(response.data)
    }).catch(err => {
      if (axios.isCancel(err)) {
        console.log('****请求被取消了', ++cancel_req_count)
      } else {
        // 处理请求异常
        reject(err)
      }
    })
  })
}
