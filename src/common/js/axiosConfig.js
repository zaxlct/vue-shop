import axios from 'axios'
import store from 'store'
import * as types from 'store/types'
import router from '../../router'
import { Message } from 'element-ui'

export const Axios = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

Axios.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.token = store.state.token
  }
  return config
}, error => {
  console.error('错误的传参', 'fail')
  return Promise.reject(error)
})

Axios.interceptors.response.use(
  res => {
    const { data } = res
    if (data.code !== 200) {
      Message.error(data.msg)
      return Promise.reject(data.msg)
    }
    return data
  },
  error => {
    if (!error.response) {
      Message.error('网络错误')
      return Promise.reject(error)
    }
    switch (error.response.status) {
      case 401:
        // 清除token信息并跳转到登录页面
        store.commit(types.LOGOUT)
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
        break

      case 400:
        Message.error('参数错误')
        break

      default:
        Message.error('网络错误')
    }
    return Promise.reject(error.response.data)
  }
)

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
  }
}
