import React, {Component} from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";



//Denna komponent är den enda komponent som är kopplad till App.js här anropas endas navbar och footer

class Page extends Component {
  
  render(){

    return(
     <div className="wrapper">
       <div className="contentWrap">
        <NavBar/>
   
      </div>
     
        <Footer/>
      </div>
    );

  }
}

export default Page;
