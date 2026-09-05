import React from 'react'

import StRightSide from '../../style/ReactFlow/RigthSide.module.css'

import { BsGrid3X3Gap } from "react-icons/bs";
import { BsChevronBarRight } from "react-icons/bs";

import useKeyBind from '../js/useKeyBind';

// dentro de FlowInner, onde você já tem addNode:

export default function RightSide( {OnGrid, setOnGrid, OnIntersection, setIntersection} ) {
  useKeyBind('F1', () => setOnGrid(!OnGrid));
  useKeyBind('F2', () => setIntersection(!OnIntersection));

  return (
    <div className={StRightSide.main}>
      <div className={StRightSide.intersection}>
        <div className={StRightSide.tooltip}>F2</div>
        <BsChevronBarRight className={`${StRightSide.bt} ${OnIntersection ? StRightSide.active : ""}`}
        onClick={() => setIntersection(!OnIntersection)}
         />
      </div>

      <div className={StRightSide.grid}>
        <div className={StRightSide.tooltip}>F1</div>
        <BsGrid3X3Gap 
          className={`${StRightSide.bt} ${OnGrid ? StRightSide.active : ""}`} 
          onClick={() => setOnGrid(!OnGrid)} />
      </div>

    </div>
  )
}
