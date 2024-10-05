function User(){

        const UserList=[
                {
                        id : 1,
                        name: "Shohel",
                        prof: "Mechanic"
                },
                {
                        id : 2,
                        name: "Nayeem",
                        prof: "Foreigner"
                },
                {
                        id : 3,
                        name: "Tanveer",
                        prof: "Gamer"
                },
        ]
        return(
                <>
                {UserList.map((data)=>(
                    <li key={data.id}>
                        <p>{data.id}</p>
                        <p>{data.name}</p>
                        <p>{data.prof}</p>
                    </li>    
                ))}
                
                
                </>

        )
}

export default User