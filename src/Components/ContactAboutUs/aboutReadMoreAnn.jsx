import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ReadMoreAnn() {
    const [readMore,setReadMore]=useState(false);
  
  
    const extraContent=
      <Card.Text className="conAboutPerson">
        Ann Linnson är forskare inom Vulkanologi och brinner för att hitta lösningar för att bevara jorden. 
      </Card.Text>
    
    const BtnName=
    readMore?'Göm info ':'Om Ann '
    
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
  
  export default ReadMoreAnn;