"use client";

import { useState } from 'react'
import { useRef } from 'react'
import './style/ui/App.css'

import Header from './components/ui/Header'
import Body from './components/ui/Body'

export default function Home() {
  const [screen, setScreen] = useState(0)

  const addNodeHandlers = useRef({
    out: () => {},
    derivation: () => {},
    termination: () => {},
    splice: () => {},
    diodo: () => {},
    resistor: () => {},
  });

  const setNodeHandlers = (nextHandlers) => {
    addNodeHandlers.current = {
      ...addNodeHandlers.current,
      ...nextHandlers,
    };
  };

  return (
    <div>
      <Header
        screen={screen}
        screenSelect={setScreen}
        onAddOut={() => addNodeHandlers.current.out()}
        onAddDerivation={() => addNodeHandlers.current.derivation()}
        onAddTermination={() => addNodeHandlers.current.termination()}
        onAddSplice={() => addNodeHandlers.current.splice()}
        onAddDiodo={() => addNodeHandlers.current.diodo()}
        onAddResistor={() => addNodeHandlers.current.resistor()}
      />
      <Body screen={screen} addNodeHandlers={addNodeHandlers} setNodeHandlers={setNodeHandlers} />
    </div>
  )
};
