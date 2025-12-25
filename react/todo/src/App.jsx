import { useState , useEffect } from 'react'
import './styles/app.styl'
import TodoStats from './components/TodoStats'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

function App() {
  // 子组件共享的数据状态
  const [todos, setTodos] = useState(() => {
    // 高级用法  初始化时从localStorage中获取数据
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  // 子组件修改数据的方法
  const addTodo = (text) => {
    setTodos([...todos, {
      id: Date.now(),
      text,
      completed: false
    }]);
};

  // 删除todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length
  // 切换todo的completed状态
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {
      ...todo, 
      completed: !todo.completed,
    } : todo))
  }

  // 清除已完成的todo
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  // 监听 todos 变化 及时更新 localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="todo-app">
      <h1>My Todo List</h1>
      {/* 自定义事件 */}
      <TodoInput onAdd={addTodo}/>
      <TodoList 
        todos={todos} 
        onDelete={deleteTodo} 
        onToggle={toggleTodo}
      />
      <TodoStats 
        todos={todos.length}
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={clearCompleted}
      />
    </div>
  )
}

export default App