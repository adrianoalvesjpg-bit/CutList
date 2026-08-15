import { useState } from "react"
import Input from "./Input"
import ImageLoad from "./ImageLoad"

import RegisterSt from '../style/RegisterDiv.module.css'
import { IoMdClose } from "react-icons/io";

import ToTitleCase from './TitleCase'

export default function ProductRegister() {
    const register={
        categoria: 'conectores',
        inputsText:['código', 'descrição', 'part number', 'número de vias', 'cor', 'quantidade', 'variavel'],
    }

    const [productRegister, setProductRegister] = useState(register)  
 
  return (
    <div className={RegisterSt["register-div"]}>
      <div className={RegisterSt["div-main"]}>
        <div className={RegisterSt["title-div"]}>
          <h1 className={RegisterSt["title"]}>Cadastro de Componente</h1>
          <span className={RegisterSt["subtitle"]}>{register.categoria.charAt(0).toUpperCase() + register.categoria.slice(1)}</span>
        </div>
        <IoMdClose size={26} className={RegisterSt["close-icon"]}></IoMdClose>
      </div>
        <div className={RegisterSt["div-main"]}>
          <div className={RegisterSt["div-list"]}>
              {register.inputsText.map((text, index) => (
                <ul key={index} className={RegisterSt["input-list"]}>
                    <li><Input 
                        text= {ToTitleCase(text)}
                        onChange={setProductRegister} 
                    />
                    </li>
                </ul>
              ))}
          </div >
          <div>
          <ImageLoad/>
          </div>
        </div>
    </div>
  )
}