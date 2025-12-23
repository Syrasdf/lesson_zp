import PropTypes from 'prop-types'  // prop 类型约定，校验
// 给谁打招呼
function Greeting(props) {
  // console.log(props)
  const {
    name,
    message,
    showIcon
  } = props
  
  return (
    <div>
      <h1>Hello,{name}!</h1>
      <p>{message ?? '默认消息'}</p>
    </div>
  )
}

Greeting.propTypes = {
  name: PropTypes.string,
  message: {
    type: PropTypes.string,
    default: '默认消息',
  },
  showIcon: PropTypes.bool,
}

Greeting.defaultProps = {
   name: '默认姓名',
   message: '默认消息'
}

export default Greeting
