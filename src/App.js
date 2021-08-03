import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomepageContainer from './components/Homepage/HomepageContainer';
import NavbarContainer from './components/layaut/Navbar/NavbarContainer';
import Footer from './components/layaut/Footer';


import LoginContainer from './components/login/LoginContainer';
import RegisterContainer from './components/register/RegisterContainer';
import PostYourAdsContainer from './components/PostYourAds/PostYourAdsContainer';
import AllAdsContainer from './components/AllAds/AlladsContainer';
import MyaccountContainer from './components/MyAccount/MyaccountContainer';
import DetailsContainer from './components/Details/DetailsContainer';

function App() {
  return (
    <>

<Router>


    <NavbarContainer/>
     
     <Route exact path="/" component={HomepageContainer}  />
     <Route exact path="/login" component={LoginContainer}/>
     <Route exact path="/register" component={RegisterContainer}/>
     <Route exact path="/post-ads" component={PostYourAdsContainer}/>
     <Route exact path="/all-ads" component={AllAdsContainer}/>
     <Route exact path="/myaccount" component={MyaccountContainer} />
     <Route exact path="/details" component={DetailsContainer} />

       
     <Footer/>
    


  </Router>
    </>
  );
}

export default App;
