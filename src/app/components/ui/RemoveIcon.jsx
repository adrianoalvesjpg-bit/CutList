import React from 'react'
import RemoveBtn from '../../style/ui/RemoveIcon.module.css'
import { IoIosRemoveCircle } from "react-icons/io"

export default function RemoveIcon({disabled=false, exec}) {
  return (
    <div>
        <label>
            {disabled ? (
                <IoIosRemoveCircle  size={30} className={RemoveBtn['remove-icon-disabled']} />
            ) : (
                <IoIosRemoveCircle  size={30} className={RemoveBtn['remove-icon']} />
            )}
            <button
            className={RemoveBtn['btn-remove']}
            onClick={() => exec()}
            disabled={disabled}
            />
            
        </label>
    </div>
  )
}
 