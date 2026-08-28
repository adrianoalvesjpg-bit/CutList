import React from 'react'
import UpIcon from '../../style/ui/UploadIcon.module.css'
import { IoCloudUploadOutline } from "react-icons/io5"

export default function UploadIcon(e) {
    const handleFileChange = (event) => {
        e.handleFileChange(event);
    }
  return (
    <div>
        <label>
        <IoCloudUploadOutline size={30} className={UpIcon['upload-icon']} />
        <input
        className={UpIcon['file-upload']}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        />
    </label>
      
    </div>
  )
}
