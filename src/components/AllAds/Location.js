import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Location() {
  return (
    <div>
     
  <div className="col-md-12 py-5">    
      
 <p >
   
  <button className="btn btn-primary w-100 p-1 b-shad" type="button" data-bs-toggle="collapse" data-bs-target="#location" aria-expanded="false" aria-controls="collapseExample">
    <h3>Location <ExpandMoreIcon fontSize="large"/></h3> 
  </button>
</p>



<div className="collapse" id="location">


  <div className="card card-body">
    Maharashtra 
  </div>
  <div className="card card-body">
    Maharashtra 
  </div>
  <div className="card card-body">
    Maharashtra 
  </div>
  <div className="card card-body">
    Maharashtra 
  </div>
  <div className="card card-body">
    Maharashtra 
  </div>
  
  


</div>
    
      </div>  
    
    </div>
  );
}

export default Location;
