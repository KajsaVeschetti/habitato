import React,{useState} from 'react';
import { Button } from 'react-bootstrap';


const LinkStyle = {
    fontFamily: "Quicksand",
    color:"#1F1F1F",
    paddingRight:"150px",
    paddingLeft:"150px",

  }
<<<<<<< HEAD
=======
  
  const extra ={
    width: "600px"
  }
>>>>>>> 0aa0dec3f4db2c7f1f8e29ebcb12bd4af34e96f1

  const BtnStyle = {
    fontFamily: "Quicksand",
    fontSize: "15px",
    color:"white",
    paddingRight:"150px",
    paddingLeft:"150px",

  }
  
  
function ReadMore() {
  const [readMore,setReadMore]=useState(false);
<<<<<<< HEAD
  const extraContent=<div>
      <p>
=======
  const extraContent=<div style={extra}>
      <p className="extra-content" >
>>>>>>> 0aa0dec3f4db2c7f1f8e29ebcb12bd4af34e96f1
Co2 är den kemiska formeln för Koldioxid. Koldioxid är en färg- och luktfri gas. 
Runt jorden, i vår atmosfär, finns det flera olika gaser, bland annat koldioxid. Men även metan, lustgas och andra så kallade växthusgaser. Växthusgaserna hjälper till att hålla jorden varm, utan den naturliga växthuseffekten skulle vår jord vara ungefär 30 grader kallare än vad den är idag.

När växthusgaserna ökar i atmosfären förstärks den naturliga växthuseffekten, vilket leder till att jordens medeltemperatur ökar. Det är den här temperaturökningen som kallas för global uppvärmning.
      </p>
  </div>
  const BtnName=readMore?'Göm info ':'Läs mer om Co2 '
  return (
    <div className="App">
<<<<<<< HEAD

      <Button style={BtnStyle}  size="sm" variant="info" className="read-more-link" onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button>
=======
      <a style={LinkStyle}  variant="info" className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
>>>>>>> 0aa0dec3f4db2c7f1f8e29ebcb12bd4af34e96f1
      {readMore && extraContent}
    </div>
  );
}

export default ReadMore;