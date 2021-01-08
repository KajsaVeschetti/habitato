import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Item } from 'semantic-ui-react';


import { infoData } from './data/readMore';

 function ReadMoreButton ({id, text}) {
         const [readMore,setReadMore]=useState(false);
 

         const BtnName=
         readMore?'Göm info ':'Läs mer'

        
         const extraContent= 
          
         // Variabel att förvara text man vill visa/gömma. 
            <div className="extra">
              {infoData.map((data,index) => {
                for (let i=0; i < 7; i++){
                return(
                 <p key={index}> 
                     {data.name}
                </p>
                );
               }
             
              })}
             
          </div>
            
             return (
               <div className="App">
                 <Button size="sm" variant="info" onClick={()=>{setReadMore(!readMore)}}>{BtnName}</Button> {readMore && extraContent}
               </div>
            
             );
       
 }
    
 export default ReadMoreButton;

