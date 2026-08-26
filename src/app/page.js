"use client";

import { useState } from 'react'
import './style/App.css'

import Header from './components/Header'
import Body from './components/Body'

export default function Home() {
  const [screen, setScreen] = useState(0)

  return (
    <div>
      <Header screen={screen} screenSelect={setScreen} />
      <Body screen={screen} />
    </div>
  )
};
