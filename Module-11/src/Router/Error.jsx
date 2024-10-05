import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Error = () => {
const navigate = useNavigate()

const handleClick= ()=> {
        navigate('/')
}

  return (
    <div>

        <h1>This page isn't exist, Please return home</h1>
        <button className='bg-slate-500 p-2 rounded-sm mt-3' onClick={handleClick}>Back Home</button>


    </div>
   
  )
}
