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
      <p>Den globala uppvärmningen gör så att vattnet på jorden blir varmare och när vatten värms utvidgas det. Den höjda temperaturen leder också till att glaciärer och polarisar smälter. Dessa två kombinationerna gör så att havsnivån höjs.Följder av en höjd havsnivå kan till exempel vara översvämningar och att stora delar av kustområden försvinner.</p>
  </div>
  
  const BtnName=
  readMore?'Göm info ':'Läs mer om havsnivå '
  
  return (
    <div className="App">
      <Button style={BtnStyle}  size="sm" variant="info"  onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button> {readMore && extraContent}
    </div>
  );
}

export default ReadMore;