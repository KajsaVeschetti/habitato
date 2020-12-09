import React,{useState} from 'react';

function ReadMore() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
      Global uppvärmning, eller växthuseffekten som det också kallas påverkar jordens temperatur. Det är när jordens medeltemperatur ökar som man brukar tala om global temperatur. Utan den naturliga växthuseffekten skulle inte vi människor kunna leva på jorden, problemet är den ökade växthuseffekten, den så kallade global uppvärmningen som vi människor bidrar till. De tre största orsakerna till utsläpp av växthusgaser är: utsläpp från fossila bränslen, från skogsavverkning och från jordbruket.     </p>
  </div>
  const linkName=readMore?'Göm info ':'Läs mer om Global temperatur '
  return (
    <div className="App">
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && extraContent}
    </div>
  );
}

export default ReadMore;