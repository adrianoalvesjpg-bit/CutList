import React from 'react'
import StFilterGroup from '../style/FilterGroup.module.css'


export default function FilterGroup({filter}) {
  return (
    <div className={StFilterGroup.main}>
        <h1 className={StFilterGroup.category}>{filter.name}</h1>
    </div>
    
  )
}
