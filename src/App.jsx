import { useState } from 'react'
import './style/App.css'
import './style/Style.css'

import Header from './components/header_'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <Header />
    </div>
  )
}

export default App
