import { useEffect } from 'react';

export default function Demo() {
  useEffect(() => {
    console.log('123123');
    const timer = setInterval(() => {
      console.log('定时器');
    }, 1000);
    // 生命周期函数
    // 卸载
    return () => {// 卸载前执行回收
      console.log('清除定时器');
      clearInterval(timer);
    }
  },[])
  return (
    <div>
      <h1>偶数demo</h1>
    </div>
  )
}