import { useState } from "react"

function Form(){
        const [formdata, setFormdata]=useState({name:"", email:""});
        const [submit, setSubmit]=useState({name:"", email:""});

        const handlechange= (e)=> {
                const {name, value}= e.target;
                setFormdata((predata)=> ({
                        ...predata,
                        [name]: value
                }))
        }

        const handlesubmit=(event)=>{
                event.preventDefault();
                setSubmit(formdata)
        }

        
     return(
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="w-full p-10 max-w-md bg-white rounded-lg shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-800 text-center">Login Form</h1> 

                    <form>
                        <div>
                                <label className="block text-sm text-gray-600">Name:</label>
                                <input onChange={handlechange} type="text" placeholder="Enter Your Name" className="mt-1 block w-full px-3 py2 border border-gray-300 rounde shadow-sm" name="name" value={formdata.name} />
                        </div>
                        <div className="mt-2">
                                <label className="block text-sm text-gray-600">Email:</label>
                                <input onChange={handlechange} type="email" placeholder="Enter Your Email" className="mt-1 block w-full px-3 py2 border border-gray-300 rounde shadow-sm " name="email" value={formdata.email} />
                        </div>
                        <div className="mt-2">
                                <label className="block text-sm text-gray-600">Password:</label>
                                <input type="password" placeholder="Enter Your Password" className="mt-1 block w-full px-3 py2 border border-gray-300 rounde shadow-sm " />
                        </div>

                        <button onClick={handlesubmit} type="submit" className="w-full bg-indigo-600 p-2 text-white mt-2 rounded-md">Login</button>
                        </form> 

                        <div>
                            <h2 className="text-center mt-5 font-semibold">User Information</h2>  
                            <p className="text-gray-500">Name: {submit.name} </p>  
                            <p className="text-gray-500">Email: {submit.email}</p>
                        </div>  
                </div>
        </div>
        </>
     )   
}

export default Form