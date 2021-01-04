import React, { useState } from 'react';
import {Button, Collapse, Card} from 'react-bootstrap';
import seaLevel from "./faktaImg/seaLevel.jpg";


function SeaLevel() {
  let [openButton, setOpenButton] = useState(false);

  const buttonName=openButton?'Visa mindre':'Läs mer'

  return ( 
    <>
  
    <Card.Img className="px-lg-5 pb-5" variant="top" src={seaLevel} fluid alt="Close up of a sea"/>
    <Card.Title>Varför stiger havsnivåerna?</Card.Title>
    <Card.Text className="text-left pb-3">Havsnivåerna stiger som följd av det allt varmare klimatet. När den globala temperaturen stiger smälter glaciärer och inlandsisar samtidigt som vattnets volym ökar av värmen. Sedan mitten av 1800-talet har vattennivån stigit med cirka 20 centimeter och den förväntade ökningen under detta århundrande sker med dubbla hastigheten, dvs ifall temperaturökningen kan begränsas till under två grader. Om den globala uppvärmningen överstiger två grader kommer det få större effekt på klimatet. Havsnivåerna kommer stiga ännu snabbare.</Card.Text>

      <Collapse in={openButton}> 
        <div id="Sea-collapse-content">
        <Card.Title>Vilka konsekvenser får stigande havsnivåer? </Card.Title>
        <Card.Text className="text-left">Stigande havsnivåer gör att vi oftare kommer drabbas av kraftfulla stormar och orkaner, risken för ras och jordskred ökar, fler stora tsunamis och antalet översvämningar ökar dramatiskt. Detta kommer framförallt att påverka kuststäder och länder som ligger nära havsnivån, t ex London och Nederländerna. Även ekosystemet kommer att förändras som en följd av att havsnivåerna stiger. Det beror på att den naturliga livsmiljön påverkas och att vissa områden till och med kan bli obeboeliga, och tvinga både människor och djur på flykt. </Card.Text>.
        <Card.Title>Vad kan vi göra?</Card.Title>
        <Card.Text className="text-left pb-2">För att kunna mildra effekterna är det viktigt att vi minskar utsläppen av växthusgaser, men också att vi arbetar för mer klimatanpassade samhällen. Det kan t ex innebära att vi bygger med utgångspunkt från att havsnivåerna kommer att fortsätta stiga. Det gör oss mindre sårbara för konsekvenserna av ökade havsnivåer, men det påverkar inte klimatförändringarna. Enda sättet att minska klimatförändringarna är att vi blir mer klimatsmarta i stort som smått. Vilka klimatsmarta val gör du? Lämna gärna ett <a href= "./Comments">tips</a>.</Card.Text>
        <h4>Vill du veta mer? Titta på en video om varför havsnivån stiger.</h4>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="Youtube-video about sea level" className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/QH-KYmRAzOA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p className="pt-3 mb-4">Testa dina klimatkunskaper med ett <a href="/quiz">quiz</a>. Hur många rätt får du?</p>
        </div>
      </Collapse>

      <Button variant="info" size="sm" block    
      onClick={() => setOpenButton(!openButton)}
      aria-controls="Sea-collapse-content"
      aria-expanded={openButton}
      >{buttonName}
      </Button>

  </>

 );
}


export default SeaLevel; 