import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Instagram from "../img/instagram.png";
import Facebook from "../img/facebook.png";


class Footer extends Component {



  render(){

    const footerStyling ={
      marginTop:"40px",
      marginBottom:"40px",

    }

    const linkStyle = {
      fontFamily: "Roboto",
      fontSize: "14px",
      color:"#5f5f5f",
      textDecoration:"none",
      listStyle: "none",
      textAlign: "left",
      paddingLeft: "45px"
    };

    const logos = {
      width: "30px",
      heigth: "30px",
      margin: "5px"
    }

    const logoPlace = {
      textAlign: "right",
      paddingRight: "80px"
    }

 

    return(
     <footer style={footerStyling}>
       <Row>
         <Col>
         <ul style={linkStyle}>
          <li><a href="#" style={linkStyle}>Hem</a></li>
          <li><a href="#" style={linkStyle}>Quiz</a></li>
          <li><a href="#" style={linkStyle}>Om Oss</a></li>
          <li><a href="#" style={linkStyle}>Kontakta oss</a></li>
          </ul>
         </Col>
         <Col>
         <div style={logoPlace}>
         <img src={Instagram} style={logos} alt="Instagram"/>
         <img src={Facebook} style={logos} alt="Facebook"/>
         </div>
         </Col>
       </Row>

     </footer>
    );

  }
}

export default Footer;