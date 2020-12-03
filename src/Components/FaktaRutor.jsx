import React, { useState } from 'react';
import {Button, Collapse, Image} from 'react-bootstrap';
import Fuel from '../img/Fuel.jpg';
;




function Fakta() {
  let [open, setOpen] = useState(false);

  return ( 
    <>
    <div className="container">
    <div className="row">
    <div className="col-md-6 p-5 col-xs-6">
     <h3 className="text-center p-3">Vad är fossila bränslen?</h3>
      <p>Dagens fossila bränslen skapades för miljontals år sedan av resterna från döda djur och växter. Resterna bröts ned och ombildades till exempelvis kol, naturgas och olja. Ur dessa fossila bränslen utvinner vi energi som t ex används till att driva motorer, uppvärmning och för att skapa elektricitet.</p>

      <Button variant="secondary" size="sm" block
        onClick ={() => setOpen(!open)}
        aria-controls="fuel-text"
        aria-expanded={open}
        >
        Läs mer
      </Button>

      <Collapse in={open}>
        <div id="fuel-text">
        <h4 className="text-center mt-5">Varför är fossila bränslen dåligt för klimatet?</h4>
          <p>Vid förbränning av fossila bränslen släpps det ut farliga gaser såsom exempelvis kväveoxider och svaveloxider, och den totala koldioxidhalten i atmosfären ökar. Förbränning av fossila bränslen bidrar till att förstärka växthuseffekten vilket gör att jordens värmebalans rubbas. Det får negativa konsekvenser för klimat och ekosystem.</p>.
        <h4 className="text-center">Vad kan vi göra?</h4>
        <p>Fossila bränslen leder inte bara till klimatförändringar utan även till miljöförstöring och negativa hälsoeffekter. Vår förbrukning av fossila bränslen sker dessutom i snabbare takt än återskapandet. Det är en icke-förnybar energikälla, som en dag kommer ta slut. Det är därför viktig att hitta hållbara alternativ. Världsnaturfonden menar att förnybar energi, såsom exempelvis solkraft, vattenkraft och vindkraft, är en del av lösningen. Det beror på att med förnybar energi slipper vi föroreningar och farliga restprodukter, det kan aldrig ta slut och påverkar inte naturen negativt.</p>
        </div>
      </Collapse>
      </div>

      <div className="col-md-6 col-xs-6 mt-4 mb-5">
  <Image src={Fuel}fluid />
  </div>

</div>
</div>

 </>


);
}

export default Fakta;
