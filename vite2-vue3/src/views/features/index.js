/**
 * Vue3.0新特性:
 *
 * 1、静态节点标记
 *    对于没有动态数据的节点做静态节点标记、每次更新DOM时, 直接跳过静态节点, 大大提高效率
 *
 * 2、事件监听缓存
 *
 * 3、响应式 proxy
 *
 * 4、Composition API
 *
 * 5、Teleport（传送门）
 *
 * 6、Fragments (多个根节点)
 *
 * 7、Custom Renderer API ( createRenderer ) (自定义渲染器)
 *      自定义组件需要配置白名单、在vue-loader或者vite.config.js中设置
 *      vueCompilerOptions.isCustomElement: tag => tag === '自定义标签'
 *
 * 8、Tree Shaking (摇树优化、按需加载)
 *
 * 9、Suspense (异步组件加载)
 *
 * 10、Better TypeScript Support
 */

/**
 * Vue3.0 差异
 *
 * 其它
 *    删除 beforeCreate created 等生命周期, 改用 setup 代替
 *
 *    删除 sync 修饰符, 统一为 v-model
 *
 *    删除 keyCode 作为 v-on 修饰符, 不支持数字、只支持别名 enter
 *
 *    删除 $on $off $once, 推荐 mitt, 或其他第三方库实现
 *
 *    删除 $scopedSlots 属性, 统一使用 $slots 代替
 *
 *    删除 filter
 *
 * event
 *    新增 emits 配置 TODO
 *
 * wathc
 *    不再支持 键路径, 需要通过 computed 做中转
 *    新增配置 flush：“sync“, 具体差异见: ....TODO
 *
 * is属性
 *    仅限用在 component 标签上  <component :is="comp"></component>
 *
 * 自定义指令
 *    参数发生变化 详见: ./directives/bind.js
 *
 * transition
 *    v-enter => v-enter-from and v-leave => v-leave-from
 *
 */

 /**
  * 其他:
  *
  *
  *
 */
