import React from 'react';
import {Form, Container, Button} from 'react-bootstrap';

function Kontakt () {


  return ( 
    <Container className="charts" style={{width:"750px", padding: "30px"}}>
                     <h1> Kontakta oss</h1> 

    <Form>
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
        <Button variant="info" type="submit">
    Skicka
  </Button>
    </Form> 
</Container>
);
}

export default Kontakt;
