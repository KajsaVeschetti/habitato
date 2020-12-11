import React, {Component} from "react";
// import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Footer from "./Footer";



class Page extends Component {
 

  render(){

    return(
     <div className="wrapper">
        <NavBar/>
      
        <Footer/>
      </div>
    );

  }
}

export default Page;
