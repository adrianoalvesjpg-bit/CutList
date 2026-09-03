import React from 'react'

import StRightSide from '../../style/ReactFlow/RigthSide.module.css'

import { BsGrid3X3Gap } from "react-icons/bs";

export default function RightSide( {OnGrid, setOnGrid} ) {
  return (
    <div className={StRightSide.main}>
      <BsGrid3X3Gap 
        className={`${StRightSide.gridBt} ${OnGrid ? StRightSide.active : ""}`} 
        onClick={() => setOnGrid(!OnGrid)} 
        />
    </div>
  )
}
