import axios from 'axios'
import {
  requestIntercept,
  requestInterceptError,
  responseIntercept,
  responseInterceptError,
} from './lifecycle'
import configure from './configure'

// 创建Axios实例
export function createHttp({ axiosOptions, request }) {

    const http = axios.create(axiosOptions)

    const server = request ? request(http) : http

    http.interceptors.request.use(requestIntercept, requestInterceptError)

    http.interceptors.response.use(responseIntercept, responseInterceptError)

    return server
}

// 导出取消构造函数
export const CancelToken = axios.CancelToken

// 导出实例化的请求函数
export const post = createHttp(configure.post)