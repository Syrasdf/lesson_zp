# React 项目架构
- npm init vite
  - 从github拉取一个项目模板
  - npm run dev   development
    vite 就是开发阶段的脚手架
    text 测试阶段
    production 上线阶段
    dev -> text -> production -> dev -> text -> production -> ...
    development 开发依赖 vite stylus 开发期间使用
    npm i -D stylus
    dependencies 项目依赖

  - react 基建也交给vite
    - esm 模块化，极致的冷启动  
    严格模式 StrictMode 执行两次一次是执行 一次是测试

- 项目依赖
  vue 3.5.24
  react 19.1.0 第一的现代前端开发框架 主要复杂响应式、组件化、数据绑定
  react-dom 19.1.0
  vue = react（core） + react-dom（component render dom）

- 引入路由
  - 安装路由
    npm i react-router-dom
  - 路由的配置
  - 导航，页面级别组件