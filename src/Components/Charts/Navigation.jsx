import React, { Component } from 'react';
import { BrowserRouter as Router, Link,  } from 'react-router-dom';

class BodyNav extends Component {
    
    render() { 
        return (
            <Router>
            <nav class="navbar navbar-expand-lg navbar-light-bg-ligth">
                <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span class="navbar-togglere-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-link active">
                            <Link class="nav-link" to="/co2emission">
                                CO2 <span class="sr-only">(current)</span>
                            </Link>
                        </li> 
                        <li class="nav-link ">
                            <Link class="nav-link" to="/glaciersize">
                                Glaciärstorlek
                            </Link>
                        </li> 
                        <li class="nav-link">
                            <Link class="nav-link" to="/temp">
                                Global Temperatur
                            </Link>
                        </li> 
                        <li class="nav-link">
                            <Link class="nav-link" to="/sealevel">
                                Vattennivå
                            </Link>
                        </li> 

                        
                    </ul>
                </div>
            </nav>
            </Router>
        

          );
    }
}
 
export default BodyNav;