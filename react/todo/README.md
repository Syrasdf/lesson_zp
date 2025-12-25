# React Todo

- react + stylus + vite
- 父子组件通信
- 子父通信  通过父组件传递的自定义事件上报修改
- 兄弟组件通信
  间接的 通过父组件 + 响应式
  TodoInput TodoList TodoStats
  todos[] useState 
  父组件负责持有数据 管理数据
  props 传递给子组件
  父组件还可以将修改数据的方法传给子组件
  子组件不可以直接修改数据 只能通过父组件
  传递的方法来修改数据。提交修改的请求

  统一，正确的修改数据的方式

  核心提升本地化存储
  1. 当 todos 变化时 及时更新 localStorage
  2. 当组件挂载时 从 localStorage 中获取数据
  不可能在每段代码中都写
  所以我们需要在 useEffect 中监听 todos 变化
  并及时更新 localStorage
