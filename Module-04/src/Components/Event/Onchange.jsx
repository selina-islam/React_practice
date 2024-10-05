import React, { useState } from 'react'

export const Onchange = () => {
        const [message, setMessage]= useState('Please write something in the input field');
        const clicktichange= (e)=> {
                setMessage(e.target.value)
        }
  return (
    <div>
        <p>{message}</p>
        <input type="text" onChange={clicktichange} />
    </div>
  )
}
