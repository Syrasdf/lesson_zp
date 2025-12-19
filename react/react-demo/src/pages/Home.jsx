import { 
  useState, // 响应式状态管理
  useEffect // 副作用管理
} from 'react'

const Home = () => {
  const [repos, setRepos] = useState([])
  // render 是第一位的
  console.log('组件初始化')
  useEffect(() => {
    console.log('组件挂载后')
    // 发送api请求，不会和组件渲染去争抢
    fetch('https://api.github.com/users/shunwuyu/repos')
      .then(res => res.json())
      .then(data => setRepos(data))
  }, [])
  return (
    <div>
      <h1>Home</h1>
      {
        repos.length ? (
          <ul>
            {
              repos.map(repo => (
               <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                  </a>
               </li>
              ))
            }
          </ul>
        ) : null
      }
    </div>
  )
}
// esm cjs commonjs 模块导出
export default Home
