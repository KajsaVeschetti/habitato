import React,{useState} from 'react';
import { Button } from 'react-bootstrap';


function ReadMore() {
  const [readMore,setReadMore]=useState(false);

  // Create a state variable to store the present state that conveys information about the expanded or collapsed state of the link
  const extraContent=
    <div className="extra">
      <p>Den globala uppvärmningen gör så att vattnet på jorden blir varmare och när vatten värms utvidgas det. Den höjda temperaturen leder också till att glaciärer och polarisar smälter. Dessa två kombinationerna gör så att havsnivån höjs.Följder av en höjd havsnivå kan till exempel vara översvämningar och att stora delar av kustområden försvinner.</p>
  </div>

// The second constant conditionally stores the name of the link. Your link should change its name dynamically depending on what it's doing at the moment. 
  
  const BtnName=
  readMore?'Göm info ':'Läs mer om havsnivå '

  // render an <a> with an onClick event and fire a function on triggering this event. Inside this function or the event handler, toggle the readMore state and output the
  
  return (
    <div className="App">
      <Button size="sm" variant="info"  onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button> {readMore && extraContent}
    </div>
  );
}

export default ReadMore;

// havet.nu. (4 December 2020). VÄRT ATT VETA. Klimat i förändring. https://www.havet.nu/klimat-i-forandring