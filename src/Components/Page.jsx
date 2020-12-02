import React, {Component} from "react";
// import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Footer from "./Footer";
// import Tips from "./Tips";
// import Comments from "./Comments";
// import Quiz from "./Quiz";
// import Information from "./FaktaRutor";
// import BarChart from "./Charts/CO2Emission";



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
