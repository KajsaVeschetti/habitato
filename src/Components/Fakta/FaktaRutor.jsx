import React, { Component } from 'react';
import FossilFuel from './FossilFuel'; 
import GlobalWarming from './GlobalWarming'; 
import GlacierSize from './GlacierSize'; 
import SeaLevel from './SeaLevel'; 
import {Container, Nav, Navbar, Card} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'; 

class Fakta extends Component {

   render() {
   const linkStyle={
   fontSize: "16x",
   fontFamily: "Quicksand",
   paddingLeft: "15px",
   paddingRight: "15px",
  }

   return(
   <>
   <Container id="test" className="col-lg-9 col-xs-12 px-lg-5 px-xs-2 pb-5 rounded">
    <h3 className="pt-5 pb-3">Fakta om klimatförändringar</h3> 
    <Card className="bg-light rounded pb-3">
   <Card.Body>
    <Router>
     <Navbar expand="lg" bg="light" variant="light">
       <Nav className="mx-auto">
         <Link class="nav-link" style={linkStyle} to="/FossilFuel">
         Fossila bränslen  
         </Link>
         <Link class="nav-link " style={linkStyle} to="/GlobalWarming" >
         Global uppvärmning 
         </Link>
         <Link class="nav-link " style={linkStyle} to="/GlacierSize"> 
         Glaciär storlek 
         </Link>
         <Link class="nav-link " style={linkStyle} to="/SeaLevel">
         Havsnivå 
         </Link>
        </Nav>
     </Navbar>
     <Switch>

     <div class="mx-auto">

              <Route exact path='/FossilFuel' component={FossilFuel}>
              <FossilFuel/>
              </Route> 
            
              <Route exact path='/GlobalWarming' component={GlobalWarming}>
              <GlobalWarming/>
              </Route> 
                
              <Route exact path='/GlacierSize' component={GlacierSize}>
              <GlacierSize/>
              </Route> 
               
              <Route exact path='/SeaLevel' component={SeaLevel}>
              <SeaLevel/>
              </Route> 
             <Redirect from="/" exact to="/FossilFuel"></Redirect>

         </div>
      </Switch>
    </Router> 
    </Card.Body>
   </Card>
   </Container>
       
</>
 );
 }
}
export default Fakta;
