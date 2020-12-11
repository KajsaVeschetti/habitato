import React, { Component } from 'react';

import BarCharts from './CO2Emission';
import Glacier from './GlacierSize';
import Sea from './SeaLevel';
import Temp from './Temp';
import ReadMore from "../ReadMore"
import ReadMoreGS from "../ReadMoreGS"
import ReadMoreSL from "../ReadMoreSL"
import ReadMoreGT from "../ReadMoreGT"




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
    
      handleYearFilter =(chartName, Year, Time)=> {
        let index = this.state.CO2Emission.findIndex(co2=>co2.Year === parseInt(Year));
        let index2 = this.state.GlacierSize.findIndex(glacier=>glacier.Year === parseInt(Year));
        let index3 = this.state.GlobalTemp.findIndex(temp=>temp.Year === parseInt(Year));
        let index4 = this.state.SeaLevel.findIndex(sea=>sea.Time === parseInt(Time));
        
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
      paddingRight:"40px",
      paddingLeft:"40px",

   }
        return (  
          <React.Fragment>
              <div class="card mx-auto" style={{width:"750px"}}>
              <h3>Skriv in två årtal och se vad <br/> klimatförändringarna har gjort under åren</h3>
              <Router>
                <nav class="navbar navbar-expand-lg navbar-light mx-auto">
                  
           
                     <div class="mx-auto" >
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-link" style={linkStyle}>
                            <Link class="nav-link" to="/co2emission">
                                CO2 <span class="sr-only">(current)</span>
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