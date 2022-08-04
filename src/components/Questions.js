import React, { useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
const Questions = ({title,info}) => {
    const[showInfo,setShowInfo] = useState(false)
  return (
    <div>
        <div>
            <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
        </div>
        {showInfo && <p>{info}</p>}
    </div>
  )
}

export default Questions