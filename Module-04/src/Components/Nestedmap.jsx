import React from 'react'

function Nestedmap  () {
        const  UserList=[
                {
                  id: 1,
                  name: 'nayeem',
                  age:20,
                  prof: 'programmer',
                  EnrolledCourse:[
                        {
                                courseid: 100,
                                name: "journey of frontend development",
                                price: 5000,
                                module: 120
                        },
                        {
                                courseid: 200,
                                name: "journey of programming",
                                price: 4000,
                                module: 124
                        },
                        {
                                courseid: 300,
                                name: "mern stack",
                                price: 6000,
                                module: 320
                        },
                  ] 
                             
                },
                {
                        id: 2,
                        name: 'tanveer',
                        age:22,
                        prof: 'programmer',
                        EnrolledCourse:[
                              {
                                      courseid: 100,
                                      name: "journey of frontend development",
                                      price: 5000,
                                      module: 120
                              },
                             
                        ] 
                                   
                      },
                      {
                        id: 3,
                        name: 'shajeeb',
                        age:21,
                        prof: 'programmer',
                        EnrolledCourse:[
                              {
                                      courseid: 100,
                                      name: "programing for beginners",
                                      price: 5000,
                                      module: 120
                              },
                            
                        ] 
                                   
                      },
        ]
        
  return (
    <div>
        <h2>List of user</h2>
        {UserList.map((data)=>(
            <div key={data.id}>
                <p>{data.name}</p>
                <p>{data.id}</p>
                <p>{data.prof}</p>

                <br />

                <h3>Enrolled courses list:</h3>
                <ul key={data.id}>
                       
                         {data.EnrolledCourse.map((course)=>{
                                        <li key={course.courseid}>
                                                <span>Course name: {course.name}</span>
                                                <span>Course price: {course.price}</span>
                                                <span>Course module: {course.module}</span>

                                        </li>

                                })
                        }

                </ul>
                
            </div>    
        ))}
    </div>
  )
}

export default Nestedmap;
