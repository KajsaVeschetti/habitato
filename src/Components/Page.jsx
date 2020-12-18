import React, {Component} from "react";
// import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Popa from "./Charts/kajsaTest"; 

// import Test from "./Quiz/Test";
import Kontakt from "./Kontakt";



class Page extends Component {
  
 

  render(){

    return(
     <div className="wrapper">
       <div className="contentWrap">
        <NavBar/>

        <Popa/> 
      </div>
     
        <Footer/>
      </div>
    );

  }
}

export default Page;
