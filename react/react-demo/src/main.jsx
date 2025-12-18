// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.styl' // 全局样式  stylus
// vite 帮我们编译stylus 为css
import App from './App.jsx' // 引入了组件
// 将 App 组件挂载到 root 元素上 渲染render
createRoot(document.getElementById('root')).render(
  // 函数组件的名字 类html的标签 自定义组件
    <App />, // jsx
)
