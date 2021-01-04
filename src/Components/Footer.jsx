import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram  } from '@fortawesome/free-brands-svg-icons'




class Footer extends Component {

//Nedan kod skapar en komponent för footern på webbplatsen
  render(){ 
    return(
           
        <footer className="fixedFooter">
     
         <ul className="footerMenu" className="footerStyle" >
          <li><a href="/" className="footerLinks" >Hem</a></li>
          <li><a href="/Quiz"  className="footerLinks" >Quiz</a></li>
          <li><a href="/ContactAboutUs/Kontakt"  className="footerLinks" >Kontakta oss</a></li>
          </ul>
          <div >
         <a href="https://www.facebook.com/" >

           <FontAwesomeIcon className="footerLogo"  icon={faFacebookSquare}/></a>
         <a href="https://www.instagram.com/">
          <FontAwesomeIcon className="footerLogo"   icon={faInstagram}/></a>
         </div>
     </footer>
  
    );

  }
}

export default Footer;