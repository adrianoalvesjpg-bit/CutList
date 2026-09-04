import React from 'react'

import { Handle, Position } from '@xyflow/react';
import StNodes from '../../style/ReactFlow/Nodes.module.css'

import { BsXCircle } from "react-icons/bs";

export default function Splice({data}) {
  return (
    <div className={StNodes.spliceNode}>
      <BsXCircle className={StNodes.spliceNode}/>
        <Handle type="target" position={Position.Top} className={StNodes.handle} />
        
        <p className={StNodes.text}>{data}</p>
    
        <Handle type="source" position={Position.Top} className={StNodes.handle} />
    </div>
  )
}
