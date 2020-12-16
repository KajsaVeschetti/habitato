import React,{useState} from 'react';
import { Button } from 'react-bootstrap';


const LinkStyle = {
    fontFamily: "Quicksand",
    color:"#1F1F1F",
    paddingRight:"150px",
    paddingLeft:"150px",
  }

  const extra = {
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
      <p>
      Glaciär är stora isblock. Glaciärer finns på olika ställen på jorden. Den arktiska isen som täcker havet runt Nordpolen är en glaciär som minskar i storlek allt snabbare. Den globala uppvärmningen bidrar till att mer is smälter bort under sommaren och att mindre ny is bildas på vintern. 
      Det är en stor risk att all is i Arktis kommer att smälta bort innan år 2100. Forskarna är oroliga för hur resten av jorden kommer att påverkas när all is är borta, eftersom det ofta sägs att Arktis fungerar som jordens kylskåp. Vit is reflekterar solljuset, till skillnad från ett mörkt hav som tar upp solenergi och blir varmare
      </p>
  </div>
  
  const BtnName=
  readMore?'Göm info ':'Läs mer om Glasiärstorlek '
  
  return (
    <div className="App">
      <Button style={BtnStyle}  size="sm" variant="info"  onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button> {readMore && extraContent}
    </div>
  );
}

export default ReadMore;