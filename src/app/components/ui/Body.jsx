import React from 'react'

import RawMaterial from '../../screens/RawMaterial'
import Dev from '../../screens/DevState'
import Products from '../../screens/Products'


const Body = ({screen, addNodeHandlers, setNodeHandlers}) => {
    const screens = {
      0: () => <Products/>,
      1: () => <RawMaterial/>,
      2: () => <Dev addNodeHandlers={addNodeHandlers} setNodeHandlers={setNodeHandlers} />,
    }

    return <div>{screens[screen]()}</div>

}

export default Body
