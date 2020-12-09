import React,{useState} from 'react';

function ReadMore() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
      Glaciär är stora isblock. Glaciärer finns på olika ställen på jorden. Den arktiska isen som täcker havet runt Nordpolen är en glaciär som minskar i storlek allt snabbare. Den globala uppvärmningen bidrar till att mer is smälter bort under sommaren och att mindre ny is bildas på vintern. 
Det är en stor risk att all is i Arktis kommer att smälta bort innan år 2100. Forskarna är oroliga för hur resten av jorden kommer att påverkas när all is är borta, eftersom det ofta sägs att Arktis fungerar som jordens kylskåp. Vit is reflekterar solljuset, till skillnad från ett mörkt hav som tar upp solenergi och blir varmare.      </p>
  </div>
  const linkName=readMore?'Göm info ':'Läs mer om Glaciärstorlek '
  return (
    <div className="App">
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && extraContent}
    </div>
  );
}

export default ReadMore;