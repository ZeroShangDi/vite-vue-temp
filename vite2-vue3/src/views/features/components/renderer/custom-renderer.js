import { createRenderer } from 'vue'
import canvasAPP from './custom-renderer.vue'

// 1、自定义渲染器
const nodeOpts = {
  createElement(tag, isSVG, is) {
    // 处理元素创建逻辑
    console.log(tag, isSVG, is)
    return { tag }
  },
  insert(child, parent, anchor) {
    // 处理元素插入逻辑
    console.log(child, parent, anchor)
  },
  remove(child) {
    // 删除元素
    console.log(child)
  },
  patchProp(el, key, prevValue, nextValue) {
    // 属性更新
    console.log(el, key, prevValue, nextValue)
  },
  createText: (text) => text,
  createComment: (text) => text,
  setText: (node, text) => text,
  parentNode: (node) => node,
  nextSibling: (node) => node,
  querySelector: (selector) => selector,
  cloneNode: (el) => el,
  insertStaticContent: (content, parent, anchor, isSVG) => isSVG,
}

// 2、创建渲染器
const renderer = createRenderer(nodeOpts)

// eslint-disable-next-line no-unused-vars
let ctx = null
let canvas = null

// 3、扩展mount: 创建一个画布元素
function createCanvasApp(App) {
  const app = renderer.createApp(App)
  const mount = app.mount
  app.mount = function (selector) {
    // 创建并插入画布
    const el = document.querySelector(selector)
    if (!el) return

    canvas = document.createElement('canvas')
    ctx = canvas.getContext('2d')

    canvas.width = 600
    canvas.height = 600
    el.appendChild(canvas)

    // 挂载
    mount(canvas)
  }
  return app
}

// 4、创建APP实例
createCanvasApp(canvasAPP).mount('#demo')

export default nodeOpts
