import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram  } from '@fortawesome/free-brands-svg-icons'


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
      margin: "5px"
    }

    const logoPlace = {
      textAlign: "right",
      paddingRight: "80px",
      paddingTop: "30px"
      
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
         <a href="#"><FontAwesomeIcon style={logos} size="2x" color="#5f5f5f" icon={faFacebookSquare}/></a>
         <a href="#"><FontAwesomeIcon style={logos} size="2x" color="#5f5f5f" icon={faInstagram}/></a>
       
         </div>
         </Col>
       </Row>

     </footer>
    );

  }
}

export default Footer;