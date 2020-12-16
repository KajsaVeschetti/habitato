import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram  } from '@fortawesome/free-brands-svg-icons'



class Footer extends Component {


  render(){ 
    

    const linkStyle = {
      fontSize: "14px",
      color:"#5f5f5f",
      textDecoration:"none",
     display:"inline",
     margin:"20px"
    };

    const listStyle = {
      fontSize: "14px",
      color:"#5f5f5f",
      textDecoration:"none",
      listStyle:"none",
      float: "center",
      display:"inline",
      listStyleType:"none",
    };

    const logos = {
      margin: "5px",
      color: "#5f5f5f",
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
           
        <footer className="fixedFooter">
     
         <ul class="footerMenu" style={listStyle}>
          <li><a href="/" style={linkStyle}>Hem</a></li>
          <li><a href="/Quiz" style={linkStyle}>Quiz</a></li>
          <li><a href="#" style={linkStyle}>Om Oss</a></li>
          </ul>
          <div >
         <a href="#" 
              onMouseEnter={event => onMouseOver(event)}
              onMouseLeave={event => onMouseOut(event)}>
           <FontAwesomeIcon style={logos} size='lg' icon={faFacebookSquare}/></a>
         <a href="#"
             onMouseEnter={event => onMouseOver(event)}
             onMouseLeave={event => onMouseOut(event)}
          ><FontAwesomeIcon style={logos} size="lg"  icon={faInstagram}/></a>
         </div>
     </footer>
    

    );

  }
}

export default Footer;