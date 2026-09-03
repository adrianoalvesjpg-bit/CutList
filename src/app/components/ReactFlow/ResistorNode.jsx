import React from 'react'

import { Handle, Position } from '@xyflow/react';
import StNodes from '../../style/ReactFlow/Nodes.module.css'

import { TbCircuitResistor } from "react-icons/tb";

export default function Resistor({data}) {
  return (
    <div className={StNodes.resistorNode}>
        <TbCircuitResistor className={StNodes.resistorNode} />
        <Handle type="target" position={Position.Top} className={StNodes.handle} />
        
        <p className={StNodes.text}>{data}</p>
    
        <Handle type="source" position={Position.Top} className={StNodes.handle} />
    </div>
  )
}
