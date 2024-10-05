import Combine,{ Navber, Navbers } from './Components/Navbar'
import './App.css'
import { Templateliterals } from './Templateliterals'
import Footer from './Components/Footer'
import Styles from './Components/HeroArea'
import { ContactInfo } from './Components/Props'
import Studen from '../StudenInfo'

function App() {
 
  return (
    <>

{/* <Navber/>
     <Templateliterals/>
    <Navbers/>
    <Combine/>
     <Footer/> */}
  {/* <Styles/> */}
  <ContactInfo name="Ahad" des="This is eshan ahmed ahad, founder of hablu programmer"/>
  <ContactInfo name="Tutul" des="This is Tutul, Co-founder of hablu programmer
  "/>
  <ContactInfo name="Shajeeb" des="Founder of becodemy"/>
  
  <Studen username="Eshan" number="0182332" address="Dhaka,Bangladesh"/>
  <Studen username="Salman" number="0182332" address="Dhaka,Rajshahi"/>
    </>
  )
}

export default App
