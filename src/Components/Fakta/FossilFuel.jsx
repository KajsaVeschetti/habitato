import React, { useState } from 'react'; //Importerar useState hook från React. 
import {Button, Collapse, Card} from 'react-bootstrap'; //Importerar Button, Collapse, Card från react-bootstrap
import fossilFuel from "./faktaImg/fossilFuel.jpg"; // Importerar fossilFuel-bild från faktaImg-mappen.

function FossilFuel () {
  //En ny state-variabel deklareras genom att kalla på useState hook. Den returnerar ett par värden som namnges.
  //Variabeln kallas openButton eftersom den ska hålla värdena för knappen. Knappens värde sätts till false eftersom
  //knappen inte är tryckt och därmed är innehållet dolt.
  //Den andra delen, som själv är en funktion, gör att knappens nuvarande värde kan uppdateras, dvs när knappen trycks 
  //öppnar det upp för att ytterligare innehåll visas.
  const [openButton, setOpenButton] = useState(false);

  //Gör så texten på knappen ändras från "Mer info" (före knappen trycks) till "Mindre info" (efter att knappen tryckts), och vice versa.
  const ButtonName=openButton?'Visa mindre':'Läs mer'


  return ( 
    <>
      {/* Bild, rubrik och text*/}
      <Card.Img className="px-lg-5 pb-5" variant="top" 
      src= {fossilFuel} fluid alt="Factories with smoke coming out of large chimneys"/>
      <Card.Title> Vad är fossila bränslen?</Card.Title>
      <Card.Text className="text-left pb-3">
         De fossila bränslen som vi idag använder skapades för miljontals år sedan av rester från döda djur 
         och växter. Resterna har under en lång process brutits ned och ombildats till exempelvis kol, naturgas 
         och olja. Ur dessa fossila bränslen utvinner vi energi som t ex används till att driva motorer, till 
         uppvärmning och för att skapa elektricitet. Vid förbränning av fossila bränslen släpps det ut farliga gaser
         i atmosfären, t ex koldioxid (CO2).</Card.Text>
      {/*Gör så att innehållet (rubriker, text plus video) döljs efter att knappen tryckts*/}
      <Collapse in={openButton}> 
       <div id="Collapse-fuel-content">
        {/*Innehåll med rubriker plus text samt inbäddad youtube-video som är responsive*/}
        <Card.Title> 
          Varför är fossila bränslen dåligt för klimatet?
        </Card.Title>
         <Card.Text className="text-left">
          Vår höga användning av fossila bränslen gör att koldioxidhalten i atmosfären hela tiden ökar.
          Förbränningen av fossila bränslen förstärker därför växthuseffekten, vilket gör att jordens värmebalans 
          rubbas. Temperaturen på jorden stiger och det får negativa konsekvenser för klimat och ekosystem. Även 
          hälso-och miljöfarliga ämnen släpps ut vid förbränning. Det leder till ökad miljöförstöring och att människors 
          hälsa påverkas negativt.
         </Card.Text>.
        <Card.Title>
          Vad kan vi göra?
        </Card.Title>
         <Card.Text className="text-left pb-3">
           Vår förbrukning av fossila bränslen sker i snabbare takt än det återskapas. Det är en icke-förnybar energikälla 
           som en dag kommer ta slut. Det är därför viktig att hitta hållbara alternativ. Världsnaturfonden menar att förnybar 
           energi, såsom exempelvis solkraft, vattenkraft och vindkraft, är miljövänliga alternativ till fossila bränslen. Det 
           beror på att med förnybar energi slipper vi föroreningar och farliga restprodukter, det är energikällor som aldrig 
           tar slut och de påverkar inte naturen negativt.
         </Card.Text>
        <p><strong>Vill du veta mer? Titta på en video om fossila bränslen.</strong></p>  
        <div className="embed-responsive embed-responsive-16by9 mb-4">
         <iframe title="Youtube-video about fossil fuel" 
         className="embed-responsive-item" width="560" height="315" 
         src="https://www.youtube-nocookie.com/embed/zaXBVYr9Ij0" frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
         </iframe>
        </div>
       </div>
      </Collapse>
      
      {/*Gör så att innehållet (rubriker, text plus video) blir synligt när knappen trycks*/}
      <Button variant="info" size="sm" block    
       onClick={() => setOpenButton(!openButton)}
       aria-controls="Collapse-fuel-content"
       aria-expanded={openButton}
       >{ButtonName}
      </Button>
  
   </>
 );
}

export default FossilFuel;
