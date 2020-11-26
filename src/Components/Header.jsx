import React, {Component} from "react";
import Habitato1 from "../img/Habitato1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav'

class Header extends Component {


  render(){

    const headerStyle={
      margin: "50px",
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
     paddingTop: "55px",
      paddingRight:"50px",
      paddingLeft:"50px",
      
    };

    return(
      <header>
      <Nav className="justify-content-center" activeKey= "/home" style={headerStyle}>
        <Nav.Item>
          <Nav.Link  href="#" style={linkStyle}>Hem</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  href="#" style={linkStyle}>Quiz</Nav.Link>
        </Nav.Item>
   
        <a href="#"> <img src={Habitato1} style={logoStyle}  alt="Habitato logotyp"/> </a>
       
        <Nav.Item>
          <Nav.Link  href="#" style={linkStyle}>Tips</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  href="#" style={linkStyle}>Fakta</Nav.Link>
        </Nav.Item>
      </Nav>
      </header>
    );

  }
}

export default Header;