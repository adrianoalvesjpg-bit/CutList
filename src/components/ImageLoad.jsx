import { useState } from 'react';

import ImageSt from '../style/ImageLoad.module.css'
import { p } from 'motion/react-client';

import { FaCamera } from "react-icons/fa"
import UploadIcon from './UploadIcon'
import RemoveIcon from './RemoveIcon'

export default function ImageLoad() {
  const [foto, setFoto] = useState(null);
  const [FileName, setFileName] = useState("Nenhum arquivo selecionado")


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto(URL.createObjectURL(file)); // gera URL temporária
      setFileName(file.name);
    }

  };

  const ResetFileName = () => {
    setFoto(null);
    setFileName("Nenhum arquivo selecionado");
  };

  return (
    <div className={ImageSt['div']}>
      <div className={ImageSt['div-img']}>
        {foto && (
          <img src={foto} alt="Imagem do componente" className={ImageSt['img']} />
        )}
      </div>
      <div className={ImageSt['div-btn']}>
        <UploadIcon handleFileChange={handleFileChange} />
          
        <label>
          <RemoveIcon disabled= {!foto} exec={ResetFileName}/>
        </label>

      </div>
      <p className={ImageSt['file-name']}>{FileName}</p>
    </div>
  );
}
