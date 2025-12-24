import { 
  useState, // 副作用
  useEffect // 响应式状态
 } from 'react'
import Demo from './components/Demo';
async function queryData() {
  const data = await new Promise(resolve => {
    setTimeout(() => {
      resolve(666)
    }, 2000);
  })
  return data;
}

export default function App() {
  const [num, setNum] = useState(0);
  console.log('xxx');
  useEffect(() => {
    // 挂载后执行，vue生命周期onMounted
    queryData().then(data => {
      setNum(data);
    })
  }, [])
  useEffect(() => {
    // 挂载的时候执行一次，num变化的时候执行一次
    console.log('zzz');
  }, [])
  // 如果不传每次渲染后和状态更新都会执行
  useEffect(() => {
    // 挂载的时候执行一次，num变化的时候执行一次
    console.log('ddd');
  })
    useEffect(() => {
    console.log('effect');
    // 每次都在新建定时器
    // 如何取消定时器
    // 定时器的副作用
    const timer = setInterval(() => {
      console.log('定时器');
    }, 1000);
    // 清除定时器
    return () => {
      // 重新执行effect函数时，会先清除上一个定时器
      // 不清楚 会导致内存泄漏
      // useEffect return 函数
      console.log('清除定时器');
      clearInterval(timer);
    }
  })
  return (
    <>
    <div onClick={() => setNum((prevNum) => prevNum + 1)}>
      {num}
    </div>
    {num % 2 === 0 && <Demo />}
    </>
  )
}