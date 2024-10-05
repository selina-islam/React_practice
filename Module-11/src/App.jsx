import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Myimg from '/src/assets/react.svg'
import Navbar from './Router/Navbar'
import Home from './Router/Home'
import About from './Router/About'
import { Contact } from './Router/Contact'
import { Signup } from './Router/Signup'
import { Error } from './Router/Error'
function App() {
 
  return (
    <>
   <BrowserRouter>
   
    <Routes>
      <Route path='' element={<Navbar/>}>
      <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Signup' element={<Signup/>}/>
       <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
   </BrowserRouter>


     {/* <img className='w-96 mt-40 ml-40' src="/Images/Hp-1.jpg" alt="" />

     <img className='ml-40' src={Myimg} alt="" /> */}
    </>
  )
}

export default App
