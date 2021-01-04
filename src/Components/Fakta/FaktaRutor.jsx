import React, { useState } from 'react';
import FossilFuel from './FossilFuel'; 
import GlobalWarming from './GlobalWarming'; 
import GlacierSize from './GlacierSize'; 
import SeaLevel from './SeaLevel'; 
import {Container, Card, Tabs, Tab} from 'react-bootstrap';


function Fakta (){
   const [keyTab, setKeyTab] = useState();
   return(
   <>
    <Container className="charts col-lg-9 col-xs-12 px-lg-5 pb-5">
      <h1>Fakta om klimatförändringar</h1> 
      <Card className="bg-light pb-3 px-lg-5">   
     <Card.Body>

      <Tabs 
       id="Fakta-tab"
       className="d-lg-flex d-block"
       onSelect={(key) => setKeyTab(key)}
       activeKey={keyTab}
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

     </Card.Body>
     </Card>
    </Container>
   </>

  );
}

       
export default Fakta;
