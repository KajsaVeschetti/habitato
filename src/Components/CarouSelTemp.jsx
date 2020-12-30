import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import InfoTemp from './Charts/popup/infoTemp';
import InfoCo2 from './Charts/popup/infoCO2';
import InfoGlacier from './Charts/popup/infoGlacier';
import InfoSea from './Charts/popup/infoSea';
//import PopupCO2 from './Charts/popup/popupCO2';
//import PopupTemp from './Charts/popup/popupTemp';
//import PopupGL from './Charts/popup/popupGlacier';
//import PopupSea from './Charts/popup/popupSea';


class CarouSelTemp extends Component {

  render() {
    return (

<Carousel interval={null} style={{width:"780px"}} >
<Carousel.Item style={{height:"715px"}}>  
    <div><InfoTemp/></div>
</Carousel.Item>
<Carousel.Item style={{height:"715px"}}  >   
    <div><InfoCo2/></div>
</Carousel.Item>
<Carousel.Item style={{height:"715px"}} > 
    <div><InfoGlacier/></div>
    </Carousel.Item>  
    <Carousel.Item style={{height:"715px"}} > 
   <div><InfoSea/></div>
</Carousel.Item>  
</Carousel>
);
}
}


  

  export default CarouSelTemp; 