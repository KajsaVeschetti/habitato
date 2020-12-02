import React, { Component } from 'react';

import BarCharts from './CO2Emission';
import Glacier from './GlacierSize';
import Sea from './SeaLevel';
import Temp from './Temp';

import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";





class AllCharts extends Component {
    state = {
        CO2Emission: [],
        GlobalTemp: [],
        GlacierSize: [],
        SeaLevel: [],
        indexYear1:0,
        indexYear2:0
      };
    
      async componentDidMount() {
        //Hämta data från API 1
        const CO2url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
        const CO2response = await fetch(CO2url);
        const CO2data = await CO2response.json();

        //Hämta data från API 2
        const Tempurl = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
        const Tempresponse = await fetch(Tempurl);
        let Tempdata = await Tempresponse.json();
       
        Tempdata = Tempdata.sort((a, b) =>
        a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
        );

        //hämta data from API 3 
        const Glacierurl ="https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
        const Glacierresponse = await fetch(Glacierurl);
        const Glacierdata = await Glacierresponse.json();
       
        //hämta data from API 4
        const Seaurl ="https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0";
        const Searesponse = await fetch(Seaurl);
        const Seadata = await Searesponse.json();
     
        this.setState({
          CO2Emission: CO2data,
          GlobalTemp: Tempdata,
          GlacierSize: Glacierdata,
          SeaLevel: Seadata,
        });
      }
    
      handleYearFilter =(chartName, Year)=> {
        let index = this.state.CO2Emission.findIndex(co2=>co2.Year === parseInt(Year));
        
        if(index !== -1){
      
         switch(chartName){
          case "Bar1" : this.setState({indexYear1: index}); 
             break;

          case "Bar2" : this.setState({indexYear2: index}); 
            break;
          }

        } else{
          alert("Kunde inte finna någon information")
        }
       
       };
    render() { 
              
    const linkStyle = {
      fontFamily: "Roboto",
      fontSize: "16px",
      color:"#5f5f5f",
      textDecoration:"none",
      paddingRight:"50px",
      paddingLeft:"50px",
   }
        return (  
          <React.Fragment>
              <div class="card mx-auto" style={{width:"900px"}}>
              <Router>
                <nav class="navbar navbar-expand-lg navbar-light mx-auto">
           
                     <div class="justify-content-center" >
                    <ul class="navbar-nav">
                        <li class="nav-link" style={linkStyle}>
                            <Link class="nav-link" to="/co2emission">
                                CO2 
                            </Link>
                        </li> 
                        <li class="nav-link " style={linkStyle}>
                            <Link class="nav-link" to="/glaciersize">
                                Glaciärstorlek
                            </Link>
                        </li> 
                        <li class="nav-link" style={linkStyle}>
                            <Link class="nav-link" to="/temp">
                                Global Temperatur
                            </Link>
                        </li> 
                        <li class="nav-link" style={linkStyle}>
                            <Link class="nav-link" to="/sealevel">
                                Havsnivå
                            </Link>
                        </li> 
                    </ul>

                    <Switch>
                      <div class="justify-content-center">
                        <Route exact path="/co2emission" component={BarCharts}>
                        <BarCharts
                        chartName="Bar1"
                        CO2Emission={this.state.CO2Emission[this.state.indexYear1]} 
                        onYearFilter={this.handleYearFilter}/>
                        <BarCharts
                        chartName="Bar2"
                        CO2Emission={this.state.CO2Emission[this.state.indexYear2]} 
                        onYearFilter={this.handleYearFilter}/>
                        </Route>
                        <Route exact path="/glaciersize" component={Glacier}>
                        <Glacier Glacierdata={this.state.GlacierSize}/>
                        </Route>
                        <Route exact path="/temp" component={Temp}>
                        <Temp Tempdata={this.state.GlobalTemp}/>
                        </Route>
                        <Route exact path="/sealevel" component={Sea}>
                        <Sea Seadata={this.state.SeaLevel}/>
                        </Route>
                      </div>
                    
                    </Switch>
                    </div>
                </nav>
            </Router>
            
              </div>
          
          </React.Fragment>  
          
            


        );
    }
}
 
export default AllCharts;