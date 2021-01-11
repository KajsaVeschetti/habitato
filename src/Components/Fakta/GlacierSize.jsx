import React, { useState } from 'react'; //Importerar useState hook från React. 
import {Button, Collapse, Card} from 'react-bootstrap'; //Importerar Button, Collapse, Card från react-bootstrap
import glacierSize from "./faktaImg/glacierSize.jpg"; //Importerar glacierSize-bild från faktaImg-mappen.

function GlacierSize () {
  {/*En ny state-variabel deklareras genom att kalla på useState hook. Den returnerar ett par värden som namngetts.
     Variabeln kallas openButton eftersom den håller värdena för knappen. Knappens värde sätts till false eftersom
     knappen inte är tryckt och därmed är innehållet dolt. SetopenButton, som själv är en funktion, gör att knappens 
     nuvarande värde kan uppdateras, dvs när knappen trycks visas ytterligare innehåll.*/}
  const [openButton, setOpenButton] = useState(false);
  
 //Gör så texten på knappen ändras från "Läs mer" (före knappen trycks) till "Visa mindre" (efter att knappen tryckts), och vice versa.
  const buttonName=openButton?'Visa mindre':'Läs mer'


  return ( 
    <>
       {/* Bild, rubrik och text*/}
       <Card.Img className="px-lg-5 pb-5" variant="top" 
        src={glacierSize} alt="Glaciär i vatten"/>
       <Card.Title>
        <h3>Varför minskar glaciärerna i storlek?</h3>
       </Card.Title>
       <Card.Text className="pb-3 text-left">
         Ungefär 10 procent av jordens yta täcks av glaciärer, men de flesta återfinns på Antarktis och Grönland (del av havsområdet 
         Arktis). Glaciärer kan betraktas som världens största färskvattenreserv, men i takt med att jordens medeltemperatur stiger 
         så har glaciärernas storlek börjat minska i allt snabbare takt; under sommaren smälter mer av isen och mindre återbildas under 
         vintern. Denna process går allt snabbare och många forskare oroar sig för följderna då Arktis, jordens kylskåp, inte längre 
         är tillräckligt kallt. Det har blivit en ond spiral; glaciärisarna hjälper till att kyla jorden, men i takt med att de smälter 
         blir det svårare att hålla kylskåpet kallt. Vad händer om alla glaciär smälter?
       </Card.Text>
       {/*Gör så att innehållet (rubriker, text plus video) döljs efter att knappen tryckts*/}
       <Collapse in={openButton}>
        <div className="Glacier-collapse-content">
        {/*Innehåll med rubriker, text samt inbäddad youtube-video som är responsive*/} 
         <Card.Title>
          <h3>Vilka konsekvenserna får smältande glaciärer?</h3>
         </Card.Title>
         <Card.Text className="text-left pb-1">
          Om alla glaciärer smälter skulle havsnivån stiga med över 120 meter, men enbart ett par meters stigning skulle få stor påverkan. 
          Ett flertal kuststäder och stora delar av hela länder skulle hamna under havsytan, t ex New York och Bangladesh. Många platser 
          på jorden är också beroende av färskvatten från glaciärerna, bland annat länderna runt Himalaya och Anderna. De två främsta 
          konsekvenserna av att glaciärierna smälter är således att havsnivåerna höjs och att tillgången till färskvatten på sikt kommer 
          minska. Glaciärerna kommer ge ifrån sig mindre färskvatten eftersom deras storlek minskar. Detta gör oss mer sårbara eftersom 
          tillgången till färskvatten och ökade havsnivåer påverkar allt liv på jorden.
         </Card.Text> 
         <Card.Title>
          <h3>Vad kan vi göra?</h3>
         </Card.Title>
         <Card.Text className="text-left pb-2"> 
          Vi behöver minska utsläppen av växthusgaser, vilket vi alla har möjlighet hjälpa till med. Vi kan börja agera mer 
          miljövänligt i vår vardag. Vi kan lära oss leva klimatsmart; shoppa mindre, välja hållbara energikällor, äta mer vegetariskt, 
          slänga mindre (både matvaror och prylar) osv. Att vara klimatsmart innebär således att agera på ett som är positivt för 
          miljön och motverkar klimatförändringar. 
         </Card.Text>
         <h4>Vill du veta mer? Titta på en video om varför glaciärers storlek minskar.</h4>
          <div className="embed-responsive embed-responsive-16by9 mb-4">
           <iframe title="Youtube-video about glacier size" 
            className="embed-responsive-item" width="560" height="315" 
            src="https://www.youtube-nocookie.com/embed/WJgpDyP9ewQ" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
           </iframe>
          </div>
        </div>
       </Collapse>

     {/*Gör så att innehållet (rubriker, text plus video) blir synligt när knappen trycks*/}
     <Button variant="info" size="sm"  block  
       onClick={() => setOpenButton(!openButton)}
       aria-controls="Glacier-collapse-content"
       aria-expanded={openButton}
       >{buttonName}
     </Button>
    </>
 );
}
export default GlacierSize; 





//https://react-bootstrap.github.io/utilities/transitions/
//https://react-bootstrap.github.io/components/cards/
////https://getbootstrap.com/docs/4.0/utilities/embed/