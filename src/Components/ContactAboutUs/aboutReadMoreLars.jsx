import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ReadMoreLars() {                             // skapar funktionen ReadMoreLars
    const [readMore,setReadMore]=useState(false);     // togglar mellan att visa och gömma innehållet.
    
    const extraContent=                                 // Const som håller innehållet som ska visas eller gömmas
      <Card.Text className="conAboutPerson">
        Lars Karlsson är professor i Biologi och Etologi och intresserar sig mycket i natur, blommor och bin.
      </Card.Text>
    
    const BtnName=                                       // Håller texterna som knappen togglar mellan
    readMore?'Göm info ':'Om Lars '
                                                        // Nedan renderas en knapp med ett onClick event som startar setReadMore funktionen
                                                        // Readmore - Växlar mellan knappnamn beroende på vad den gör
                                                        // btnname - namnen som knappen ska toggla mellan.
                                                        //extraContent= min text som ska visat 
  return (
      <div className="conReadMoreBtn">
        <Button 
          block
          variant="info"  
          onClick={()=>{setReadMore(!readMore)}}>{BtnName}
        </Button> 
        {readMore && extraContent}
      </div>
    );
  }
  
  export default ReadMoreLars;      // exporterar funktionen ReadMoreLars