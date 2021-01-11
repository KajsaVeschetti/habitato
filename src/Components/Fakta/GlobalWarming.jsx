import React, { useState } from 'react'; //Importerar useState hook från React. 
import {Button, Collapse, Card} from 'react-bootstrap'; //Importerar Button, Collapse, Card från react-bootstrap
import globalWarming from "./faktaImg/globalWarming.jpg"; //Importerar globalWarming-bild från faktaImg-mappen.


function GlobalWarming() {
  {/*En ny state-variabel deklareras genom att kalla på useState hook. Den returnerar ett par värden som namngetts.
     Variabeln kallas openButton eftersom den håller värdena för knappen. Knappens värde sätts till false eftersom
     knappen inte är tryckt och därmed är innehållet dolt. SetOpenButton, som själv är en funktion, gör att knappens 
     nuvarande värde kan uppdateras, dvs när knappen trycks visas ytterligare innehåll.*/}
  const [openButton, setOpenButton] = useState(false);
 
  //Gör så texten på knappen ändras från "Läs mer" (före knappen trycks) till "Visa mindre" (efter att knappen tryckts), och vice versa.
  const buttonName=openButton?'Visa mindre':'Läs mer'

  return ( 
    <>
       {/* Bild, rubrik och text*/}  
       <Card.Img className="px-lg-5 pb-5" variant="top" 
        src={globalWarming} alt="Stark sol med moln"/>
       <Card.Title>
        <h3>Vad menas med global uppvärmning?</h3>
       </Card.Title>
       <Card.Text className="text-left pb-3">
         Den förstärka växthuseffekten, som gör att jordens medeltemperatur stiger, brukar kallas för global uppvärmning. 
         Till skillnad från den förstärka växthuseffekten är den naturliga växthuseffekten ett måste för att vi ska 
         kunna leva på jorden. En del av värmen från solens strålar hålls, via växthusgaser, kvar på jordytan och värmer
         upp vår planet. Utan den naturliga växthuseffekten skulle jorden vara kall och livlös. Problemet är den förhöjda 
         växthuseffekten som är en direkt följd av de utsläpp som vi människor står för, t.ex. via förbränning av fossila 
         bränslen, skogsavverkning och från jordbruk. Utsläppen gör att växthusgaserna ökar i sådan takt att det naturliga 
         kretsloppet förstärks. Följden blir att värmen hålls kvar längre på jordytan, vilket leder till att medeltemperaturen 
         stiger och klimatet förändras som en följd därav. Växthusgaser är således å ena sidan livsnödvändiga då de är själva 
         grundförutsättningen för allt liv på jorden, å andra sidan också farliga när mängden i atmosfären ökar i sådan takt 
         att den naturliga växthuseffekten förstärks.
       </Card.Text>
        {/*Gör så att innehållet (rubriker, text plus video) döljs efter att knappen tryckts*/}
       <Collapse in={openButton}> 
        <div id="Warming-collapse-content">
        {/*Innehåll med rubriker, text samt inbäddad youtube-video som är responsive*/}  
        <Card.Title>
          <h3>Vilka konsekvenser får global uppvärmning?</h3>
        </Card.Title>
        <Card.Text className="text-left pb-2">
          Temperaturen stiger och klimatet förändras med allvarliga konsekvenser som följd: glaciärer smälter, havsnivåer höjs, 
          extremare väder blir vanligare, tillgången till mat och friskt vatten minskar, djur och biologisk mångfald påverkas osv. 
          Det finns också en stor risk för att det i framtiden blir mer vanligt med klimatflyktingar som tvingas fly på grund av 
          översvämningar, torka och att skördar förstörs. Den global uppvärmning kommer därför påverka våra dagliga liv i allt större 
          utsträckning, allt från inverkan på världsekonomi till förändrade levnadsvillkor.
        </Card.Text>
        <Card.Title>
          <h3>Vad kan vi göra?</h3>
        </Card.Title>
        <Card.Text className="text-left pb-2">
          Utsläppen av växthusgaser behöver minska. Det kan exempelvis ske genom att fossila bränslen ersätts av miljövänligare 
          alternativ. Vi kan också påverka utsläppen av fossila bränslen genom att spara energi. Vi kan spara energi genom att 
          t.ex. sortera sopor, köra miljövänliga bilar, välja lågenergilampor och att använda kollektiva transportmedel, såsom 
          exempelvis bus och tåg. Hur tycker du att vi kan hjälpa till med att minska klimatförändringarna? Dela med dig av dina 
          bästa <a href="/Comments"> tips</a>.
        </Card.Text>
        <h4>Vill du veta mer? Titta på en video om global uppvärmning.</h4>
        <div className="embed-responsive embed-responsive-16by9 mb-4">
         <iframe title="Youtube-video about global warming" 
            className="embed-responsive-item" width="560" height="315" 
            src="https://www.youtube-nocookie.com/embed/Z_b2A-d5hGY" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
         </iframe>
        </div>
       </div>
      </Collapse>

      {/*Gör så att innehållet (rubriker, text plus video) blir synligt när knappen trycks*/}
      <Button variant="info" size="sm" block    
       onClick={() => setOpenButton(!openButton)}
       aria-controls="Warming-collapse-content"
       aria-expanded={openButton}
       >{buttonName}
      </Button> 
   </>
  );
}


export default GlobalWarming; 





//https://react-bootstrap.github.io/utilities/transitions/
//https://react-bootstrap.github.io/components/cards/
////https://getbootstrap.com/docs/4.0/utilities/embed/