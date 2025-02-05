import { useState } from 'react'
import User from './components/Users'
import { Message } from './components/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User name="Gautam Dheer" email="gautamdheer.gh@gmail.com"/>
      <Message />
     </>
  )
}
export default App
