import React from 'react';
import {Form, Container} from 'react-bootstrap';

function Kontakt () {
    const Style = {
        fontFamily: "Quicksand",
        fontSize: "15px",      
     }


  return ( 
      <div class="contentWrap">
<Container className="bg-white col-sm-9">
    <Form style={Style}>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control placeholder="Namn" />
    <Form.Text className="text-muted">
        Det är ok att ange ett alias
        </Form.Text>
        <Form.Control type="email" placeholder="mailadress" />
        <Form.Text className="text-muted">
        Vi sparar inte din mail-adress
        </Form.Text>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Vad gäller ditt ärende?</Form.Label>
        <Form.Control as="select">
        <option>Diagrammen</option>
        <option>Quizet</option>
        <option>Lämna miljötips</option>
        <option>Fakta</option>
        <option>Annat</option>
        </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Meddelande</Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>
    </Form> 
</Container>
</div>
);
}

export default Kontakt;
