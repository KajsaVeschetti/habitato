import React, { useState } from 'react'; //Importerar useState hook från React.
import {Button, Collapse, Card} from 'react-bootstrap'; //Importerar Button, Collapse, Card från react-bootstrap
import seaLevel from "./faktaImg/seaLevel.jpg"; //Importerar seaLevel-bild från faktaImg-mappen.


function SeaLevel() {
{/*En ny state-variabel deklareras genom att kalla på useState hook. Den returnerar ett par värden som namngetts.
   Variabeln kallas openButton eftersom den håller värdena för knappen. Knappens värde sätts till false eftersom
   knappen inte är tryckt och därmed är innehållet dolt.SetOpenButton, som själv är en funktion, gör att knappens 
   nuvarande värde kan uppdateras, dvs när knappen trycks visas ytterligare innehåll.*/}
  let [openButton, setOpenButton] = useState(false);

  //Gör så texten på knappen ändras från "Läs mer" (före knappen trycks) till "Visa mindre" (efter att knappen tryckts), och vice versa.
  const buttonName=openButton?'Visa mindre':'Läs mer'

  return ( 
     <>
       {/* Bild, rubrik och text*/}  
       <Card.Img className="px-lg-5 pb-5" variant="top" 
        src={seaLevel} alt="Närbild av havsyta"/>
       <Card.Title>
         <h3>Varför stiger havsnivåerna?</h3>
       </Card.Title>
       <Card.Text className="text-left pb-3">
         Havsnivåerna stiger som följd av det allt varmare klimatet. När den globala temperaturen stiger smälter glaciärer 
         och inlandsisar samtidigt som vattnets volym ökar av värmen. Sedan mitten av 1800-talet har vattennivån stigit med
         cirka 20 centimeter och den förväntade ökningen under detta århundrande sker med dubbla hastigheten, dvs ifall 
         temperaturökningen kan begränsas till under två grader. Om den globala uppvärmningen överstiger två grader kommer 
         det få större effekt på klimatet. Havsnivåerna kommer stiga ännu snabbare.
       </Card.Text>
       {/*Gör så att innehållet (rubriker, text plus video) döljs efter att knappen tryckts*/}
       <Collapse in={openButton}> 
        <div id="Sea-collapse-content">
         {/*Innehåll med rubriker, text samt inbäddad youtube-video som är responsive*/}   
         <Card.Title>
          <h3>Vilka konsekvenser får stigande havsnivåer?</h3>
         </Card.Title>
         <Card.Text className="text-left">
           Stigande havsnivåer gör att vi oftare kommer drabbas av kraftfulla stormar och orkaner, risken för ras och jordskred ökar, 
           fler stora tsunamis och antalet översvämningar ökar dramatiskt. Detta kommer framförallt att påverka kuststäder och länder 
           som ligger nära havsnivån, t ex London och Nederländerna. Även ekosystemet kommer att förändras som en följd av att 
           havsnivåerna stiger. Det beror på att den naturliga livsmiljön påverkas och att vissa områden kan till och med kan bli 
           obeboeliga, och tvinga både människor och djur på flykt. 
         </Card.Text>
         <Card.Title>
          <h3>Vad kan vi göra?</h3>
         </Card.Title>
         <Card.Text className="text-left ">
           För att kunna mildra effekterna är det viktigt att vi minskar utsläppen av växthusgaser, men också att vi arbetar för mer 
           klimatanpassade samhällen. Det kan t ex innebära att vi bygger med utgångspunkt från att havsnivåerna kommer att fortsätta 
           stiga. Det gör oss mindre sårbara för konsekvenserna av stigande havsnivåer, men det påverkar inte klimatförändringarna. Enda 
           sättet att minska klimatförändringarna är att vi blir mer klimatsmarta i stort som smått. Vilka klimatsmarta val gör du? 
           Lämna gärna ett <a href= "./Comments">tips</a>.</Card.Text>
         <h4>Vill du veta mer? Titta på en video om varför havsnivån stiger.</h4>
         <div className="embed-responsive embed-responsive-16by9">
          <iframe title="Youtube-video about sea level" 
           className="embed-responsive-item" width="560" height="315" 
           src="https://www.youtube-nocookie.com/embed/QH-KYmRAzOA" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowFullScreen>
          </iframe>
         </div>
         <p className="pt-3 mb-4">Testa dina klimatkunskaper med ett <a href="/quiz">quiz</a>. Hur många rätt får du?</p>
        </div>
       </Collapse>
       
       {/*Gör så att innehållet (rubriker, text plus video) blir synligt när knappen trycks*/} 
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



//https://react-bootstrap.github.io/utilities/transitions/
//https://react-bootstrap.github.io/components/cards/
////https://getbootstrap.com/docs/4.0/utilities/embed/