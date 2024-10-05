function StudentInfo({username, number, address}){
        return(
               <>
                <h1>Name: {username}</h1>
                <h2>Number: {number}</h2>
                <h3> Address: {address}</h3>
               </>
        )
}
export default StudentInfo;