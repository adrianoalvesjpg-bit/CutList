import React from 'react'
import Flow from '../components/ReactFlow/DrawHarness'
import StFlow from '../style/ui/DevState.module.css'

export default function DevState({addNodeHandlers, setNodeHandlers}) {
  return (
    <div className={StFlow.main}>
      <Flow addNodeHandlers={addNodeHandlers} setNodeHandlers={setNodeHandlers} />
    </div>
  )
}
