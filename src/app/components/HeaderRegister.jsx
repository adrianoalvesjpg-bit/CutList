import React from 'react'
import { useState } from 'react';

import Button from './Button';
import SearchInput from './SearchInput';

import StHearderRegister from '../style/HeaderRegister.module.css';
import { BiShow } from "react-icons/bi";

export default function HeaderRegister({number}) {

  const [showNumber, setShowNumber] = useState(0)

  return (
    <div className={StHearderRegister.main}>
      <div className={StHearderRegister.div}>
        <BiShow/>
        <p>{showNumber}</p>
      </div>
      <div className={StHearderRegister.searchArea}>
        <SearchInput placeholder="Consultar em filtrados..." />
      </div>

      <Button text='Novo Cadastro' radius='true' scale='scaleTrue' />
    </div>
  )
}
