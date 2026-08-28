import React from 'react'
import Flow from '../components/ReactFlow/DrawHarness'
import StFlow from '../style/ui/DevState.module.css'

export default function DevState() {
  return (
    <div className={StFlow.main}>
      <Flow/>
    </div>
  )
}
