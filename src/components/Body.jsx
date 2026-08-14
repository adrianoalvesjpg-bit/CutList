import React from 'react'
import { motion } from "motion/react"

import RawMaterial from '../screens/RawMaterial'
import Products from '../screens/Products'

const Body = ({screen}) => {
    const screens= {
        0: <Products/>,
        1: <RawMaterial/>,
    }

  return (
    <div>
      {screens[screen]}

    </div>
  )
}

export default Body
