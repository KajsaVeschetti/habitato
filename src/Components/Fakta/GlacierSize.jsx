import React, { useState } from 'react';
import {Button, Collapse, Image, Card} from 'react-bootstrap';
import glacierSize from "./faktaImg/glacierSize.jpg";

function GlacierSize () {
  let [openButton, setOpenButton] = useState(false);

  const buttonName=openButton?'Mer info':'Mindre info'

  return ( 
    <>
   <div className="text-center mb-5">
   <Image src={glacierSize}fluid rounded/>
   </div>
     <Card.Title>Varför minskar glaciärerna i storlek?</Card.Title>
      <Card.Text className="pb-3 text-left">Ungefär 10 procent av jordens yta täcks av glaciärer, men de flesta återfinns i Antarktis och på Grönland. Glaciärerna kan betraktas som världens största sötvattensreserv, men i takt med att jordens medeltemperatur ökar så har glaciärerna börjat smälta i allt snabbare takt; under sommaren smälter mer av isen och mindre återbildas under vintern. Det gör att glaciärernas storlek minskar. Denna process går allt snabbare och många forskare oroar sig för följderna då jordens kylskåp inte längre är tillräckligt kallt, och all is slutligen har smält. </Card.Text>

      <Collapse in={openButton}> 
        <div id="glacier-collapse-text">
        <Card.Title className="pt-2">Vilka konsekvenserna får smältande glaciärer?</Card.Title>
        <Card.Text className="text-left"> De två främsta konsekvenserna av att glaciärisen smälter är dels att havsnivåerna höjs, dels att färskvattnet minskar. Det gör oss mer sårbara eftersom tillgången till vatten och ökade havsnivåer påverkar allt liv på jorden. Om alla glaciärer smälte skulle havsnivån stiga med över 120 meter. Det skulle drabba många kuststäder och hela länder som då hamnar under havsytan, t ex New York och Bangladesh. Många platser på jorden är också beroende av färskvattnet från glaciärer, bland annat länderna runt Himalaya och Anderna.</Card.Text>.
        <Card.Title>Vad kan vi göra?</Card.Title>
        <Card.Text className="p-2 text-left">Vi måste minska användningen av fossila bränslen, men också rent allmänt börja agera mer miljövänligt i vår vardag. Det är dags att välja väg för framtiden. Vi kan hjälpa till genom att arbeta för att minska utsläppen och genom att vi lära oss att leva mer klimatsmart; shoppa mindre, äta mer vegetariskt, välja hållbara energikällor, slänga mindre (både matvaror och prylar) osv.</Card.Text>
          <h4>Vill du veta mer? Titta på en video om varför glaciärers storlek minskar.</h4>
          <div className="embed-responsive embed-responsive-16by9 mb-4">
          <iframe title="Youtube-video about glacier size" className="embed-responsive-item" width="560" height="315" src="https://www.youtube-nocookie.com/embed/WJgpDyP9ewQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </Collapse>

      <Button variant="info" size="sm" block    
      onClick={() => setOpenButton(!openButton)}
      aria-controls="glacier-collapse-text"
      aria-expanded={openButton}
     >{buttonName}
     </Button>
  
 </>
 );
}
export default GlacierSize; 