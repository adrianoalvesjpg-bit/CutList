import React from 'react'

import FilterGroup from './FilterGroup.jsx'
import SearchInput from './SearchInput.jsx'

import StSideFilter from '../style/SideFilter.module.css'

export default function SideFilter() {
    const data = [
    {
      name: 'categoria',
      filter: ['conectores', 'terminais', 'travas', 'selos', 'cabos']
    },
    {
      name: 'numero de vias',
      filter: ['1 via', '2 vias', '3 vias', '4 vias', '5 vias']
    },
    {
      name: 'cor',
      filter: ['vermelho', 'azul', 'verde', 'amarelo', 'preto']
    },
    {
      name: 'bitola',
      filter: ['0.5mm', '1.0mm', '1.5mm', '2.5mm', '4.0mm']
    }
  ];

  return (
    <aside className={StSideFilter.aside}>
      <div className={StSideFilter.main}>
        <div className={StSideFilter.div}>
        <SearchInput text={'Busca'}/>
        </div>
        {data.map((obj, index) =>(
          <FilterGroup key={index} data={obj}/>
        ))}
      </div>
    </aside>
  )
}
