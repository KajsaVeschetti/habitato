import React, { Component } from 'react';

//import Card from 'react-bootstrap/Card'
import {Card} from 'react-bootstrap';

import PopupCO2 from './popup/popupCO2';
import PopupTemp from './popup/popupTemp';
import PopupGL from './popup/popupGlacier';
import PopupSea from './popup/popupSea';


class AllCharts extends Component {

    render() { 
   

        return (  
            <>

             {/*Skapar en ruta med rubrik*/}
               <Card className="mx-auto charts col-lg-9">
                     <Card.Title className="containerTitle row">
                       <h2>Se hur klimatförändringen har påverkat jorden under åren genom att använda våra diagram för att jämföra två olika år</h2>
                     </Card.Title>
              
                    {/*Skapar lista med popup*/}
                    <ul className="mx-auto popup">
                        <li> 
                            <PopupCO2 />
                        </li> 
                        <li>
                            <PopupSea/>
                        </li> 
                        <li>
                            <PopupGL />
                        </li> 
                        <li>
                            <PopupTemp />
                        </li>
                    </ul>
             </Card>
 
          </>
        );
    }
}

export default AllCharts;