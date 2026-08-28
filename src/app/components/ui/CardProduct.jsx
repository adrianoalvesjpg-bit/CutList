import React from 'react'

import { CgExpand } from "react-icons/cg";

import CardSt from '../../style/ui/CardProduct.module.css'
export default function CardProduct({product}) {

  const stats= product.stats

  
  return (
    <div className={CardSt.main}>
      
        <div key={product.id} className={CardSt.card}>
          <p className={CardSt.code}>{product.code}</p>
          <hr />
          <p className={CardSt.partnumber}>{product.partnumber}</p>
          <span className={CardSt.tooltip}>
            <CgExpand className={CardSt.expand} />
            <span className={CardSt.expandtooltip}>Expandir</span>
          </span>
          <div className={CardSt.img}>img</div>
          <div className={CardSt.flex}>
            <span className={CardSt.category}>{product.category.toUpperCase()}</span>
            {stats ? (
              <span className={CardSt.statusOn}>ativo</span>
            ) : (
              <span className={CardSt.statusOff}>inativo</span>
            )}
          </div>
          <p className={CardSt.description}>
            {(product.description ?? '').slice(0, 38)}
            {(product.description?.length ?? 0) > 38 && '...'} 
          </p>
          

        </div>
      
    </div>
  )
}
