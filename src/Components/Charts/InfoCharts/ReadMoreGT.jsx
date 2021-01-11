import React,{useState} from 'react';
import { Button } from 'react-bootstrap';

function ReadMore() {
  const [readMore,setReadMore]=useState(false);


  const extraContent=
    <div className="extra">
      <p>Global uppvärmning, eller växthuseffekten som det också kallas påverkar jordens temperatur. Det är när jordens medeltemperatur ökar som man brukar tala om global temperatur. Utan den naturliga växthuseffekten skulle inte vi människor kunna leva på jorden, problemet är den ökade växthuseffekten, den så kallade global uppvärmningen som vi människor bidrar till. De tre största orsakerna till utsläpp av växthusgaser är: utsläpp från fossila bränslen, från skogsavverkning och från jordbruket.
      </p>
  </div>
  
  const BtnName=
  readMore?'Göm info ':'Läs mer om Global temperatur '
  
  return (
    <div className="App">
      <Button size="sm" variant="info"  onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button> {readMore && extraContent}
    </div>
  );
}

export default ReadMore;

// Naturskyddsföreningen. (4 December 2020). Faktablad: Växthuseffekten. https://www.naturskyddsforeningen.se/skola/energifallet/faktablad-vaxthuseffekten?gclid=CjwKCAiAn7L-BRBbEiwAl9UtkNPhhQxA1CFw4rOqYxg2Cal-RDjAwAtUtUUgVHvOEFALwpOHODFk5RoCxxwQAvD_BwE