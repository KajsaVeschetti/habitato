import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import karl from "./img/karl.svg";
import lars from "./img/lars.svg";
import linn from "./img/linn.svg";
import ann from "./img/ann.svg";

class AboutUs extends Component {
    render() {
        return (
            <div className="aboutUsContainer">
                <Card className="cardKarl" style={{ width: '18rem' }}>
                    <Card.Img className="aboutUsImg" variant="top" src={karl} />
                    <Card.Body>
                        <Card.Title>Karl Larsson</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="cardLars" style={{ width: '18rem' }}>
                    <Card.Img className="aboutUsImg" variant="top" src={lars} />
                    <Card.Body>
                        <Card.Title>Lars Karlsson</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="cardLinn" style={{ width: '18rem' }}>
                    <Card.Img className="aboutUsImg" variant="top" src={linn} />
                    <Card.Body>
                        <Card.Title>Linn Annson</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="cardAnn" style={{ width: '18rem' }}>
                    <Card.Img className="aboutUsImg" variant="top" src={ann} />
                    <Card.Body>
                        <Card.Title>Ann Linnson</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
    
export default AboutUs;