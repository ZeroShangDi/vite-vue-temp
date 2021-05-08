import { CancelToken } from './index'
// 设置 Cookise
export function setCookies() {}

// 获取 Cookise
export function getCookies() {}

// 请求开始
export function openLoading() {}

// 请求错误
export function errorLoading() {}

// 请求结束
export function closeLoading() {}

// 消息提示框
export function tipsMessage() {}

// 登陆校验
export function handleSign(config) {}

// 处理权限
export function handlePower(config) {}

// 自定义状态
export function handleCode(response) {
  return response.data
}

// 网络状态
export function handleStatus(error) {}

let requestList = []
let sourcesList = []

// 取消请求
export function cancelRequest(key) {
  if (sourcesList[key]) {
    sourcesList[key]('取消请求!')
    tipsMessage('用户取消了请求!', 'info')
  }
}

// 是否重复请求
export function isRepeatRequest(config) {
  const request = JSON.stringify(config.url) + JSON.stringify(config.data)

  config.CancelToken = new CancelToken((cancel) => {
    sourcesList[request] = cancel
  })

  requestList.includes(request)
    ? sourcesList[request]('取消重复请求!')
    : requestList.push(request)

  return requestList.includes(request)
}

// 是否完成所有请求
export function isFinishRequest(response) {
  const config = response.config
  const request = JSON.stringify(config.url) + JSON.stringify(config.data)

  requestList.splice(
    requestList.findIndex((item) => item === request),
    1
  )

  return requestList.length
}
