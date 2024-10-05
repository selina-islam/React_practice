import { useState } from "react";

function MystateUsestate(){
        const [data, setData] = useState(0);


        const x=()=>{
             setData(data+ 1)
        }

             return(

                <>
                <p>Data: {data}</p>
                <button onClick={x}>Click to increse data</button>
                </>
             )
                
       
}

export default MystateUsestate;