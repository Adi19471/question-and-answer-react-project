import React, { useState } from 'react'
import { BiPlus,BiCheckboxMinus } from "react-icons/bi";
const Questions = ({title,info}) => {
  const [showinfo,setShowinfo] = useState(false);
  return (
  <div className="card">
    <article className='card-body'>
    <header>
      <h5 className='card-title shadow-lg'>{title}</h5>
      <button className='btn btn-danger' onClick={() =>setShowinfo(!showinfo)}><BiPlus/></button>


   {showinfo && <p>{info}</p>}
    </header>
  </article>
  </div>
  )
}

export default Questions
