import React from 'react'

export const Templateliterals = () => {
        let name= "Eshan Ahmed"
        let x = "Hablu Programmer"
  return (
    <div>
        <h1>{`Hello ${name} welcome to our ${x}`}</h1>

        <h1> Hello uncle, what's up {x} to {name}</h1>

    </div>
  )
}
