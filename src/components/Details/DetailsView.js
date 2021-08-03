import React from 'react';
import ContentDetails from './ContentDetails';
import Contact from './Contact';


 function DetailsView() {
    return (
        <div>
               <div className="container-fluid"> 
                    <div className="row p-5"> 
                        <div className="col-md-8 m-2 p-2 b-shad">
                            <ContentDetails/>
                        </div>

                        <div className="col-md-3 m-2 p-2 b-shad">
                            <Contact/>
                        </div>
                    </div>







               </div>
            
        </div>
    )
}


export default DetailsView;