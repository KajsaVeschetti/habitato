import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router,
    Switch,
    Route,
    Link } from "react-router-dom";

class Test extends Component {
    state = {

    };



    render () {

    const logoStyle={
      width: "200px"
    }

    const linkStyle = {
       fontFamily: "Roboto",
       fontSize: "20px",
       color:"#5f5f5f",
       textDecoration:"none",
       paddingTop: "55px",
       paddingRight:"50px",
       paddingLeft:"50px",
    }

        return(
            <Router>
            <nav class="navbar navbar-expand-lg navbar-light mx-auto">

            <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-lable="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <h1>Jennies försöker att länka :)</h1>

                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-link" style={linkStyle}>
                        <Link class="nav-link" to="/Quiz">
                            Vill du testa att göra quizet igen?
                        </Link>
                    </li>
                    <li class="nav-link" style={linkStyle}>
                        <Link class="nav-link" to="/Facit">
                            Eller vill du läsa om de rätta svaren?
                        </Link>
                    </li>
                </ul>
             </div>
            </nav>
            </Router>
        );
    }
}

export default Test;
