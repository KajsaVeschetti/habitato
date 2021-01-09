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
          {/*<React.Fragment>*/}
             {/*Skapar en ruta med rubrik*/}
               <Card className="mx-auto charts col-lg-9">
                     <Card.Title className="containerTitle row">
                       <h2>Se hur klimatförändringen har påverkat jorden under åren genom att använda våra diagram för att jämföra två olika år</h2>
                     </Card.Title>
              

             {/* <div className="card mx-auto charts  " style={{width:"750px"}}>
                  <div className="containerTitle">
                    <h2> Se hur klimatförändringen har påverkat jorden under åren genom att använda våra diagram för att jämföra två olika år.</h2>
        </div>*/}

                
                    {/*<ul className="mx-auto justify-content-center popup" >*/}
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
             {/* </div>*/}
          
          {/*</React.Fragment>*/} 
          </>
        );
    }
}

export default AllCharts;