import React, { Component } from 'react';
import FossilFuel from './FossilFuel'; 
import GlobalWarming from './GlobalWarming'; 
import GlacierSize from './GlacierSize'; 
import SeaLevel from './SeaLevel'; 
import {Container, Nav, Navbar, Card} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'; 

class Fakta extends Component {

   render() {

   return(
   <>
   <Container className="faktaContainer col-lg-9 col-xs-12 px-lg-5 pb-5 rounded ">
    <h1 className="pt-5 pb-2">Fakta om klimatförändringar</h1> 
    <Card className="bg-light pb-3">
   <Card.Body>
    <Router>
     <Navbar expand="lg" bg="light" variant="light">        
       <Nav className="mx-auto"> 
         <NavLink className="faktaLink py-2" to="/FossilFuel" activeStyle={{color: "#5cb85c"}}>
         Fossila bränslen  
         </NavLink>
         <NavLink className="faktaLink py-2" to="/GlobalWarming" activeStyle={{color:"#5cb85c"}}>
         Global uppvärmning 
         </NavLink>
         <NavLink className="faktaLink py-2" to="/GlacierSize" activeStyle={{color: "#5cb85c"}}>
         Glaciär storlek 
         </NavLink>
         <NavLink className="faktaLink py-2" to="/SeaLevel" activeStyle={{color:"#5cb85c"}}>
         Havsnivå 
         </NavLink>
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
