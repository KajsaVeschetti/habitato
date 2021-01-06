import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ReadMoreKarl() {
    const [readMore,setReadMore]=useState(false);
  
  
    const extraContent=
      <Card.Text className="conAboutPerson">
        Karl Larsson är professor i Fysik och Geovetenskap, att förstå jorden ligger honom varmt om hjärtat. 
      </Card.Text>
    
    const BtnName=
    readMore?'Göm info ':'Om Karl '
    
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
  
  export default ReadMoreKarl;