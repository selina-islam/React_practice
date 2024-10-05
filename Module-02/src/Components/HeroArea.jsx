import './HeroArea.css'
import hablu from "./heros.module.css"

function Styles(){
const Mystyle={
        color:"yellow",
        backgroundColor: "black"
}

        return (
                <>
               <p style={{backgroundColor: "green", color:"white",}}> This is hero section</p>

               <h2 id="stl">This section design comes from external css</h2>
               <h4 style={Mystyle}>This style coming from object</h4>

               <div className={hablu.hero}></div>

                </>

        )
}

export  default Styles;