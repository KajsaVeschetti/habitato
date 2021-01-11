import React, { useState } from 'react'; //Importerar useState hook från React.
import {Container, Card, Tabs, Tab} from 'react-bootstrap'; //Importerar Container, Card, Tabs och Tab från react-bootstrap
import FossilFuel from './FossilFuel'; //Importerar FossilFuel från mappen Faktarutor
import GlobalWarming from './GlobalWarming'; //Importerar GlobalWarming från mappen Faktarutor
import GlacierSize from './GlacierSize'; //Importerar GlacierSiza från mappen Faktarutor
import SeaLevel from './SeaLevel'; //Importerar SeaLevel från mappen Faktarutor


function Fakta (){
  {/*En ny state-variabel deklareras genom att kalla på useState hook. Den returnerar ett par värden som namngetts.
     Variabeln kallas keyTab eftersom den håller värdena för flikarna. Flikens värde sätts till "Fossilt bränsle"
     eftersom det visar vad som är själva utgångsläget. SetKeyTab, som själv är en funktion, gör att flikarnas 
     nuvarande värde uppdateras.*/}

   const [keyTab, setKeyTab] = useState();
   return(
   <>
     {/*Container och Card skapar via bootstrap rutorna som håller innehållet*/}
     <Container className="charts col-lg-9 col-xs-12 px-lg-5 pb-5">
       <h1>Fakta om klimatförändringar</h1>
      <Card className="bg-light pb-3 px-lg-5">   
      <Card.Body>

     {/*När man trycker på namngiven flik ändras innehållet så det överenstämmer med titeln (nav med flikar). Flikarna är responsiva*/}
     
     <Tabs      
       className="d-lg-flex d-block"
       activeKey={keyTab}
       onSelect={(k) => setKeyTab(k)} 
      >
      <Tab eventKey ="Fossilt bränsle" title="Fossilt bränsle" tabClassName="tabitem1" >
        <div className="mt-5">
        <FossilFuel/>
        </div>
      </Tab>
      <Tab eventKey="Global uppvärmning" title="Global uppvärmning" tabClassName="tabitem2">
       <div className="mt-5">
        <GlobalWarming/>
       </div> 
      </Tab>
      <Tab eventKey="Glaciärstorlek" title="Glaciärstorlek" tabClassName="tabitem3">
       <div className="mt-5">
        <GlacierSize/>
       </div>
      </Tab>
      <Tab eventKey="Havsnivå" title="Havsnivå" tabClassName="tabitem4">
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



//https://react-bootstrap.github.io/components/tabs/
//https://react-bootstrap.github.io/components/cards/
