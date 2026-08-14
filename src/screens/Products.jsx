import React from 'react'
import ProductRegister from '../components/ProductRegister'
import CardProduct from '../components/CardProduct'

import ProductSt from '../style/Products.module.css'

const Products = () => {
  const products = [
    {
      id: 0,
      category: 'conectores',
      code: '13451',
      description: 'CONEC M FASTON 6.3 BR 2V 720457-1',
      partnumber: '720457-1',
      color: 'BR',
      pins: 2,
      screw: 0,
      dimensions: '20x10x40',
      stats: 0,
    },
    {
      id: 1,
      category: 'conectores',
      code: '9458',
      description: 'CONEC F FASTON 6.3 BR 2V 720456-2',
      partnumber: '720456-2',
      color: 'BR',
      pins: 2,
      screw: 0,
      dimensions: '20x10x42',
      stats: 1,

    },
    {
      id: 2,
      category: 'conectores',
      code: '6578',
      description: 'CONEC M DEUTCH 4.8 CZ 4V DT04-2P',
      partnumber: 'DT04-2P',
      color: 'CZ',
      pins: 4,
      screw: 0,
      dimensions: '20x10x40',
      stats: 1,
    }
  ]

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', flexWrap: 'wrap', justifyContent: 'center'}}>
      < ProductRegister />
      <div className={ProductSt.main}>
        {products.map((product) => (
        < CardProduct product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Products
