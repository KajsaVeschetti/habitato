import React, { Component } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import karl from "./img/karl.svg";
import lars from "./img/lars.svg";
import linn from "./img/linn.svg";
import ann from "./img/ann.svg";

class AboutUs extends Component {
    render() {
        return (
            // <div className="aboutUsContainer">
                
            //     <Card className="cardKarl" style={{ width: '18rem' }}>
            //         <Card.Img className="aboutUsImg" variant="top" src={karl} />
            //         <Card.Body>
            //             <Card.Title>Karl Larsson</Card.Title>
            //             <Card.Text>
            //             Karl Larsson är professor i Fysik och Geovetenskap, att förstå jorden ligger honom varmt om hjärtat. 
            //             </Card.Text>
            //             <Button variant="info" href="mailto:#" >Kontakta Karl</Button>
            //         </Card.Body>
            //     </Card>
            //     <Card className="cardLars" style={{ width: '18rem' }}>
            //         <Card.Img className="aboutUsImg" variant="top" src={lars} />
            //         <Card.Body>
            //             <Card.Title>Lars Karlsson</Card.Title>
            //             <Card.Text>
            //             Lars Karlsson är professor i Biologi och Etologi och intresserar sig mycket i natur, blommor och bin och allt därtill.
            //             </Card.Text>
            //             <Button variant="info" href="mailto:#" >Kontakta Lars</Button>
            //         </Card.Body>
            //     </Card>
            //     <Card className="cardLinn" style={{ width: '18rem' }}>
            //         <Card.Img className="aboutUsImg" variant="top" src={linn} />
            //         <Card.Body>
            //             <Card.Title>Linn Annson</Card.Title>
            //             <Card.Text className="aboutUsCardText">
            //             Linn Annson är professor i Social-antropologi med intresse för samhället och kultur. 
            //             </Card.Text>
            //             <Button variant="info" href="mailto:#" >Kontakta Linn</Button>
            //         </Card.Body>
            //     </Card>
            //     <Card className="cardAnn" style={{ width: '18rem' }}>
            //         <Card.Img className="aboutUsImg" variant="top" src={ann} />
            //         <Card.Body>
            //             <Card.Title>Ann Linnson</Card.Title>
            //             <Card.Text>
            //             Ann Linnson är forskare inom Vulkanologi och brinner för att hitta lösningar som hjälper oss bevara jorden. 
            //             </Card.Text>
            //             <Button variant="info" href="mailto:#" >Kontakta Ann</Button>
            //         </Card.Body>
            //     </Card>
                
            // </div>


            <Container >
                <Row>
                    <Col>
                        <Card className="aboutCard cardKarl" >
                            <Card.Img className="aboutUsImg" variant="top" src={karl} />
                            <Card.Body>
                                <Card.Title>Karl Larsson</Card.Title>
                                <Card.Text>
                                    Karl Larsson är professor i Fysik och Geovetenskap, att förstå jorden ligger honom varmt om hjärtat. 
                                </Card.Text>
                                <Button variant="info" href="mailto:#" >Kontakta Karl</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="aboutCard cardLars" >
                            <Card.Img className="aboutUsImg" variant="top" src={lars} />
                            <Card.Body>
                                <Card.Title>Lars Karlsson</Card.Title>
                                <Card.Text>
                                    Lars Karlsson är professor i Biologi och Etologi och intresserar sig mycket i natur, blommor och bin.
                                </Card.Text>
                                <Button variant="info" href="mailto:#" >Kontakta Lars</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className=" aboutCard cardLinn" >
                            <Card.Img className="aboutUsImg" variant="top" src={linn} />
                            <Card.Body>
                                <Card.Title>Linn Annson</Card.Title>
                                <Card.Text className="aboutUsCardText">
                                    Linn Annson är professor i Social-antropologi med intresse för samhället och kultur. 
                                </Card.Text>
                                <Button variant="info" href="mailto:#" >Kontakta Linn</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="aboutCard cardAnn" >
                            <Card.Img className="aboutUsImg" variant="top" src={ann} />
                            <Card.Body>
                                <Card.Title>Ann Linnson</Card.Title>
                                <Card.Text>
                                    Ann Linnson är forskare inom Vulkanologi och brinner för att hitta lösningar för att bevara jorden. 
                                </Card.Text>
                                <Button variant="info" href="mailto:#" >Kontakta Ann</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            

        );
    }
}
    
export default AboutUs;