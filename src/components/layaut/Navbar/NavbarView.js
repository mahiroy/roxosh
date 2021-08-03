import React from 'react'
import {Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';




 function Navigation() {
    return (
        <>  


 

<nav className="navbar navbar-expand-lg navbar-light  bg-light p-3  ">
  <div className="container-fluid">
    
    
    <Link to="/" className="navbar-brand b-shad" href="#"><img  src="assets/img/logo.png" alt="..."/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>



    <div className="collapse navbar-collapse" id="navbarSupportedContent">




      <div className="col-md-5">
      <form className="d-flex">
        <input className="form-control me-2 b-shad" type="search" placeholder="Location" aria-label="Search"/>
        <input className="form-control me-2 b-shad" type="search" placeholder="Category" aria-label="Search"/>
        <button className="btn btn-outline-success b-shad" type="submit">Search</button>
      </form>

      </div>
    

      <div className="col-md-7 pl-2  ">
      <ul className="navbar-nav  ">

        <li className="nav-item btn " >
          <Link to="/" className="nav-link " aria-current="page" href="#">Home</Link>
        </li>

        <li className="nav-item btn">
          <Link to="/all-ads" className="nav-link" aria-current="page" href="#">All Ads</Link>
        </li>
        

        <li className="nav-item btn">
          <Link to="login" className="nav-link" aria-current="page" href="#">
           LogIn</Link>  
              
        </li>


        <li className="nav-item btn">
          <Link to="register" className="nav-link" aria-current="page" href="#">
           Register</Link>  
              
        </li>

        <li className="nav-item btn">
          <Link to="/myaccount" className="nav-link " aria-current="page" >My Account</Link>
        </li>

        <li className="nav-item btn">
          <Link to="post-ads" className=" nav-link  btn-warning   b-shad" aria-current="page" href="#"><strong className="font-weight-bold "><AddIcon/> Post Your Ad</strong></Link>
        </li>
        

         
      </ul>
      </div>



    </div>




  </div>
</nav>

 
 
        </>
    )
}



export default Navigation;