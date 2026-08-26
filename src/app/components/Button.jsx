import React from 'react'
import StButton from '../style/Button.module.css'


export default function Button({
      size="p",
      text='Clique aqui',
      radius='false',
      scale='false'
    }) {

  return (
    <div>
      <button
        id='0'
        className={`${StButton.btn_ripple}
                    ${StButton[size]}
                    ${StButton[radius]}
                    ${StButton[scale]}`}>
        {text}
      </button>
      
    </div>
  )
}
