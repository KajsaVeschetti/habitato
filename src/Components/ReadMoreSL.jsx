import React,{useState} from 'react';

function ReadMore() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
      Den globala uppvärmningen gör så att vattnet på jorden blir varmare och när vatten värms utvidgas det. Den höjda temperaturen leder också till att glaciärer och polarisar smälter. Dessa två kombinationerna gör så att havsnivån höjs.
Följder av en höjd havsnivå kan till exempel vara översvämningar och att stora delar av kustområden försvinner.       </p>
  </div>
  const linkName=readMore?'Göm info ':'Läs mer om Havsnivå '
  return (
    <div className="App">
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && extraContent}
    </div>
  );
}

export default ReadMore;