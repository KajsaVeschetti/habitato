import React from "react";
import AboutUs from "./AboutUs";
import { Form, Container, Button, Row, Col } from "react-bootstrap";

// Function Kontakt returnerar det som ska ses i vyn för Kontakt och AboutUs. 
// Det är uppdelat i rader och stylat med react bootstrap

function Kontakt() {
  return (
    <Container className="charts col-lg-9">
      <Row> 
        <h1 className="conTitle">
            Det här är vi!
        </h1>
      </Row>
      <Row className="charts col-lg-11 mx-auto ">
        <p className="conIntroTxt">
          Hej! 
          <br/>
          Det är vi som står bakom Habitato! 
          <br/>
          Vi är fyra kollegor men också mycket goda vänner, som brinner för att
          så många som möjligt ska veta varför och hur de ska kunna göra sitt
          allra bästa för att hjälpa till att underlätta för vår planet. 
          <br/>
          <br/>
          Vi har bara en planet, låt oss tillsammans ta hand om den!
        </p>
        <AboutUs/>                      {/* About us skrivs ut, som importeras från AboutUs.jsx */}
      </Row>
      <Row>
        <Col>
          <Row>
            <h1 className="conTitle">
                Kontakta oss
            </h1>
          </Row>
          <Container className="charts col-lg-11 conFormContainer">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="conFormLabel">
                    Namn *
                </Form.Label>
                <Form.Control 
                    placeholder="Namn" 
                    required />
                <Form.Text className="text-muted">
                  Det är ok att ange ett alias
                </Form.Text>
                <Form.Label className="conFormLabel">
                    Mailadress *
                </Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Mailadress" 
                    required />        {/* required används för att visa vilka fält som måste fyllas i för att skicka iväg formuläret. */}
                <Form.Text className="text-muted">
                  Vi sparar inte din mailadress
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="conFormLabel">
                    Vad gäller ditt ärende? *
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
                <Form.Label className="conFormLabel">
                    Meddelande *
                </Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    required />
              </Form.Group>
              <Button 
                variant="info" 
                type="submit" 
                className="sendBtn" 
                block>
                  Skicka
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Kontakt;             // Exporterar funktionen "Kontakt".


// Referenser:

// https://react-bootstrap.github.io/components/cards/
