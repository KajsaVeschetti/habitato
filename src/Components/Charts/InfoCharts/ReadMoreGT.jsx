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
      <p>Global uppvärmning, eller växthuseffekten som det också kallas påverkar jordens temperatur. Det är när jordens medeltemperatur ökar som man brukar tala om global temperatur. Utan den naturliga växthuseffekten skulle inte vi människor kunna leva på jorden, problemet är den ökade växthuseffekten, den så kallade global uppvärmningen som vi människor bidrar till. De tre största orsakerna till utsläpp av växthusgaser är: utsläpp från fossila bränslen, från skogsavverkning och från jordbruket.
      </p>
  </div>
  
  const BtnName=
  readMore?'Göm info ':'Läs mer om Global temperatur '
  
  return (
    <div className="App">
      <Button style={BtnStyle}  size="sm" variant="info"  onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button> {readMore && extraContent}
    </div>
  );
}

export default ReadMore;