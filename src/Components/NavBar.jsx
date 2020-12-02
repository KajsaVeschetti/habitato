import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router,
  Route, Switch,
    Link } from "react-router-dom";
import Habitato1 from "../img/Habitato1.jpg";
import Tips from "./Tips";
import Quiz from "./Quiz";
import Footer from "./Footer";


class NavBar extends Component {
    state = {

    };



    render () {

    const logoStyle={
      width: "200px"
    }

    const linkStyle = {
       fontFamily: "Roboto",
       fontSize: "20px",
       color:"#5f5f5f",
       textDecoration:"none",
       paddingTop: "55px",
       paddingRight:"50px",
       paddingLeft:"50px",
    }

        return(
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
                    <li class="nav-link active" style={linkStyle}>
                        <Link class="nav-link" to="/">
                            Hem <span class="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li class="nav-link" style={linkStyle}>
                        <Link class="nav-link" to="/Quiz">
                            Quiz
                        </Link>
                    </li>
                    <li>
                    <Link class="navbar-brand" to="/"><img src={Habitato1} style={logoStyle}  alt="Habitato logotyp"/></Link>
                    </li>
                    <li class="nav-link" style={linkStyle}>
                        <Link class="nav-link" to="/Tips">
                            Tips
                        </Link>
                    </li>
                    <li class="nav-link" style={linkStyle}>
                        <Link class="nav-link" to="/Faktarutor">
                            Fakta
                        </Link>
                    </li>
                </ul>
             </div>
            </nav>
            
       
        <Switch>
        <Route exact path="/Quiz"component={Quiz}>
            <Quiz/>
          </Route>
        <Route exact path="/Tips"component={Tips} >
          <Tips/>
          </Route>
          
        </Switch>
            </Router>
        );
    }
}

export default NavBar;

