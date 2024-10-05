import { useState } from "react"

function Styletwo(){
        const [active, setActive]=useState(true)
        const Activity= ()=> {
                setActive(!active)
        }
        return(
                <>
                <button className={active ? "Active":"Inactive"} onClick={Activity}>
                        {active? "active" : "deactive"}
                </button>
                </>
        )
}

export default Styletwo