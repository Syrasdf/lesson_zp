import { 
  BrowserRouter as Router, // Html5 和后端路由一样的，不需要#开头  但是兼容性不好
  // HashRouter as Router ,// #路由形式之一 as 别名 以#开头 有点丑 #早期使用
  Link // a 不能用了，用link组件代替，内部消化
 } from 'react-router-dom'
import './App.css'
import AppRoutes from './router'

function App() {
  return (
    // 路由接管一切
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <AppRoutes/>
      </Router>
    </>
  )
}

export default App
