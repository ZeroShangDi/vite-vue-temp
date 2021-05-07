# 项目构建

## 数据 Mock

1、安装需要的包
```
npm i vite-plugin-mock -D

npm i mockjs -S

npm i cross-env -D
```

2、在 vue.config.js 中导入插件, 注意如果不是TS项目需要增加supportTs参数

```
// vue.config.js
import { viteMockServe } from 'vite-plugin-mock'

plugins: [vue(), viteMockServe({supportTs: false})]
```

3、在当前项目目录下创建一个 mock 文件夹, 并按官方文档编写接口

```
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

``` "dev": "cross-env NODE_ENV=development vite", ```

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