import React from 'react'

import StSearch from '../style/SearchInput.module.css'
export default function SearchInput({
      OnChage,
      placeholder='Buscar produtos...',
      text='',
    }) {


  return (
    <div>
    <div className={StSearch.search_container}>
        <input 
            type="text"
            className={`${StSearch.search_input}`}
            placeholder={placeholder}
            onChange={OnChage}
            />
        <svg
            className={StSearch.search_icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    </div>
    </div>
  )
}
