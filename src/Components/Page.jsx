import React, {Component} from "react";
import NavBar from "./NavBar"
import Footer from "./Footer";
import Tips from "./Tips";
// import Comments from "./Comments";
import Quiz from "./Quiz";
// import Information from "./FaktaRutor";
import BarChart from "./Charts/CO2Emission";

import { Route, Switch } from "react-router-dom";

class Page extends Component {


  render(){
    return(
      <React.Fragment>
        <NavBar/>

        <Switch>
          <Route path="./Tips">
            <Tips />
          </Route>
        
          <Route path="./quiz">
            <Quiz />
          </Route>
        </Switch>

        <Footer/>
      </React.Fragment>
    );

  }
}

export default Page;