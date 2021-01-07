import React from 'react';
import AboutUs from './AboutUs';
import {Form, Container, Button, Row, Col } from 'react-bootstrap';

function Kontakt () {


//   return ( 
//         <div className= "contactAboutGrid charts col-lg-9">
//             <h1> Kontakta oss</h1>
//             <div className="charts">
//                 <AboutUs/>
//             </div>
//             <div className="contactContainer">
//                 <Container className="charts col-lg-9">
//                     <Form>
//                         <Form.Group controlId="exampleForm.ControlInput1">
//                             <Form.Control placeholder="Namn" required/>
//                                 <Form.Text className="text-muted" >
//                                     Det är ok att ange ett alias
//                                 </Form.Text>
//                             <Form.Control type="email" placeholder="Mailadress" required />
//                             <Form.Text className="text-muted">
//                                     Vi sparar inte din mailadress
//                             </Form.Text>
//                         </Form.Group>
//                         <Form.Group controlId="exampleForm.ControlSelect1">
//                             <Form.Label>
//                                 Vad gäller ditt ärende?
//                             </Form.Label>
//                             <Form.Control as="select">
//                                 <option>Diagrammen</option>
//                                 <option>Quizet</option>
//                                 <option>Lämna miljötips</option>
//                                 <option>Fakta</option>
//                                 <option>Annat</option>
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group controlId="exampleForm.ControlTextarea1">
//                             <Form.Label>
//                                 Meddelande
//                             </Form.Label>
//                             <Form.Control as="textarea" rows={3} required/>
//                         </Form.Group>
//                         <Button variant="info" type="submit">
//                             Skicka
//                         </Button>
//                     </Form>           
//                 </Container>
//             </div>
//         </div>
//     );

return ( 
    <Container className= "charts col-lg-9">
        <Row>
            <h1 className="conTitle"> 
                Det här är vi! 
            </h1>
        </Row>
        <Row className="charts col-lg-11 mx-auto ">
          <p className="conIntroTxt">
              Hej! <br/> 
              Det är vi som står bakom Habitato! <br/> 
              Vi är fyra kollegor men också mycket goda vänner, 
              som brinner för att så många som möjligt ska veta varför och hur de ska kunna 
              göra sitt allra bästa för att hjälpa till att underlätta för vår planet. <br/><br/>
              Vi har bara en planet, låt oss tillsammans ta hand om den! 
          </p>
                <AboutUs />
          
           
        </Row>
        <Row><Col>
        <Row>
            <h1 className="conTitle"> 
            Kontakta oss
            </h1>
        </Row>
                <Container className="charts col-lg-11 conFormContainer">
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
                        <Button variant="info" type="submit" className="sendBtn" block>
                            Skicka
                        </Button>
                    </Form>           
                </Container>
    
            </Col>
        </Row>
    </Container>
);



}

export default Kontakt;




// https://react-bootstrap.github.io/components/cards/


