import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import {Link} from 'react-router-dom';

 function ContentDetails() {
    return (
        <div>



        <div className="col-md-12">
            <Link to="/details" href="#"><h1 className="details-title t-shad">The standard Lorem Ipsum passage, used since the 1500s</h1></Link>

            <br/>

            <i className="text-muted details-submenu ">id #5478225</i>
             <b className="text-muted details-submenu">23 Year</b> | 
             <b className="text-muted details-submenu">Category</b> | 
             <b className="text-muted">Location</b> 
             <b className="float-end btn btn-warning p-2 b-shad details-top-ad"> Top Ads </b>


            <br/>
            <p className="pt-4  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           
            </p>
             
        </div>



       <div className="row">
        <div className="col-md-4 float-start"><img src="assets/img/default.jpg" className=" img-responsive" /></div>
        <div className="col-md-4 float-start"><img src="assets/img/default.jpg" className=" img-responsive" /></div>
        <div className="col-md-4 float-start"><img src="assets/img/default.jpg" className=" img-responsive" /></div>
        </div> 

         <div className="col-md-12  ">
         <br/>
             <h3 className="text-center p-5">Contact</h3>
                            <div className="col-6 float-start p-2"><button className="btn btn-warning w-100 p-3 b-shad"><CallIcon/>+919619641822</button></div>
                            <div className="col-6 float-end p-2"><button className="btn btn-success w-100 p-3 b-shad"><WhatsAppIcon/>Whatsapp</button></div>
         </div>


         
             

             

        </div>
    )
}


export default ContentDetails;