import React from 'react'
import PinDropIcon from '@material-ui/icons/PinDrop';
import Location from './Location';
 
import Topads from './Topads';
import Freead from './Freead';

 function AlladsView() {
    return (
        <>
        {/* Container Start */}
            <div className="container-fluid p-5">


            {/* Row Star */}
            <div className="row m-auto">
            

           
                    <Location/>
                    <Topads/>
                    <Freead/>
    




            {/* left  content*/}
                <div className="col-md-12 m-auto  ">



             
 


{/* Pegination Start */}
 <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">6</a></li>
    <li class="page-item"><a class="page-link" href="#">7</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

{/* Pegination ends */}




                </div>
            {/* left  content ends*/}






            </div>
            {/* row end */}











            </div> {/* Container closed */}
        </>
    )
}


export default AlladsView;