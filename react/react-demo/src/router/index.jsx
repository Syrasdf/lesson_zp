import { 
  Routes, //路由前端总管 
  Route,// 具体路由实例
} from "react-router-dom";
import Home from '../pages/home'// 首页
import About from '../pages/about' // 关于

export default function AppRouters() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}
