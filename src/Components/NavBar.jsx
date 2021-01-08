import React, {Component} from "react";

import {  BrowserRouter as Router,
  Route, Switch, Redirect,
  NavLink} from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap';   
import Habitato1 from "../img/Habitato1.jpg";

import Quiz from "./Quiz/Quiz";
import Fakta from "./Fakta/FaktaRutor";
import AllCharts from "./Charts/AllCharts";
import Comments from "./Comments/Comments";  
import Kontakt from "./ContactAboutUs/Kontakt";





class NavBar extends Component {

    render () {
 
        return(
             <Router>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="pr-4">
              <NavLink class="navbar-toggler border-0" to="/"><img src={Habitato1} className="navLogo" alt="Habitato logotyp"/></NavLink>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mx-auto text-left" >

           <NavLink className="navLink" 
             to="/Charts/AllCharts" activeClassName="activeLink">
              HEM
           </NavLink>
           <NavLink className="navLink" 
              to="/Quiz" activeClassName="activeLink">
               QUIZ
          </NavLink>
          <NavLink className="navbar-brand d-none d-lg-block" 
            to="/"><img src={Habitato1} alt="Habitato logo" className="navLogo"/>
          </NavLink>
          <NavLink className="navLink" 
            to="/Comments" activeClassName="activeLink">
             TIPS
         </NavLink>
         <NavLink className="navLink" 
            to="/Faktarutor" activeClassName="activeLink">
             FAKTA
         </NavLink>

              </Nav>
            </Navbar.Collapse>
            </Navbar> 
            
       
        <Switch>
       
        <Route exact path="/Charts/AllCharts"component={AllCharts}>
            <AllCharts/>
          </Route>
        <Route exact path="/Quiz"component={Quiz}>
            <Quiz/>
          </Route>
        <Route exact path="/Comments"component={Comments} >
        <Comments/>
          </Route>
        <Route exact path="/FaktaRutor"component={Fakta} >
          <Fakta/>
          </Route>
          <Route exact path="/ContactAboutUs/Kontakt"component={Kontakt}>
            <Kontakt/>
          </Route>


          <Redirect from="/" exact to="/Charts/AllCharts"></Redirect>
        
        </Switch>
        </Router>
        );
    }
}

export default NavBar;




// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md
