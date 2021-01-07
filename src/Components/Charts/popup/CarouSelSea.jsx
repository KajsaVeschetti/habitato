import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import InfoSea from './infoSea';
import InfoTemp from './infoTemp';
import InfoCo2 from './infoCO2';
import InfoGlacier from './infoGlacier';



class CarouSelSea extends Component {

  render() {
    return (

<Carousel interval={null} indicators={false} style={{width:"785px", height:"600px"}} >
<Carousel.Item>  
    <div><InfoSea/></div>
</Carousel.Item>  
<Carousel.Item>   
    <div><InfoGlacier/></div>
</Carousel.Item>
<Carousel.Item>
    <div><InfoTemp/></div>
</Carousel.Item>
<Carousel.Item>
   <div><InfoCo2/></div>
</Carousel.Item>  
</Carousel>
);
}
}


  

  export default CarouSelSea; 