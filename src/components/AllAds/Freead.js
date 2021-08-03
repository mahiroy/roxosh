import React from 'react'
import PinDropIcon from '@material-ui/icons/PinDrop';
import {Link} from 'react-router-dom';


 function Freead() {
    return (
        <div>
                   {/* Top Ads Start */}
                    <div className="card mb-2 border2 my-5   b-shad" >
                    <div className="row no-gutters"> 
                        <div className="col-md-1 col-sm-2">
                             <img src="assets/img/default.jpg" className=" img-responsive align-center ads-img b-shad" alt="..."/>
                        </div> 
                        <div className="col-md-10">
                        <div className="card-body"> 
                             <h5 className="card-title text-capitalize  font-weight-bold">
                                <Link to="details" href="#" className="text-info">The standard Lorem Ipsum passage, used since the 1500s</Link> 
                             </h5>
                                 <p className="card-text text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                 <p className="card-text"> 
                                   <spam className=" btn"> 3 mins ago</spam>    &nbsp;  <b> | </b>   &nbsp;  
                                   <spam className=" btn">Call Girls</spam>   &nbsp;  <b> | </b>   &nbsp;  
                                   <spam className="text-muted btn"> <PinDropIcon fontSize="small" /><a href=""> Andheri</a> </spam> 
                                 </p>
                        </div> 
                        </div>  
                    </div>
                    </div>
                    {/* Top Ads Ends */}
        </div>
    )
}
export default Freead;