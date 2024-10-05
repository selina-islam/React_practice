import { useEffect, useState } from "react"

const UseEffectHook=()=> {
        const [Veriable, setVariable] = useState(0);

        useEffect(()=>{
                const Timer = setInterval(()=>{
                setVariable((PreData)=> PreData + 1)
                },1000)

                return ()=>{clearInterval(Timer)} 
        },[])

        return <div>UseEffect Hook Saying: {Veriable}</div>
}

export default UseEffectHook;