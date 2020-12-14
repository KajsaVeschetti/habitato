import React, { Component } from 'react';
import FossilFuel from './Fakta/FossilFuel'; 
import GlobalWarming from './Fakta/GlobalWarming'; 
import GlacierSize from './Fakta/GlacierSize'; 
import SeaLevel from './Fakta/SeaLevel'; 
import {Container, Card, Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'; 

class Fakta extends Component {

render() {
const linkStyle={
fontSize: "16px",
fontFamily: "Quicksand",
color:"#5f5f5f",
textDecoration:"none",
paddingLeft: "15px",
paddingRight: "15px",
}

 return(
   <>
<Container className="col-xl-6 fluid=sm text-center mb-5 mt-4 bg-white">
  <h3 className="p-4">Fakta om klimatförändringar</h3>
<Card border="light"className="bg-light pl-4 pr-4 pb-4">
    <Card.Body>  
<Router>
<Navbar collapseOnSelect expand="xl" bg="light" variant="light">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto font-weight-normal">
<Link class="nav-link" style={linkStyle} to="/FossilFuel">
Fossilt bränsle  
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
  </Navbar.Collapse>
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
