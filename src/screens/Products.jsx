import React from 'react'
import ProductRegister from '../components/ProductRegister'
import CardProduct from '../components/CardProduct'
import SideFilter from '../components/SideFilter'

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
    },

    {
      id: 3,
      category: 'fusíveis',
      code: '8831',
      description: 'FUSIVEL VIDRO 10A 5x20',
      partnumber: 'FV-10A-520',
      color: 'TR',
      pins: 0,
      screw: 0,
      dimensions: '5x5x20',
      stats: 1,
    },
    {
      id: 4,
      category: 'cabos',
      code: '2219',
      description: 'CABO FLEX 2x1.5mm PRETO',
      partnumber: 'CF-2X15-BK',
      color: 'PT',
      pins: 2,
      screw: 0,
      dimensions: '2000x5x5',
      stats: 0,
    },
    {
      id: 5,
      category: 'parafusos',
      code: '7780',
      description: 'PARAFUSO ALLEN M6x20 ZN',
      partnumber: 'PA-M6X20-ZN',
      color: 'ZN',
      pins: 0,
      screw: 1,
      dimensions: '6x6x20',
      stats: 1,
    },
    {
      id: 6,
      category: 'relés',
      code: '9902',
      description: 'RELE AUTOMOTIVO 12V 30A',
      partnumber: 'RA-12V-30A',
      color: 'PR',
      pins: 4,
      screw: 0,
      dimensions: '25x25x30',
      stats: 1,
    },
    {
      id: 7,
      category: 'interruptores',
      code: '4410',
      description: 'INTERRUPTOR BASCULANTE 2P VERMELHO',
      partnumber: 'IB-2P-VM',
      color: 'VM',
      pins: 2,
      screw: 0,
      dimensions: '15x10x25',
      stats: 0,
    },
    {
      id: 8,
      category: 'lâmpadas',
      code: '5520',
      description: 'LAMPADA LED 12V 5W BR',
      partnumber: 'LL-12V-5W-BR',
      color: 'BR',
      pins: 2,
      screw: 0,
      dimensions: '10x10x40',
      stats: 1,
    },
    {
      id: 9,
      category: 'baterias',
      code: '6633',
      description: 'BATERIA LÍTIO 3V CR2032',
      partnumber: 'BAT-CR2032',
      color: 'NI',
      pins: 0,
      screw: 0,
      dimensions: '20x20x3',
      stats: 1,
    },
    {
      id: 10,
      category: 'placas',
      code: '7744',
      description: 'PLACA PCB DUPLA FACE 100x80',
      partnumber: 'PCB-100X80',
      color: 'VD',
      pins: 0,
      screw: 0,
      dimensions: '100x80x1.6',
      stats: 0,
    },
    {
      id: 11,
      category: 'sensores',
      code: '8855',
      description: 'SENSOR PROXIMIDADE INDUTIVO M12',
      partnumber: 'SP-M12',
      color: 'MT',
      pins: 3,
      screw: 0,
      dimensions: '12x12x50',
      stats: 1,
    },
    {
      id: 12,
      category: 'conectores',
      code: '9966',
      description: 'CONEC F CIRCULAR 5P METAL',
      partnumber: 'CC-5P-MT',
      color: 'MT',
      pins: 5,
      screw: 1,
      dimensions: '25x25x40',
      stats: 0,
    }

  ]

  

  return (
    <div className={ProductSt.main}>
      <SideFilter/>
      <div>
        {/* < ProductRegister /> */}
        <div className={ProductSt.cards}>
          {products.map((product) => (
          < CardProduct product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
