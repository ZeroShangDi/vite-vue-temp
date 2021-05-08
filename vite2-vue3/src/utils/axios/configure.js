import {
    openLoading
} from './utils'

// 这里为了配置不同网址的接口和不同类型的接口
export default {
    post: {
        axiosOptions: {
            baseURL: import.meta.env.VITE_BASE_API,
            timeout: 5000,
        },
        request: (http) => {
            return function (url, params = {}, loading = true) {
              // 打开loading
              loading && openLoading()
      
              // 处理参数
      
              // 返回
              return http.post(url, params)
            }
        },
    }
}