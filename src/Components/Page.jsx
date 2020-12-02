import React, {Component} from "react";
// import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Footer from "./Footer";
import AllCharts from "./Charts/AllCharts";
import { faKickstarter } from "@fortawesome/free-brands-svg-icons";
import Fakta from "./FaktaRutor";




class Page extends Component {


  render(){
    return(

      <React.Fragment>
    
        <NavBar/>
  
        <Footer/>
      </React.Fragment>
    );

  }
}

export default Page;
