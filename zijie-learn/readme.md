前端语言基础

- HTML
  - 超文本：超文本标记语言
  - <DOCTYPE html> ：放在HTML文件的开头，声明文档类型。


- HTML5 
  - 语义化  解决了div滥用的问题
  <header></header>
  <nav></nav>
  <main></main>
  <aside></aside>
  <footer></footer>
  可维护性
  - 表单增强
  - 多媒体
  - 绘图
  - 更多

- CSS Cascading Style Sheets
  - 层叠样式表
    - 选择器
    - 优先级和继承
    - 盒模型
      标准盒模型（默认）和怪异盒模型（容纳 padding 和 border）
      水平垂直居中：注意是否固定宽高
    - 布局和定位
      flex 一维布局
        grid 二维布局 先创建一个网格容器，将内容放进去
      定位：
        - 静态定位 static
        - 相对定位 relative
        - 绝对定位 absolute
        - 固定定位 fixed
- js 
  - 特点
    单线程
    动态、弱类型
    面向对象、函数式编程
    解释类语言
    适配web生态
  - 基础数据类型
    number、string、boolean、null、undefined、symbol、object
  - 作用域
    变量的可访问性和可见性
    - 全局作用域
        容易造成全局污染
    - 块级作用域
        let const
    - 函数作用域
  - 执行上下文
    - 全局执行上下文
    - 函数执行上下文
       this 指向 
    - eval 执行上下文
  - 闭包
    - 词法作用域
    - 词法环境
    - 词法环境链
  - 事件机制
    - 同步任务
    - 异步任务
    - 事件循环
      任务
        宏任务
        微任务

- 前端语言协作
  - 浏览器框架
    - 浏览器渲染