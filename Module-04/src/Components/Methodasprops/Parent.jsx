import React from 'react'
import { Child } from './Child'

 const Parent = () => {
        const Myalert=()=>{
                alert('You have clicked the btn')
        }
  return (
    <div>
        <p>Parent components</p>
        <Child Myfun= {Myalert}/>
    </div>
  )
}
export default Parent;
