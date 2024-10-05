
function Greeting ({login}) {
  return(     
        <>
        {login ? <h1>Welcome back tanveer</h1> :  <h1>Please login first</h1>}
        </>
 ) 
}

export default Greeting;
