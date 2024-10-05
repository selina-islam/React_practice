import { useState } from 'react'

import './App.css'
import MyDate from './Componrnts/Mydate'
import MystateUsestate from './Componrnts/Mystate'
import StudentInfo from './Componrnts/Destruct'


import DataInfo from './Componrnts/JsonConnect/StudentData'
import Student from './Componrnts/JsonConnect/Student.json'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <MyDate/> */}
     {/* <MystateUsestate/> */}
{/* <StudentInfo username="selina" number="0188888" address="Tangail, Bangladesh"/> */}

{Student.map((data, index)=>(
      <DataInfo key={index} username={data.username} number={data.number} address={data.address} />
))}

     
    </>
  )
}

export default App;
