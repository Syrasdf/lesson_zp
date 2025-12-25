const TodoStats = (props) => {
  const {
    total,
    active,
    completed,
    onClearCompleted

  } = props
  return (
    <div>
      <p>Total: {total} | Active: {active} | Completed: {completed}</p>
      <button 
        onClick={onClearCompleted}
        className="clear-btn"
        >Clear Completed</button>
    </div>
  )
}

export default TodoStats