import { useState } from "react"

function Dynamic(){
        const[isActive, setisActive]= useState(true)
        const Styles={
                backgroundColor: isActive ? "green" : "red",
                color: "White",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer"
        }

        const Activity=()=>{
                setisActive(!isActive)
        }
    return(
        <>
        <button style={Styles} onClick={Activity}>
        {isActive ? "Active" : "Inactive"}
        </button>
        
        </>

    )    
}
export default Dynamic