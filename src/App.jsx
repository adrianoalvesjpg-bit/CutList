import { useState } from 'react'
import './style/App.css'

import Header from './components/Header'
import Body from './components/Body'

function App() {
  const [screen, setScreen] = useState(0)

  return (
    <div>
      <Header screenSelect={setScreen} />
      <Body screen={screen} />
    </div>
  )
}

export default App