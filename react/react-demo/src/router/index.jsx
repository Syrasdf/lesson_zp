import { 
  Routes, //路由前端总管 
  Route,// 具体路由实例
} from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'

export default function AppRouters() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
    )
}
