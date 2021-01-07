import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


function ReadMoreButton () {
    
        const [readMore,setReadMore]=useState(false);

            const BtnName=
            readMore?'Göm info ':'Läs mer'
            
            return (
              <div className="App">
                <Button size="sm" variant="info" onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button> 
              </div>
            
            );
       
    
}
    
export default ReadMoreButton;