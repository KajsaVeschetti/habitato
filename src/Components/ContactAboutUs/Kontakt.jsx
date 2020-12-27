import React from 'react';
import AboutUs from './AboutUs';
import {Form, Container, Button} from 'react-bootstrap';

function Kontakt () {


  return ( 
        <div className= "contactAboutGrid charts col-lg-9">
            <h1> Kontakta oss</h1>
            <div className="charts">
                <AboutUs/>
            </div>
            <div className="contactContainer">
                <Container className="charts col-lg-9">
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control placeholder="Namn" required/>
                                <Form.Text className="text-muted" >
                                    Det är ok att ange ett alias
                                </Form.Text>
                            <Form.Control type="email" placeholder="Mailadress" required />
                            <Form.Text className="text-muted">
                                    Vi sparar inte din mailadress
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>
                                Vad gäller ditt ärende?
                            </Form.Label>
                            <Form.Control as="select">
                                <option>Diagrammen</option>
                                <option>Quizet</option>
                                <option>Lämna miljötips</option>
                                <option>Fakta</option>
                                <option>Annat</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>
                                Meddelande
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} required/>
                        </Form.Group>
                        <Button variant="info" type="submit">
                            Skicka
                        </Button>
                    </Form>           
                </Container>
            </div>
        </div>
    );
}

export default Kontakt;




// https://react-bootstrap.github.io/components/cards/


