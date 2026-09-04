import React from 'react'

import { Handle, Position } from '@xyflow/react';
import StNodes from '../../style/ReactFlow/Nodes.module.css'

import StDiode from '../../style/svg/Diode.module.css'

export default function Diodo({data}) {
  return (
    <div className={StNodes.diodoNode}>
      <div className={StDiode.main}>
          <svg width="7" height="2.5" stroke-width="2" className={StDiode.border}>
            <line x1="0.2" y1="1.2" x2="1" y2="1.2" stroke="black" stroke-width="0.3" className={StDiode.border} />
            <rect x="1.1" y="0.3" width="4" height="1.9" rx="0.3" stroke-width="0.3" className={StDiode.background} />
            <rect x="3.4" y="0.3" width="0.8" height='1.9' fill="black"  stroke-width="0.2" className={StDiode.border} />
            <line x1="5" y1="1.2" x2="6" y2="1.2" stroke="black" stroke-width="0.3" className={StDiode.border} />
          </svg>
        </div>
        <Handle type="target" position={Position.Top} className={StNodes.handle} />
        <p className={StNodes.text}>{data}</p>
        <Handle type="source" position={Position.Top} className={StNodes.handle} />
    </div>
  )
}
