import axios from 'axios'
import { options } from 'less'
import config from '../config/index'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest{
  // 初始化过程
  constructor(baseUrl){
    this.baseUrl = baseUrl
  }
  // 定义axios相关配置
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      header:{}
    }
    return config
  }
  // 拦截器
  interceports (instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(function(config){
      // 在发送请求之前 做些什么
      return config
    },function(error){
      // 请求错误 做点什么
      return Promise.reject(error)
    });
    // 添加响应拦截器
    instance.interceports.response.use(function(response){
      // 对应响应数据做点什么
      return response
    },function(error){
      //对应响应错误做点什么
      return Promise.reject(error)  
    })
  }
  request (options) {
    const instance = axios.create()
    options = { ...this.getInsideConfig(), ...options }
    this.interceports(instance)
    return instance(options)
  }

}

export default new HttpRequest(baseUrl)