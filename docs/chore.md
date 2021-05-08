# 项目构建

## 全局样式管理

1、安装
```
npm i sass -D
```

2、配置 styles 目录结构

* index 全局样式
* mixin 样式混入
* sidebar 侧边栏
* transition 动画
* variables 变量
... 其他, 比如 element-ui 覆盖

3、在 main.js 引入全局样式 index

## 路由和状态管理 Vue-router Vuex

1、安装vue-router 和 vuex

``` 
npm i vue-router@next vuex@next -S 
```

2、分别在routes和store目录下创建index.js文件, 并在js中创建对应的实例并导出
```javascript
// routes/index.js

import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
```

3、将实例在 main.js 中以插件的形式使用

```javascript
// main.js

import router from 'routes/index.js'

createApp(App).use(router).mount('#app')

```

## 数据请求封装 Axios

// src/utils/axios/ 详见 Git 日志

主要包含请求全局配置、请求拦截、重复请求取消、取消请求函数、登录校验、权限校验、状态码、网络状态码、加载动画、错误提示

## 数据 Mock

1、安装需要的包
```
npm i vite-plugin-mock -D

npm i mockjs -S

npm i cross-env -D
```

2、在 vue.config.js 中导入插件, 注意如果不是TS项目需要增加supportTs参数

```javascript
// vue.config.js
import { viteMockServe } from 'vite-plugin-mock'

plugins: [vue(), viteMockServe({supportTs: false})]
```

3、在当前项目目录下创建一个 mock 文件夹, 并按官方文档编写接口

```javascript
// mock/user.js
export default {
    url: '/api/createUser',
    method: 'get',
    response: ({ body }) => {
        console.log(body)
        return {
            code: 0,
            message: 'ok',
            data: 'admin'
        }
    }
}

```

5、在 package.json 中配置环境变量

``` 
"dev": "cross-env NODE_ENV=development vite", 
```

## 项目结构和别名配置

* apis 接口
* assets 静态文件
* components 组件库
* directives 自定义指令
* ioncs 图标
* lang 语言
* layout 布局
* plugins 插件
* routes 路由
* store 状态管理
* styles 样式
* utils 工具箱
* views 页面视图

## 初始化项目
```
npm init @vitejs/app

cd project-name

npm install

npm run dev
```