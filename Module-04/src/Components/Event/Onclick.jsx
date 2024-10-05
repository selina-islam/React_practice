import React, { useState } from 'react'

export const Onclick = () => {
        const [message, setMessage]= useState()
        const Click= ()=>{
                setMessage('Button was clicked')
        }
  return (
    <div>
        <h3>{message}</h3>
        <button onClick={Click}>Click Me</button>

    </div>
  )
}
