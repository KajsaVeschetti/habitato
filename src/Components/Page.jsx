import React, {Component} from "react";
// import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Footer from "./Footer";
import Test from "./Quiz/Test";


class Page extends Component {
  
 

  render(){

    return(
     <div className="wrapper">
       <div className="contentWrap">
        <NavBar/>
        <Test/>


      </div>
        <Footer/>
      </div>
    );

  }
}

export default Page;
