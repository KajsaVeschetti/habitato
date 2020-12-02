import React from "react";
import {Card, CardDeck} from 'react-bootstrap';


const Fakta=()=>{
 
  let cardInfo=[
{ 
  title: "Vad är fossila bränslen?", 
  text:"Dagens fossila bränslen skapades för miljontals år sedan av resterna från döda djur och växter. Resterna bröts ned och ombildades till exempelvis kol, naturgas och olja. Ur dessa fossila bränslen utvinner vi idag energi som t ex används till att driva motorer, till uppvärmning och för att skapa elektricitet."
},

{
title: "Varför bör vi minska användningen av fossila bränslen?", 
text:"Vid förbränning av fossila bränslen släpps det ut farliga gaser såsom exempelvis kväveoxider och svaveloxider, och den totala koldioxidhalten i atmosfären ökar. Förbränning av fossila bränslen bidrar till att förstärka växthuseffekten vilket gör att jordens värmebalans rubbas. Det får negativa konsekvenser för klimat och ekosystem."
},

{
 title: "Vad kan vi göra?",
  text:"Fossila bränslen leder inte bara till klimatförändringar utan även till miljöförstöring och negativa hälsoeffekter. Vår förbrukning av fossila bränslen sker dessutom i snabbare takt än återskapandet. Det är en icke-förnybar energikälla, som en dag kommer ta slut. Det är därför viktig att hitta hållbara alternativ. Världsnaturfonden menar att förnybar energi, såsom exempelvis solkraft, vattenkraft och vindkraft, är en del av lösningen. Det beror på att med förnybar energi slipper vi föroreningar och farliga restprodukter, energikällan kan aldrig ta slut och påverkar inte naturen negativt."
},
  ];

  let renderCard = (card, index)=>
  {

  return (
   <CardDeck >
      <Card className="bg-light"key={index}  >
   <Card.Body>
     <Card.Title>{card.title}</Card.Title>
  <Card.Text class ="text-left ">{card.text}</Card.Text>
   </Card.Body>
   </Card >
   </CardDeck>
    );
   
  };

  return <div>{cardInfo.map(renderCard)}</div>


}
export default Fakta;
