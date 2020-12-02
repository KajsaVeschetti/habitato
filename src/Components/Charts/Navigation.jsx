import React, { Component } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import BarCharts from './CO2Emission';
import Glacier from './GlacierSize';
import SeaLevel from './SeaLevel';
import Temp from './Temp';

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

                    <Switch>
                        <Route exact path="/co2emission" component={BarCharts}>
                        <BarCharts/>
                        </Route>
                        <Route exact path="/glaciersize" component={Glacier}>
                        <Glacier/>
                        </Route>
                        <Route exact path="/temp" component={Temp}>
                        <Temp/>
                        </Route>
                        <Route exact path="/sealevel" component={SeaLevel}>
                        <SeaLevel/>
                        </Route>

                    </Switch>
                </div>
            </nav>
            </Router>
        

          );
    }
}
 
export default BodyNav;