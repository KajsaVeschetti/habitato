import React, {Component} from "react";
// import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ReadMoreButton from "./btn"

// import Test from "./Quiz/Test";
import Kontakt from "./ContactAboutUs/Kontakt";



class Page extends Component {
  
 

  render(){

    return(
     <div className="wrapper">
       <div className="contentWrap">
        <NavBar/>
   
      </div>
     
        <Footer/>
      </div>
    );

  }
}

export default Page;
