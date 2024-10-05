function BootsNav(){
      return(
        <>
        <nav className="navbar navbar-expand-lg bgobody-tertiay">
           <div className="container-fluid">
                <a href="">Hablu Programmer</a>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarID">
                        <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarID">
                   <ul className="navbar-nav mx-auto">
                      <li className="nav-link active">Home</li>
                      <li className="nav-link">About</li>  
                      <li className="nav-link">Contact</li>
                      <li className="nav-link">Signup</li>
                        </ul>     

                </div>
                </div>     

        </nav>
        
        </>
      )  
}

export default BootsNav;