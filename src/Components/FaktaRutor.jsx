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
fontSize: "16x",
fontFamily: "Quicksand",
color:"#5f5f5f",
textDecoration:"none",
paddingLeft: "10px",
paddingRight: "10px",
}

 return(
   <>
<Container className="col-xl-9 fluid=sm text-center mb-5 bg-white">
  <h3 className="p-4">Fakta om klimatförändringar</h3>
<Card border="white"className="bg-white pl-5 pr-5 pb-4">
    <Card.Body>  
<Router>
<Navbar collapseOnSelect expand="xl" bg="white" variant="light">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto font-weight-normal mb-3">
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
