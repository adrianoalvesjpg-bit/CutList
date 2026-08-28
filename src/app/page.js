"use client";

import { useState } from 'react'
import './style/ui/App.css'

import Header from './components/ui/Header'
import Body from './components/ui/Body'

export default function Home() {
  const [screen, setScreen] = useState(0)

  return (
    <div>
      <Header screen={screen} screenSelect={setScreen} />
      <Body screen={screen} />
    </div>
  )
};
