import { useCallback, useState } from "react"

const Callback= ()=>{
        const [count, setCount] = useState(0)

        const Increment = useCallback(()=> {
                setCount((PreData)=> PreData+1)
        },[])

        const Decrement = useCallback(()=> {
                setCount((PreData)=> PreData-1)
        },[])


    return(
        <div>
             <p>Count:{count}</p>   
             <button className="bg-red-400 px-2 rounded m-3" onClick={Increment}>Increment</button>
             <button className="bg-red-400 px-2 rounded m-3" onClick={Decrement}>Decrement</button>
        </div>
    )    
}

export default Callback