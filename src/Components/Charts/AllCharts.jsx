import React, { Component } from 'react';

import BarCharts from './CO2Emission';
import Glacier from './GlacierSize';
import SeaLevel from './SeaLevel';
import Temp from './Temp';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import BodyNav from './Navigation';




class AllCharts extends Component {
    state = {
        CO2Emission: [],
        GlobalTemp: [],
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
          SeaLevel: Seadata
        });
      }
    
      // handleYearFilter =(chartName, Year)=> {
      //   let index = this.state.CO2Emission.findIndex(co2=>co2.Year === parseInt(Year));
        
      //   if(index !== -1){
      //     switch(chartName){
      //       case "Bar1" : this.setState({indexYear1: index}); 
      //       break;

      //       case "Bar2" : this.setState({indexYear2: index}); 
      //       break;
      //     }

      //   } else{
      //     alert("Kunde inte finna någon information")
      //   }
       
      // };
    render() { 
        return (  
          <React.Fragment>
              <div class="card mx-auto">
                <BodyNav></BodyNav>
                <Router class="card-body">
                 <Switch>
                   <Route
                      path="/co2Emission"
                      render={props => (
                     <BarCharts {...props} CO2data={this.state.CO2Emission}/>
                     )} 
                   />

                   <Route
                      path="/glaciesize"
                      render={props => (
                      <Glacier {...props} Glacierdata={this.state.GlacierSize}/>      
                      
                      )}
                   />

                   <Route
                      path="/temp"
                      render={props => (
                      <Temp {...props} Tempdata={this.state.GlobalTemp}/>
                      )}
                    />
                  
                  <Route
                      path="/sealevel"
                      render={props => (
                      <SeaLevel {...props} Seadata={this.state.SeaLevel}/>
                      )}
                  />
                </Switch>
                </Router>

              </div>
          </React.Fragment>  
          
            


        );
    }
}
 
export default AllCharts;