import React,{useState} from 'react'; //Importerar useState hook from React för att kunna använda useState i en funktion
import { Button } from 'react-bootstrap';

function ReadMore() { // False = Knappen är inte tryckt på = texten gömd
  const [readMore,setReadMore]=useState(false);

  const extraContent= 
  // Const att förvara text man vill visa/gömma. 
    <div className="extra">
      <p>
        Co2 är den kemiska formeln för Koldioxid. Koldioxid är en färg- och luktfri gas. 
        Runt jorden, i vår atmosfär, finns det flera olika gaser, bland annat koldioxid. Men även metan, lustgas och andra så kallade växthusgaser. Växthusgaserna hjälper till att hålla jorden varm, utan den naturliga växthuseffekten skulle vår jord vara ungefär 30 grader kallare än vad den är idag.

        När växthusgaserna ökar i atmosfären förstärks den naturliga växthuseffekten, vilket leder till att jordens medeltemperatur ökar. Det är den här temperaturökningen som kallas för global uppvärmning.
      </p>
  </div>
  
  const BtnName=
  // Const med de olika namnen som knappen ska toggla mellan. 
  readMore?'Göm info ':'Läs mer om Koldioxidsläpp '
  
  // Här renderas en knapp med ett onClick event som startar setReadMore funktionen
  // Readmore - Växlar mellan knappnamn beroende på vad den gör
  // btnname - namnen som knappen ska toggla mellan.
  //extraContent= min text som ska visat 
  return (
    <div className="App">
      <Button size="sm" variant="info"  onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button> {readMore && extraContent} 
    </div>
  );
}

export default ReadMore;

// Nippongases. (4 December). Koldioxid, Den livsviktiga gasen. https://nippongases.com/se-sv/gaserna/koldioxid?gclid=CjwKCAiAn7L-BRBbEiwAl9UtkO6J-_UMm9oTL6z5eZh9nyv5ZONSzluaLaSVszlaM1g3xiiPV6Qw-BoCnf4QAvD_BwE

// Pluralsight. (8 December). How to Implement a "Read More" Link in React. https://www.pluralsight.com/guides/how-to-implement-a-read-more-link-in-react