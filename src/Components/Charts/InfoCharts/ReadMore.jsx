import React,{useState} from 'react';
import { Button } from 'react-bootstrap';


const LinkStyle = {
    fontFamily: "Quicksand",
    color:"#1F1F1F",
    paddingRight:"150px",
    paddingLeft:"150px",

  }

  
  const extra ={
    width: "600px",
    fontFamily: "Quicksand",

  }


  const BtnStyle = {
    fontFamily: "Quicksand",
    fontSize: "15px",
    color:"white",
    paddingRight:"150px",
    paddingLeft:"150px",

  }
  
  
function ReadMore() {
  const [readMore,setReadMore]=useState(false);


  const extraContent=
  <div style={extra}>
      <p >

Co2 är den kemiska formeln för Koldioxid. Koldioxid är en färg- och luktfri gas. 
Runt jorden, i vår atmosfär, finns det flera olika gaser, bland annat koldioxid. Men även metan, lustgas och andra så kallade växthusgaser. Växthusgaserna hjälper till att hålla jorden varm, utan den naturliga växthuseffekten skulle vår jord vara ungefär 30 grader kallare än vad den är idag.

När växthusgaserna ökar i atmosfären förstärks den naturliga växthuseffekten, vilket leder till att jordens medeltemperatur ökar. Det är den här temperaturökningen som kallas för global uppvärmning.
      </p>
  </div>
  const BtnName=readMore?'Göm info ':'Läs mer om Co2 '
  return (
    <div className="App">

      <Button style={BtnStyle}  size="sm" variant="info"  onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button>

      {readMore && extraContent}
    </div>
  );
}

export default ReadMore;