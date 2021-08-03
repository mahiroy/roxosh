import React from "react";
import { Link } from "react-router-dom";



export default function PostYourAdsView() {
  return (
    <div>
    {/* <!-- Register Form Card Starts --> */}
    <div className="container mb-5">
      
      
      
      <div
        className="card col-md-8 m-auto mt-5 pb-3 shadow rounded b-shad"
         
      >
        <div className="card-body">
          <h4 className="card-title">Post Your Ads</h4>



          {/* <!-- Register Form Start --> */}
          <form className="needs-validation" method="post" autoComplete="off" noValidate>





{/* Category Selection Start */}
<select className="form-select p-2 my-4" aria-label="Default select example">
<option selected>Category</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
{/* Category Selection Ends */}




{/* Title start */}
            <div className="form-group">
              <label htmlFor="title">Title: </label>

              <input type="text" name="title" className="form-control" id="title"  required minLength="40"
              />

              <div className="valid-feedback">
                <i className="far text-success fa-thumbs-up"></i> OK
              </div>
              <div className="invalid-feedback">
                <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                Some error in your name.
              </div>
            </div>
{/* Title end */}



{/* Description start */}
            <div className="form-group">
              <label htmlFor="userName">Description: </label>

              <textarea
                type="text"
                name="name"
                className="form-control"
                id="userName"
                required
                minLength="150"
              />

              <div className="valid-feedback">
                <i className="far text-success fa-thumbs-up"></i> OK
              </div>
              <div className="invalid-feedback">
                <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                Some error in your descritopn.
              </div>

              
            </div>

{/* Description Ends */}


{/* Description Age */}
            <div className="form-group">

              <label htmlFor="Age " className="mt-3">Age: </label>
              <select className="form-select  " aria-label="Default select example">
                  <option velue="18" selected>18</option>
                  <option value="19">19</option>
                   <option value="20">20</option>
                   <option value="21">21</option>
              </select>

              <div className="valid-feedback">
                <i className="far text-success fa-thumbs-up"></i> OK
              </div>
              <div className="invalid-feedback">
                <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                Some error in email.
              </div>
            </div>
{/* Age Ends */}


{/* Image Uplods Start */}
            <div className="form-group mt-3">
            <div class="mb-3">
                  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                  <input class="form-control" type="file" id="formFileMultiple" multiple/>
                  </div>
              <div className="valid-feedback">
                <i className="far text-success fa-thumbs-up"></i> OK
              </div>
              <div className="invalid-feedback">
                <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                Some error in Image Upload.
              </div>
            </div>
{/* Image Uplods Ends */}







{/* Select Location Start */} 
<div className="form-group ">

              <label htmlFor="location " className="mt-4">Location: </label>     
              <select className="form-select p-2 my-2" aria-label="Default select example">
<option selected>Location</option>
<option value="1">Mahasrashtra</option>
<option value="2">Mahasrashtra</option>
<option value="3">Mahasrashtra</option>
</select>


         

              <div className="valid-feedback">
                <i className="far text-success fa-thumbs-up"></i> OK
              </div>
              <div className="invalid-feedback">
                <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                Some error in Category.
              </div>
            </div>
{/* Select Location Ends */} 



{/* Address Start */}
<div className="form-group mt-2">
              <label htmlFor="address">Full Address: </label>

              <input type="text" name="address" className="form-control" id="address"  required maxLength="100"
              />

              <div className="valid-feedback">
                <i className="far text-success fa-thumbs-up"></i> OK
              </div>
              <div className="invalid-feedback">
                <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                Some error in your name.
              </div>
            </div>
{/* Address Ends */}






{/* Mobile Whatsapp Start */}

          <div className="form-group">
          <div className="row mt-5">
              <div className="col-md-6">
                  <label htmlFor="mobile">Mobile (+91): </label>
                  <input type="number" name="mobile" placeholder="+91" velue="+91"    className="form-control"  />
              </div>
               <div className="col-md-6">
                   <label htmlFor="whatsapp">Whatsapp (+91): </label>
                   <input type="number" name="whatsapp" placeholder="+91" velue="+91"    className="form-control" />
              </div>
          </div>
          </div> 
{/* Mobile Whatsapp Ends */}



{/* Submit button */}
            <button
              type="submit"
              className="btn btn-success w-35 shadow btn-lg   rounded mt-5"
            >
              Publish
            </button>
{/* Submit button ends */}




          </form>
          {/* <!-- Register Form Ends --> */}

         

          
         
        </div>
      </div>
    </div>
    {/* <!-- Register Form Card Ends --> */}
  </div>
  );
}
