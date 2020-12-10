import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram  } from '@fortawesome/free-brands-svg-icons'



class Footer extends Component {


  render(){ 
    

    const linkStyle = {
      fontSize: "14px",
      color:"#5f5f5f",
      textDecoration:"none",
      listStyle: "none",
      paddingLeft: "45px",
      float: "left"
    };

    const logos = {
      margin: "5px",
      color: "#5f5f5f"
    }

    const logoPlace = {
      float: "right",
      paddingRight: "80px",
      paddingTop: "25px"
    }

    const onMouseOver = event => {
      const el = event.target;
      let colorhex = "#5cb85c";
      el.style.color = colorhex;
    };
    
    const onMouseOut = event => {
      const el = event.target;
      let grey = "#5f5f5f";
      el.style.color = grey;
    };
    


    return(
     <footer class="fixedFooter">
       <Row className="justify-content-md-center">
         <Col>
         <ul style={linkStyle}>
          <li><a href="/" style={linkStyle}>Hem</a></li>
          <li><a href="/Quiz" style={linkStyle}>Quiz</a></li>
          <li><a href="#" style={linkStyle}>Om Oss</a></li>
          <li><a href="#" style={linkStyle}>Kontakta oss</a></li>
          </ul>
         </Col>
         <Col>
         <div style={logoPlace}>
         <a href="#" 
              onMouseEnter={event => onMouseOver(event)}
              onMouseLeave={event => onMouseOut(event)}>
           <FontAwesomeIcon style={logos} size="2x"   icon={faFacebookSquare}/></a>
         <a href="#"
             onMouseEnter={event => onMouseOver(event)}
             onMouseLeave={event => onMouseOut(event)}
          ><FontAwesomeIcon style={logos} size="2x"  icon={faInstagram}/></a>
         </div>
         </Col>
       </Row>

     </footer>
    );

  }
}

export default Footer;