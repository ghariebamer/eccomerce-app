import React,{Component} from "react";// c letter muct be captial Letter !!!( C)

export  class NavBar extends Component{  
    render(){
        return(
        <React.Fragment >
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <button className='btn btn-danger'> Ecommerce</button>
         
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="/#">Home</a>
            </li>
          </ul>
    
  </div>
</nav>
        </React.Fragment>
        );
    }

}
export default NavBar;