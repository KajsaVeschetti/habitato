import React, { useState } from 'react';
import {Button, Collapse, Image, Card} from 'react-bootstrap';
import fossilFuel from "./faktaImg/fossilFuel.jpg"

function FossilFuel () {
  let [open, setOpen] = useState(false);

  const buttonName=open?'Läs mindre ':'Läs mer '


  return ( 
    <>
  <div className="text-center mb-5">
   <Image src={fossilFuel} fluid rounded/>
  </div>
     <Card.Title>Vad är fossila bränslen?</Card.Title>
     <Card.Text className="text-left pb-3"> De fossila bränslen som vi idag använder skapades för miljontals år sedan av rester från döda djur och växter. Resterna har under en lång process brutits ned och ombildats till exempelvis kol, naturgas och olja. Ur dessa fossila bränslen utvinner vi energi som t ex används till att driva motorer, till uppvärmning och för att skapa elektricitet. Vid förbränning av fossila bränslen släpps det ut farliga gaser i atmosfären, t ex koldioxid (CO2).</Card.Text>

      <Collapse in={open}> 
        <div id="fuel-collapse-text">
        <Card.Title className="pt-2"> Varför är fossila bränslen dåligt för klimatet?</Card.Title>
        <Card.Text className="text-left">Vår höga användning av fossila bränslen gör att koldioxidhalten i atmosfären hela tiden ökar. Förbränningen av fossila bränslen förstärker därför växthuseffekten, vilket gör att jordens värmebalans rubbas. Temperaturen på jorden stiger och det får negativa konsekvenser för klimat och ekosystem. Även hälso-och miljöfarliga ämnen släpps ut vid förbränning. Det leder till ökad miljöförstöring och att människors hälsa påverkas negativt.</Card.Text>.
        <Card.Title>Vad kan vi göra?</Card.Title>
        <Card.Text className="pb-5 text-left">Vår förbrukning av fossila bränslen sker i snabbare takt än det återskapas. Det är en icke-förnybar energikälla som en dag kommer ta slut. Det är därför viktig att hitta hållbara alternativ. Världsnaturfonden menar att förnybar energi, såsom exempelvis solkraft, vattenkraft och vindkraft, är miljövänliga alternativ till fossila bränslen. Det beror på att med förnybar energi slipper vi föroreningar och farliga restprodukter, det är energikällor som aldrig tar slut och de påverkar inte naturen negativt.</Card.Text>
        </div>
      </Collapse>

      <Button variant="info" size="sm" block    
      onClick={() => setOpen(!open)}
      aria-controls="fuel-collapse-text"
      aria-expanded={open}
      >{buttonName}
     </Button>
  </>
 );
}

export default FossilFuel;
