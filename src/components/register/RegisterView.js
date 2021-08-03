import React from 'react'
import {Link} from 'react-router-dom';

 function RegisterView() {
    return (
        <div>
        {/* <!-- Register Form Card Starts --> */}
      <div className="container mb-5">
        <div
          className="card mx-auto mt-5 pb-3 b-shad"
          style={{ width: "25rem" }}
        >
          <div className="card-body">
            <h4 className="card-title">Register</h4>

            {/* <!-- Register Form Start --> */}
            <form
              className="needs-validation"
              autoComplete="off"
              
              noValidate
            >
              <div className="form-group">
                <label htmlFor="userName">Your name: </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Arya Raj"
                  id="userName"
                 
                 
                  required
                  minLength="5"
                />

                <div className="valid-feedback">
                  <i className="far text-success fa-thumbs-up"></i> OK
                </div>
                <div className="invalid-feedback">
                  <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                  Some error in your name.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="userEmail">Email: </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="abc@abc.com"
                  id="userEmail"
                  aria-describedby="emailHelp"
                 
                  required
                />

                <small id="emailHelp" className="form-text text-muted">
                  <i className="fas text-primary fa-info"></i> We'll never share
                  your email with anyone else.
                </small>
                <div className="valid-feedback">
                  <i className="far text-success fa-thumbs-up"></i> OK
                </div>
                <div className="invalid-feedback">
                  <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                  Some error in email.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="userPassword">Password: </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  name="password"
                  id="userPassword"
                  aria-describedby="passwordHelp"
                  
                
                  required
                  minLength="6"
                />
                <small id="passwordHelp" className="form-text text-muted">
                  <i className="fas text-primary fa-info"></i> Password must be
                  at least 6 characters.
                </small>
                <div className="valid-feedback">
                  <i className="far text-success fa-thumbs-up"></i> OK
                </div>
                <div className="invalid-feedback">
                  <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                  Some error in password.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="userPassword2">Password again: </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  name="password2"
                  id="userPassword2"
                  aria-describedby="passwordHelp2"
                 
                  required
                  minlength="6"
                />

                <small id="passwordHelp2" className="form-text text-muted">
                  <i className="fas text-primary fa-info"></i> Password must
                  match the above.
                </small>
                <div className="valid-feedback">
                  <i className="far text-success fa-thumbs-up"></i> OK
                </div>
                <div className="invalid-feedback">
                  <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                  Some error in re-type password.
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100 shadow btn-sm rounded"
              >
                Register
              </button>
            </form>
            {/* <!-- Register Form Ends --> */}

            {/* <!-- OR Seperator --> */}
            <hr className="hr-text" data-content="OR" />

            {/* <!-- Create account button --> */}
            <p className="text-center">
              Already have an account?
              <Link to="/login">
                Sign in <i className="fas fa-caret-right"></i>
              </Link>
            </p>

            <a href="#" className="btn btn-outline-success btn-sm w-100 mt-2">
              <i className="fab fa-google"></i> Sign in with Google
            </a>
            <a href="#" className="btn btn-outline-primary btn-sm w-100 mt-2">
              <i className="fab fa-facebook-square"></i> Sign in with Facebook
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Register Form Card Ends --> */}
            
        </div>
    )
}



export default RegisterView;