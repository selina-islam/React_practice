import { useReducer } from "react";


function reducer (state, action){
        switch(action.type){
                case "Increment":
                   return {count: state.count + 1}
                case "Decrement":
                   return {count:state.count - 1 }   
            
           default:
                 throw new Error("The Unknow Action Type")        
        }
}

function UseReduce (){
      const [state, dispatch] = useReducer(reducer,{count: 0})
       const Increment = ()=> {
        dispatch({type:"Increment"})
       }

       const Decrement = ()=> {
        dispatch({type: "Decrement"})
       }

       return(
       <> 

        <p className="font-semibold">Count: {state.count}</p>
        <button className="bg-amber-200 rounded px-2 m-3" onClick={Increment}>Increment</button>
        <button className="bg-amber-200 rounded px-2 m-3" onClick={Decrement}>Increment</button>

       </>)
}

export default UseReduce;