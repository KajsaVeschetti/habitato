import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import InfoCo2 from './Charts/popup/infoCO2';
import InfoGlacier from './Charts/popup/infoGlacier';
import InfoSea from './Charts/popup/infoSea';
import InfoTemp from './Charts/popup/infoTemp';
//import PopupCO2 from './Charts/popup/popupCO2';
//import PopupTemp from './Charts/popup/popupTemp';
//import PopupGL from './Charts/popup/popupGlacier';
//import PopupSea from './Charts/popup/popupSea';


class CarouSelCo2 extends Component {

  render() {
    return (

<Carousel interval={null} style={{width:"780px", height:"600px"}} >
<Carousel.Item>
    <div><InfoCo2/></div>
</Carousel.Item>
<Carousel.Item>   
    <div><InfoGlacier/></div>
</Carousel.Item>
<Carousel.Item>
    <div><InfoSea/></div>
</Carousel.Item>
<Carousel.Item>
   <div><InfoTemp/></div>
</Carousel.Item>  
</Carousel>
);
}
}


  

  export default CarouSelCo2; 