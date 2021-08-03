import React from 'react';
import PinDropIcon from '@material-ui/icons/PinDrop';
import {Link} from 'react-router-dom';




 function TopAds() {
    return (
        <div>
            
                    {/* Top Ads Start */}
                    <div className="card mb-2 border2 my-5 top-bg b-shad " >
                    <div className="row no-gutters bg-top">
                    
                        <div className="col-md-1 col-sm-2">
                             <img src="assets/img/default.jpg" className=" img-responsive align-center ads-img b-shad" alt="..."/>
                        </div> 
                        <div className="col-md-9 ">
                        <div className="card-body"> 
                             <h5 className="card-title text-capitalize  font-weight-bold">
                                <Link to="details" href="#" className="text-info t-shad">The standard Lorem Ipsum passage, used since the 1500s</Link>
                             </h5>
                             <p className="card-text text-muted t-shad">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <p className="card-text">
                                    <spam className=" btn  btn-light t-shad"> 3 mins ago</spam>  &nbsp;  <b>  </b>   &nbsp; 
                                    <spam className=" btn btn-light  t-shad">Call Girls</spam> &nbsp;  <b>  </b>   &nbsp; 
                                    <spam className="text-muted btn btn-light  t-shad"> <PinDropIcon fontSize="small" /><a href=""> Andheri</a> </spam>
                                </p>
                        </div> 
                        </div>
                          
                        <div className="col-md-2 px-5 m-auto p-2 bg-warning b-shad t-shad">
                            Top Ads
                        </div>
                       
                    </div>
                    </div> 
                    {/* Top Ads Ends */} 
        </div>
    )
}



export default TopAds;
