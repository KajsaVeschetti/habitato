import React, {Component} from "react";
import Habitato1 from "../img/Habitato1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Header extends Component {


  render(){

    const headerStyle={
      margin: "50px"
    }

    const logoStyle={
      width: "200px",
      height: "120px;",
    }
    const linkStyle = {
      fontFamily: "Roboto",
      fontSize: "20px",
      color:"#5f5f5f",
      textDecoration:"none",
      display: "inline",
      paddingRight:"80px",
      paddingLeft:"80px",
      
    };

    return(
      <header style={headerStyle}>
        <Row> 
          <Col>
          <a href="#" style={linkStyle}>Hem</a>
          <a href="#" style={linkStyle}>Quiz</a>
          <a href="index.html" >
          <img src={Habitato1} style={logoStyle}  alt="Habitato logotyp"/>
          </a>
          <a href="#" style={linkStyle}>Tips</a>
          <a href="#" style={linkStyle}>Fakt</a>
          </Col>
        </Row>
       
      </header>
    );

  }
}

export default Header;