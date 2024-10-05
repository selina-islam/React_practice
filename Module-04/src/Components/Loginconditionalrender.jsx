import React, { useState } from 'react'
import { Logingreeting } from './Logingreeting'

export const Loginconditionalrender = () => {
        const[login,setLogin]= useState(false)
  return (
    <div>
        <button onClick={()=>setLogin(!login)}>
                {login ? "Log Out": "Log In"}
        </button>
        <Logingreeting Login ={login}/>
    </div>
  )
}
