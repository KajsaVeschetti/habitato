import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import InfoCo2 from './infoCO2';
import InfoGlacier from './infoGlacier';
import InfoSea from './infoSea';
import InfoTemp from './infoTemp';



class CarouSelCo2 extends Component {

  render() {
    return (

<Carousel interval={null} indicators={false} style={{width:"1000px", height:"660px"}} >
<Carousel.Item>  
    <div><InfoCo2/></div>
</Carousel.Item>
<Carousel.Item>     
    <div><InfoSea/></div>
</Carousel.Item>
<Carousel.Item>  
    <div><InfoGlacier/></div>
</Carousel.Item>
<Carousel.Item>  
   <div><InfoTemp/></div>
</Carousel.Item>  
</Carousel>
);
}
}


  

  export default CarouSelCo2; 