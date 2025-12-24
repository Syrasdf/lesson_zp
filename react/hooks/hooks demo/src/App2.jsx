import { 
  useState, // 副作用
  useEffect // 响应式状态
 } from 'react'

export default function App() {
  // 数据 -> setNum 变成另一个数据，值不是固定的了，状态state
  // hook useStat 为程序带来了关键的响应式状态
  // 1 数据  也是状态的初始值
  // const [num, setNum] = useState(1);
  const [num, setNum] = useState(() => {
    // 它们的核心区别在于：初始化时是否需要“计算”或“避免重复开销”。
    // 初始值需要经过复杂计算得到 用函数来计算
    // 同步函数 ，不支持异步的，异步的可能不确定，但是状态一定是确定的
    // 纯函数：相同的输入，返回相同的输出，且没有任何副作用
    // （不修改外部状态、不发起请求、不操作 DOM 等）的函数。
    const num1 = 1 + 2;
    const num2 = 2 + 3;
    return num1 + num2;
  });
  return (
    // <div onclick={() => setNum(num + 1)}>
    // 修改函数中可以直接传新的值，也可以传入一个函数，
    // 这个函数的参数是上一次的state
    <div onClick={() => setNum((prevNum) => {console.log(prevNum); return prevNum + 1})}>
    </div>
  )
}
