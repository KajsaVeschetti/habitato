import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ReadMoreLars() {
    const [readMore,setReadMore]=useState(false);
    
    const extraContent=
      <Card.Text className="conAboutPerson">
        Lars Karlsson är professor i Biologi och Etologi och intresserar sig mycket i natur, blommor och bin.
      </Card.Text>
    
    const BtnName=
    readMore?'Göm info ':'Om Lars '
    
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
  
  export default ReadMoreLars;