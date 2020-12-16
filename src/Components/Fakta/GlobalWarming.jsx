import React, { useState } from 'react';
import {Button, Collapse, Image, Container, Row, Col, Card} from 'react-bootstrap';
import globalWarming from "./faktaImg/globalWarming.jpg";

function GlobalWarming() {
  let [open, setOpen] = useState(false);

  const buttonName=open?'Läs mindre ':'Läs mer '

  return ( 
    <>
   <div className="text-center mb-5">
   <Image src={globalWarming}fluid rounded/>
   </div>

   <Card.Title>Vad menas med global uppvärmning?</Card.Title>
      <Card.Text className="text-left pb-3">Den förstärka växthuseffekten som leder till att upphettningen i atmosfären hela tiden ökar brukar kallas global uppvärmning. Den naturliga växthuseffekten, som gör att en del av värmen från solens strålar hålls kvar på jordytan via växthusgaser, är ett måste för att vi ska kunna leva på jorden. Utan den skull jorden vara en kall och livlös planet. Den förhöjda växthuseffekten är en följd av vår användning av fossila bränslen som gör att växthusgaserna ökar i sådan takt att balansen i det naturliga kretsloppet förändras. Följden blir att värmen hålls kvar längre på jordytan, vilket leder till att temperaturen höjs och klimatet förändras.</Card.Text>

      <Collapse in={open}> 
        <div id="warming-collapse-text">
        <Card.Title className="pt-2">Vilka konsekvenser får global uppvärmning?</Card.Title>
          <Card.Text className="text-left">Temperaturen stiger och klimatet förändras med allvarliga konsekvenser som följd: glaciärer smälter, havsnivåer höjs, extremare väder blir vanligare, tillgången till mat och friskt vatten minskar, djur och biologisk mångfald påverkas osv Det finns också en stor risk för att det i framtiden blir mer vanligt med klimatflyktingar, som tvingas fly på grund av översvämningar, torka och att skördar förstörs. Den global uppvärmning kommer därför påverka våra dagliga liv i allt större utsträckning, allt från försämrad världsekonomi till att förändrade levnadsvillkor.</Card.Text>.
        <Card.Title>Vad kan vi göra?</Card.Title>
        <Card.Text className="pb-5 text-left">Vi måste minska användningen av fossila bränslen, men också rent allmänt börja agera mer miljövänligt i vår vardag. Det är dags att välja väg för framtiden. Vi kan hjälpa till genom att arbeta för att minska utsläppen och genom att vi lära oss att leva mer klimatsmart; shoppa mindre, äta mer vegetariskt, välja hållbara energikällor, slänga mindre (både matvaror och prylar) osv.</Card.Text>
        </div>
      </Collapse>

      <Button variant="info" size="sm" block    
      onClick={() => setOpen(!open)}
      aria-controls="warming-collapse-text"
      aria-expanded={open}
    >{buttonName}
    </Button>
    
 </>


);
}


export default GlobalWarming; 