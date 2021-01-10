import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LikeButton from "./LikeButton";
import tipsIcon from "./img/tipsIcon.svg";

class Comments extends Component {
  constructor(props) {        // Constructorn visar hur objektet byggs
    super(props);             // super ärver från "Component", måste användas innan "this."
    this.state = {            // listar komponentens data som hanteras
      name: "",               // lista med state-objektets attribut
      comment: "",
      commentList: [],
    };

    this.handleChangeName = this.handleChangeName.bind(this);  // binder funktionerna till this-objektet.
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {               // hanterar värdet i inputfältet för namn
    this.setState({ name: event.target.value });
  }

  handleChangeComment(event) {           // hanterar värdet i inputfältet för namn
    this.setState({ comment: event.target.value });
  }
  
  handleSubmit(event) {                 // Säger vad som ska hända när man trycker på knappen
    this.state.commentList.push({       
      name: this.state.name,                // lägger till namn och kommentar från inputfälten
      comment: this.state.comment,
    });
    this.setState(this.state.commentList);  // skriver listan till state så att den kan visas
    event.preventDefault();  
    this.setState({                         // rensar inputfälten 
      name: '' ,
      comment: ''
    });             
  }


  render() {
    return (
      <Container className="charts col-lg-9 comCompStyle">
        <Row className="comFirstRow">
          <Col xs={7}>                                      {/* xs={7} visar hur bred kolumnen ska vara */ }
            <h1>Dela med dig av ditt bästa miljötips!</h1>
          </Col>
          <Col>
            <Image             
            src={tipsIcon} rounded 
            title="Skylt med texten: Kunskap räddar jorden!" // lägger in tipsIcon som tidigare importerats från bildmappen
            className="comImg"/>                            
          </Col>
        </Row>
        <Row>
          <Container>
            <Row>
              <Col xs={7}>
                <Form 
                    className="comCompFormStyle"
                    onSubmit={this.handleSubmit}>           { /* Anropar handleSubmitfunktionen när formuläret skickas */ }
                  <Form.Group 
                      className="charts">
                    <Row>
                      <Form.Label className="comFormLabel">
                        NAMN *
                      </Form.Label>
                    </Row>
                    <Row>
                      <Form.Control 
                          placeholder="Skriv ditt namn här..."
                          className="comFormInput"
                          type="text" 
                          value={this.state.name}          // kopplar value till stateobjektets attribut "name"
                          onChange={this.handleChangeName} // Eventhanterare som hänvisar till funktionen handleChangeName som visar vad som ska hända när ett namn skrivs in i denna textrutan i formuläret.
                          required/>
                    </Row>
                    <Row>
                      <Form.Label className="comFormLabel">
                        KOMMENTAR *
                      </Form.Label>
                    </Row>
                    <Row>
                      <Form.Control 
                          as="textarea" 
                          rows={3}
                          placeholder="Skriv ditt bästa miljötips här..."
                          className="comFormInput"
                          value={this.state.comment}
                          onChange={this.handleChangeComment} // Eventhanterare som hänvisar till funktionen handleChangeComment som visar vad som ska hända när en kommentar skrivs in i denna textrutan i formuläret.
                          required />                         
                    </Row>  
                    <Row>
                      <Button 
                        className="sendBtn"
                        as="input" 
                        type="submit" 
                        variant="info" 
                        value="Skicka kommentar"/>
                    </Row>        
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Container className=" charts " >
                  <p> Läs vad dina vänner gör för att minska negativ påverkan på jorden:</p>
                  {this.state.commentList.map((item) => (       // skriver ut kommentaren, {item.name}&{item.comment} tar value från formuläret och skriver ut det
                    <Container className="comDisplayContainer " >
                      <Card.Title 
                        className="comDisplayName" 
                        controlId="exampleForm.ControlSelect1">             
                          {item.name}                           {/* {item.name}  skriver ut det nya namnet*/}
                      </Card.Title>
                      <Card.Text 
                        className="comDisplayComment" 
                        controlId="exampleForm.ControlTextarea1">
                          {item.comment}                        {/* {item.comment}  skriver ut den nya kommentaren*/}
                      </Card.Text> 
                      <LikeButton/>                             {/* Skriver ut LikeButton komponenten som importerats tidigare */}
                    </Container> 
                  ))}
                    <Container className="comDisplayContainer " > {/*  Statisk kommentar som visar hur kommentarsfältet ser ut eftersom vi inte har någon databas som sparar tidigare skrivna kommentarer*/}
                      <Card.Title 
                        className="comDisplayName">             
                          Linus                          
                      </Card.Title>
                      <Card.Text 
                        className="comDisplayComment" >
                          Hej, mitt tips är att dra ut alla kontakter ur väggen när du inte använder grejerna. Det var svårt att komma ihåg i början men nu gör jag det hela tiden.                        
                      </Card.Text> 
                      <LikeButton/>                            
                    </Container> 
                </Container>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Comments;                                       // exporterar Comments



// Referenser:

// kodinspiration från https://reactjs.org/docs/forms.html

// https://stackoverflow.com/questions/26505064/what-is-the-best-way-to-add-a-value-to-an-array-in-state

// https://www.w3schools.com/react/react_forms.asp

// https://overreacted.io/why-do-we-write-super-props/

// https://reactjs.org/docs/forms.html

// https://www.qcode.in/learn-react-by-creating-a-comment-app/

// https://stackoverflow.com/questions/53106250/react-js-user-enters-value-in-the-input-field-on-button-click-to-display-the-val

// https://stackoverflow.com/questions/54256701/how-to-highlight-empty-mandatory-input-field-with-red-border-click-on-button

// https://react-bootstrap.github.io/components/images/

// https://stackoverflow.com/questions/46539480/react-clearing-an-input-value-after-form-submit



