import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ReadMoreAnn() {                                // skapar funktionen ReadMoreAnn
    const [readMore,setReadMore]=useState(false);       // togglar mellan att visa och gömma innehållet.
  
  
    const extraContent=                                 // Const som håller innehållet som ska visas eller gömmas
      <Card.Text className="conAboutPerson">
        Ann Linnson är forskare inom Vulkanologi och brinner för att hitta lösningar för att bevara jorden. 
      </Card.Text>
    
    const BtnName=                                      // Håller texterna som knappen togglar mellan
    readMore?'Göm info ':'Om Ann '
    

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
  
  export default ReadMoreAnn;                           // exporterar funktionen ReadMoreAnn