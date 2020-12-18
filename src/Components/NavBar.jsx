import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router,
  Route, Switch, Redirect,
    Link } from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap';   
import Habitato1 from "../img/Habitato1.jpg";

import Quiz from "./Quiz/Quiz";
import Fakta from "./Fakta/FaktaRutor";
import AllCharts from "./Charts/AllCharts";
import CommentAdd from "./CommentAdd";   // changed from CommentGroup
import Kontakt from "./Kontakt";




class NavBar extends Component {

    render () {

    const logoStyle={
      width: "125px"
    }

    const linkStyle = {
       fontFamily: "Segoe UI Light",
       fontSize: "24px",
       textDecoration:"none",
       paddingTop: "25px",
       paddingRight:"50px",
       paddingLeft:"50px",
    
    }

        return(
            <div className="fixedHeader">
             <Router>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Link class="navbar-toggler border-0" to="index.html"><img src={Habitato1} style={logoStyle}  alt="Habitato logotyp"/></Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mx-auto text-left" >
                        <Link class="nav-link" style ={linkStyle} to="/Charts/AllCharts">
                            HEM 
                        </Link>
                        <Link class="nav-link" style={linkStyle} to="/Quiz">
                            QUIZ
                        </Link>
                    <Link class="navbar-brand d-none d-lg-block" to="/"><img src={Habitato1} style={logoStyle}  alt="Habitato logotyp"/></Link>
                        <Link class="nav-link" style={linkStyle} to="/CommentAdd">
                            TIPS 
                        </Link>
                        <Link class="nav-link" style={linkStyle} to="/Faktarutor">
                            FAKTA 
                        </Link>
            
                        </Nav>
            </Navbar.Collapse>
            </Navbar> 
            
       
        <Switch>
        <div class="mx-auto"> 
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
          <Route exact path="/Kontakt"component={Kontakt}>
            <Kontakt/>
          </Route>


          <Redirect from="/" exact to="/Charts/AllCharts"></Redirect>
          </div>
        </Switch>
        </Router>
            </div>
        );
    }
}

export default NavBar;

