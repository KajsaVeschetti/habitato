import React, { useState } from 'react'; //Importerar useState hook från React. 
import {Button, Collapse, Card} from 'react-bootstrap'; //Importerar Button, Collapse och Card från react-bootstrap
import fossilFuel from "./faktaImg/fossilFuel.jpg"; //Importerar fossilFuel-bild från faktaImg-mappen.

function FossilFuel () {
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
        src= {fossilFuel} alt="Fabriker med rök som kommer ut ur stora skorstenar"/>
       <Card.Title> 
        <h3>Vad är fossila bränslen?</h3>
       </Card.Title>
       <Card.Text className="text-left pb-3">
         De fossila bränslen som vi idag använder skapades för miljontals år sedan av rester från döda djur 
         och växter. Resterna har under en lång process brutits ned och ombildats till exempelvis kol, naturgas 
         och olja. Ur dessa fossila bränslen utvinner vi energi som bland annat används till att driva motorer, 
         till uppvärmning och för att skapa elektricitet. Vid produktion och förbränning av fossila bränslen släpps 
         det ut farliga gaser i atmosfären, t.ex. koldioxid (CO<sub>2</sub>), metan och lustgas.
       </Card.Text>
       {/*Gör så att innehållet (rubriker, text plus video) döljs efter att knappen tryckts*/}
        <Collapse in={openButton}> 
        <div className="Collapse-fuel-content">
        {/*Innehåll med rubriker, text samt inbäddad youtube-video som är responsive*/}
        <Card.Title>
        <h3> Varför är fossila bränslen dåligt för klimatet?</h3> 
        </Card.Title>
        <Card.Text className="text-left">
          Vår höga användning av fossila bränslen gör att koldioxidhalten i atmosfären hela tiden ökar. Det förstärker 
          växthuseffekten, vilket gör att jordens värmebalans rubbas. För att kompensera för denna ojämnvikt ökar
          medeltemperaturen på jorden. När temperaturen stiger får det negativa konsekvenser för klimat och ekosystem. 
          Även miljö-och hälsofarliga ämnen släpps ut vid förbränning, t.ex. svaveloxid och kväveoxider. Det leder till 
          ökad miljöförstöring och att människors hälsa påverkas negativt.
        </Card.Text>.
        <Card.Title>
         <h3> Vad kan vi göra?</h3>
        </Card.Title>
        <Card.Text className="text-left pb-3">
          Vår förbrukning av fossila bränslen sker i snabbare takt än det återskapas. Det är en icke-förnybar energikälla 
          som en dag kommer ta slut. Det är därför viktig att hitta hållbara alternativ. Världsnaturfonden menar att förnybar 
          energi, såsom exempelvis solkraft, vattenkraft och vindkraft, är miljövänliga alternativ till fossila bränslen. Det 
          beror på att med förnybar energi slipper vi föroreningar och farliga restprodukter, det sliter inte på naturen  och 
          är energikällor som aldrig tar slut.
        </Card.Text>
        <h4>Vill du veta mer? Titta på en video om fossila bränslen.</h4>  
        <div className="embed-responsive embed-responsive-16by9 mb-4">
         <iframe title="Youtube-video about fossil fuel" 
           className="embed-responsive-item" width="560" height="315" 
           src="https://www.youtube-nocookie.com/embed/zaXBVYr9Ij0" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
         </iframe>
        </div>
       </div>
      </Collapse>
       
      {/*Gör så att innehållet (rubriker, text plus video) blir synligt när knappen trycks*/}      
      <Button variant="info" size="sm" block    
       onClick={() => setOpenButton(!openButton)}
       aria-controls="Collapse-fuel-content"
       aria-expanded={openButton}
       >{buttonName}
      </Button>        
   </>
 );
}

export default FossilFuel;


//React Bootstrap Transitions https://react-bootstrap.github.io/utilities/transitions/
//https://react-bootstrap.github.io/components/cards/
//https://getbootstrap.com/docs/4.0/utilities/embed/