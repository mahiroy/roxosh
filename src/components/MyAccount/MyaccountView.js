import React from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PinDropIcon from '@material-ui/icons/PinDrop';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {Link} from 'react-router-dom';


function MyaccountView() {
  return (
    <>
      <div className="container-fluid">
         <div className="col-md-10 m-auto mt-5">

 <div className="row">
  <div className="col-12 menu">
    <h3>Menu</h3>
    <br/>
    <div className="list-group" id="list-tab" role="tablist">
      <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#dashbord" role="tab" aria-controls="list-home"><ChevronRightIcon fontSize="large"/> Dashbord</a>
      <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#mylisting" role="tab" aria-controls="list-profile"><ChevronRightIcon fontSize="large"/> My Listing</a>
      <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#payments" role="tab" aria-controls="list-messages"><ChevronRightIcon fontSize="large"/>Payments</a>
      <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#account-details" role="tab" aria-controls="list-settings"><ChevronRightIcon fontSize="large"/>Account Details</a>
      <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#logout" role="tab" aria-controls="list-settings"><ChevronRightIcon fontSize="large"/>Logout</a>
    
    </div>
  </div>
  
  </div>



  <div className="row">
  <div className="col-12 p-2">
    <div className="tab-content" id=" ">




    {/* Dashbord start */}
      <div className="tab-pane fade show active" id="dashbord" role="tabpanel" aria-labelledby="list-home-list">
              <h3 className="text-center">Dashbord</h3>
              <hr/> 
      <div className="col-2 p-3 float-start">
          <img src="assets/img/default.jpg" class="rounded mx-auto d-block img-responsive b-shad  rounded-circle" alt="..."/>
      </div> 
      <div className="col-10 p-3 float-end">
                <p>Full Name</p>
                <p>Username</p>
                <p>Email</p>
      </div> 
      </div>
      {/* Dashbord Ends */}







 {/* Listing start */}

      <div className="tab-pane fade" id="mylisting" role="tabpanel" aria-labelledby="list-profile-list">
       
      <div className="tab-pane fade show active" id="dashbord" role="tabpanel" aria-labelledby="list-home-list">
      <h3 className="text-center">Listing</h3>
      <hr/>




            
                    {/* Top Ads Start */}
                    <div className="card mb-2 border2 my-5 top-bg b-shad " >
                    <div className="row no-gutters bg-top">
                        <div className="col-md-1 col-sm-2">
                             <img src="assets/img/default.jpg" className=" img-responsive align-center ads-img b-shad" alt="..."/>
                        </div>
                        <div className="col-md-9  ">
                          <div className="card-body p-4">
                                    <h5 className="card-title text-capitalize  font-weight-bold">
                                          <Link to="details" href="#" className="text-info t-shad">The standard Lorem Ipsum passage, used since the 1500s</Link>
                                    </h5>
                              <p className="card-text text-muted t-shad">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                               <p className="card-text">
                                  <spam className=" btn  btn-light t-shad"> 3 mins ago</spam> &nbsp;  <b>  </b>   &nbsp; 
                                  <spam className=" btn btn-light  t-shad">Call Girls</spam>  &nbsp;  <b>  </b>   &nbsp; 
                                  <spam className="text-muted btn btn-light  t-shad"> <PinDropIcon fontSize="small" /><a href=""> Andheri</a> </spam>  &nbsp;  <b>  </b>   &nbsp;
                                  <spam className=" btn btn-danger  t-shad">Promote</spam>  &nbsp;  <b>  </b>   &nbsp;
                               </p>
                         </div>
                        </div>
                        <div className="col-md-2 px-5 m-auto p-2  bg-warning b-shad t-shad"> Top Ads </div>
                       
                    </div>
                    </div>

                    {/* Top Ads Ends */}




                     {/* Free Ads Start */}
                     <div className="card mb-2 border2 my-5   b-shad" >
                    <div className="row no-gutters">
                    
                        <div className="col-md-1 col-sm-2">
                             <img src="assets/img/default.jpg" className=" img-responsive align-center ads-img b-shad" alt="..."/>
                        </div>
                    
                        <div className="col-md-10">
                        <div className="card-body p-4">
                             <h5 className="card-title text-capitalize  font-weight-bold">
                                <Link to="details" href="#" className="text-info  ">The standard Lorem Ipsum passage, used since the 1500s</Link>
                             </h5>
                             <p className="card-text text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                             <p className="card-text">
                             <spam className=" btn  btn-light t-shad"> 3 mins ago</spam> &nbsp;  <b>  </b>   &nbsp; 
                                  <spam className=" btn btn-light  t-shad">Call Girls</spam>  &nbsp;  <b>  </b>   &nbsp; 
                                  <spam className="text-muted btn btn-light  t-shad"> <PinDropIcon fontSize="small" /><a href=""> Andheri</a> </spam>  &nbsp;  <b>  </b>   &nbsp;
                                  <spam className=" btn btn-danger  t-shad">Promote</spam>  &nbsp;  <b>  </b>   &nbsp;
                             </p>
                        </div> 
                        </div>  
                    </div>
                    </div> 
                    {/* Free Ads Ends */}
      </div>
  
      </div>
{/* Listing Ends */}  
      
      
      
 {/* PAYMENT HISTORY  */}
      <div className="tab-pane fade" id="payments" role="tabpanel" aria-labelledby="list-messages-list">
      
      <h3 className="text-center">Payments</h3>
              <hr/>
      



              <table class="table">
  <thead>
    <tr>
      <th scope="col">#Id</th>
      <th scope="col">Total</th>
      <th scope="col">Status</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>


    <tr>
      <th scope="row">1</th>
      <td>2145</td>
      <td>₹ 199</td>
      <td>24/07/2021 @ 7:45 am</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>2454</td>
      <td>₹ 199</td>
      <td>28/07/2021 @ 8:45 am</td>
    </tr>


     
    
  </tbody>
</table>
      
      
      
      
      
      </div>
 {/* PAYMENT HISTORY  ENDS */}      
      

{/* Account Details */}
      <div className="tab-pane fade" id="account-details" role="tabpanel" aria-labelledby="list-settings-list">
      <h3 className="text-center">Account Details Password Change</h3>
              <hr/>
              
              
              <div class="row">
               <form acton="post">

                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">New Password</label>
                 <input type="password" class="form-control" id="inputPassword4"/>
               </div>


               <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">New Re-Password</label>
                 <input type="password" class="form-control" id="inputPassword4"/>
               </div>

               <input className="btn btn-primary" type="submit" value="Submit"></input>

               </form>
            </div>



              
      </div>
{/* Account Details Ends */}
      
      
      
      
      
      <div className="tab-pane fade" id="logout" role="tabpanel" aria-labelledby="list-settings-list">
      <h3 className="text-center">Logout</h3>
              <hr/>
        
      
      </div>
    
    
    
    
    
    
    </div>
  </div>





</div>

             

</div> 
      </div>
    </>
  );
}

export default MyaccountView;
