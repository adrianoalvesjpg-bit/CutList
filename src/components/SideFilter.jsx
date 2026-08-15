import React from 'react'

import FilterGroup from './FilterGroup.jsx'

import StSideFilter from '../style/SideFilter.module.css'

export default function SideFilter() {
    const filter={
        name: 'categoria',
        data: ['conectores', 'terminais', 'travas', 'selos', 'cabos']
    }
  return (
    <aside className={StSideFilter.main}>
        <FilterGroup filter={filter}/>
    </aside>
  )
}
