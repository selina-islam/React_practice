import { useState } from 'react'
import './App.css'
import { UniqueID } from './Components/UniqueID'
import  Nestedmap from './Components/Nestedmap'
import { Onclick } from './Components/Event/Onclick'
import { Onchange } from './Components/Event/Onchange'
import  Parent  from './Components/Methodasprops/Parent'
import { Loginconditionalrender } from './Components/Loginconditionalrender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UniqueID/> */}
    <Nestedmap/>

  {/* <Onclick/> */}
  {/* <Onchange/> */}
  {/* <Parent/> */}
  {/* <Loginconditionalrender/> */}
    </>
  )
}

export default App
