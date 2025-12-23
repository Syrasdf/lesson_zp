import Greeting from './components/Greeting'
import Modal from './components/Modal'
import Card from './components/Card'

const MyHeader = () => {
  return (
    <h2 style = {{margin: 0 , color: 'pink'}}>谦~</h2>
  )
}

const MyFooter = () => {
  return (
    <div style = {{textAlign: 'right'}}>
      <button 
        onClick ={() => alert('取消')}
        style = {{padding:'0.5rem 1rem'}}>关闭</button>
    </div>
  )
}

function App() {
  return (
    <div>
        {/*自定义组件*/}
      {/* <Greeting name = "薛之谦" message= "我们的愿望是~~"/> */}
      <Greeting name = "薛之谦" message= "我们的愿望是~~" showIcon/>
      <Modal 
      HeaderComponent={MyHeader}
      FooterComponent={MyFooter}
      >
      <p>我们的愿望是</p>
      <p>世界和平！</p>
      </Modal>
      {/* jsx js class 是js的关键字 */}
      <Card className= "user-card">
       <h2>张三</h2>
       <p>高级前端工程师</p>
       <button>点击查看详情</button>
      </Card>
    </div>
  )
}

export default App