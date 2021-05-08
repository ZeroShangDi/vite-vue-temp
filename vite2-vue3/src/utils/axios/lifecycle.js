/**
 * 二、请求的生命周期
 *    请求拦截
 *        :fulf
 *        是否重复
 *        登陆校验
 *        权限校验
 *        :error 拦截错误处理
 *
 *    发起请求
 *        是否打开遮罩(有些接口不需要打开遮罩)
 *        参数处理
 *
 *    相应拦截
 *        :success 请求成功回调
 *            请求是否全部结束、是否关闭遮罩
 *            请求结果是否正确?
 *            :resolve 请求到正确数据回调
 *                返回结果
 *            :reject  请求到错误数据回调
 *                提示后端错误信息
 *        :fail 请求失败回调(404、500)
*/
import {
  // setCookies,
  // getCookies,

  tipsMessage,
  errorLoading,
  closeLoading,

  handleSign,
  handleCode,
  handlePower,
  handleStatus,

  isRepeatRequest,
  isFinishRequest,
  
} from './utils'

// 请求拦截
export const requestIntercept = (config) => {
  // 重复请求直接取消
  const isRepeat = isRepeatRequest(config)

  // 登陆校验
  handleSign(config)

  // 权限校验
  handlePower(config)

  return config
}

// 请求拦截-出错
export const requestInterceptError = (error) => {
  errorLoading()

  tipsMessage('发起请求失败!', error)

  return Promise.reject(error)
}

// 相应拦截
export const responseIntercept = (response) => {
  // 所有请求结束后关闭加载动画
  isFinishRequest(response) && closeLoading()

  // 关于异常服务器状态码的处理
  return handleCode(response)
}

// 相应拦截-出错
export const responseInterceptError = (error) => {
  errorLoading()

  tipsMessage('请求出现错误!', error)

  // 网络状态码 401、404、500...
  handleStatus(error)

  return Promise.reject(error)
}
