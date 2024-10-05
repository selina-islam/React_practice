import { useEffect, useState } from "react";

function Datafetching(){
        const [data, setData] = useState([]);
        const [error, setError] = useState(null);

        useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")  
            .then((response)=> response.json())  
            .then((data)=> setData(data))
            .catch((error)=> setError(error))
        },[])  
        
        if(error){
                return <div>Error Is {error.message}</div>
        }

        return(
                <>
                <h1>Api call</h1>
                <ul>
                  {data.map((post)=>(
                        <li key={post.id}>
                                {post.name}
                        </li>
                  ))}     
                </ul>
                </>
        )
}

export default Datafetching;