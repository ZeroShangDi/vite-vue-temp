// bind => beforeMount
// inserted => mounted
// beforeUpdate: new!元素自身更新前调用
// update => 删除
// componentUpdated => updated
// beforeUnmount: new!元素将要移除之前
// unbind => unmounted
export default {
  beforeMount(el, binding, vnode) {}
}
