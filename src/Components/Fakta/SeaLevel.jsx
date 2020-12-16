import React, { useState } from 'react';
import {Button, Collapse, Image, Container, Row, Col, Card} from 'react-bootstrap';
import seaLevel from "./faktaImg/seaLevel.jpg";


function SeaLevel() {
  let [open, setOpen] = useState(false);

  const buttonName=open?'Läs mindre ':'Läs mer '

  return ( 
    <>
<div className="text-center mb-5">
   <Image src={seaLevel}fluid rounded/>
   </div>

<Card.Title>Varför stiger havsnivåerna?</Card.Title>
      <Card.Text className="text-left pb-3">Havsnivåerna stiger som följd av det allt varmare klimatet. När den globala temperaturen stiger smälter glaciärer och inlandsisar samtidigt som vattnets volym ökar av värmen. Sedan mitten av 1800-talet har vattennivån stigit med cirka 20 centimeter och den förväntade ökningen under detta århundrande sker med dubbla hastigheten, dvs ifall temperaturökningen kan begränsas till under två grader. Om den globala uppvärmningen överstiger två grader kommer det få större effekt på klimatet. Havsnivåerna kommer stiga ännu snabbare.</Card.Text>

      <Collapse in={open}> 
        <div id="sea-collapse-text">
        <Card.Title className="pt-2">Vilka konsekvenser får stigande havsnivåer? </Card.Title>
          <Card.Text className="text-left">Stigande havsnivåer gör att vi oftare kommer drabbas av kraftfulla stormar och orkaner, risken för ras och jordskred ökar, fler stora tsunamis och antalet översvämningar ökar dramatiskt. Detta kommer framförallt att påverka kuststäder och länder som ligger nära havsnivån, t ex London och Nederländerna. Även ekosystemet kommer att förändras som en följd av att havsnivåerna stiger. Det beror på att den naturliga livsmiljön påverkas och att vissa områden till och med kan bli obeboeliga, och tvinga både människor och djur på flykt. </Card.Text>.
        <Card.Title>Vad kan vi göra?</Card.Title>
        <Card.Text className="pb-5 text-left">För att kunna mildra effekterna är det viktigt att vi minskar utsläppen av växthusgaser, men också att vi arbetar för mer klimatanpassade samhällen. Det kan t ex innebära att vi bygger med utgångspunkt från att havsnivåerna kommer att fortsätta stiga. Det gör oss mindre sårbara för konsekvenserna av ökade havsnivåer, men det påverkar inte klimatförändringarna. Enda sättet att minska klimatförändringarna är att vi blir mer klimatsmarta i stort som smått. </Card.Text>
        </div>
      </Collapse>

      <Button variant="info" size="sm" block    
      onClick={() => setOpen(!open)}
      aria-controls="sea-collapse-text"
      aria-expanded={open}
    >{buttonName}
    </Button>
    
 </>


);
}


export default SeaLevel; 