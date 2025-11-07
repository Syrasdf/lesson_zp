# blog 小程序

- app.json 应用配置
  - appName navigationBar
  - tabBar 
- 小程序架构
  - app 应用的概念
    全局
    app.json 全局使用的组件
    app.wxss
    app.js
  - pages
    - page
    - wxml
    - wxss
    - js
    - json

- weapp 事件
  - onclick
  - bindtap
  - js 文件就是一个page实例
    data 页面可以用到的数据
    事件处理函数在Page {配置就好}
  - wx 对象
    weixin的能力
    
  - block 是一个可以接收指令的标签，不会在DOM中出现
    wx:for data.menus 循环输出
    wx:key 唯一的ID
    wx:if 条件渲染

- rpx
  小程序独有的响应式单位
  管你是什么手机，都能适配
  不要用px ， 用rpx
  宽度是 750rpx iphone 标准设备的单位
  如何等比例，有小程序自己去做
  设计师设计出的移动端的设计稿就是 750

- 数据驱动页面
  - js Page（ {} ）
  data 绑定了数据
  wxml 模板 使用{{}} 来绑定数据
  block wx:for 循环指令来循环输出 默认每一项叫item



  navigator作用：小程序内置跳转组件，用来从当前页面跳到其它页面或打开外链（H5/小程序等，取决于能力）。
  swiper：小程序内置轮播容器，indicator-dots 显示底部指示点，autoplay 自动播放，interval 切换间隔。