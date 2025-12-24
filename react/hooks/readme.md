# React Hooks
 
以use开头的函数，都是React Hooks
- React api 最新的语法
- 函数  react 风格比较原生 JS

## React 内置的Hooks

- useState
  - 初始化时传入一个纯函数
  如果我想在初始化的时候异步请求数据怎么办？
  - 可以在初始化函数中发起异步请求，但是不能直接返回数据，因为数据是异步的
  - 可以使用 useEffect 来监听状态变化，当状态变化时，再发起异步请求
  - setState 也可以传入一个函数，参数是上一次的state

- useEffect
  effect 副作用
  - 对立面时纯函数（相同的输入，返回相同的输出，且没有任何副作用）
    组件来说输入参数，输出jsx
    useEffect 异步请求数据，修改状态 用来处理副作用
  - 请求数据 副作用
  - 第二个参数[]？依赖项

  - 三种使用情况
    - onMounted 组件挂载时执行 [] 只执行一次
    - 根据依赖项，[state,state2] 当state或state2变化时执行
    - return 函数，闭包，在下一次执行effect前调用 或 组件卸载时调用

## 自定义Hooks
- 以use开头的函数，都是自定义Hooks
- 自定义Hooks 可以调用其他的Hooks
- 自定义Hooks 可以在组件之间共享逻辑