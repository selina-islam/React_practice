import React from 'react'

export const UniqueID = () => {
        const userList= [
                {
                        id: 1,
                        name: 'Ahad',
                        profe: 'programmer',
                        address: 'Bangladesh'
                },
                {
                        id: 2,
                        name: 'Rakib',
                        profe: 'programmer',
                        address: 'Dhaka,Bangladesh'
                },
                {
                        id: 3,
                        name: 'Salman',
                        profe: 'programmer',
                        address: 'Rajshahi,Bangladesh'
                }
        ]
  return (
    <div>
        <h2>List of user</h2>
        <div>
                {userList.map((data)=>(
                        <ul key={data.id}>
                            <li>{data.id}</li>
                            <li>{data.name}</li>            
                            <li>{data.profe}</li>
                            <li>{data.profe}</li>

                        </ul>
                ))}
        </div>
    </div>
  )
}
