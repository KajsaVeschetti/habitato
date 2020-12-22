import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router,
  Route, Switch, Redirect,
  NavLink, Link } from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap';   
import Habitato1 from "../img/Habitato1.jpg";

import Quiz from "./Quiz/Quiz";
import Fakta from "./Fakta/FaktaRutor";
import AllCharts from "./Charts/AllCharts";
import Comments from "./Comments/Comments";  
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

    // test
    const activeLink = {
      fontWeight: "bold",
      color: "#17A2B8",
      textDecoration: "underline",
      textDecorationColor: "#17A2B8",
      textDecorationStyle: "double"
    }

        return(
            <div className="fixedHeader">
             <Router>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="pr-4">
              {/* <Link class="navbar-toggler border-0" to="index.html"><img src={Habitato1} style={logoStyle}  alt="Habitato logotyp"/></Link> */}
              <NavLink class="navbar-toggler border-0" to="/"><img src={Habitato1} style={logoStyle}  alt="Habitato logotyp"/></NavLink>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mx-auto text-left" >
                  <NavLink className="nav-link" 
                        style={linkStyle} 
                        to="/Charts/AllCharts" 
                        activeStyle={activeLink}>
                            HEM 
                  </NavLink>
                  <NavLink className="nav-link" 
                        style={linkStyle} 
                        to="/Quiz" 
                        activeStyle={activeLink}>
                            QUIZ
                  </NavLink>
                  <Link className="navbar-brand d-none d-lg-block" 
                        to="/"><img 
                        src={Habitato1} 
                        style={logoStyle}  
                        alt="Habitato logotyp"/>
                  </Link>
                  <NavLink className="nav-link" 
                        style={linkStyle} 
                        to="/Comments" 
                        activeStyle={activeLink}>
                            TIPS 
                  </NavLink>
                  <NavLink className="nav-link" 
                        style={linkStyle} 
                        to="/Faktarutor" 
                        activeStyle={activeLink}>
                            FAKTA 
                  </NavLink>
                           {/* <Link className="nav-link" style={linkStyle} to="/Charts/AllCharts">
                            HEM 
                        </Link>
                        <Link className="nav-link" style={linkStyle} to="/Quiz">
                            QUIZ
                        </Link>
                    <Link className="navbar-brand d-none d-lg-block" to="/"><img src={Habitato1} style={logoStyle}  alt="Habitato logotyp"/></Link>
                        <Link className="nav-link" style={linkStyle} to="/CommentAdd">
                            TIPS 
                        </Link>
                        <Link className="nav-link" style={linkStyle} to="/Faktarutor">
                            FAKTA 
                        </Link> */}
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
          <Route exact path="/Kontakt"component={Kontakt}>
            <Kontakt/>
          </Route>


          <Redirect from="/" exact to="/Charts/AllCharts"></Redirect>
        
        </Switch>
        </Router>
          </div>
        );
    }
}

export default NavBar;




// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md
