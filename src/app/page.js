"use client";

import { useState } from 'react'
import './style/ui/App.css'

import Header from './components/ui/Header'
import Body from './components/ui/Body'

export default function Home() {
  const [screen, setScreen] = useState(0)

  const [out, outAdd] = useState()
  const [derivation, derivationAdd] = useState()
  const [termination, terminationAdd] = useState()
  const [splice, spliceAdd] = useState()
  const [components, componentsAdd] = useState()


  return (
    <div>
      <Header 
      screen={screen}
      screenSelect={setScreen}
      outAdd={outAdd}
      derivationAdd={derivationAdd}
      terminationAdd={terminationAdd}
      spliceAdd={spliceAdd}
      componentsAdd={componentsAdd}
      />
      <Body screen={screen} />
    </div>
  )
};
