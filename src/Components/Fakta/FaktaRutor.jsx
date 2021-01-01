//import React, { Component } from 'react';
import React, { useState } from 'react';
import FossilFuel from './FossilFuel'; 
import GlobalWarming from './GlobalWarming'; 
import GlacierSize from './GlacierSize'; 
import SeaLevel from './SeaLevel'; 
import {Container, Nav, Navbar, Card, Tabs, Tab} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'; 

function Fakta (){
//class Fakta extends Component {
   const [keyTab, setKeyTab] = useState();
  // render() {

   return(
   <>
   <Container className="charts col-lg-9 col-xs-12 px-lg-5 pb-5">
    <h1>Fakta om klimatförändringar</h1> 
    <Card className="bg-light pb-3  px-lg-5">
   <Card.Body>

  <Tabs 
    id="Fakta-tab"
    className="d-lg-flex d-block"
    activeKey={keyTab}
    onSelect={(key) => setKeyTab(key)}
  >
    <Tab eventKey ="Fossilt bränsle" title="Fossilt bränsle">
      <div className="mt-5">
        <FossilFuel/>
      </div>
    </Tab>
    <Tab eventKey="Global uppvärmning" title="Global uppvärmning">
    <div className="mt-5">
        <GlobalWarming/>
      </div> 
    </Tab>
    <Tab eventKey="Glaciärstorlek" title="Glaciärstorlek">
    <div className="mt-5">
        <GlacierSize/>
      </div>
    </Tab>
    <Tab eventKey="Havsnivåer" title="Havsnivåer">
    <div className="mt-5">
        <SeaLevel/>
      </div>  
    </Tab>
    </Tabs>








{/*

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

*/}
    </Card.Body>
   </Card>
   </Container>
</>
   );
}

       
{/*</>
 );
 }
}*/}
export default Fakta;
