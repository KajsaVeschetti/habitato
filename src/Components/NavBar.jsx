import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router,
  Route, Switch, Redirect,
    Link } from "react-router-dom";
import Habitato1 from "../img/Habitato1.jpg";
import Tips from "./Tips";
import Quiz from "./Quiz";
import Fakta from "./FaktaRutor";
import AllCharts from "./Charts/AllCharts";
import CommentAdd from "./CommentAdd";   // changed from CommentGroup



class NavBar extends Component {
    state = {

    };



    render () {

    const logoStyle={
      width: "125px"
    }

    const linkStyle = {
       fontFamily: "Segoe UI Light",
       fontSize: "24px",
       color:"#5f5f5f",
       textDecoration:"none",
       paddingTop: "25px",
       paddingRight:"50px",
       paddingLeft:"50px",
    
    }

        return(
            <div className="fixedHeader">
            <Router>
            <nav class="navbar navbar-expand-lg navbar-light mx-auto">

            <Link class="navbar-toggler border-0" to="index.html"><img src={Habitato1} style={logoStyle}  alt="Habitato logotyp"/></Link>
            <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-link" style={linkStyle}>
                        <Link class="nav-link" to="/Charts/AllCharts">
                            HEM 
                        </Link>
                    </li>
                    <li class="nav-link" style={linkStyle}>
                        <Link class="nav-link" to="/Quiz">
                            QUIZ
                        </Link>
                    </li>
                    <li>
                    <Link class="navbar-brand" to="/"><img src={Habitato1} style={logoStyle}  alt="Habitato logotyp"/></Link>
                    </li>
                    <li class="nav-link" style={linkStyle}>
                        <Link class="nav-link" to="/CommentAdd">
                            TIPS
                        </Link>
                    </li>
                    <li class="nav-link" style={linkStyle}>
                        <Link class="nav-link" to="/Faktarutor">
                            FAKTA 
                        </Link>
                    </li>
                </ul>
             </div>
            </nav>
            
       
        <Switch>
            
        <Route exact path="/Charts/AllCharts"component={AllCharts}>
            <AllCharts/>
          </Route>
        <Route exact path="/Quiz"component={Quiz}>
            <Quiz/>
          </Route>
        <Route exact path="/CommentAdd"component={CommentAdd} >
        <CommentAdd/>
          </Route>
        <Route exact path="/FaktaRutor"component={Fakta} >
          <Fakta/>
          </Route>

          <Redirect from="/" exact to="/Charts/AllCharts"></Redirect>
          
        </Switch>
        </Router>
            </div>
        );
    }
}

export default NavBar;

