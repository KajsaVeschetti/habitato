import React,{useState} from 'react';

function ReadMore() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
Co2 är den kemiska formeln för Koldioxid. Koldioxid är en färg- och luktfri gas. 
Runt jorden, i vår atmosfär, finns det flera olika gaser, bland annat koldioxid. Men även metan, lustgas och andra så kallade växthusgaser. Växthusgaserna hjälper till att hålla jorden varm, utan den naturliga växthuseffekten skulle vår jord vara ungefär 30 grader kallare än vad den är idag.

När växthusgaserna ökar i atmosfären förstärks den naturliga växthuseffekten, vilket leder till att jordens medeltemperatur ökar. Det är den här temperaturökningen som kallas för global uppvärmning.
      </p>
  </div>
  const linkName=readMore?'Göm info ':'Läs mer om Co2 '
  return (
    <div className="App">
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && extraContent}
    </div>
  );
}

export default ReadMore;