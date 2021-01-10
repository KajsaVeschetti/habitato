import React, { Component } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import ReadMoreKarl from "./aboutReadMoreKarl";
import ReadMoreLars from "./aboutReadMoreLars";
import ReadMoreLinn from "./aboutReadMoreLinn";
import ReadMoreAnn from "./aboutReadMoreAnn";
import karl from "./img/karl.svg";
import lars from "./img/lars.svg";
import linn from "./img/linn.svg";
import ann from "./img/ann.svg";

// Klassen AboutUs returnerar det som ska exporteras till och visas i Kontakt.jsx. 
// Det är uppdelat i rader och stylat med react bootstrap
// Bilder importeras från bildmappen och hämtas genom src={}.
// Exporterar sedan klassen AboutUs.

class AboutUs extends Component {
    render() {
        return (
           <Container>
                <Row>
                    <Card className="aboutCard cardKarl">
                        <Card.Img 
                            className="aboutUsImg" 
                            variant="top" 
                            title="Grafiskt porträtt av Karl"
                            src={karl}/>
                        <Card.Body>
                            <Card.Title>
                                Karl Larsson
                            </Card.Title>
                            <ReadMoreKarl/>
                            <Button 
                                block
                                variant="info" 
                                href="mailto:#">
                                    Mejla Karl
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className="aboutCard cardLars">
                        <Card.Img 
                            className="aboutUsImg" 
                            variant="top"
                            title="Grafiskt porträtt av Lars" 
                            src={lars}/>
                        <Card.Body>
                            <Card.Title>
                                Lars Karlsson
                            </Card.Title>
                            <ReadMoreLars/>
                            <Button 
                                block
                                variant="info" 
                                href="mailto:#">
                                    Mejla Lars
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className=" aboutCard cardLinn">
                        <Card.Img 
                            className="aboutUsImg" 
                            variant="top" 
                            title="Grafiskt porträtt av Linn"
                            src={linn}/>
                        <Card.Body>
                            <Card.Title>
                                Linn Annson
                            </Card.Title>
                            <ReadMoreLinn/>
                            <Button 
                                block
                                variant="info" 
                                href="mailto:#">
                                    Mejla Linn
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className="aboutCard cardAnn">
                        <Card.Img 
                            className="aboutUsImg" 
                            variant="top" 
                            title="Grafiskt porträtt av Ann"
                            src={ann}/>
                        <Card.Body>
                            <Card.Title>
                                Ann Linnson
                            </Card.Title>
                            <ReadMoreAnn/>
                            <Button
                                block
                                variant="info" 
                                href="mailto:#">
                                    Mejla Ann
                            </Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    }
}
    
export default AboutUs;






