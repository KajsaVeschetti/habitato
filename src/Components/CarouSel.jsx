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


class CarouSel extends Component {
 
    render() {
      return (
  
        <>    
 {/*<Carousel  style={{width:"750px"}} >
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
  </>
    );
  }
  }*/}

<div id="carousel-habitato" className="carousel" style={{width:"750px"}}  data-ride="none">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <InfoCo2/>
    </div>
    <div class="carousel-item">
      <InfoGlacier/>
    </div>
    <div class="carousel-item">
      <InfoSea/>
    </div>
  <div class="carousel-item">
      <InfoTemp/>
    </div>
  </div>
  <a class="carousel-control-prev pr-5" href="#carousel-habitato" role="button" data-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next pl-5" href="#carousel-habitato" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</>
      );


}
}

  export default CarouSel; 