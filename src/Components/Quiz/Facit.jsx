import React,{useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const BtnStyle = {
  fontFamily: "Quicksand",
  fontSize: "15px",
  color:"#1F1F1F",
}


function Facit() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
    <Container className="bg-light">
<p className="extra-content">
                <div class="row row-cols-2">

                    <div class="col"><h3>Hur många jordklot skulle behövas om alla levde som medelsvensken?</h3>
                <b>Rätt svar: 3 jordklot</b>
                <p>Om man skulle dela upp jordens produktiva yta på antalet människor på jorden, så skulle var och en av oss få 1,8 globala hektar till vårt förfogande. Vi svenskar gör ett genomsnittligt ekologiskt fotavtryck på 5,9 globala hektar och ligger på 13e plats på listan över länder med störst fotavtryck per person. Om resten av världens befolkning skulle göra lika stora avtryck, behöver vi drygt 3 jordklot i stället för det enda vi har. Vi överutnytttjar naturens grundläggande resurser. Ett överuttag som underminerar våra barnbarns och hela vår civilisations framtid. (Källa WWF)</p>
                </div>
                    <div class="col"><h2>Hur mycket släpper en flygresa t.o.r Thailand ut per person?</h2> 
                <b>Rätt svar: 5 700 kg koldioxid</b>
                <p>Enligt Internationella klimatpanelen står flyget globalt sett för omkring två procent av de totala utsläppen av koldioxid. Flyget är det transportmedel som ökar snabbast över hela världen. Inte minst genom den globala turistindustrin. Räknar man även in effekterna av andra växthusgaser främst vattenånga och kväveoxider på hög höjd samt påverkan från kondensstrimmor blir flygets totala klimatpåverkan ungefär dubbelt så stor. Flygets totala klimatpåverkan är fortfarande osäker. (Källa Transportstyrelsen, Atmosfair )
                </p>
                </div>
                    <div class="col"><h2>Vad är den vanligaste innehållsförteckningen för palmolja?</h2>
                <b>Rätt svar: Vegitabilisk fett</b>
                <p>Palmoljeodlingarna sker framförallt på mark från skövlad regnskog. De senaste 100 åren har mer än hälften av den tropiska regnskogen försvunnit, samtidigt som palmoljeodlingarna har tredubblats under de senaste 30 åren. Idag kan allt från chips och glass till tvål och smink innehålla palmolja. Den pågående skövlingen av världens skogar har stor klimatpåverkan och kan liknas vid förbränningen av fossila bränslen (olja, kol och fossilgas). (Källa: WWF).</p>
                </div>
                    <div class="col"><h2>Vilket av följande länder släpper ut mest koldioxid per invånare?</h2> 
                <b>Rätt svar: Finland</b>
                <p>Sverige skulle ligga betydligt högre upp på rankinglistan om vi i utgick från konsumtion istället för produktion. Det mesta i vår livsstil – vad vi äter, klär oss i, möblerar med, förflyttar oss med, snackar i, twittrar, zappar, facebookar, googlar och skriver på – är tillverkat utomlands. Främst i utvecklingsländer som Kina och Indien vilka indirekt får stå för våra utsläpp. (Källa CDIAK – US department of Energy´s Carbon Dioxide Information Analysis Center)</p> 
                </div>
                </div>
      </p>
      </Container>
  </div>
  const BtnName=readMore?'Göm facit ':'Visa frågor och de rätta svaren'
  return (
    <div className="App">
      <Button style={BtnStyle} variant="info" size="sm" onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button>
      {readMore && extraContent}
    </div>
  );
}


export default Facit;