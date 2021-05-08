import { createApp } from 'vue'
import Layout from 'layout/index.vue'

// 路由和状态管理
import store from 'store/index.js'
import router from 'routes/index.js'

// 全局样式
import 'styles/index.scss'

createApp(Layout).use(router).use(store).mount('#app')