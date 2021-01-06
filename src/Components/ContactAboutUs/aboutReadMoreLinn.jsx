import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ReadMoreLinn() {
    const [readMore,setReadMore]=useState(false);
  
  
    const extraContent=
      <Card.Text className="conAboutPerson">
        Linn Annson är professor i Social-antropologi med intresse för samhället och kultur. 
      </Card.Text>
    
    const BtnName=
    readMore?'Göm info ':'Om Linn '
    
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
  
  export default ReadMoreLinn;