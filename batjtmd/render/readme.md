# HTML/CSS/JS 是如何**渲染**页面的 

- 浏览器渲染页面有哪些流程？
  - HTML/CSS/JS 输入
  - 浏览器（Chrome）
    渲染有哪些工作构成？
  - 输出
    页面 一张图
    1s 绘制60s

- 渲染过程
  - 流程复杂
  - 时间开销
  - 性能优化

- HTML/CSS/JS
1.首先构建DOM树（能够让我们满足遍历、查找、交互任何一个节点，以树的结构进行查找）
- 输入 HTML 字符串
  由标记和文本组成
  树->递归 
  标记->节点
  每个标签都有自己的语义
  文本

  浏览器不大好直接处理，字符串
  树状结构
- 输出 DOM 树
  document.getElementById('#root')
  内存中就有了document DOM根节点

- 如何正确使用 HTML
  - 认真把 HTML 写好，语义化
  - SEO 就会好
    搜索引擎 search engine optimization
    在百度输入查询
    百度会派出蜘蛛去爬取各家网站 
    针对HTML 算法分析
    查询内容和相关网页的相关性
  
- 结构语义化标签
  header footer main aside
  section

- 功能语义化
  h1-h5
  ul li 列表

- main 放在前面,aside放后面?
  - 主内容先下载,再下载侧边栏
  - 那我们怎么将侧边栏放在前面
  - flex order -1

- 浏览器怎么理解css? 字符串文本是不适合的,也用树状结构
  - CSSOM 树 CSS Object Model 树
    选择器 {
      key:value;
    }
  - 找到对应的html节点, css节点和html节点进行匹配

- html/css/js -> DOM树构建(input:html,output:DOM树 -> cssom()  页面)

