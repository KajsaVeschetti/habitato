import React, { Component } from 'react';
import { getCO2data } from "./data/co2";
import { getGlacierdata } from "./data/glacier";
import { getSeadata } from "./data/sealevel";
import { getTempdata } from "./data/temp";

import BarCharts from './CO2Emission';
import Glacier from './GlacierSize';
import Sea from './SeaLevel';
import Temp from './Temp';
import ReadMore from "./InfoCharts/ReadMore"
import ReadMoreGS from "./InfoCharts/ReadMoreGS"
import ReadMoreSL from "./InfoCharts/ReadMoreSL"
import ReadMoreGT from "./InfoCharts/ReadMoreGT"




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

        this.setState({
          CO2Emission: getCO2data(),
          GlobalTemp: getTempdata().sort((a, b) =>
          a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
           ),
          GlacierSize: getGlacierdata(),
          SeaLevel: getSeadata(),
        });
      }
    
      handleYearFilter =(chartName, Year)=> {
        let index = this.state.CO2Emission.findIndex(co2=>co2.Year === parseInt(Year));
        let index2 = this.state.GlacierSize.findIndex(glacier=>glacier.Year === parseInt(Year));
        let index3 = this.state.GlobalTemp.findIndex(temp=>temp.Year === parseInt(Year));
        let index4 = this.state.SeaLevel.findIndex(sea=>sea.Year === parseInt(Year));
        
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

        if(index2 !== -1){
      
         switch(chartName){
          case "Glacier1" : this.setState({indexYear1: index2}); 
             break;

          case "Glacier2" : this.setState({indexYear2: index2}); 
            break;
          }

        } 

        if(index3 !== -1){
      
         switch(chartName){
          case "Temp1" : this.setState({indexYear1: index3}); 
             break;

          case "Temp2" : this.setState({indexYear2: index3}); 
            break;
          }

        } 
        if(index4 !== -1){
      
         switch(chartName){
          case "Sea1" : this.setState({indexYear1: index4}); 
             break;

          case "Sea2" : this.setState({indexYear2: index4}); 
            break;
          }

        } 
      
       
       };
    render() { 
              
    const linkStyle = {
      fontSize: "16px",
      color:"#5f5f5f",
      textDecoration:"none",
      paddingRight:"10px",
      paddingLeft:"10px",
   }

        return (  
          <React.Fragment>
              <div class="card mx-auto charts " style={{width:"750px"}}>
              <h5>Skriv in två årtal och se vad <br/> klimatförändringarna har gjort under åren</h5>
              <Router>
                <nav class="navbar navbar-expand-lg navbar-light mx-auto">
                  
           
                     <div class="mx-auto justify-content-center" >
                    <ul class="navbar-nav mx-auto">
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
                      <div class="mx-auto chartContainer">
                        <Route exact path="/co2emission" component={BarCharts}>
                        <BarCharts
                        chartName="Bar1"
                        CO2Emission={this.state.CO2Emission[this.state.indexYear1]} 
                        onYearFilter={this.handleYearFilter}/>
                        <BarCharts
                        chartName="Bar2"
                        CO2Emission={this.state.CO2Emission[this.state.indexYear2]} 
                        onYearFilter={this.handleYearFilter}/>
                       {/* Co2-info */}
                        <ReadMore />
                        </Route>
                        <Route exact path="/glaciersize" component={Glacier}>
                        <Glacier
                        chartName="Glacier1"
                        GlacierSize={this.state.GlacierSize[this.state.indexYear1]}
                        onYearFilter={this.handleYearFilter}/>
                        <Glacier 
                        chartName="Glacier2"
                        GlacierSize={this.state.GlacierSize[this.state.indexYear2]}
                        onYearFilter={this.handleYearFilter}/>
                        {/* Glasiär-info */}
                        <ReadMoreGS />
                        </Route>
                        <Route exact path="/temp" component={Temp}>
                        <Temp 
                        chartName="Temp1"
                        GlobalTemp={this.state.GlobalTemp[this.state.indexYear1]}
                        onYearFilter={this.handleYearFilter}/>
                        <Temp 
                        chartName="Temp2"
                        GlobalTemp={this.state.GlobalTemp[this.state.indexYear2]}
                        onYearFilter={this.handleYearFilter}/>
                        {/* Globaltemp-info */}
                        <ReadMoreGT />
                        </Route>
                        <Route exact path="/sealevel" component={Sea}>
                        <Sea 
                        chartName="Sea1"
                        SeaLevel={this.state.SeaLevel[this.state.indexYear1]}
                        onYearFilter={this.handleYearFilter}/>
                        <Sea 
                        chartName="Sea2"
                        SeaLevel={this.state.SeaLevel[this.state.indexYear2]}
                        onYearFilter={this.handleYearFilter}/>
                        {/* Havsnivå-info  */}
                        <ReadMoreSL />
                        </Route>
                      
                      <Redirect from="/" exact to="/co2emission"></Redirect>
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