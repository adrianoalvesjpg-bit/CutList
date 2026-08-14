import {useState} from 'react'
import InputSt from '../style/Input.module.css'

export default function Input({ text, onChange }) {
  return (
    <div  className={InputSt['input-div']}>

      <fieldset className={InputSt['input-fieldset']}>
        <legend className={InputSt['input-legend']}>{text}</legend>
        <input
          className={InputSt['input']}
          type="text" 
          placeholder='Digite aqui...'
          onChange={(e) => onChange(e.target.value)} 
        />
      </fieldset>
      
    </div>
  )
}