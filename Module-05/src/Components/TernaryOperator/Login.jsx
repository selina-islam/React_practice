import { useState } from "react";
import Greeting from "./Greeting";

function Login(){
        const[login,setLogin]=useState(false)
        return(
                <>
                <button onClick={()=> setLogin(!login)}>
                 {login ? "Log Out" : "Log In"}       
                </button>
               <Greeting login={login}/>
                
                </>
        )
}

export default Login;