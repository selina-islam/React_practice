import React from 'react'

export const Logingreeting = ({Login}) => {
 if(Login){
        return(
                <h1>Welcome back Eshan</h1>
        )
 }else{
        return <h1>Please login first</h1>
}
}
