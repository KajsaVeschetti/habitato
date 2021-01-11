import React,{useState} from 'react'; //Importerar useState hook from React för att kunna använda useState i en funktion
import { Button, Container } from 'react-bootstrap';


function Facit() {
  const [readMore,setReadMore]=useState(false); // False = Knappen är inte tryckt på = texten gömd  // Const att förvara text man vill visa/gömma. 
  const extraContent=<div> 
    
    <Container className="bg-light">
<p className="extra-content">
                <div className="row row-cols-1">

                    <div className="col pt-4"><h3>Hur många jordklot skulle behövas om alla levde som medelsvensken?</h3>
                <b>Rätt svar: 3 jordklot</b>
                <p>Om man skulle dela upp jordens produktiva yta på antalet människor på jorden, så skulle var och en av oss få 1,8 globala hektar till vårt förfogande. Vi svenskar gör ett genomsnittligt ekologiskt fotavtryck på 5,9 globala hektar och ligger på 13e plats på listan över länder med störst fotavtryck per person. Om resten av världens befolkning skulle göra lika stora avtryck, behöver vi drygt 3 jordklot i stället för det enda vi har. Vi överutnytttjar naturens grundläggande resurser. Ett överuttag som underminerar våra barnbarns och hela vår civilisations framtid. (Källa: WWF)</p>
                </div>
                    <div className="col pt-4"><h3>Hur mycket släpper en flygresa t.o.r Thailand ut per person?</h3> 
                <b>Rätt svar: 5 700 kg koldioxid</b>
                <p>Enligt Internationella klimatpanelen står flyget globalt sett för omkring två procent av de totala utsläppen av koldioxid. Flyget är det transportmedel som ökar snabbast över hela världen. Inte minst genom den globala turistindustrin. Räknar man även in effekterna av andra växthusgaser främst vattenånga och kväveoxider på hög höjd samt påverkan från kondensstrimmor blir flygets totala klimatpåverkan ungefär dubbelt så stor. Flygets totala klimatpåverkan är fortfarande osäker. (Källa: Transportstyrelsen, Atmosfair )
                </p>
                </div>
                    <div className="col pt-4"><h3>Vad är konsekvensen av den förhöjda växthuseffekten?</h3>
                 <b>Rätt svar: Temperaturen stiger</b>
                 <p>Konsekvensen av den förstärka växthuseffekten är att temperaturen stiger. Det är en direkt följd av de utsläpp som vi människor orsakar, t ex via förbränning av fossila bränslen, skogsavverkning och från jordbruk. Den förhöjda växthuseffekten beror på att växthusgaserna i atmosfären ökar vilket leder till att temperaturen stiger, och klimatet förändras som en följd därav. (Källa: Naturskyddsföreningen).</p>
                 </div> 
                    <div className="col pt-4"><h3>Förnybar energi ses som miljövänligt alternativ till fossila bränslen. Vad av följande är en förnybar energikälla?</h3>
                 <b>Rätt svar: Solkraft</b>
                 <p>Solkraft är en förnybar energikälla som, till skillnad från kolkraft och kärnkraft, inte ger upphov till föroreningar eller farliga restprodukter. Det är en oändlig källa till energi som inte sliter på naturen, och medverkar därmed inte heller till den globala uppvärmningen. (Källa: WWF).</p>
                 </div>  
                    <div className="col pt-4"><h3>Vad är den vanligaste innehållsförteckningen för palmolja?</h3>
                <b>Rätt svar: Vegitabilisk fett</b>
                <p>Palmoljeodlingarna sker framförallt på mark från skövlad regnskog. De senaste 100 åren har mer än hälften av den tropiska regnskogen försvunnit, samtidigt som palmoljeodlingarna har tredubblats under de senaste 30 åren. Idag kan allt från chips och glass till tvål och smink innehålla palmolja. Den pågående skövlingen av världens skogar har stor klimatpåverkan och kan liknas vid förbränningen av fossila bränslen (olja, kol och fossilgas). (Källa: WWF).</p>
                </div>
                <div className="col pt-4"><h3>Hur mycket skulle havsnivån stiga om alla glaciärer smälter?</h3>
                 <b>Rätt svar: 120 meter</b>
                 <p>Ifall alla glaciärer smälter skulle havsnivån stiga med 120 meter. Redan ett par meters stigning skulle drabba flera kuststäder och länder hårt. Forskare räknar med att havsnivån kommer att fortsätta stiga vilket bland annat innebära ökat antal översvämningar och jordskred. (Källa: SO-rummet).</p>
                 </div> 
                    <div className="col pt-4"><h3>Vilket av följande är klimatsmart?</h3>
                 <b>Rätt svar: Shoppa mindre</b>
                 <p>Att vara klimatsmart innebär att agera på ett som främjar miljön och motverkar klimatförändringar. Det är därför klimatsmart att shoppa mindre. Det beror på att industrierna som tillverkar det vi köper står för en stor del av utsläppen av växthusgaser. Om vi konsumerade mindre nya prylar, nya kläder osv skulle det påverka miljön och klimatet positivt. Maten vi köper står för en tredjedel av hushållens klimatpåverkan, och störst andel utsläpp kommer från köttproduktionen. Utsläppen skulle minska med upp till hälften om fler valde att äta vegomat. Det är inte heller klimatsmart att flyga. Trots det så flyger vi allt mer, vilket gjorde att klimatpåverkan från flygen steg med 43 procent mellan åren 1990 - 2017. Utsläppen motsvarar ungefär 1 ton per person och år, och sammantaget släpper flygplan ut 74 000 gånger mer koldioxid än tåg. (Källor: Naturskyddsföreningen, Naturvårdsverket, WWF).</p>
                 </div> 
                    <div className="col pt-4"><h3>Varför stiger havsnivåerna??</h3>
                 <b>Rätt svar: Varmare klimat</b>
                 <p>Havsnivåerna stiger som följd av ett allt varmare klimat. När den globala temperaturen stiger smälter glaciärer och polarisar samtidigt som vattnets volym ökar av värmen. Sedan 1880 har havsnivån stigit med 20 cm, men enligt en rapport från IPCC kan havsnivån under det här århundrandet stiga med upp till en meter. (Källa: Havet.nu).</p>
                 </div>
                 <div className="col pt-4"><h3>Vad brukar betraktas som jordens kylskåp?</h3>
                 <b>Rätt svar: Arktis</b>
                 <p>Arktis ligger i nordpolen medan Antarktis ligger i sydpolen. Båda platserna är dock täckta av is men enligt Johan Rockström, professor i jordsystemsforskning, är det allt fler forskare som betraktar just Arktis som nyckeln till ett stabilt klimat på jorden. Arktis fungerar som jordens kylskåp genom att 90 procent av värmen från solstrålarna återförs ut i atmosfären, vilket hjälper till att reglera klimatet. Att glaciärisen minskar i Arktis får också effekt i Antarktis då det även påskyndar issmältningen där. Det är en följd av att golfströmmen påverkas av värmecirkulationen i norra Atlanten. (Källor: Havet.nu, Vetenskapsradion - Sveriges Radio).</p>
                 </div>
                    <div className="col pt-4"><h3>Vilket av följande länder släpper ut mest koldioxid per invånare?</h3> 
                <b>Rätt svar: Finland</b>
                <p>Sverige skulle ligga betydligt högre upp på rankinglistan om vi i utgick från konsumtion istället för produktion. Det mesta i vår livsstil – vad vi äter, klär oss i, möblerar med, förflyttar oss med, snackar i, twittrar, zappar, facebookar, googlar och skriver på – är tillverkat utomlands. Främst i utvecklingsländer som Kina och Indien vilka indirekt får stå för våra utsläpp. (Källa: CDIAK – US department of Energy´s Carbon Dioxide Information Analysis Center)</p> 
                </div>
                </div>
      </p>
      </Container>
  </div>
  
    // Const med de olika namnen som knappen ska toggla mellan. 
  const BtnName=readMore?'Göm facit ':'Visa frågor och de rätta svaren'

    // Här renderas en knapp med ett onClick event som startar setReadMore funktionen
  // Readmore - Växlar mellan knappnamn beroende på vad den gör
  // btnname - namnen som knappen ska toggla mellan.
  //extraContent= min text som ska visat 
  return (
    <div className="App">
      <Button variant="info" size="sm" onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button>
      {readMore && extraContent}
    </div>
  );
}


export default Facit;

// Klimataktion. (26 November 2020). Testa dina klimatkunskaper, samla på våra frågekort. https://klimataktion.se/samarbete/testa-dina-klimatkunskaper-samla-pa-vara-fragekort/
